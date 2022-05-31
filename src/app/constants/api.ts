/**
 * Api endpoints.
 */
export class Api {
  // log in
  static LOG_IN = 'auth/login';
  // register
  static SIGN_UP = 'auth/signup';
  static VERIFY_EMAIL = 'auth/verify';
  //me
  static ME = 'auth/me';
  //send email
  static SEND_EMAIL = 'auth/send_email';
  //business type
  static BUSINESS_TYPE = 'business_type';
  //desks
  static DESK = 'desk';
  //verify qrcode for new desk
  static QROCDE_VERIFY = 'qrcode/verify';
  //location
  static LOCATION = 'location';
  static LOCATION_ACCOUNT = 'location/account';
  static FACILITY = 'facility';
}
