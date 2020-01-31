import React from "react";
import axios from 'axios';


const TOKEN_NAME = 'mp_token_web';
const API_ENDPOINT = 'https://localhost/mis_pichos/api-admin/';
const LOGIN_ENDPOINT = API_ENDPOINT+'login_controller/validar/';
const LOGIN_VALIDA_ENDPOINT = API_ENDPOINT+'login_controller/validartoken/';

const Mispichoshelper = {
  getCompras: function(){
    var compra = {data:{},columns:{}};
    return compra;
  },
  get: function(url){
    console.log('get axios helper');
  },
  post: function(url,data){
    var response = axios.post(url,data)
      .then((responseJson) => {
        console.log(responseJson.data);
        return responseJson.data;
      })
      .catch((error) => {
        console.error('post helper error '+error);
      });
      return response;
  },
  login: function(data){
    this.post(LOGIN_ENDPOINT,data).then(function(response){
      if(response && response.status == true){
        Mispichoshelper.guardaToken(response['api-key']);
        return true;
      }
      return false;
    });    
  },
  validaToken: function(token){
    return this.post(LOGIN_VALIDA_ENDPOINT,{'token':token}).then(function(response){
      if(response && response.status == true){
        return true;
      }
      Mispichoshelper.remueveToken();
      return false;
    });
  },
  getLocalToken:function(){
    return localStorage.getItem(TOKEN_NAME);
  },
  estaLogeado: function(){
    return (this.getLocalToken() && this.validaToken(this.getLocalToken()))?true:false;
  },
  guardaToken: function(token){
    localStorage.setItem(TOKEN_NAME,token);
  },
  remueveToken: function(){
    localStorage.removeItem(TOKEN_NAME);
  }
  
};

export default Mispichoshelper;