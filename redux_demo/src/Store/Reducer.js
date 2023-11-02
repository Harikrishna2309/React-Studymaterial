const initialState={
    message:"Subscribrd to Imarticus"
};
const reducer=(state=initialState,action)=>{
    const newState={...state};
    if(action.type==="message_change"){
        newState.message="Thank you for subscribing";
    }
    return newState;

};
export default reducer;