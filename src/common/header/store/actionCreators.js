import * as constants from './constants';
import axios from 'axios';
export const SearchFocus = ()=>({
    type:constants.SEARCH_FOCUS
});

export const SearchBlur = ()=>({
    type:constants.SEARCH_BLUR
});

const changeList = (data)=> ({
    type:constants.CHANGELIST,
    data:data
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