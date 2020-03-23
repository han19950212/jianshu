import React,{Component} from 'react'
import { GlobalStyle } from './style.js';
import { GlobalStyle1 } from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter,Route} from "react-router-dom" ;

import Home from './common/home'
import Detail from './common/detail'
import Header from './common/header';

class App extends Component{
    render(){
        return(
            <div>
                <GlobalStyle></GlobalStyle>
                <GlobalStyle1></GlobalStyle1>
                <Provider store = {store}>
                    <Header></Header>

                    <BrowserRouter>
                        
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/dis" exact component={Detail}></Route>

                    </BrowserRouter>


                </Provider>        
        
            </div>
        )
    }
}
export default App