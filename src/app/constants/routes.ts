/**
 * Route
 * 
 * Define page routes.
 */
export class Route {
  // Log In
  static LOGIN: string = 'login';

  //Sign Up
  static SIGNUP: string = "signup";
  static SIGNUP_LOCATION: string = "signup/location";
  static SIGNUP_COMPANY: string = "signup/company";
  static SIGNUP_ACCOUNT: string = "signup/account";
  static SIGNUP_CONFIRM: string = "signup/confirm";
  static SIGNUP_INVALID_LINK: string = "signup/invalid_link";
  static SIGNUP_VERIFY: string = "signup/verify/:code";
  //Rest password
  static RESET_PASSWORD: string = "reset/input";
  static FORGET_PASSWORD: string = "reset/forget";
  static VERIFY_PASSWORD: string = "reset/verify";
  static RESET_SUCCESS: string = "reset/success";
  
  //Desk List
  static DESKS: string = "desk";
  // Add Desk
  static ADD_DESK = "desk/add";
  static ADD_DESK_VERIFY = "desk/add/verify";
  static ADD_DESK_MAIN = "desk/add/main";
  static EDIT_DESK = "desk/:id"

  //Photo List
  static PHOTO: string = "photo";
  //Available hours
  static ABAILABLE_HOURS: string = "avaiable_hours";
  //Location Setting
  static LOCATION_SETTING = "location/setting";
  //Mail Box
  static MAIL_BOX = "https://mail.google.com"
}
