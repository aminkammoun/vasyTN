<template>
  <div style="heigth:100%;">
    <v-app-bar color="#1E1E5D" dark flat>
      <v-toolbar-title>
        <router-link to="/">let'sGo</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-plus</v-icon>
        <router-link to="/ajoutTrajet">ajouter trajet</router-link>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-magnify</v-icon>
        <router-link to="/rechercheTrajet">chercher trajet</router-link>
      </v-btn>
      <v-spacer></v-spacer>
      
      <button text v-if="!token" class="btn btn-4">
        <router-link to="/signUp" >sign in</router-link>
      </button>
      <v-btn text v-else>
        <v-icon>mdi-account-multiple-outline</v-icon>
        <router-link to="/profil">profil</router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  created() {},
  methods: {},
};
</script>
<style >
a {
  color: white !important;
  text-decoration: none !important;
}
.btn {
  
    font-family: 'Noto Sans', sans-serif;
    cursor: pointer;
    box-shadow: -1px 3px 3px 0 rgba(80, 80, 80, .2);
    width: 113px;
    height: 39px;
    padding: 7px;
    border: none;
    border-radius: 30px;
    margin: 0 0 2px;
    color: #fff;
    font-weight: bold;
    flex: 0 0 auto;
}
.btn-4 {
  background: #cbbcf6;
  transition: all 0.16s ease-in;
}

.btn-4:hover {
  background: none;
  color: #464646;
  box-shadow: 0 0 0 1px rgba(80, 80, 80, .5);
}
</style>