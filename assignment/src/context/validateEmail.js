export const validateCharecters = function (data) {
    var regex = /^([a-zA-Z ]+)$/;
    return regex.test(data);
  };

export const validateEmail = function (data) {

    var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
    return regex.test(data);
  };
  export const validateDob = function (data) {
    var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
    return regex.test(data);
  };
  
  