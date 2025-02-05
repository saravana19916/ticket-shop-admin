import axios from "axios";
import { ILogin } from "../model/ILogin";

function decodeJWT(token: string) {
  const payload = JSON.parse(atob(token.split(".")[1]));

  return payload;
}
export class AuthenticationService {
  constructor() {
    this.authRequest();
  }

  async login(email: string, password: string) {
    const response = await axios.post<ILogin>(
      import.meta.env.VITE_API_URL + "login",
      {
        email,
        password,
      }
    );
    return response.data;
  }

  async logout() {
    sessionStorage.removeItem("response");
    localStorage.removeItem("user");
    const response = await axios.post(import.meta.env.VITE_API_URL + "logout");
    return response.data;
  }

  async changePassword(
    current_password: string,
    password: string,
    confirm_password: string
  ) {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "change-password",
      {
        current_password,
        password,
        confirm_password,
      }
    );
    return response.data;
  }

  authUser(redirectToLogin?: () => void): any {
    let userData: any | null | undefined = null;
    try {
      if (sessionStorage.getItem("response")) {
        userData = JSON.parse(sessionStorage.getItem("response") || "");
        const token = userData?.token;

        const payload = decodeJWT(token);

        const expiration = new Date(payload.exp * 1000);

        if (expiration < new Date()) {
          userData = null;

          localStorage.removeItem("user");

          redirectToLogin && redirectToLogin();
        }
      }
    } catch (e) {
      userData = null;
    }
    return userData;
  }
  authRequest() {
    const user: any | undefined | null = this.authUser();
    if (user && user!.token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
    }
  }
}
export default new AuthenticationService();
