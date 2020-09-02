<template>
  <div class="all">
    <v-container>
      <h1>Sign up page</h1>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            prepend-icon="mdi-account-circle"
            label="nom"
            name="name"
            id="name"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="familyName"
            prepend-icon="mdi-account-multiple-outline"
            label="prénom"
            name="lastname"
            id="lastname"
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="carModel"
            prepend-icon="mdi-car"
            label="modéle du voiture"
            name="carModel"
            id="carModel"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="phone"
            prepend-icon="mdi-phone"
            label="numéro de téléphone"
            name="phone"
            id="phone"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-email"
            label="e-mail"
            name="email"
            id="email"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            label="mot de passe"
            name="password"
            id="password"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <div>
        <router-link to="/logIn">
          <span class="logLink">to logIn</span>
        </router-link>

        <v-btn color="success" @click="submitted">submit</v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      familyName: "",
      carModel: "",
      phone: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitted() {
      axios
        .post("http://localhost:3000/user/signIn", {
          name: this.name,
          familyname: this.familyName,
          carModel: this.carModel,
          phone: this.phone,
          email: this.email,
          password: this.password,
        })
        .then(this.clear);
    },
    clear() {
      (this.name = ""),
        (this.familyName = ""),
        (this.carModel = ""),
        (this.phone = ""),
        (this.email = ""),
        (this.password = "");
    },
  },
};
</script>
<style scoped>
.logLink {
  color: blue !important;
}
.all{
  padding: 0;
  margin: 0;
  margin: 0 auto;
  min-height: 100%;
}
</style>