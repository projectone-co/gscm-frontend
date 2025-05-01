<template>
  <v-form class="-mt-top">
    <div class="tw-flex tw-items-center tw-justify-center tw-flex-wrap">
      <BeforeBanner />
    </div>
    <div class="tw-flex tw-items-center tw-justify-center tw-flex-wrap">
      <Banners />
    </div>
    <div class="tw-flex tw-justify-center tw-flex-wrap">
      <Part2 />
    </div>
    <v-row
      no-gutters
      justify="center"
      class="mt-12 !tw-mb-6"
      style="background-color: #1c7bbc"
    >
      <StudentAmounts />
    </v-row>
    <v-row no-gutters justify="center">
      <News />
    </v-row>
    <!-- <v-row justify="center" class="mt-10"> -->
    <div>
      <Comments />
    </div>
    <!-- </v-row> -->
    <!-- <v-row justify="center"> -->
    <div>
      <Activities />
    </div>
    <!-- </v-row> -->
    <v-row
      no-gutters
      justify="center"
      style="margin-top: -68px; background-color: #1c7bbc; z-index: 1"
    >
      <Suggests />
    </v-row>
    <v-col cols="12">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="11">
          <v-img
            src="@/assets/polygon/Network05small.png"
            style="position: absolute; z-index: 0; left: 0px; margin-top: -20px"
          ></v-img>
          <BigButton style="z-index: 1" />
          <v-img
            src="@/assets/polygon/Network03small.png"
            style="position: absolute; z-index: 0; right: 0px; margin-top: 80px"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row no-gutters align="center" justify="center">
        <p
          style="
            padding: 0px;
            font-size: 20px;
            color: rgb(34 160 228);
            width: 80%;
            text-align: center;
          "
        >
          GSCM NIDA. Where Innovation Drives Communication.
        </p>
      </v-row>
    </v-col>

    <v-row no-gutters justify="center"> <Footers style="z-index: 1" /> </v-row>
    <v-dialog
      v-model="menuwelcome"
      max-width="750px"
      elevation="0"
      v-if="welcomepopupdata.img_url"
    >
      <!-- <v-card> -->
      <v-btn
        fab
        small
        @click="menuwelcome = false"
        style="
          float: right;
          position: absolute;
          z-index: 99;
          right: 15px;
          top: 15px;
        "
        ><v-icon>mdi-window-close</v-icon></v-btn
      >
      <v-img
        :src="welcomepopupdata.img_url"
        @click="goTo(welcomepopupdata.title_th)"
      ></v-img>
      <!-- </v-card> -->
    </v-dialog>
  </v-form>
</template>
<script>
import Banners from "@/components/Banners.vue";
import Part2 from "@/components/Part2.vue";
import StudentAmounts from "@/components/StudentAmounts.vue";
import News from "@/components/News.vue";
import Comments from "@/components/Comments.vue";
import Activities from "@/components/Activities.vue";
import Suggests from "@/components/Suggests.vue";
import BigButton from "@/components/BigButton.vue";
import Footers from "@/components/Footers.vue";
import BeforeBanner from "../components/BeforeBanner.vue";
export default {
  components: {
    Banners,
    Part2,
    StudentAmounts,
    News,
    Comments,
    Activities,
    Suggests,
    BigButton,
    Footers,
    BeforeBanner,
  },
  data: () => ({
    welcomepopupdata: [],
    menuwelcome: false,
  }),
  created() {
    this.getWelcomePopup();

    // console.log("this.$vuetify.breakpoint;",this.$vuetify.breakpoint);
  },
  methods: {
    async getWelcomePopup() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/welcomePops`
      );
      // console.log("responsewelcomepopup", response.data.data[0]);
      this.welcomepopupdata = response.data.data[0];
      if (this.welcomepopupdata.img_url) {
        this.menuwelcome = true;
      }
    },
    goTo(val) {
      window.open(val, "_blank");
    },
  },
};
</script>