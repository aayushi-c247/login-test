import { createAction } from "redux-actions";

export const defaultAction = createAction("default-action");

export const updateUserPassword = createAction("update-user-password");
export const successUpdateUserPassword = createAction("success-update-user-password");
export const cancelUpdateUserPassword = createAction("cancel-update-user-password");

export const loginUser = createAction("login-user");
export const successloginUser = createAction("success-login-user");
export const cancelLoginUser = createAction("cancel-login-user");


export const  AllAction = {
    loginUser,
    successloginUser,
    cancelLoginUser,
    updateUserPassword,
    successUpdateUserPassword,
    cancelUpdateUserPassword
}