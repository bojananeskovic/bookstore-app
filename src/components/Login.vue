<template>
<div class="imagelogin-wrapper">
  <div class="login-page-wrapper">
    <b-form
      class="login-form"
      @submit="onSubmit"
      @reset="onReset"
      v-if="showForm"
    >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >

        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
<br>
      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter your password"
          required
        ></b-form-input>
      </b-form-group>
<br>
      <p class="sign-up-title">
        <router-link class="sign-up-link" to="/register">
          Still don't have an account?
          <br />
          Sign up.
        </router-link>
      </p>
      <div class="action-btns mt-4" style="margin-left: 60px">
        <b-button type="submit" variant="success" style="background-color:rgb(223, 156, 130); border-color:rgb(223, 156, 130)">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showForm: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('login', {
        email: this.form.email,
        password: this.form.password
      })
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.showForm = false;
      this.$nextTick(() => {
        this.showForm = true;
      });
    },
  },
};
</script>

<style scoped>
.imagelogin-wrapper{
  height: 100%;
  background-image: url("https://picsum.photos/1552/882/?image=180");
  background-repeat: no-repeat;
}
  .login-page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 500px;
    height: 600px;
    width: 400px;
    background: rgb(241, 193, 173);

  }
  .login-form {
    font-family: "Verdana", Sans-serif;
    margin-top: 50px;
  }
  #input-1,
  #input-2 {
    width: 300px;
  }
  .sign-up-title {
    text-align: center;
    font-weight: 15px;
  }
  .sign-up-link {
    font-family: "Verdana", Sans-serif;
    font-weight: bold;
     font-size: 15px;
    color: rgb(223, 156, 130) !important;
  }
  p {
    font-size: 15px;
    text-align: left;
    color: white;
  }
</style>
