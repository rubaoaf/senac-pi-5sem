import { addUser, editUser } from "../api/";

export class User {
  static async cadastraUsuario(payload) {
    const data = await addUser(payload);
    return data;
  }

  static async editaUsuario(payload) {
    const data = await editUser(payload);
    return data;
  }
}
