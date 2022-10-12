<template>
  <div>
    <article class="d-flex justify-content-center loginPage">
      <div>
        <Sidebar />
      </div>
      <div class="loginForm">
        <div class="login text-center py-2">Register</div>
        <div class="my-3 px-3">
          <label for="formGroupExampleInput" class="form-label">Username</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Username">
        </div>

        <div class="my-3 px-3">
          <label for="formGroupExampleInput" class="form-label">Profile Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Profile Name">
        </div>
        
        <div class="mb-3 px-3">
          <label for="formGroupExampleInput2" class="form-label">Password</label>
          <input type="text"
            class="form-control" id="formGroupExampleInput2" placeholder="Enter Password">
          </div>
            <router-link to="/">
              <button type="button" class="btn btn-primary d-flex mx-auto">Daftar</button>
            </router-link><br />
          <router-link to="/" class="d-flex justify-content-center mb-4">Sudah Punya Akun?</router-link>
      </div>
    </article>
    <FooterSinau />
  </div>
</template>
<script>
  import FooterSinau from '../components/FooterSinau.vue'
  import Sidebar from '../components/Sidebar.vue'

  export default {
    components: {
      FooterSinau,
      Sidebar
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