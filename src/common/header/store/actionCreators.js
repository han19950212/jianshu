import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';
export const SearchFocus = ()=>({
    type:constants.SEARCH_FOCUS
});

export const SearchBlur = ()=>({
    type:constants.SEARCH_BLUR
});

const changeList = (data)=> ({
    type:constants.CHANGELIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const getList = () =>{
    return (dispatch)=>{  //返回一个函数
        axios.get('/api/headerList.json').then((res)=>{
           if(res.data.success===true){
                const data= res.data.list;
                const action = changeList(data);
                dispatch(action)
           }
         
        }).catch((err)=>{
            console.log(err)
        })
    }
};

export  const handeOver = ()=>({
    type:constants.HANDOVER,
}); 

export const handeLeave=()=>({
    type:constants.HANDLEAVE,
})

export const handeChangePageaction = (data)=>({
    type:constants.HANDECHANGEPAGE,
    page:data
})