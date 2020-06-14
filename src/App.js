import React from 'react';
import logo from './logo.svg';
import ap from './App.module.css';
import { Route, Redirect,} from 'react-router-dom';
import Header from './Component/Header/Header';
import LeftSide from './Component/LeftSide/LeftSide';
import Footer from './Component/Footer/Footer';
import Main from './Component/main/Main';
import KingAutorisation from './Component/KingAutorisation/KingAutorisation';
import HeaderMenuContainer from './Component/HeaderMenu/HeaderMenuContainer';
import CategoryPageContainer from './Component/CategoryPage/CategoryPageContainer';
import ItemProductContainer from './Component/itemProduct/itemProductContainer';
import WayLineContainer from './Component/NavBar/NavBarContainer';




class App extends React.Component {

   render() {

    return (
                <div className={ap.kingWrapper}>

                        <HeaderMenuContainer />
                    <div className={ap.wrapper}>
                        <Header /> 
                        <LeftSide />
                        <div className={ap.wayLine}>
                            <WayLineContainer />
                        </div>
                    <div className={ap.content}>
                        
                        <Route exact path='/Products/Category/:catName/:catId/Product/:productId' render={() => <ItemProductContainer />} />
                        <Route path='/Products/Category/:catName/:catId/Product/:productName/:productId/:Parameters' render={() => <ItemProductContainer />} />
                        <Route exact path='/Product/:productId' render={() => <ItemProductContainer/>} />
                        <Route path='/Product/:productName/:productId/:Parameters' render={() => <ItemProductContainer/>} />
                        <Route exact path='/Main/1' render={() => <KingAutorisation/>}  />
                        <Route exact path='/Main' render={() => <Main/>}  />  
                        <Route exact path='/Products/Category/:catName/:catId' render={() => <CategoryPageContainer/>} />
                        <Route path='/AutorizationFromKing' render={() => <KingAutorisation/>}  />
                        <Route exact path=' '><Redirect to='/Main'></Redirect></Route>
                        <Route exact path='/'><Redirect to='/Main'></Redirect></Route>
                   </div>
                    
                        <Footer />
                    </div>
                </div>

               
      );

   }

}

export default App;
