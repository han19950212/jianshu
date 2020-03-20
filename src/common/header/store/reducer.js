import * as contants from './constants';
import { fromJS } from 'immutable'

const defaultState= fromJS({
    focused:false,
    list:[],
});

export default (state=defaultState,action)=>{
  if(action.type===contants.SEARCH_FOCUS){
      return state.set('focused',true)
  }
  if(action.type===contants.SEARCH_BLUR){
       return state.set('focused',false)
  }

  if(action.type===contants.CHANGELIST){
      return state.set("list",action.data)
  }
  return state
}