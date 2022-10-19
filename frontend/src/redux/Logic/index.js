import { createLogic } from 'redux-logic';
import ApiHelper from "../../apiHelper";
import { AllAction } from "../Action";
import { AuthLogin } from "../../services"

// const fetchUserProfileLogic = createLogic({
//   type: AllAction.fetchUserProfile,
//   async process({ action }, dispatch, done) {
//   const result  =  await ApiHelper.get('/profile')
//     if(result){
//       console.log(result,"result for user fetch")
//       dispatch(AllAction.successUserDetails({
//         userDetails:result.data.details
//       }))
//       done()
//     }
//     else{
//       dispatch(AllAction.cancelAuthUserProfile())
//       done()
//     }
//   }
  
// });

// const sendTokenAuth = createLogic({
//   type: AllAction.fetchAuthUserProfile,
//   async process({ action }, dispatch, done) {
//     const result  =  await ApiHelper.post('/oauth', action.payload);
//     if(result){
//       console.log(result,"result for user fetch")
//       dispatch(AllAction.successAuthUserProfile({
//         userAUthTokenDetails:result.data.details
//       }))
//       done()
//     }
//     else{
//       console.log(result)
//       dispatch(AllAction.cancelUserDetails())
//       done()
//     }
//   }
// })

const loginLogic = createLogic({
  type: AllAction.loginUser,
  async process({ action }, dispatch, done) {
    //const { email = "", password = "" } = action.payload || {}
    console.log(action.payload,"action.payload");
    dispatch(AllAction.successloginUser({
      userDetails:action.payload,
      // success:action.payload.success
    }))
    // const result  = AuthLogin(action.payload)
    // if(result){
    //   dispatch(AllAction.successloginUser({
    //     userAUthTokenDetails:result.data.details
    //   }))

    // }
    // else{
    //   console.log("error")
    // }
  }
})

const updateUserPassword = createLogic({
  type: AllAction.updateUserPassword,
  async process({ action }, dispatch, done) {

  }
})

export const allLogics = [
  loginLogic,
  updateUserPassword
];
  