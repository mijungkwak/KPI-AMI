var express = require('express');
var axios = require("axios");
var app = express();

var urlList = require('./src/assets/url.json');
const urlJSON = JSON.stringify(urlList);
const parseURL = JSON.parse(urlJSON);
var url = "http://" + parseURL.url + ":8090/v0.0.3/crbs";

var port = 3000;

app.use(express.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});

//차량 조회
app.get('/api/cars', function(req, res) {
    axios.get(url, {})
        .then(function(response) {
            res.json(response.data);
        });

});

//예약 조회
app.get('/api/reservations', function(req, res) {
    axios.get(url + '/mybooking/' + req.query.id, {})
        .then(function(response) {
            res.json(response.data);
        });
});

//차량 삭제
app.delete('/api/delcar', function(req, res) {
    axios.delete(url + '/admins/' + req.query.id, {})
        .then(function(response) {
            res.json(response.data);
        });
});

//예약 삭제
app.delete('/api/delreservation', function(req, res) {
    axios.delete(url + '/mybooking/' + req.query.id + '/' + req.query.code, {})
        .then(function(response) {
            res.json(response.data);
        })
        .catch(function(error) {
            console.log(error.response);
            if (error.response.status == 201) res.json("good");
            else res.json("error");
        });
});

//로그인 예정
app.post('/api/profile', function(req, res) {
    axios.post(url + '/users/signin', {
            id: req.body.id,
            password: req.body.password
        })
        .then(response => {
            res.json(response.data);
        })
        .catch(function(error) {
            console.log(error.data);
            res.json("error");
        });
});

//회원 가입
app.post('/api/register', function(req, res) {
    axios.post(url + '/users', {
            name: req.body.name,
            id: req.body.id,
            password: req.body.password,
            phonenumber: req.body.phonenumber
        })
        .then(response => {
            res.json(response.data);
        })
        .catch(function(error) {
            console.log(error.data);
            res.json("error");
        });
});

//차량 예약
app.post('/api/reservation', function(req, res) {
    axios.post(url + '/reservations', {
            customerId: req.body.customerId,
            carCode: req.body.carCode,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
        .then(response => {
            res.json(response.data);
        })
        .catch(function(error) {
            console.log(error.data);
            res.json("error");
        });
});

//차량 등록
app.post('/api/enroll', function(req, res) {
    axios.post(url + '/admins', {
            code: req.body.code,
            name: req.body.name,
            price: parseInt(req.body.price),
            color: req.body.color,
            fuel: req.body.fuel,
            displacement: parseInt(req.body.displacement),
            size: req.body.size,
            imageUrl: req.body.imageUrl,
            cnt: parseInt(req.body.cnt)
        })
        .then(response => {
            res.json(response.data);
        })
        .catch(function(error) {
            console.log(error.data);
            res.json("error");
        });
});

app.listen(port, function() {
    console.log(`Server is running on ${port}`);
});