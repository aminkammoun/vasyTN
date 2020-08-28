<template>
  <div>
    <v-container>
      <v-card class="mx-auto">
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="6">
                <v-icon>mdi-arrow-left-thick</v-icon>
              </v-col>

              <v-col cols="12" md="12">
                <h1>subscribe</h1>
              </v-col>
            </v-row>
            <v-row style="margin:auto">
              <v-col cols="12" md="12">
                <v-text-field
                  class="inputField"
                  v-model="email"
                  prepend-icon="mdi-account-circle"
                  label="email"
                  name="email"
                  id="email"
                  outlined
                ></v-text-field>

                <v-text-field
                  class="inputField"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  label="password"
                  name="password"
                  id="password"
                  type="password"
                  outlined
                ></v-text-field>
                <v-btn color="success" @click="logIn" style=" width:100%;">submit</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" style="margin:auto;">
                <span>créer un compte...</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="all">
            <div style="    position: relative;
    top: 23%;
    color: white;">
              <h1>go to inscription page</h1>
              <v-btn
                rounded
                text
                style="position: relative;
    text-align: center;
    align-items: center;
    left: 37%;
    color:white;"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
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
<style scoped>
.inputField {
  margin: auto;
}
h1 {
  text-align: center;
}

.all {
  border-radius: 0% 1% 1% 0%;
  background-image: url("../../assets/image/loginBack.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 76vh;
}
.main {
  background-image: url("../../assets/image/allBack.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>