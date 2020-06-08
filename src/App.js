import React from 'react';
import logo from './logo.svg';
import ap from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import LeftSide from './Component/LeftSide/LeftSide';
import Footer from './Component/Footer/Footer';
import Main from './Component/main/Main';
import KingAutorisation from './Component/KingAutorisation/KingAutorisation';
import HeaderMenuContainer from './Component/HeaderMenu/HeaderMenuContainer';
import CategoryPageContainer from './Component/CategoryPage/CategoryPageContainer';
import ItemProductContainer from './Component/itemProduct/itemProductContainer';




class App extends React.Component {

   render() {

    return (
        <BrowserRouter>
                <div className={ap.kingWrapper}>
                        <HeaderMenuContainer />
                    <div className={ap.wrapper}>
                        <Header /> 
                        <LeftSide />
                    <div className={ap.content}>
                        <Route path='/Product/:productId/:Parameters' render={ () => <ItemProductContainer />} />
                        <Route path='/Main' render={ () => <Main />}  />
                        <Route path='/Category/:catName/:catId' render={ () => <CategoryPageContainer />} />
                        <Route path='/AutorizationFromKing' render={ () => <KingAutorisation />}  />
                    </div>
                    
                        <Footer />
                    </div>
                </div>
          
        </BrowserRouter>
      );

   }

}

export default App;
