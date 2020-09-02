<template>
  <div class="all">
    <v-toolbar color="#1E1E5D" dark flat>
      <v-text-field
        append-icon="mdi-mic"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs centered>
          <v-tab @click="tabs = 'chauffeur'">chauffeur</v-tab>
          <v-tab @click="tabs = 'passenger'">passager</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-container v-if="tabs == 'chauffeur'">
      <v-row>
        <v-col cols="12" md="4" v-for="(trajet,index) in trajetChauffeur" :key="index">
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  cov {{trajet.depart}}
                  <v-icon>mdi-arrow-right-bold</v-icon>
                  {{trajet.arrive}}
                </v-list-item-title>
                <v-list-item-subtitle>annoncer par {{trajet.name}} {{trajet.familyName}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>{{trajet.description}}</v-card-text>
            <v-card-text>
              <v-chip>{{trajet.time}}</v-chip>
              <v-chip>bagage :{{trajet.bagage ? 'oui' : 'non'}}</v-chip>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4" width="100%">reserver</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12" md="4" v-for="(trajet,index) in trajetPassenger" :key="index">
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  cov {{trajet.depart}}
                  <v-icon>mdi-arrow-right-bold</v-icon>
                  {{trajet.arrive}}
                </v-list-item-title>
                <v-list-item-subtitle>{{trajet.name}} {{trajet.familyName}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>{{trajet.description}}</v-card-text>
            <v-card-text>
              <v-chip>{{trajet.time}}</v-chip>
              <v-chip>bagage :{{trajet.bagage ? 'oui' : 'non'}}</v-chip>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4" width="100%">reserver</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tabs: "chauffeur",
      trajetPassenger: [],
      trajetChauffeur: [],
      userName: "",
    };
  },
  created() {
    axios.get("http://localhost:3000/covoiturage/").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].type == "chauffeur") {
          this.trajetChauffeur.push(res.data[i]);
        } else {
          this.trajetPassenger.push(res.data[i]);
        }
      }
    });
  },
  methods: {},
};
</script>
<style scoped>
.all{
  padding: 0;
  margin: 0;
  min-height: 100%;
}
</style>