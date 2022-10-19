import ApiHelper from "../apiHelper";

export async function AuthLogin (data){
    const result  = await ApiHelper.post('/login',data);
    return result;
}

export async function AuthSignup (data){
    const url = '/registration';
  
    const response = await ApiHelper.post(url, data);
  
    return response;
}

export async function UpdateUserPassword (data){
    const url = '/change-password';
  
    const response = await ApiHelper.post(url, data);
  
    return response;
}

