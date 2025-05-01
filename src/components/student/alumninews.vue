<template>
  <!-- <div style="margin-left: 48px; margin-right: 48px;"> -->
  <v-row style="background-color: #fff" class="-mt-top tw-w-full" no-gutters>
    <v-img
      src="@/assets/icons/alumni-image.webp"
      class="tw-relative tw-h-[334px] sm:tw-h-[432px]"
    >
      <div
        class="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-gradient-to-t sm:tw-bg-gradient-to-r tw-from-[#2FEAA8] tw-via-[#198BD7] tw-opacity-[0.97]"
      >
        <img
          src="@/assets/polygon/Network_header.png"
          class="tw-h-2/3 sm:tw-h-full -tw-mr-10 sm:tw-mr-0 tw-ml-auto"
        />
      </div>
      <v-row justify="center" no-gutters class="tw-w-full">
        <v-col
          cols="12"
          class="tw-absolute tw-text-center sm:tw-text-left !tw-px-20 sm:!tw-px-0 tw-top-1/2 sm:!tw-max-w-md sm:tw-top-1/3 sm:tw-left-16"
        >
          <!-- <v-chip outlined dark style="border: solid 1px">
          นักศึกษาปัจจุบัน
        </v-chip>
        <br /> -->
          <span
            class="tw-text-[36px] sm:tw-text-[57px]"
            style="color: white; font-weight: 600"
          >
            {{ $t("alumnus") }}
          </span>
          <br />
          <span
            class="tw-text-[16px] sm:tw-text-[22px]"
            style="color: white; font-weight: 600"
            >{{
              $t(
                "alumnusOfCommunicationArtsAndManagementInnovationNewsAndEvent"
              )
            }}
          </span>
        </v-col>
      </v-row>
    </v-img>
    <v-row align="center" justify="center" no-gutters class="mt-12 pt-12">
      <v-col cols="10" sm="8">
        <v-card
          elevation="0"
          v-for="i in items"
          class="mb-12"
          @click="gotoarticle(i.id)"
        >
          <v-row>
            <v-col cols="12" sm="8">
              <v-chip
                style="font-weight: 500; font-size: 14px"
                color="#69ebd3"
                small
                >{{ $t("alumnus") }}</v-chip
              >
              <br />
              <br />
              <span style="font-weight: 600; font-size: 22px; line-height: 32px"
                >{{ $store.state.lang == "th" ? i.title_th : i.title_en }}
              </span>
              <br />
              <div class="tw-inline-flex !tw-w-full sm:!tw-w-fit tw-mr-5">
                <img
                  src="../../assets/icons/user-avatar.png"
                  max-width="20px"
                  max-height="20px"
                />
                <span
                  style="margin-left: 10px; font-weight: 400; font-size: 14px"
                >
                  {{ $t("publishedBy") }} Admin</span
                >
              </div>
              <div class="tw-inline-flex !tw-w-full sm:!tw-w-fit">
                <v-icon color="#2AB3A3">mdi-calendar</v-icon
                ><span
                  style="margin-left: 4px; font-weight: 400; font-size: 14px"
                >
                  {{ $t("publishedOn") }} : {{ convertDate(i.updatedAt) }}</span
                >
              </div>
            </v-col>
            <v-col cols="0" sm="4" class="sm:tw-block tw-hidden">
              <image-with-cover :src="require('@/assets/icons/news_img.png')" />
              <!-- <v-img src="@/assets/icons/CoverV2-5.png"></v-img> -->
            </v-col>
          </v-row>
          <br />
          <br />
          <v-row>
            <v-divider></v-divider>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <Footers />
    </v-row>
  </v-row>
</template>
<script>
import Footers from "@/components/Footers.vue";
import ImageWithCover from "../ImageWithCover.vue";
import moment from "moment";

export default {
  components: { Footers, ImageWithCover },
  data: () => ({
    selected: 1,
    items: [
      { title: "ข่าวและกิจกรรมคณะ" },
      { title: "ประกาศทั่วไป" },
      { title: "ประกาศผล" },
    ],
    e6: 1,
  }),
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=5&status=เปิดใช้งาน`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotoarticle(id) {
      // console.log("id", id);
      // this.$router.push("alumniarticle");
      window.open(`alumninews/${id}`, "_blank");
    },
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