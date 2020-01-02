import axios from "axios";
class AuthService {
  /**
   * Submit a REST API request to the login end-point to generate a JWT token
   *
   * @return  axios  returns an axios response.
   */
  login(credentials) {
    return axios.post("http://localhost:8000/api/login", credentials);
  }

  /**
   * Get the currently authenticated user
   *
   * @return  {JSON}  JSON representation of the currently logged in user and his/her capabilities
   */
  getUser() {
    return JSON.parse(localStorage.getItem("u"));
  }

  isLoggedIn() {
    return localStorage.getItem("u");
  }

  /**
   * Generate Auth Bearer for the API requests
   *
   * @return  {[type]}  [return description]
   */
  getAuthHeader() {
    return {
      headers: {
        Authorization: "Bearer " + this.getUser().token
      }
    };
  }

  logout() {
    localStorage.removeItem("u");
    //return axios.post()
  }
}

export default new AuthService();
