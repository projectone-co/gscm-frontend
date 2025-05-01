<template>
  <v-row
    class="mt-12"
    justify="center"
    no-gutters
    style="background-color: #eefbfa"
  >
    <v-col
      cols="11"
      sm="12"
      md="12"
      style="text-align: -webkit-center"
      class="mt-6 pt-6"
    >
      <h2 class="fontbig mb-0" style="font-weight: 600">
        {{ $t("commentsFromAlumnus") }}
      </h2>
    </v-col>
    <v-col cols="12">
      <v-carousel
        v-model="model"
        hide-delimiter-background
        delimiter-icon="mdi-brightness-1"
        height="auto"
        class="mb-10"
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="ml-0 !tw-hidden sm:!tw-flex"
            color="transparent"
            dark
            style="float: left; box-shadow: none; width: 48px; height: 48px"
          >
            <v-icon color="#2AB3A3">mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="mr-0 !tw-hidden sm:!tw-flex"
            color="transparent"
            dark
            style="float: left; box-shadow: none; width: 48px; height: 48px"
          >
            <v-icon color="#2AB3A3">mdi-arrow-right</v-icon>
          </v-btn>
        </template>
        <v-carousel-item v-for="i in items" :key="`comments_${i.id}`">
          <v-row align="center" justify="center" class="pb-6" no-gutters>
            <v-card
              style="background-color: white"
              max-height="auto"
              flat
              class="tw-p-4 sm:tw-p-12 tw-w-[80%] margincard mb-12 !tw-border-[#E2E2E2]"
            >
              <v-row align="start" justify="center" class="pt-0">
                <v-col cols="12" md="4" sm="4" class="mx-auto my-auto"
                  ><v-row class="pa-2" no-gutters>
                    <v-col cols="12">
                      <v-img
                        src="@/assets/icons/commu.png"
                        width="48px"
                        height="48px"
                        class="tw-mb-5"
                      ></v-img>
                    </v-col>
                    <v-col cols="12">
                      <span
                        v-if="i.level"
                        style="
                          font-weight: 400;
                          font-size: 14px;
                          color: #545454;
                        "
                        >{{ $t("student") }} {{ i.level.name_th }}
                        {{ $t("generation") }}
                        {{ i.generation_th }}
                      </span>
                    </v-col>
                    <v-col cols="12">
                      <span
                        v-if="i.major"
                        style="
                          font-weight: 500;
                          font-size: 16px;
                          line-height: 24px;
                          color: #0d0e10;
                        "
                        >{{ $t("branch") }}{{ i.major.name_th }}</span
                      >
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="11" md="8" sm="8"
                  ><v-row>
                    <v-col cols="12">
                      <span
                        v-html="i.comment_desc_th"
                        class="line-clamp tw-text-[22px] sm:tw-text-[24px] md:tw-text-[28px]"
                        style="--line-clamp: 6; color: black; font-weight: 600"
                      ></span>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row align="end" justify="center" class="mt-0">
                <v-col cols="12" md="4" sm="4">
                  <v-col
                    cols="12"
                    class="tw-cursor-pointer"
                    :class="i.major ? '' : 'tw-hidden'"
                  >
                    <span
                      style="color: #2ab3a3; font-weight: 500; font-size: 14px"
                      >{{ $t("courseDetail")
                      }}<v-icon style="color: #2ab3a3"
                        >mdi-arrow-right</v-icon
                      ></span
                    >
                  </v-col>
                </v-col>
                <v-col cols="11" md="8" sm="8">
                  <v-row style="position: inline" no-gutters>
                    <v-col cols="2" md="1" sm="1" class="pr-6" v-if="i.image_url">
                      <v-avatar>
                        <v-img
                          :src="i.image_url"
                          width="48px"
                          height="48px"
                        ></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col
                      cols="8"
                      md="11"
                      sm="11"
                    >
                      <span
                        style="
                          color: black;
                          font-weight: 500;
                          font-size: 16px;
                          line-height: 24px;
                        "
                        >{{ i.comment_from_th }}</span
                      >
                      <br />
                      <span
                        style="
                          color: black;
                          font-weight: 400;
                          font-size: 14px;
                          line-height: 20px;
                          color: #545454;
                        "
                        >{{ i.comment_position_th }}</span
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    items: [],

    // items: [
    //   {
    //     comment_desc_th:
    //       "<i>“มันคือโอกาสที่เปิดให้เราได้ร่วมทำงานจริง<br/>กับนักวิชาการที่มีชื่อเสียงซึ่งโอกาสเหล่านี้<br/>หาไม่ได้ง่ายๆจากที่อื่นมีความเป็นครีเอทีฟ”</i>",
    //     comment_desc_en:
    //       "“มันคือโอกาสที่เปิดให้เราได้ร่วมทำงานจริง<br/>กับนักวิชาการที่มีชื่อเสียงซึ่งโอกาสเหล่านี้<br/>หาไม่ได้ง่ายๆจากที่อื่นมีความเป็นครีเอทีฟ”",
    //     comment_from_th: "อนุรักษ์ จันทร์ดำ",
    //     comment_from_en: "อนุรักษ์ จันทร์ดำ",
    //     comment_position_th: "Project Maneger Bank of Krungsri",
    //     comment_position_en: "Project Maneger Bank of Krungsri",
    //   },
    //   {
    //     comment_desc_th:
    //       "<i>“มันคือโอกาสที่เปิดให้เราได้ร่วมทำงานจริง<br/>กับนักวิชาการที่มีชื่อเสียงซึ่งโอกาสเหล่านี้<br/>หาไม่ได้ง่ายๆจากที่อื่นมีความเป็นครีเอทีฟ”</i>",
    //     comment_desc_en:
    //       "“มันคือโอกาสที่เปิดให้เราได้ร่วมทำงานจริง<br/>กับนักวิชาการที่มีชื่อเสียงซึ่งโอกาสเหล่านี้<br/>หาไม่ได้ง่ายๆจากที่อื่นมีความเป็นครีเอทีฟ”",
    //     comment_from_th: "อนุรักษ์ จันทร์ดำ",
    //     comment_from_en: "อนุรักษ์ จันทร์ดำ",
    //     comment_position_th: "Project Maneger Bank of Krungsri",
    //     comment_position_en: "Project Maneger Bank of Krungsri",
    //   },
    // ],
    user: "",
  }),

  created() {
    this.getAll();
  },

  methods: {
    async getAll() {
      const auth = {
        headers: { Authorization: `Bearer ${this.user.token}` },
      };
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/studentComments?type=2`,
        auth
      );
      // console.log("getAllStudentComment", response.data.data);
      this.items = response.data.data;
    },
  },
};
</script>
<style lang="scss">
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 960px) {
    font-size: 36px;
  }
}
.margincard {
  @media only screen and (min-width: 0px) {
    margin-top: 52px;
  }
  @media only screen and (min-width: 414px) {
    margin-top: 52px;
  }
  @media only screen and (min-width: 960px) {
    margin-top: 52px;
  }
}

.v-window__next,
.v-window__prev {
  @media only screen and (min-width: 600px) {
    border-radius: 0px !important;
    background: none !important;
    border: 2px solid #2ab3a3;
  }
}
.v-carousel__controls__item {
  color: #2ab3a3 !important;
}
</style>
