import React from 'react';
import ap from './App.module.scss';
import { Route, Redirect} from 'react-router-dom';
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
import Registration from './Component/Registration/Registration';
import CartContainer from './Component/Cart/CartContainer';
import MobileMenu from './Component/MobileMenu/MobileMenu';
import FindContainer from './Component/Find/FindContainer';





let App = (props) => {

    return (
                <div className={ap.kingWrapper} >
                        {props.isOpenRegistration && <Registration isOpenRegistrationModal={props.isOpenRegistrationModal}/>}
                        {props.isOpenCart && <CartContainer />}
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
                        {props.isOpenFind && <FindContainer isOpenFindModal={props.isOpenFindModal} /> }
                        <MobileMenu isOpenFindModal={props.isOpenFindModal} productsCount={props.productsCount} isOpenCartModal={props.isOpenCartModal} changeIsOpenMenu={props.changeIsOpenMenu}/>
                        <Footer />
                    </div>
                </div>

               
      );

   }



export default App;
