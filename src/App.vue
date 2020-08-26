<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/footer";
export default {
  name: "App",

  components: {
    appHeader: Header,
    appFooter: Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>