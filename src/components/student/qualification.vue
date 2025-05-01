<template>
  <!-- <v-row style="background-color: #fff"> -->
  <!-- <v-img
      src="@/assets/icons/New-Banner.png"
      v-if="showBanner"
      style="margin-top: -54px"
    >
      <v-row justify="center">
        <v-col cols="10" style="position: absolute; bottom: 10%; left: 10%">
          <span style="color: white; font-weight: 600; font-size: 57px">
            สอบประมวลความรู้
          </span>
          <br />
          <span style="color: white; font-weight: 400; font-size: 22px"
            >ระดับปริญญาโท</span
          >
        </v-col>
      </v-row>
    </v-img> -->
  <v-row style="background-color: #fff" class="-mt-top" no-gutters>
    <Headers
      :img="require('@/assets/icons/student-exam.jpg')"
      polygon
      title="qualificationExam"
      description="doctoralDegreeOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("currentStudent") }}
        </v-chip>
      </template>
    </Headers>
    <v-row justify="center" class="mt-12 ma-10 tw-w-[100%] tw-relative">
      <!-- <img src="/scholarship/top-left-polygon.png" class="tw-absolute tw-w-[30%] tw-max-w-[360px] tw-left-0 tw-top-[150px]" /> -->
      <img
        src="/scholarship/bottom-right-polygon.png"
        class="tw-absolute tw-w-[40%] tw-max-w-[500px] tw-right-0 tw-bottom-[-250px]"
      />
      <v-col cols="12" sm="12" md="7" class="tw-relative">
        <v-row v-if="item">
          <v-col cols="12">
            <span style="font-weight: 600; font-size: 28px; line-height: 42px">
              {{ $store.state.lang == "th" ? item.title_th : item.title_en }}
            </span>
          </v-col>
          <v-col cols="12" class="mt-6">
            <span class="texttitle">{{ $t("admissions") }}</span>
          </v-col>
          <v-col cols="12">
            <span class="textdesc">
              <div
                v-html="
                  $store.state.lang == 'th'
                    ? item.registation_th
                    : item.registation_en
                "
              ></div>
            </span>
          </v-col>
          <v-col cols="12" class="mt-6">
            <span class="texttitle">{{ $t("payment") }}</span>
          </v-col>
          <v-col cols="12">
            <span class="textdesc">
              <div
                v-html="
                  $store.state.lang == 'th'
                    ? item.pay_method_th
                    : item.pay_method_en
                "
              ></div>
            </span>
          </v-col>
          <v-col cols="12" class="mt-6">
            <span class="texttitle">{{ $t("dateAndTimeTestLocation") }}</span>
          </v-col>
          <v-col cols="12">
            <span class="textdesc">
              <div
                v-html="
                  $store.state.lang == 'th'
                    ? item.day_place_th
                    : item.day_place_en
                "
              ></div>
            </span>
          </v-col>
          <v-col cols="12">
            <span class="texttitle"
              >{{ $t("announcementOfTestResults") }}
            </span>
          </v-col>
          <v-col cols="12">
            <span class="textdesc">
              <div
                v-html="
                  $store.state.lang == 'th'
                    ? item.announce_result_th
                    : item.announce_result_en
                "
              ></div>
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px] tw-relative"
      >
        <v-row align="right" justify="start" v-if="downloads">
          <!-- <br/> -->
          <!-- <span class="texttitle mb-4" style="margin-left: 10px;">{{ $t("documentDownload") }}</span> -->
          <span
            style="font-weight: 600; font-size: 28px; line-height: 42px"
            class="mt-2"
            >{{ $t("documentDownload") }}</span
          >
          <v-col cols="12" v-for="i in downloads">
            <v-row style="cursor: pointer" @click="onClickView(i.path)">
              <v-col cols="1" md="1">
                <v-icon color="#2ab3a3">mdi-file-document-outline </v-icon>
              </v-col>
              <v-col cols="11" md="11">
                <span
                  style="
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #2ab3a3;
                  "
                >
                  {{ i.name }}
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- <img src="/about/overview-polygon.png" class="tw-absolute tw-right-[20px] tw-top-[280px] tw-contain tw-w-[70%]"/> -->
      </v-col>
    </v-row>
    <!-- <v-col cols="12">
      <v-row class="my-10" align="center" justify="center">
        <v-btn
          class="text-center"
          color="#ddf2f0"
          style="
            color: #2ab3a3;
            border-radius: 0px;
            padding: 12px 16px;
            width: 128px;
            height: 48px;
            font-size: 16px;
            box-shadow: none;
          "
          >แสดงเพิ่ม</v-btn
        >
      </v-row>
    </v-col> -->
    <!-- <v-row justify="center"> -->
    <Footers style="z-index: 1" />
    <!-- </v-row> -->
  </v-row>
</template>
<script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import Headers from "@/components/Headers.vue";
export default {
  components: { Footers, BigButton, Headers },
  data() {
    return {
      // ข่าวสารและกิจกรรมคณะ
      // ประกาศทั่วไป
      // ประกาศผล
      // สาระน่ารู้
      title: "ข่าวสารและกิจกรรมคณะ",
      newstype: "",
      loading: false,
      showBanner: true,
      showNav: false,
      items: [
        // { title: "แบบคำร้องทั่วไป (PDF)" },
        // { title: "แบบคำร้องขอพักการศึกษา/รักษาสถานภาพการศึกษา (PDF)" },
        // { title: "แบบคำร้องขอหนังสือไปหน่วยงานภายนอก (PDF)" },
        // { title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)" },
      ],
      selectedtab: 1,
      selectedbtn: 1,
      downloads: [
        // {
        //   text: "แบบคำร้องขอสอบประมวลความรู้ (แผน ข)",
        // },
        // {
        //   text: "ประกาศการสอบประมวลความรู้ ครั้งที่ 2/2565",
        // },
        // {
        //   text: "ประกาศ รายชื่อผู้มีสิทธิ์สอบประมวลความรู้ แผน ข. ภาคปกติ ครั้งที่ 2/2565",
        // },
        // {
        //   text: "ประกาศ รายชื่อผู้มีสิทธิ์สอบประมวลความรู้ แผน ข. ภาคพิเศษ ครั้งที่ 2/2565",
        // },
      ],
      item: null,
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  methods: {
    onClickView(path) {
      window.open(path, "_blank");
    },
    goTo(val) {
      window.open(val);
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/knowledgeTestAndQualificationExams?id=2`
      );

      this.item = response.data.data[0];
      this.downloads = response.data.data[0].filesAnnounces;
      // console.log("items", this.item);
    },
    gotodetail(id) {
      this.$router.push(`/newsdetail?id=${id}&type=${this.newstype}`);
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      if (window.pageYOffset > 465) {
        // ซ่อน banner เปิด nav
        this.showBanner = false;
        this.showNav = true;
      } else if (window.pageYOffset == 0) {
        this.showBanner = true;
        this.showNav = false;
      }
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