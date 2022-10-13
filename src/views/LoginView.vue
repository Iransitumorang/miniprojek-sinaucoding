<template>
  <div>
    <article class="d-flex justify-content-center loginPage">
      <div>
        <Sidebar />
      </div>
      <form action="" @submit.prevent="login">
        <div class="loginForm">
          <div class="login text-center py-2">Login</div>
          <div class="my-3 px-3">
            <label for="formGroupExampleInput" class="form-label">Username</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Username" name="username"
              v-model="username">
          </div>

          <div class="mb-3 px-3">
            <label for="formGroupExampleInput2" class="form-label">Password</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Password" name="password"
              v-model="password">
          </div>
          <!-- <router-link to="/DashboardView" class="d-flex justify-content-center mb-4"> -->
            <button type="submit" class="btn btn-primary d-flex mx-auto">Masuk</button>
          <!-- </router-link><br /> -->
          <router-link to="/SignupView" class="d-flex justify-content-center mb-4">Belum Punya Akun?</router-link>
        </div>
      </form>
    </article>
    <FooterSinau />
  </div>
</template>
<script>
import FooterSinau from '../components/FooterSinau.vue'
import Sidebar from '../components/Sidebar.vue'
import axios from "axios"

export default {
  components: {
    FooterSinau,
    Sidebar
  },
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: async function () {
      await axios.post("http://159.223.57.121:8090/auth/login", {
        username: this.username,
        password: this.password,
      })
        .then(async (response) => {
          localStorage.setItem("Token", response.data.data.token);
          console.log(response);

          this.$router.push('/DashboardView');
          this.username = "";
          this.password = "";
        });
    }
  }
}

</script>
<style scoped>
.loginPage {
  height: 100vh;
  width: 100%;
  align-items: center;
  margin-top: -72px;
}

.loginForm {
  width: 40vw;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.login {
  background-color: #B4CDE6;
  border-radius: 2px;
  font-size: 18px;
  color: #083AA9;
  font-weight: 500;
}
</style>