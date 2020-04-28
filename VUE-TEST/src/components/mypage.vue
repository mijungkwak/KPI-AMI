<template>
<div>
    <center>
    <br>
    <br>
    <br>
    <br>
    <b-card
    no-body
    style="max-width: 30rem;"
    img-top
    >
    <template v-slot:header>
      <h4 class="mb-0">My page</h4>
    </template>

    <b-card-body>
      <b-card-title><div id='customer_id'>username 회원님 환영합니다!</div></b-card-title>
      <br>
      <b-card-text>
        회원님이 예약하신 차량 내역입니다.
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
        <hr>
      <b-list-group-item><div id=name>차량정보가없습니다</div></b-list-group-item> 
      <b-list-group-item><div id='car_code'>차량정보가없습니다</div></b-list-group-item>
      <b-list-group-item><div id='startdate'>차량정보가없습니다 </div></b-list-group-item>
      <b-list-group-item><div id='enddate'>차량정보가없습니다 </div></b-list-group-item>
    </b-list-group>

    <b-card-body>
      <b-button type="submit" @click="onGoMainpage" block variant="primary">메인 화면</b-button>
      <b-button type="submit" @click="onReserDelete" block variant="primary">예약 취소</b-button>
    </b-card-body>

    <b-card-footer>bespinCar</b-card-footer>

  </b-card>
    </center>
    <br>
    <br>
    <br>
    <br>
</div>  
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js" ></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
var urlList = require('../assets/url.json');
const urlJSON = JSON.stringify(urlList);
const parseURL = JSON.parse(urlJSON);
var myurl = "http://" + parseURL.myip + ":8080/api";
var id = "";
var code = "";
export default {
  name: 'profile',
  data() {
    return {
      content: ''
    }
  },
  mounted:function() {
    id = localStorage.getItem("customer").split("@")[1];
    document.querySelector("#customer_id").innerHTML = id+" 회원님 환영합니다!";
    axios.get(myurl+'/reservations?id='+id)
    .then(function(response){
      if(response.data.length>0) {
        var cnt = response.data.length-1;
        code = response.data[cnt].code;
        //document.querySelector("#customer_id").innerHTML = id+" 회원님 환영합니다!";
        document.querySelector("#name").innerHTML = response.data[cnt].name;
        document.querySelector("#car_code").innerHTML = "차 코드: "+response.data[cnt].code;
        document.querySelector("#startdate").innerHTML = "픽업 : "+response.data[cnt].startDate;
        document.querySelector("#enddate").innerHTML = "반납 : "+response.data[cnt].endDate;
      }
    });
  },
  methods:{
  onGoMainpage() {
    this.$router.push('/main');
  },
  onReserDelete(){
    axios.delete(myurl+'/delreservation?id='+id+'&code='+code)
    .then(function(response){
      console.log(response.data);
                if(response.data=="error") {
                    alert("당일 예약은 취소가 불가능 합니다.");
                }
                else {
                    alert("예약이 취소되었습니다");
                    location.reload();
                }
            })
    this.$router.push('/main');
  }
},
}
</script>