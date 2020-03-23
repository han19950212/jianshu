import * as contants from './constants';
import { fromJS } from 'immutable'

const defaultState= fromJS({
    focused:false,
    mouse:false,
    list:[],
    page:1,
    totalPage:1,
});

export default (state=defaultState,action)=>{
  if(action.type===contants.SEARCH_FOCUS){
      return state.set('focused',true)
  }
  if(action.type===contants.SEARCH_BLUR){
       return state.set('focused',false)
  }

  if(action.type===contants.CHANGELIST){
      return state.set("list",action.data).set('totalPage',action.totalPage)
  }
  if(action.type===contants.HANDOVER){
      return state.set('mouse',true)
  }
  if(action.type===contants.HANDLEAVE){
    return state.set('mouse',false)
  }
  if(action.type===contants.HANDECHANGEPAGE){
      return state.set('page',action.page+1)
  }

  return state
}