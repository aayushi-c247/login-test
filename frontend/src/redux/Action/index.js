import { createAction } from "redux-actions";

export const defaultAction = createAction("default-action");


export const singupUser = createAction("singup-user");
export const successSingupUser = createAction("success-singup-user");
export const cancelSingupUser = createAction("cancel-singup-user");

export const loginUser = createAction("login-user");
export const successloginUser = createAction("success-login-user");
export const cancelLoginUser = createAction("cancel-login-user");


export const  AllAction = {
    loginUser,
    successloginUser,
    cancelLoginUser,
    singupUser,
    successSingupUser,
    cancelSingupUser
}