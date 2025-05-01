<template>
  <!-- <v-form style="background-color: #fff"> -->
  <!-- <v-row> -->
  <!-- <v-img
      src="@/assets/icons/New-Banner.png"
      v-if="showBanner"
      style="margin-top: -64px"
    >
      <v-row justify="center">
        <v-col
          cols="10"
          style="position: absolute; bottom: 10%; left: 10%"
          class="totextcenter"
        >
          <v-chip outlined dark style="border: solid 1px">
            นักศึกษาปัจจุบัน
          </v-chip>
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            ผลงานนักศึกษา
          </span>
          <br />
          <span style="color: white; font-weight: 400; font-size: 22px"
            >Infographic</span
          >
        </v-col>
      </v-row>
    </v-img> -->
  <!-- </v-row> -->
  <!-- <v-row style="background-color: #fff" class="-mt-top" no-gutters> -->
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/research.jpg')"
      polygon
      title="studentContribution"
      description="facultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("currentStudent") }}
        </v-chip>
      </template>
    </Headers>

    <!-- //body -->
    <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
      <div
        class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
      >
        <div v-for="i in items" :key="i.id">
          <v-card elevation="0" class="ma-4">
            <v-row align="center" justify="center">
              <v-img
                :src="i.image_url_en"
                style="
                  filter: blur(4px) brightness(0.5);
                  z-index: 0;
                  background: rgba(13, 14, 16, 0.2);
                "
                @click="opendialogdetail(i.image_url_en)"
              >
              </v-img>
              <v-img
                :src="i.image_url_en"
                style="position: absolute; z-index: 2; top: 8%"
                max-width="80%"
                max-height="80%"
                @click="opendialogdetail(i.image_url_en)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <span
                style="
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 36px;
                  color: #0d0e10;
                  margin-top: 16px;
                "
              >
                {{
                  $store.state.lang == "th"
                    ? i.name_th
                    : i.name_en
                    ? i.name_en
                    : i.name_th
                }}
                <!-- {{ $t("onlyStudentworkPage") }} -->
              </span>
              <br />
              <v-col cols="12" class="pa-0 pt-4 pb-2">
                <span
                  ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
                  {{
                    $store.state.lang == "th"
                      ? i.creator_th
                      : i.creator_en
                      ? i.creator_en
                      : i.creator_th
                  }}
                </span>
              </v-col>
              <!-- <v-col cols="12" class="pa-0">
              <span><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
                {{i.release_date}}
              </span>
            </v-col> -->
              <v-col cols="12" class="pa-0 pt-2">
                <!-- <span style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                ">
                {{ $t("courses") }} : {{ $t("communicationArtsAndManagementInnovation") }} 
              </span>
              <br /> -->
                <span
                  style="
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #545454;
                  "
                >
                  {{ $t("advisors") }} :
                  {{
                    $store.state.lang == "th"
                      ? i.teacher_th
                      : i.teacher_en
                      ? i.teacher_en
                      : i.teacher_th
                  }}
                </span>
                <br />
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </div>

    <!-- <v-row align="center" justify="center" class="mt-12 ma-4">
      <v-col cols="12" sm="6" md="3" v-for="i in 4">
        <v-card elevation="0" class="ma-4">
          <v-row align="center" justify="center">
            <v-img :src="image" style="
                filter: blur(4px) brightness(0.5);
                z-index: 0;
                background: rgba(13, 14, 16, 0.2);
              " @click="dialogimage(image)">
            </v-img>
            <v-img :src="image" style="position: absolute; z-index: 2; top: 8%" max-width="80%" max-height="80%"
              @click="dialogimage(image)">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <span style="
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                color: #0d0e10;
                margin-top: 16px;
              ">
              ส่องพฤติกรรมการเล่น เกมของวัยรุ่นไทย ตามติดชีวิต
            </span>
            <br />
            <v-col cols="12" class="pa-0 pt-4 pb-2">
              <span><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
                นายใจดี สุขสม
              </span>
            </v-col>
            <v-col cols="12" class="pa-0">
              <span><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
                12 ม.ค. 2565
              </span>
            </v-col>
            <v-col cols="12" class="pa-0 pt-2">
              <span style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                ">
                รายวิชา: นิเทศศาสตร์และนวัตกรรม
              </span>
              <br />
              <span style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                ">
                อาจารย์ที่ปรึกษา รศ.ดร.ชุติสันต์ เกิดวิบูลย์เวช
              </span>
              <br />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row> -->

    <!-- <v-col cols="12">
      <v-row class="my-10" align="center" justify="center">
        <v-btn class="text-center" color="#ddf2f0" style="
            color: #2ab3a3;
            border-radius: 0px;
            padding: 12px 16px;
            width: 128px;
            height: 48px;
            font-size: 16px;
            box-shadow: none;
          ">{{ $t("advisors") }}</v-btn>
      </v-row>
    </v-col> -->

    <v-dialog scrollable v-model="dialogdetail" width="600" height="80vh">
      <v-card class="" height="80vh">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialogdetail = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="px-8">
          <v-img :src="selectedImg" class="responsive" height="auto"></v-img>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-row justify="center">
      <Footers />
    </v-row>

    <v-overlay :value="overlay" :opacity="0.7">
      <!-- <v-dialog v-model="dialog" max-width="auto" max-height="auto"> -->
      <v-img
        @click="overlay = false"
        :src="image"
        class="responsive"
        max-width="90vw"
        max-height="80vh"
        style="margin-top: 30%"
      ></v-img>
      <!-- </v-dialog> -->
    </v-overlay>
  </v-form>
</template>

<script>
import Footers from "@/components/Footers.vue";
import Headers from "@/components/Headers.vue";
export default {
  components: { Footers, Headers },
  data() {
    return {
      dialogdetail: false,
      dialog: false,
      overlay: false,
      image: require("@/assets/work/work2.jpeg"),

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
      selectedImg: null,
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  methods: {
    opendialogdetail(img) {
      this.selectedImg = img;
      this.dialogdetail = true;
    },
    dialogimage() {
      this.dialog = true;
      this.overlay = true;
    },
    goTo(val) {
      window.open(val);
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/studentWorks`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
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
.responsive {
  width: 100%;
  height: auto;
}

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
.totextcenter {
  @media only screen and (min-width: 0px) {
    text-align: center;
  }

  @media only screen and (min-width: 414px) {
    text-align: left;
  }

  @media only screen and (min-width: 1440px) {
    text-align: left;
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