import { createLogic } from 'redux-logic';
import { AllAction } from "../Action";
import { AuthLogin, AuthSignup } from "../../services"
import { Toast } from '../../utilities';

const  loginLogic =  createLogic({
  type: AllAction.loginUser,
  async process({ action }, dispatch, done) {
    const result  = await AuthLogin(action.payload)
    if(result.data){
      dispatch(AllAction.successloginUser({
        userAUthTokenDetails:result.data.token
      }))
      localStorage.setItem('token',result.data.token)
      done();
    }
    else{
      Toast.fire({
        title: result.response.data.message,
        icon: 'error',
      })
      done();
    }
  }
})

const signupLogic = createLogic({
  type: AllAction.singupUser,
  async process({ action }, dispatch, done) {
    console.log(action.payload,"action.payload");
    const result  = await AuthSignup(action.payload)
    if(result.data){
      dispatch(AllAction.successSingupUser({
        userDetails:result.data
      }))
      done();
    }
    else{
      Toast.fire({
        title: result.response.data.message,
        icon: 'error',
      })
      done();
    }
  }
})


export const allLogics = [
  loginLogic,
  signupLogic
];
  