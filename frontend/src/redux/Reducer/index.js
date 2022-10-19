import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import { AllAction } from '../Action';

const intialState = 
 { success:false}


export const AppReducer = handleActions(
    {
      [AllAction.successloginUser] : (state = intialState,  action) =>{return{
        ...action.payload,
        success:true
      }},
    },
    intialState
  );


export const RootReducer = combineReducers({
  appReducer: AppReducer,
});