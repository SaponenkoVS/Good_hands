import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class LocalstorageService {
  private readonly LOGIN = "login"
  private readonly AUTHENTICATION_TOKEN = "authentication_token"
  private readonly AUTHENTICATION_REFRESH_TOKEN = "authentication_refresh_token"


  setLogin(login: string) {
    localStorage.setItem(this.LOGIN, login)
  }

  get login() {
    return localStorage.getItem(this.LOGIN)
  }

  setAuthenticationToken(token: string) {
    localStorage.setItem(this.AUTHENTICATION_TOKEN, token)
  }

  get authenticationToken() {
    return localStorage.getItem(this.AUTHENTICATION_TOKEN)
  }

  setAuthenticationRefreshToken(token: string) {
    localStorage.setItem(this.AUTHENTICATION_REFRESH_TOKEN, token)
  }

  get authenticationRefreshToken() {
    return localStorage.getItem(this.AUTHENTICATION_REFRESH_TOKEN)
  }
}
