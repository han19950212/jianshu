import React,{Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  {actionCreators}  from './store'


import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style'

// const getListArea =(show) =>{
//     if(show){
//         return(
//             <SearchInfo >
//             <SearchInfoTitle>
//                 热门搜索
//                 <SearchInfoSwitch>
//                     换一批
//                 </SearchInfoSwitch>
//             </SearchInfoTitle>
//             <SearchInfoList>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//             </SearchInfoList>
//         </SearchInfo>
//         )
//     }else{
//         return null;
//     }
// }

class Header extends Component{

    render(){
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused?"focused":''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i  className={this.props.focused?"focused iconfont":'iconfont'}>&#xe624;</i>
                        {this.getListArea(this.props.focused)}
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


    getListArea =(show) =>{
        if(show){
            return(
                <SearchInfo >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                   {
                    this.props.list.map((item,index)=>{
                            return <SearchInfoItem>item</SearchInfoItem>    
                    })
                   }
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
    }
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
        focused:state.get('header').get('focused')    
    }
}
const mapDispathToProps=(dispatch)=>{  //这个就是改变
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList());
            const action = actionCreators.SearchFocus()
            dispatch(action)
        },
        handleInputBlur(){
            const action  = actionCreators.SearchBlur()
            dispatch(action)
        }
    }   
}

export default connect(mapStateToProps,mapDispathToProps)(Header)