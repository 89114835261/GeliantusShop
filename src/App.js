import React from 'react';
import logo from './logo.svg';
import ap from './App.module.scss';
import { Route, Redirect, withRouter, NavLink,} from 'react-router-dom';
import Header from './Component/Header/Header';
import LeftSide from './Component/LeftSide/LeftSide';
import Footer from './Component/Footer/Footer';
import Main from './Component/main/Main';
import KingAutorisation from './Component/KingAutorisation/KingAutorisation';
import HeaderMenuContainer from './Component/HeaderMenu/HeaderMenuContainer';
import CategoryPageContainer from './Component/CategoryPage/CategoryPageContainer';
import ItemProductContainer from './Component/itemProduct/itemProductContainer';
import WayLineContainer from './Component/NavBar/NavBarContainer';
import {isCategory} from './Component/redux/Project-reducer'
import { connect } from 'react-redux';
import Registration from './Component/Registration/Registration';





let App = (props) => {

    return (
                <div className={ap.kingWrapper} >
                        {props.isOpenRegistration && <Registration isOpenRegistrationModal={props.isOpenRegistrationModal}/>}
                        <HeaderMenuContainer />
                    <div className={ap.wrapper} onClick={() => {props.isOpenMenu && props.changeIsOpenMenu(false)}}>
                        <Header/> 
                        <LeftSide/>
                        <div className={ap.wayLine}>
                            <WayLineContainer/>
                        </div>
                    <div className={ap.content} >
                        <Route exact path='/:catName/:catId/Product/:productId' render={() => <ItemProductContainer />} />
                        <Route path={'/:catName/:catId/Product/:productName/:productId/:Parameters'} render={() => <ItemProductContainer />} />
                        <Route path={'/:catName/:catId/:catName/:catId/Product/:productName/:productId/:Parameters'} render={() => <ItemProductContainer />} />
                        <Route path={'/:catName/:catId/:catName/:catId/:catName/:catId/Product/:productName/:productId/:Parameters'} render={() => <ItemProductContainer />} />
                        <Route path={'/:catName/:catId/:catName/:catId/:catName/:catId/:catName/:catId/Product/:productName/:productId/:Parameters'} render={() => <ItemProductContainer />} />
                        <Route path={'/:catName/:catId/:catName/:catId/:catName/:catId/:catName/:catId/:catName/:catId/Product/:productName/:productId/:Parameters'} render={() => <ItemProductContainer />} />
                        <Route exact path='/Product/:productId' render={() => <ItemProductContainer/>} />
                        <Route path='/Product/:productName/:productId/:Parameters' render={() => <ItemProductContainer/>} />
                        <Route exact path='/Main/1' render={() => <KingAutorisation/>}  />
                        <Route exact path='/Main' render={() => <Main/>}  />  
                        {(isCategory(props.mainUrl, 'Kategoriya-') && props.mainUrl) && <Route exact path={'/:catName/:catId' } render={() => <CategoryPageContainer/>} />}
                        {(isCategory(props.mainUrl, 'Kategoriya-') && props.mainUrl) && <Route exact path={'/:catName/:catId/:catName/:catId' } render={() => <CategoryPageContainer/>} />} 
                        {(isCategory(props.mainUrl, 'Kategoriya-') && props.mainUrl) && <Route exact path={'/:catName/:catId/:catName/:catId/:catName/:catId' } render={() => <CategoryPageContainer/>} />}   
                        {(isCategory(props.mainUrl, 'Kategoriya-') && props.mainUrl) && <Route exact path={'/:catName/:catId/:catName/:catId/:catName/:catId/:catName/:catId' } render={() => <CategoryPageContainer/>} />}
                        {(isCategory(props.mainUrl, 'Kategoriya-') && props.mainUrl) && <Route exact path={'/:catName/:catId/:catName/:catId/:catName/:catId/:catName/:catId/:catName/:catId' } render={() => <CategoryPageContainer/>} />}
                        <Route path='/AutorizationFromKing' render={() => <KingAutorisation/>}  />
                        <Route exact path=' '><Redirect to='/Main'></Redirect></Route>
                        <Route exact path='/'><Redirect to='/Main'></Redirect></Route>
                   </div>
                    
                        <Footer />
                    </div>
                </div>

               
      );

   }



export default App;
