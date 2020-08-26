<template>
  <div>
    <v-tabs centered>
      <v-tab @click="tabs = 'chauffeur'">chauffeur</v-tab>
      <v-tab @click="tabs = 'passenger'">passager</v-tab>
    </v-tabs>

    <v-container v-if="tabs == 'chauffeur'">
      <v-textarea outlined label="description" v-model="description"></v-textarea>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            prepend-icon="mdi-map-marker-outline"
            v-model="depart"
            name="depart"
            label="depart"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            prepend-icon="mdi-map-marker-outline"
            v-model="arrive"
            name="arrivé"
            label="arrivé"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-switch v-model="switch1" :label="`bagage: ${switch1.toString()}`"></v-switch>
        </v-col>
        <v-col cols="12" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="date : ex"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="time" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-currency-eur"
            outlined
            name="cotisation"
            label="cotisation tnd"
            id="cotisation"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn success style="
    width: 100%;" @click="annoncer">annoncer</v-btn>
    </v-container>
    <v-container v-else>
      <v-textarea outlined label="description" v-model="description"></v-textarea>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            prepend-icon="mdi-map-marker-outline"
            v-model="depart"
            name="depart"
            label="depart"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            prepend-icon="mdi-map-marker-outline"
            v-model="arrive"
            name="arrivé"
            label="arrivé"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="date : ex"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="time" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-btn success style="
    width: 100%;" @click="annoncer">annoncer</v-btn>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      depart: "",
      arrive: "",
      description: "",
      time: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      switch1: true,
      tabs: "chauffeur",
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    annoncer() {
      axios
        .post("http://localhost:3000/covoiturage/postCov", {
          name: this.$store.state.userProfil.name,
          familyName: this.$store.state.userProfil.familyname,
          type: this.tabs,
          depart: this.depart,
          arrive: this.arrive,
          time: this.time,
          description: this.description,
          bagage: this.switch1.toString(),
          idUserPoster: this.$store.state.userProfil._id,
        })
        .then(this.$router.push("/rechercheTrajet"));
    },
  },
};
</script>