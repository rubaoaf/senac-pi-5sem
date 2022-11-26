import {
  authUserRequest,
  recoverUserMailRequest,
  changePassRequest,
} from "../api/";

export class Auth {
  static async authUser(payload) {
    const data = await authUserRequest(payload);
    return data;
  }

  static async recoverPass(payload) {
    const data = await recoverUserMailRequest(payload);
    return data;
  }

  static async changePass(payload) {
    console.log("changePass: ", payload);
    const data = await changePassRequest(payload);
    return data;
  }
}
