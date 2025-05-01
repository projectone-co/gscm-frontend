<template>
  <!-- <div style="margin-left: 48px; margin-right: 48px;"> -->
  <div class="test-form-width tw-overflow-y-hidden" style="min-height: 400px">
    <!-- <v-row
      align="start"
      class="mt-12 ml-12 mr-12"
      style="background-image: url('@/assets/icons/Pattern03.png')"
    > -->
    <div style="position: relative">
      <v-row
        align="start"
        style="background-image: url('@/assets/icons/Pattern03.png')"
        class="tw-relative tw-z-10 !tw-m-4 md:!tw-m-12"
      >
        <v-col cols="12" sm="3" md="1" class="mb-6">
          <v-row
            class="py-1"
            :style="
              selected == 1
                ? 'color: #2ab3a3; border-left: solid 4px;'
                : 'color: #E2E2E2; border-left: solid 4px;'
            "
          >
            <h2
              class="ml-2 z-index-fix-font mb-0"
              :style="
                selected == 1
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="(selected = 1), getAll()"
            >
              {{ $t("facultyNewsAndEvent") }}
            </h2>
          </v-row>

          <v-row
            class="py-1"
            :style="
              selected == 2
                ? 'color: #2ab3a3; border-left: solid 4px;'
                : 'color: #E2E2E2; border-left: solid 4px;'
            "
          >
            <h2
              class="ml-2 mb-0"
              :style="
                selected == 2
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="(selected = 2), getAll()"
            >
              {{ $t("generalNotice") }}
            </h2>
          </v-row>
          <v-row
            class="py-1"
            :style="
              selected == 3
                ? 'color: #2ab3a3; border-left: solid 4px;cursor:pointer'
                : 'color: #E2E2E2; border-left: solid 4px;cursor:pointer'
            "
          >
            <h2
              class="ml-2 mb-0"
              :style="
                selected == 3
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="(selected = 3), getAll()"
            >
              {{ $t("registerResult") }}
            </h2>
          </v-row>
          <v-row
            class="py-1"
            :style="
              selected == 4
                ? 'color: #2ab3a3; border-left: solid 4px;cursor:pointer'
                : 'color: #E2E2E2; border-left: solid 4px;cursor:pointer'
            "
          >
            <h2
              class="ml-2 mb-0"
              :style="
                selected == 4
                  ? 'font-weight: 500; font-size: 16px; color: #2ab3a3;cursor:pointer'
                  : 'font-weight: 500; font-size: 16px; color: #000;cursor:pointer'
              "
              @click="(selected = 4), getAll()"
            >
              {{ $t("goodToKnow") }}
            </h2>
          </v-row>
        </v-col>
        <v-col sm="9" md="11">
          <v-row>
            <v-col cols="12" md="4" v-if="selected == 1">
              <v-img
                src="@/assets/icons/News.png"
                width="56px"
                height="46px"
                class="mb-6"
              ></v-img>
              <span
                class="fontbig"
                style="
                  font-weight: 600;
                  color: #2ab3a3;
                  font-size: 42px;
                  line-height: 60px;
                "
                >{{ $t("onlyNewsPage")
                }}<span style="color: black"> {{ $t("onlyNewsPage2") }}</span>
                <span style="color: black; z-index: 10">{{
                  $t("onlyNewsPage3")
                }}</span></span
              >
              <br />
              <v-btn
                class="mt-6"
                style="
                  background: #ddf2f0;
                  border-radius: 0px;
                  box-shadow: none;
                "
                router-link
                to="/news/faculty"
                ><span
                  style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                  >{{ $t("allNews") }}</span
                ></v-btn
              >
            </v-col>
            <v-col cols="12" sm="9" md="4" v-if="selected == 2">
              <v-img
                src="@/assets/icons/News.png"
                width="56px"
                height="46px"
                class="mb-6"
              ></v-img>
              <span
                class="fontbig"
                style="font-weight: 600; color: #2ab3a3; font-size: 42px"
                >{{ $t("onlyNewsPage4") }}
                <span style="color: black; z-index: 10">{{
                  $t("onlyNewsPage5")
                }}</span></span
              >
              <br />
              <v-btn
                class="mt-6"
                style="
                  background: #ddf2f0;
                  border-radius: 0px;
                  box-shadow: none;
                "
                router-link
                to="/news/general"
                ><span
                  style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                  >{{ $t("allNews") }}</span
                ></v-btn
              >
            </v-col>
            <v-col cols="12" sm="9" md="4" v-if="selected == 3">
              <v-img
                src="@/assets/icons/News.png"
                width="56px"
                height="46px"
                class="mb-6"
              ></v-img>
              <span
                class="fontbig"
                style="font-weight: 600; color: #2ab3a3; font-size: 42px"
                >{{ $t("onlyNewsPage6") }}
                <span style="color: black; z-index: 10">{{
                  $t("onlyNewsPage5")
                }}</span></span
              >
              <br />
              <v-btn
                class="mt-6"
                style="
                  background: #ddf2f0;
                  border-radius: 0px;
                  box-shadow: none;
                "
                router-link
                to="/news/admission-result"
                ><span
                  style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                  >{{ $t("allNews") }}</span
                ></v-btn
              >
            </v-col>
            <v-col cols="12" sm="9" md="4" v-if="selected == 4">
              <v-img
                src="@/assets/icons/News.png"
                width="56px"
                height="46px"
                class="mb-6"
              ></v-img>
              <span
                class="fontbig"
                style="font-weight: 600; color: #2ab3a3; font-size: 42px"
                >{{ $t("onlyNewsPage7") }}
                <span style="color: black; z-index: 10">{{
                  $t("onlyNewsPage8")
                }}</span></span
              >
              <br />
              <v-btn
                class="mt-6"
                style="
                  background: #ddf2f0;
                  border-radius: 0px;
                  box-shadow: none;
                "
                router-link
                to="/news/interesting"
                ><span
                  style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                  >{{ $t("allNews") }}</span
                ></v-btn
              >
            </v-col>
            <v-col cols="12" sm="12" md="8" class="!tw-p-0">
              <v-card
                v-for="i in items"
                class="pa-4"
                flat
                :key="`news_${i.id}`"
              >
                <!-- v-for="i in selected == 1
                  ? news1
                  : selected == 2
                  ? news2
                  : selected == 3
                  ? news3
                  : selected == 4
                  ? news4
                  : []" -->
                <v-row class="tw-cursor-pointer" @click="gotodetail(i, i.type)">
                  <v-col
                    cols="12"
                    md="9"
                    sm="9"
                    class="tw-flex tw-flex-col tw-justify-between"
                  >
                    <span style="font-weight: 600; font-size: 18px">{{
                      $store.state.lang == "th"
                        ? i.title_th
                        : i.title_en
                        ? i.title_en
                        : i.title_th
                    }}</span>

                    <div class="tw-w-full">
                      <v-icon color="#2AB3A3">mdi-calendar</v-icon
                      ><span
                        style="
                          margin-left: 4px;
                          font-weight: 400;
                          font-size: 14px;
                        "
                      >
                        <!-- 12 {{ $t("jan") }} {{ $t("lastYear") }} -->
                        {{ $t("publishedOn") }} :
                        {{ convertDate(i.updatedAt) }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="2" sm="3" md="3" class="hidden-xs-only pa-0">
                    <div class="tw-flex tw-justify-center tw-items-center">
                      <image-with-cover
                        class="!tw-aspect-square !tw-w-[100px]"
                        :src="
                          i.img_url
                            ? i.img_url
                            : require('@/assets/default_image.jpeg')
                        "
                      />
                    </div>
                  </v-col>
                </v-row>
                <v-divider class="mt-6" />
              </v-card>
              <v-btn
                style="
                  background: #ddf2f0;
                  border-radius: 0px;
                  box-shadow: none;
                "
                block
                router-link
                to="/news/interesting"
                ><span
                  style="font-weight: 500; font-size: 16px; color: #2ab3a3"
                  >{{ $t("allNews") }}</span
                ></v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div
        class="!tw-absolute tw-hidden sm:tw-block tw-w-1/2 tw-left-0 tw-bottom-0"
      >
        <v-img
          class="z-index-far-back"
          src="@/assets/polygon/Network04.png"
          style="position: relative; object-fit: cover"
        ></v-img>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import ImageWithCover from "./ImageWithCover.vue";
export default {
  components: { ImageWithCover },
  data: () => ({
    selected: 1,
    items: [
      { title: "ข่าวและกิจกรรมคณะ" },
      { title: "ประกาศทั่วไป" },
      { title: "ประกาศผล" },
      { title: "สาระน่ารู้" },
    ],
    e6: 1,
    news1: [],
    news2: [],
    news3: [],
    news4: [],
    mapTypes: {
      faculty: 1,
      general: 2,
      "admission-result": 3,
      interesting: 4,
    },
  }),
  created() {
    this.getAll();
  },
  methods: {
    convertDate(val) {
      let monthTH = [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
      ];
      const d = new Date(val);
      // updatedAt

      return moment(val).format("DD " + monthTH[d.getMonth()] + " YYYY");
    },
    convertToYear(date) {
      return date ? moment(date).format("YYYY") * 1 + 543 : "";
    },
    async getAll() {
      // const auth = {
      //   headers: { Authorization: `Bearer ${this.user.token}` },
      // };
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=${this.selected}&status=เปิดใช้งาน`

        // 'http://localhost:8081/types/'
      );
      // console.log("getAll News", response.data.data);
      this.items = response.data.data;
      // this.imgUrl = response.data.data.imgUrl;
      // for (let i in this.items) {
      //   this.items[i].sortindex = parseInt(i) + 1;
      // }
      // this.news1 = this.items.filter((x) => x.type == "1" || 1);
      // this.news2 = this.items.filter((x) => x.type == "2" || 1);
      // this.news3 = this.items.filter((x) => x.type == "3" || 1);
      // this.news4 = this.items.filter((x) => x.type == "4" || 1);
    },
    gotodetail(item, type) {
      if (!type) {
        type = 1;
      }
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.value == type).param;
      // this.$router.push(`/newsdetail?id=${id}&type=${type}`);
      // window.open(`/news/${pathParam}/${id}`, "_blank");
      // console.log("item", item);

      let id = item.id;
      let title_en = item.title_en;
      let modifiedUrl = title_en.replace(/ /g, "_");

      window.open(`/news/${pathParam}/${modifiedUrl}`, "_blank");
    },
  },
};
</script>
<style lang="scss">
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 42px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 42px;
  }
}
</style>