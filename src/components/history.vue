<template>
  <div class="all">
    <v-container>
      <h1>mes trajets</h1>
      <v-divider></v-divider>
      <h1>mes reservation</h1>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {};
  },
  created(){
    axios.get('http://localhost:3000/reservation/history/'+this.$store.state.userProfil._id).then(res=>{
      console.log("ok", res.data);
    })

  },
  methods:{

  }
};
</script>
<style scoped>
.all {
  padding: 0;
  margin: 0;
  min-height: 100%;
}
</style>
