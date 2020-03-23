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
                                onFocus={()=>this.props.handleInputFocus((this.props.list))}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i  className={this.props.focused?"focused iconfont zoom":'iconfont zoom'}>&#xe624;</i>
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
        const {page,list,mouse,totalPage} = this.props;
        const jsList = list.toJS();   //转化为普通的js类型，原本是immbate类型
        const pageList = []
        if(show||mouse){
            for(var i = (page-1)*10;i<page*10;i++){
                pageList.push(jsList[i])
            }
           
            return(
                <SearchInfo 
                onMouseEnter={this.props.handeleOver}
                onMouseLeave={this.props.handeleleave}
                >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                        onClick = {()=>this.props.handeChangePage(page,totalPage,this.spinIcon)}
                    >
                         <i ref={(icon)=>{this.spinIcon=icon}}  className='iconfont  spin'>&#xe851;</i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                   {
                   pageList.map((item,index)=>{
                            return <SearchInfoItem key={index}>{item}</SearchInfoItem>    
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



const mapStateToProps= (state)=>{  //这个就是获取，
    return{
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalPage:state.get('header').get('totalPage'),
        mouse:state.get('header').get('mouse')   
    }
}
const mapDispathToProps=(dispatch)=>{  //这个就是改变
    return{
        handleInputFocus(list){
          
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
     
            const action = actionCreators.SearchFocus()
            dispatch(action)
        },
        handleInputBlur(){

            const action  = actionCreators.SearchBlur()
            dispatch(action)
        },
        handeleOver(){
            const action = actionCreators.handeOver();
            dispatch(action)
        },
        handeleleave(){
            const action = actionCreators.handeLeave();
            dispatch(action)
        },
        handeChangePage(page,totalPage,icon){  //点击换一换
            let originAngle = icon.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            icon.style.transform='rotate('+(originAngle+360)+'deg)'
           if(page===totalPage){
               page=1;
           }
            const action = actionCreators.handeChangePageaction(page)
          
            dispatch(action)
        }
    }   
}

export default connect(mapStateToProps,mapDispathToProps)(Header)