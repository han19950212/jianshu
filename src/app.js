import React,{Component} from 'react'
import { GlobalStyle } from './style.js';
import { GlobalStyle1 } from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store';

import Header from './common/header';

class App extends Component{
    render(){
        return(
            <div>
                <GlobalStyle></GlobalStyle>
                <GlobalStyle1></GlobalStyle1>
                <Provider store = {store}>
                    <Header></Header>
                </Provider>        
        
            </div>
        )
    }
}
export default App