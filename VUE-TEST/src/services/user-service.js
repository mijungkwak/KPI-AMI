import axios from 'axios'
import authHeader from './auth-header'
import urlList from '../assets/url.json'
const urlJSON = JSON.stringify(urlList)
const parseURL = JSON.parse(urlJSON);

var DBurl = parseURL.url;
const API_URL = DBurl + '/v0.0.3/crbs/users';

class UserService {
    getUserContent() {
        return axios.get(API_URL, { headers: authHeader() })
    }
}

export default new UserService()