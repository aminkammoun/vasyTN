<template>
  <div>
    <v-btn color="success" @click="getTab">text</v-btn>
    <h1>profil</h1>
    <h1>profil</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  computed: {
    userProfil() {
      return this.$store.state.userProfil;
    },
  },
  created() {
    console.log(this.$store.state.userProfil);
  },
  methods: {
    getTab() {
      console.log(this.userProfil);
    },
  },
};
</script>