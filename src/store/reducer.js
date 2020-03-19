const defaultState={
      focused:false

};

export default (state=defaultState,action)=>{
    if(action.type==="Search_focus"){
        // const NewState= JSON.parse(JSON.stringify(state));
        // NewState.focused=true
        // return newState;

        return{
            focused:true
        }
    }
    if(action.type==="Search_blur"){
        // const NewState= JSON.parse(JSON.stringify(state));
        // NewState.focused=false
        // return newState;
        return{
            focused:false
        }
    }
    return state
}