export const validateCharecters = function (data) {
    var regex = /^([a-zA-Z ]+)$/;
    return regex.test(data);
  };

export const validateEmail = function (data) {

    var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
    return regex.test(data);
  };
