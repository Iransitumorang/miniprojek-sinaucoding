<template>
  <div>
    <article class="d-flex justify-content-center loginPage">
      <div>
        <Sidebar />
      </div>
      <form action="" @submit.prevent="register">
        <div class="loginForm">
          <div class="login text-center py-2">Register</div>
          <div class="my-3 px-3">
            <label for="formGroupExampleInput" class="form-label">Username</label>
            <input type="text" class="form-control" id="formGroupExampleInput" name="username" placeholder="Enter Username"
              v-model="username">
          </div>

          <div class="my-3 px-3">
            <label for="formGroupExampleInput" class="form-label">Profile Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Profile Name" name="profilName"
              v-model="profilName">
          </div>

          <div class="mb-3 px-3">
            <label for="formGroupExampleInput2" class="form-label">Password</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Password" name="password"
              v-model="password">
          </div>
          <!-- <router-link to="/"> -->
            <button type="submit" class="btn btn-primary d-flex mx-auto">Daftar</button>
          <!-- </router-link><br /> -->
          <router-link to="/" class="d-flex justify-content-center mb-4">Sudah Punya Akun?</router-link>
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
        profilName: '',
        password: ''
      }
    },
    methods: {
      register: async function () {
        await axios.post("http://159.223.57.121:8090/auth/register", {
            username: this.username,
            profilName: this.profilName,
            password: this.password,
          })
          .then(async (response) => {
            const data = await response.data;
            console.log(response.data);

            if (data.status === 'OK') {
              alert('sukses register');
            }

            this.$router.push('/');

            this.username = "";
            this.profilName = "";
            this.password = "";
          });
      },
      action() {
        alert("Register Berhasil");
      }
    }
  }
</script>
<style scoped>
  .loginPage {
    height: 100vh;
    width: 100%;
    align-items: center;
    margin-top: -48px;
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