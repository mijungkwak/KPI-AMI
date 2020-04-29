<template>
  <div class="col-md-12">
    <br>
    <br><br><br>
    <div class="card card-container"
    >
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" 
      @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="id">id</label>
          <input
            type="text"
            class="form-control"
            name="id"
            v-model="user.id"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            v-model="user.password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span class="spinner-border spinner-border-sm" v-show="loading"></span>
            <span>Login</span>
          </button>
          <button class="btn btn-primary btn-block" :disabled="loading" @click="onClickRegister">
            <span class="spinner-border spinner-border-sm" v-show="loading"></span>
            <span>회원가입</span>
          </button>
        </div>
        <div class="form-group">
          <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../models/user.js'
//~
export default {
  name: 'login',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    onClickRegister() {
      this.$router.push('/Register')
    },
    handleLogin() {
      this.loading = true;

     if (this.user.id && this.user.password) {
       
        this.$store.dispatch('auth/login', this.user).then(
          response => {
            if(response=="error") {
              alert('정보를 다시 확인해주세요!')
              this.loading = false;
            }
            else {
              alert('환영합니다!')
              localStorage.setItem("customer", "customer@"+this.user.id)
              this.$router.push('/main')
            }
          },
          error => {
            alert('정보를 다시 확인해주세요!')
            this.loading = false;
            this.message = error.message;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>