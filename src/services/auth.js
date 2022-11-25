import { authUserRequest } from '../api/';

export class Auth {
    static async authUser(payload) {
        const data = await authUserRequest(payload);
        return data
    }
}