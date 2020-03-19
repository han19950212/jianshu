import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

const Header =(props)=>{
    return(
        <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused?"focused":''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i  className={props.focused?"focused iconfont":'iconfont'}>&#xe624;</i>
                </SearchWrapper>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <i className = "iconfont">&#xe636;</i>
                </NavItem>
            </Nav>
            <Addition>
            <Button className="writting">
                <i className = "iconfont">&#xe6e5;</i>
                写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

// class Header extends Component{

//     render(){
 
//     }

//     handleInputFocus(){
//         this.setState({
//             focused:true
//         })
//     }
//     handleInputBlur(){
//         this.setState({
//             focused:false
//         })
//     }
// }

const mapStateToProps= (state)=>{  //这个就是获取，
    return{
        focused:state.focused    
    }
}
const mapDispathToProps=(dispatch)=>{  //这个就是改变
    return{
        handleInputFocus(){
            console.log('123')
            const action  ={
                type:'Search_focus'
            };
            dispatch(action)
        },
        handleInputBlur(){
            const action  ={
                type:'Search_blur'
            };
            dispatch(action)
        }
    }   
}

export default connect(mapStateToProps,mapDispathToProps)(Header)