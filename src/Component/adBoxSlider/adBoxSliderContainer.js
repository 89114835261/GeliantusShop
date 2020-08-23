import React from 'react';
import AdBoxSlider from './adBoxSlider';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

class AdBoxSliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this)
        this.clickArrow = this.clickArrow.bind(this)
        this.changeAdFunc = this.changeAdFunc.bind(this)
        this.state = {
            adImages: null,
            currentTime: 0,
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
        this.startTimeOut = setTimeout(this.startTimer, 5000);
    }

    slider(param) { 
        param.current.scrollTo('item' + (this.state.currentTime))
    }

    changeAdFunc(param, ref) {
        clearTimeout(this.startTimeOut);
        this.setState({currentTime: param});
         clearInterval(this.start);
        ref.current.scrollTo('item' + param);
        this.startTimeOut = setTimeout(this.startTimer, 5000);
    }
    
    startTimer() {
        this.start = setInterval(()=>{
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
        clearTimeout(this.startTimeOut);
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
            return <div onClick={(e) => this.changeAdFunc(item.id - 1, this.myRefAd)} className={(this.state.currentTime + 1 === item.id) ? style : ' '} key={item.id} />
        }) : '';

        return(
            <AdBoxSlider changeAdFunc={this.changeAdFunc} adCurrentChange={adCurrentChange} clickArrow={this.clickArrow} myRefAd={this.myRefAd} adImages={this.state.adImages} adBanners={adBanners}/>
        )
    }
}

export default AdBoxSliderContainer;