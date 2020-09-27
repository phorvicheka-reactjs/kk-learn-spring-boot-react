import axios from 'axios';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', {
            headers: {
                authorization: this.createBasicAuthToken(username, password),
            },
        });
    }

    createBasicAuthToken(username,password) {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        // set axios interceptors
        const axiosInterceptorId = this.setupAxiosInterceptors(
            this.createBasicAuthToken(username, password)
        );
        sessionStorage.setItem('axiosInterceptorId', axiosInterceptorId);
    }

    setupAxiosInterceptors(basicAuthHeader) {
        const axiosInterceptorId = axios.interceptors.request.use((config) => {
            if (this.isUserLoggedIn()) {
                config.headers.authorization = basicAuthHeader;
            }
            return config;
        });

        return axiosInterceptorId;
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        // remove axios interceptors
        const axiosInterceptorId = sessionStorage.getItem('axiosInterceptorId')
        axios.interceptors.request.eject(Number(axiosInterceptorId));
        sessionStorage.removeItem('axiosInterceptorId');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true;
    }

    getUsername() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user;
    }
}

export default new AuthenticationService();
