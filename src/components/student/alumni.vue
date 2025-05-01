<template>
  <v-row style="background-color: #fff" class="-mt-top tw-w-full" no-gutters>
    <Headers
      :img="require('@/assets/icons/alumni-image.webp')"
      polygon
      title="alumnus"
      description="alumnusOfCommunicationArtsAndManagementInnovationNewsAndEvent"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
    />
    <v-row
      justify="space-between"
      no-gutters
      class="mt-12 !tw-mx-0 tw-w-full sm:!tw-mx-6"
    >
      <v-col cols="12" class="tw-mb-6 !tw-px-6">
        <h2
          class="tw-text-[22px] sm:tw-text-[36px] mb-0"
          style="font-weight: 600; line-height: 52px"
        >
          {{ $t("alumnusNewsAndEvent") }}
        </h2>
      </v-col>
      <v-col cols="12" md="6">
        <v-row
          no-gutters
          class="tw-px-6 tw-cursor-pointer"
          @click="alumniarticle()"
        >
          <v-col cols="12">
            <image-with-cover :src="items[0].img_url" />
            <!-- <image-with-cover :src="require('@/assets/icons/news_img.png')" /> -->
          </v-col>
          <v-col cols="12" class="mt-6">
            <v-chip style="background: #ddf2f0">{{ $t("article") }}</v-chip>
            <br />
            <br />
            <span
              style="font-weight: 600; font-size: 22px; line-height: 28px"
              >{{
                $store.state.lang == "th"
                  ? items[0].title_th
                  : items[0].title_en
              }}</span
            >
            <br />
            <br />
            <span
              style="font-weight: 400; font-size: 16px; line-height: 24px"
              >{{
                $store.state.lang == "th"
                  ? items[0].short_desc_th
                  : items[0].short_desc_en
              }}</span
            >
            <br />
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
              ><span style="margin-left: 4px; font-weight: 400; font-size: 14px"
                >{{ $t("publishedOn") }}: {{ convertDate(items[0].updatedAt) }}
              </span>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-6 hidden-md-and-up" />
      </v-col>
      <v-col cols="12" md="6">
        <v-row justify="center" no-gutters class="tw-px-6 tw-w-full">
          <v-col cols="11" v-for="i in items.slice(1, 4)" :key="i">
            <NewsItem
              @click="alumniarticle()"
              :secondary="true"
              :item="{
                id: i.id,
                type: 5,
                img_url: i.img_url,
                title_th: i.title_th,
                title_en: i.title_en,
                updatedAt: i.updatedAt,
              }"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-row no-gutters class="my-10" align="center" justify="center">
        <v-btn
          class="text-center"
          color="#2AB3A3"
          @click="gotoalumninews()"
          style="
            color: #fff;
            border-radius: 0px;
            padding: 12px 16px;
            width: 128px;
            height: 48px;
            font-size: 16px;
            box-shadow: none;
          "
          >{{ $t("more") }}</v-btn
        >
      </v-row>
    </v-col>
    <!-- <div> -->
    <Comments />
    <!-- </div> -->
    <v-row no-gutters class="mt-12 mb-6" justify="center">
      <v-col cols="11" class="tw-mb-8">
        <h2
          class="mb-0 tw-text-[22px] sm:tw-text-[24px] md:tw-text-[36px]"
          style="font-weight: 600"
        >
          {{ $t("successfulAlumnus") }}
        </h2>
      </v-col>
      <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
        <div
          class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
        >
          <AlumniCard
            v-for="i in alumniData"
            :key="i"
            class="!tw-px-3 tw-snap-start !tw-block"
            :class="i > 2 ? 'md:!tw-hidden lg:!tw-block' : ''"
            :fields="i.fields"
          />
        </div>
      </div>
    </v-row>
    <v-col cols="12">
      <v-row no-gutters class="mb-10" align="center" justify="center">
        <v-btn
          class="text-center"
          color="#2AB3A3"
          @click="gotoalumnilist()"
          style="
            color: #fff;
            border-radius: 0px;
            padding: 12px 16px;
            width: 128px;
            height: 48px;
            font-size: 16px;
            box-shadow: none;
          "
          >{{ $t("all") }}</v-btn
        >
      </v-row>
    </v-col>
    <v-row no-gutters justify="center">
      <Footers />
    </v-row>
  </v-row>
</template>
<script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import Comments from "@/components/CommentsAlumni.vue";
import Headers from "../Headers.vue";
import AlumniCard from "../AlumniCard.vue";
import ImageWithCover from "../ImageWithCover.vue";
import NewsItem from "../news/newsItem.vue";
import moment from "moment";

export default {
  components: {
    Footers,
    BigButton,
    Comments,
    Headers,
    AlumniCard,
    ImageWithCover,
    NewsItem,
  },
  data() {
    return {
      // ข่าวสารและกิจกรรมคณะ
      // ประกาศทั่วไป
      // ประกาศผล
      // สาระน่ารู้
      title: "ข่าวสารและกิจกรรมคณะ",
      newstype: "5",
      loading: false,
      showBanner: true,
      showNav: false,
      items: [
        { title: "แบบคำร้องทั่วไป (PDF)" },
        { title: "แบบคำร้องขอพักการศึกษา/รักษาสถานภาพการศึกษา (PDF)" },
        { title: "แบบคำร้องขอหนังสือไปหน่วยงานภายนอก (PDF)" },
        { title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)" },
      ],
      selectedtab: 1,
      selectedbtn: 1,
      downloads: [
        {
          text: "แบบคำร้องขอสอบประมวลความรู้ (แผน ข)",
        },
        {
          text: "ประกาศการสอบประมวลความรู้ ครั้งที่ 2/2565",
        },
        {
          text: "ประกาศ รายชื่อผู้มีสิทธิ์สอบประมวลความรู้ แผน ข. ภาคปกติ ครั้งที่ 2/2565",
        },
        {
          text: "ประกาศ รายชื่อผู้มีสิทธิ์สอบประมวลความรู้ แผน ข. ภาคพิเศษ ครั้งที่ 2/2565",
        },
      ],
      alumniData: [],
    };
  },
  created() {
    this.getAllAlumni();
    this.getAll();
    // window.addEventListener("scroll", this.handleScroll);
    // this.getAll();
  },
  watch: {},
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
    async getAllAlumni() {
      const auth = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer keyVuBPJGIwXXOQIU`,
        },
      };

      const response = await this.axios.get(
        `https://api.airtable.com/v0/appReDmebSKVQfkch/Student`,
        auth
      );

      // console.log("response alumni", response.data.records);
      // this.alumniData = response.data.records;
      const result = response.data.records.filter(
        (word) => word.fields.status == "Published"
      );

      for (let index = 0; index < 4; index++) {
        this.alumniData.push(result[index]);
      }
      // console.log("this.alumniData", this.alumniData);
    },
    gotoalumnilist() {
      this.$router.push("alumnilist");
    },
    gotoalumninews() {
      this.$router.push("alumninews");
    },
    alumniarticle() {
      // this.$router.push("alumniarticle");
      window.open(`alumniarticle`, "_blank");
    },
    goTo(val) {
      window.open(val);
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=${this.newstype}&status=เปิดใช้งาน`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotodetail(id) {
      this.$router.push(`/newsdetail?id=${id}&type=${this.newstype}`);
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      // this.pageYOffset = window.pageYOffset;
      // if (window.pageYOffset > 465) {
      //   // ซ่อน banner เปิด nav
      //   this.showBanner = false;
      //   this.showNav = true;
      // } else if (window.pageYOffset == 0) {
      //   this.showBanner = true;
      //   this.showNav = false;
      // }
    },
    // goload(val) {
    //   setTimeout(() => {
    //     // do function
    //     this.loading = true;
    //   }, 500);
    //   this.loading = false;
    // },
  },
};
</script>
<style lang="scss" scoped>
.texttitle {
  font-family: "IBMPlexSans";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #0d0e10;
}

.textdesc {
  font-family: "IBM Plex Sans Thai Looped";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #0d0e10;
}

.bg-img-1 {
  position: absolute;
  right: -19%;
  width: 700px;
  height: 808px;

  .v-image__image {
    background-position: center;
    background-size: 198px 220px;
    margin-top: -90px;
  }
}

.btnblock {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border: 0.5px solid #e2e2e2;
  background: #ffffff;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.btnblocknav {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  background: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.btnblockdark {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border: 0.5px solid #0d0e10;
  background: #0d0e10;
  color: #ffffff;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

* {
  box-sizing: border-box;
}

.btnblockgreen {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border: 0.5px solid #2ab3a3;
  background: #2ab3a3;
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

* {
  box-sizing: border-box;
}

.bg-image {
  /* The image used */

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;
  padding: 20px;
  text-align: center;
}

.fixed-bar {
  position: sticky;
  position: -webkit-sticky;
  /* for Safari */
  top: 4.3em;
  z-index: 2;
}

.selectedtab {
  padding: 20px 24px;
  gap: 16px;
  width: 212px;
  height: 68px;
  border-bottom: 3px solid #2ab3a3;
}

.notselectedtab {
  padding: 20px 24px;
  gap: 16px;
  width: 212px;
  height: 68px;
}

.selectedbtn {
  padding: 12px 18px;
  border: 1px solid #2ab3a3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
}

.notselectedbtn {
  padding: 12px 18px;
  background: #f6f6f6;
  border: 1px solid #eeeeee;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
}

.selectedspan {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #2ab3a3;
}

.notselectedspan {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #0d0e10;
}
</style>
<style lang="scss">
.cardbig {
  @media only screen and (min-width: 0px) {
    padding: 24px;
    gap: 24px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }

  @media only screen and (min-width: 414px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }

  @media only screen and (min-width: 1440px) {
    padding: 24px;
    gap: 24px;
    height: 84px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
}

.greenbutton {
  @media only screen and (min-width: 0px) {
    width: 100vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }

  @media only screen and (min-width: 414px) {
    width: 100vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }

  @media only screen and (min-width: 1440px) {
    width: 80vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
}
</style>