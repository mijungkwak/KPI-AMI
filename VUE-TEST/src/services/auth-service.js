import axios from 'axios'
var urlList = require('../assets/url.json');
const urlJSON = JSON.stringify(urlList);
const parseURL = JSON.parse(urlJSON);
var myurl = "http://" + parseURL.myip + ":8080/api";

class AuthService {
    login(user) {
        return axios.post(myurl + '/profile', {
                id: user.id,
                password: user.password
            })
            .then(this.handleResponse)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }

    logout() {
        localStorage.removeItem('user')
    }

    register(user) {
        return axios.post(myurl + '/register', {
                name: user.name,
                id: user.id,
                password: user.password,
                phonenumber: user.phonenumber
            })
            .then(function(response) {
                if (response.data == "error") alert("회원가입 실패!");
                else alert("회원가입 성공!");
                console.log(response.data);
                console.log("submit");
            })

    }

    handleResponse(response) {
        if (response.status === 401) {
            this.logout()
            location.reload(true)

            const error = response.data && response.data.message
            return Promise.reject(error)
        }

        return Promise.resolve(response)
    }
}

export default new AuthService()