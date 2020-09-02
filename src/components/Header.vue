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
      <v-btn text v-if="!token" >
        <router-link to="/signUp" style="background: green;">inscription</router-link>
      </v-btn>
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

</style>