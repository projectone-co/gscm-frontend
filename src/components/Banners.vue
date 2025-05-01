<template>
  <div class="flex !tw-bg-black tw-items-center tw-justify-center tw-flex-wrap">
    <!-- <v-row style="display: block" no-gutters> -->
    <!-- fill-height -->
    <!-- <h1 style="color: #ffffff00; position: absolute; pointer-events: none">
      ยินดีต้อนรับสู่ คณะนิเทศศาสตร์และนวัตกรรมการจัดการ
      สถาบันบัณฑิตพัฒนบริหารศาสตร์ (NIDA)
    </h1> -->
    <v-carousel
      v-model="model"
      height="100%"
      hide-delimiters
      :show-arrows="false"
      style="padding-left: 0px; padding-right: 0px"
    >
      <div class="Homepage-Wrapper">
        <v-carousel-item
          v-for="(banner, i) in banners"
          :key="`banner_${i}`"
          style="background-image: url(banner.src)"
          class="!tw-h-[300px] sm:!tw-h-[630px]"
        >
          <img class="Homepage-Banner" :src="banner.src" alt="Snow" />
          <div class="Banner-Gradient tw-opacity-75 sm:tw-opacity-100" />

          <div class="tw-flex tw-flex-wrap">
            <v-col cols="12" md="6">
              <div
                class="bottom-left hidden-xs-only tw-bottom-16 md:tw-bottom-2"
                v-if="i == 0"
                style="margin-left: 50px; margin-bottom: 64px"
              >
                <h1
                  style="
                    font-family: 'IBM Plex Sans Thai';
                    font-style: normal;
                    color: white;
                    font-weight: 400;
                    line-height: 32px;
                    margin-bottom: 10px;
                  "
                  class="tw-text-[22px]"
                >
                  {{ $t("welcome") }} <br />
                  <span
                    style="
                      color: white;
                      font-family: 'IBM Plex Sans Thai';
                      font-style: normal;
                      font-weight: 600;
                      margin-bottom: 50px;
                      display: block;
                    "
                    class="tw-text-[57px] tw-leading-[65px]"
                  >
                    {{ $t("facultyOfCommunicationArts") }} <br />{{
                      $t("andManagementInnovation")
                    }}
                  </span>
                  
                  <span style="
                  color: white">{{ $t("nida") }}</span>
                  </h1>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="tw-absolute tw-bottom-2 tw-m-3 !tw-w-fit tw-flex tw-left-1/2 -tw-translate-x-1/2 sm:tw-translate-x-0 sm:tw-left-10 sm:tw-bottom-4 md:tw-left-auto md:tw-right-10 md:tw-bottom-12"
            >
              <!-- <div style="margin-top: -50px;"> -->
              <v-btn
                class="mr-4"
                color="#2AB3A3"
                dark
                style="
                  border-radius: 0px;
                  float: left;
                  box-shadow: none;
                  background-color: rgba(255, 255, 255, 0.2);
                  width: 48px;
                  height: 48px;
                "
                @click="previous()"
                ><v-icon>mdi-arrow-left</v-icon></v-btn
              >
              <v-btn
                class="mr-4"
                color="#2AB3A3"
                dark
                style="
                  border-radius: 0px;
                  float: left;
                  box-shadow: none;
                  background-color: rgba(255, 255, 255, 0.2);
                  width: 48px;
                  height: 48px;
                "
                @click="next()"
                ><v-icon>mdi-arrow-right</v-icon></v-btn
              >
              <!-- </div> -->
            </v-col>
          </div>
        </v-carousel-item>
      </div>
    </v-carousel>

    <!-- </v-row> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    banners: [
      {
        src: require("@/assets/banner1.png"),
      },
    ],
  }),

  created() {
    this.getAll();
  },

  methods: {
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/banners`
      );
      // console.log("banners", response.data.data);
      this.items = response.data.data;
      this.items.forEach((element) => {
        this.banners.push({ id: element.id, src: element.img_url });
      });
    },
    previous() {
      if(this.model == 0){
        this.model = this.items.length;
      }else{
        this.model--;
      }
      // console.log(this.model);
    },
    next() {
      this.model++;
      // console.log(this.model);
    },
  },
};
</script>
<style>
.responsive {
  width: 100%;
  height: auto;
}

.container {
  position: relative;
  /* text-align: center; */
  color: white;
  /* height: 1000px; */
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  left: 16px;
  margin: 10px;
}
</style>
<style lang="scss">
@import "tiny-slider/src/tiny-slider";
</style>