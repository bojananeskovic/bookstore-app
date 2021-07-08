<template>
  <div class="register-page-wrapper">
     <img src="../assets/user-256.png" style="padding:20px">
    <b-form class="register-form" @submit="onSubmit" @reset="onReset" v-if="showForm">
      <b-form-group id="input-group-3" label="Your Name:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="name"
          v-model="form.name"
          placeholder="Enter your Name"
          required
        ></b-form-input>
      </b-form-group>
<br>
       <b-form-group id="input-group-4" label="Your last Name:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="name"
          v-model="form.lastName"
          placeholder="Enter your last Name"
          required
        ></b-form-input>
      </b-form-group>
<br>
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
      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter your Password"
          required
        ></b-form-input>
      </b-form-group>
<br>
      <b-button type="submit" variant="warning" style="background-color:rgb(223, 156, 130); border-color:rgb(223, 156, 130);margin-left: 60px">Submit</b-button>

    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          name: '',
          lastName: ''
        },
        showForm: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$store.dispatch('register', {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name,
          lastName: this.form.lastName
        })
      },
      onReset(event) {
        event.preventDefault();
        // Reset our form values
        this.form.email = '';
        this.form.password = '';
        this.form.name = '';
        this.form.lastName = '';
        // Trick to reset/clear native browser form validation state
        this.showForm = false;
        this.$nextTick(() => {
          this.showForm = true;
        })
      }
    }
  }
</script>

<style scoped>
  .register-page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 550px;
    margin-top: 30px;
    height: 800px;
    width: 400px;
    background: rgb(241, 193, 173);

  }
  .register-form {
    font-family: "Verdana", Sans-serif;
    margin-top: 50px;
  }
  #input-1,
  #input-2 {
    width: 300px;
  }
</style>
