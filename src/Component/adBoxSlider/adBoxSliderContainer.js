import React from 'react';
import AdBoxSlider from './adBoxSlider';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

class AdBoxSliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this)
        this.clickArrow = this.clickArrow.bind(this)
        this.state = {
            adImages: null,
            currentTime: 0,
            className: 'name' + this.currentTime
        }
        this.myRefAd = React.createRef();
    }
    componentDidMount() {
        this.startTimer();
        Axios.get('/advertising.json').then(response => {
            this.setState({adImages: response.data})
        })
        
    }

    clickArrow(text) {
        clearTimeout(this.startTimeOut);
        this.setState({currentTime: (text === '<' && this.state.currentTime != 0) ? this.state.currentTime - 1 : this.state.currentTime + 1})
        clearInterval(this.start);
        this.startTimeOut = setTimeout(this.startTimer, 7000);
    }

    slider(param) { 
        console.log(param.current)
        param.current.scrollTo('item' + (this.state.currentTime))
    }
    
    startTimer() {
        this.start = setInterval(()=>{
            console.log(this.state.currentTime)
            let currentTime = this.state.currentTime + 1
            this.setState({currentTime: currentTime})
            if(this.state.currentTime > 2) {
                this.setState({currentTime: 0})
                currentTime = 0;
            }

            this.slider(this.myRefAd);
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.start);
    }

    render() {
        const adBanners = (list, style) =>
        list ? list.map((item, i) => {
             return <NavLink 
            className={style} 
            key={'item' + i} 
            text={'item' + i} 
            name={'item' + i} 
            to="#">
            <img src={item.url} />
            </NavLink>}
            ) : '';
        
        const adCurrentChange = (list, style) =>
        list ? list.map(item => {
            return <div className={(this.state.className === 'name' + item.id) ? style : ' '} key={item.id} />
        }) : '';

        return(
            <AdBoxSlider adCurrentChange={adCurrentChange} clickArrow={this.clickArrow} myRefAd={this.myRefAd} adImages={this.state.adImages} adBanners={adBanners}/>
        )
    }
}

export default AdBoxSliderContainer;