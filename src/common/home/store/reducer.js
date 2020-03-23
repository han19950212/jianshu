import { fromJS } from 'immutable'

const defaultState= fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        img:'xxx'
    }],
});

export default (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state
    }
}