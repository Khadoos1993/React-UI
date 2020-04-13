import Oidc from 'oidc-client';
import * as oidcConfig from '../Auth';

// const REDIRECT_ON_LOGIN = "redirect_on_login";

// let _accessToken = null;
// let _idToken = null;
// let _expiresAt = null;
const oidc =  new Oidc.UserManager(oidcConfig.oidc);

export function login(){
    //localStorage.setItem(REDIRECT_ON_LOGIN,JSON.stringify(this.history.location));
    oidc.signinRedirect();
}

export async function handleResponse(response) {
    if (response) return response;
    if (response.status === 400) {
      // So, a server-side validation error occurred.
      // Server side validation returns a string error message, so parse as text instead of json.
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  }

export function handleAuthentication(){
    return oidc.signinRedirectCallback();    
}

// export function isAuthenticated(){
//     return new Date().getTime() < _expiresAt;
// }

    // setSession = user =>{
    //     _expiresAt = user.expires_at * 1000 + new Date().getTime();
    //     _accessToken = user.access_token;
    //     _idToken = user.id_token;
    // }

export function logout(){
    oidc.signoutRedirect();
}

    // getAccessToken = () =>{
    //     if(!_accessToken)
    //         throw new Error("Np access token found. ");
    //     return _accessToken;
    // }

    // getUser = cb =>{
    //     //if(this.userProfile) return cb(this.userProfile);
    //     this.oidc.getUser().then(user =>{
    //         cb(user);
    //         console.log(user);
    //     });
        
    // }

    // renewToken = () =>{
    //     this.oidc.signinSilent().catch(error=>{
    //         alert("error occured in silent signin. "+error);
    //     });
    // }
