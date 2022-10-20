import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { AllAction } from '../Action';

const intialState = { success:false,userDetail:{}}


export const AppReducer = handleActions(
    {
      [AllAction.successloginUser] : (state = intialState,  action) =>{return{
        ...action.payload,
        success:true,
      }},
      [AllAction.successSignupUser]: (state, { payload }) => ({
        ...state,
        userDetails:payload.userDetails,
      }),
    },
    intialState
  );


export const RootReducer = combineReducers({
  appReducer: AppReducer,
  routing: routerReducer
});