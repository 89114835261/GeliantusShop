import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setCurrentOffersAC, setCategoryOffersAC, setCurrentOffersArrAC } from './../redux/CurrentOffers-reducer';
import { NavLink } from 'react-router-dom';
import CurrentOffer from './currentOffer';
import CategoryCard from './../CategoryCard/CategoryCard';
import style from './currentContainer.module.scss';
import { animateFunc } from './../redux/Project-reducer';

class CurrentOfferContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clname: 'name0',
            isPressedNext: false,
            isPressedBack: false
        }
        
        this.catWrapper = React.createRef();
        this.scrollOfferBox = (param) => {
            console.log(this.catWrapper)
                if(param === 'next') {
                    this.setState({isPressedNext: true})
                    setTimeout(() => this.setState({isPressedNext: false}), 350)
                    animateFunc('next', this.catWrapper.current, this.catWrapper.current.scrollLeft, this.catWrapper.current.scrollWidth, 'scrollLeft', 5, this.catWrapper.current.lastElementChild.clientWidth + 20);
                }else if(param === 'back') {
                    this.setState({isPressedBack: true});
                    setTimeout(() => this.setState({isPressedBack: false}), 350)
                    animateFunc('back', this.catWrapper.current, this.catWrapper.current.scrollLeft, this.catWrapper.current.scrollWidth, 'scrollLeft', 5, this.catWrapper.current.lastElementChild.clientWidth + 20);
                } 
        }
    }
    componentDidMount() {
        Axios.get('/currentOffer.json').then(response => 
            {this.props.setCurrentOffers(response.data)
            this.props.setCurrentOffers && Axios.get('/Categories.json').then(response=> this.props.setCategoryOffers(response.data))} 
            ); 
        }
    
    onClickBTN(id) {
        this.props.setCurrentOffersArr(id);
        this.catWrapper.current.scrollLeft = 0;
        this.setState({clname: 'name' + id})
    }

    render() {
        let nameMap = this.props.currentOffers ? this.props.currentOffers.map(
            item=> <NavLink key={item.id} className={(this.state.clname === 'name' + (item.id - 1)) ? style.activeBTN : ' '} onClick={(e) => this.onClickBTN(item.id - 1)} to='#'>{item.name}</NavLink>
        ) : ' asdas';
        let catMap = this.props.cateforyOffers ? this.props.cateforyOffers[this.props.currentArr].map(
            item => <CategoryCard nameLink={'name' + item.catId} key={item.catId} minPrice={item.minPrice} additionalClass={true} url={item.url} name={item.name} cover={item.cover}/>
        ) : ' ';
        return(
            <CurrentOffer isPressedBack={this.state.isPressedBack} isPressedNext={this.state.isPressedNext} scr={this.props.scrollLeft} scrollOfferBox={this.scrollOfferBox} catWrapper={this.catWrapper} nameMap={nameMap} catMap={catMap}/>
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