import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setCurrentOffersAC, setCategoryOffersAC, setCurrentOffersArrAC } from './../redux/CurrentOffers-reducer';
import { NavLink } from 'react-router-dom';
import CurrentOffer from './currentOffer';
import style from './currentContainer.module.scss';

class CurrentOfferContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clname: 'name0',
            currentOffersTitle: null
        }
        
        this.myRef = React.createRef();
        this.catWrapper = React.createRef();
        
    }

    componentDidMount() {
        Axios.get('/currentOffer.json').then(response => 
            {
            this.setState({currentOffersTitle: response.data.title})
            this.props.setCurrentOffers(response.data.currentOffers)
            this.props.setCurrentOffers && Axios.get('/Categories.json').then(response=> this.props.setCategoryOffers(response.data))} 
            ); 
        }
    
    onClickBTN(id) {
        this.props.setCurrentOffersArr(id);
        this.setState({clname: 'name' + id})
        this.myRef.current.state.translate = 0;
    }

    render() {
        
        let nameMap = this.props.currentOffers ? this.props.currentOffers.map(
            item=> <NavLink key={item.id} className={(this.state.clname === 'name' + (item.id - 1)) ? style.activeBTN : ' '} onClick={(e) => this.onClickBTN(item.id - 1)} to='#'>{item.name}</NavLink>
        ) : ' asdas';
        return(
            <CurrentOffer 
            currentOffersTitle={this.state.currentOffersTitle} 
            myRef={this.myRef} 
            translate={this.state.translate} 
            cateforyOffers={this.props.cateforyOffers} 
            currentArr={this.props.currentArr} 
            isPressedBack={this.state.isPressedBack} 
            isPressedNext={this.state.isPressedNext} 
            scr={this.props.scrollLeft} 
            scrollOfferBox={this.scrollOfferBox} 
            catWrapper={this.catWrapper} 
            nameMap={nameMap}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentOffers: state.CurrentOffersReducer.currentOffers,
        cateforyOffers: state.CurrentOffersReducer.cateforyOffers,
        currentArr: state.CurrentOffersReducer.currentArr
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentOffers: (offers) => {
            dispatch(setCurrentOffersAC(offers))
        },
        setCategoryOffers: (cateforyOffers) => {
            dispatch(setCategoryOffersAC(cateforyOffers))
        },
        setCurrentOffersArr: (id) => {
            dispatch(setCurrentOffersArrAC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CurrentOfferContainer);