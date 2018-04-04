export default class loginService {
    constructor($http) {
        this.http = $http;
        this.message = 'there';
        this.signIn = {
            email: '',
            password: '',
            forgotPassword: false
        };
    }

    doLogin(details) {
        return this.http.post('https://ad-barn-backend.herokuapp.com/login', details);
    }

    doSignUp(details) {
        return this.http.put('https://ad-barn-backend.herokuapp.com/signup', details);
    }


    getDetails(details) {
        const type = (details.isUser === true) ? 'user' : 'enterprise';
        return this.http.get(`https://ad-barn-backend.herokuapp.com/${type}/details/${details.username}`);
    }

    updateProfile(profileDetails, type) {
        return this.http.post(`https://ad-barn-backend.herokuapp.com/${type}/profile/update`, profileDetails);
    }
}


loginService.$inject = ['$http'];