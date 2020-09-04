<template>
  <div class="all">
    <v-tabs centered>
      <v-tab class="tabsStyle" @click="tabs = 'chauffeur'">chauffeur</v-tab>
      <v-tab class="tabsStyle" @click="tabs = 'passenger'">passager</v-tab>
    </v-tabs>

    <v-container v-if="tabs == 'chauffeur'">
      <v-row>
        <v-col cols="12" md="3"> </v-col>
        <v-col cols="12" md="9">
          <v-textarea
            dense
            outlined
            label="description"
            v-model="description"
          ></v-textarea>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                dense
                solo
                clearable
                prepend-inner-icon="mdi-map-marker-outline"
                v-model="depart"
                name="depart"
                label="depart"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                dense
                solo
                clearable
                append-icon="mdi-map-marker-outline"
                v-model="arrive"
                name="arrivé"
                label="arrivé"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-switch
                v-model="switch1"
                :label="`bagage: ${switch1.toString()}`"
              ></v-switch>
            </v-col>
            <v-col cols="12" md="6">
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
                    dense
                    v-model="time"
                    label="date : ex"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="time"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                outlined
                rounded
                dense
                clearable
                name="places"
                label="places disponible"
                id="places"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                outlined
                rounded
                dense
                clearable
                prepend-icon="mdi-currency-eur"
                name="cotisation"
                label="cotisation tnd"
                id="cotisation"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn success class="annonceBtn" @click="annoncer">annoncer</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12" md="3"> </v-col>
        <v-col cols="12" md="9">
          <v-textarea
            outlined
            label="description"
            v-model="description"
          ></v-textarea>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                rounded
                dense
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
                rounded
                dense
                prepend-icon="mdi-map-marker-outline"
                v-model="arrive"
                name="arrivé"
                label="arrivé"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
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
                <v-date-picker
                  v-model="time"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                dense
                rounded
                outlined
                prepend-icon=""
                name="places"
                label="places"
                id="places1   "
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn success class="annonceBtn" @click="annoncer">annoncer</v-btn>
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
          username: this.$store.state.userProfil.username,

          type: this.tabs,
          depart: this.depart,
          arrive: this.arrive,
          time: this.time,
          description: this.description,
          nbrPlace: this.nbrPlace,
          bagage: this.switch1.toString(),
          idUserPoster: this.$store.state.userProfil._id,
        })
        .then(this.$router.push("/rechercheTrajet"));
    },
  },
};
</script>
<style scoped>
.all {
  padding: 0;
  margin: 0;
  margin: 0 auto;
  min-height: 100%;
}

.annonceBtn {
  width: 100%;
  background: #5b7ffc !important;
}
</style>
