<template>
  <div>
    <v-container>
      <h1>Log In page</h1>

      <v-text-field
        v-model="email"
        prepend-icon="mdi-account-circle"
        label="email"
        name="email"
        id="email"
        outlined
      ></v-text-field>

      <v-text-field
        v-model="password"
        prepend-icon="mdi-lock"
        label="password"
        name="password"
        id="password"
        type="password"
        outlined
      ></v-text-field>

      <v-btn color="success" @click="logIn">submit</v-btn>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      authData: [],
    };
  },
  methods: {
    logIn() {
      axios
        .post("http://localhost:3000/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.authData = res.data;
          this.$store.state.token = this.authData.token;

          axios
            .get("http://localhost:3000/user/" + this.authData.userId)
            .then((res) => {
              this.$store.state.userProfil = res.data;
              console.log(this.$store.state.userProfil);
            });
          this.$router.push({
            name: "home",
          });
        });
    },
  },
};
</script>