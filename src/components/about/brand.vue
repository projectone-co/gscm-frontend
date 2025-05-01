<template>
  <!-- <v-row style="background-color: #fff">
    <v-img src="@/assets/icons/New-Banner.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col cols="10" style="position: absolute; bottom: 10%; left: 10%">
          <v-chip outlined color="white" style="font-size: 16px;">เกี่ยวกับคณะ</v-chip><br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            อัตลักษณ์ของคณะ
          </span>
          <br />
        </v-col>
      </v-row>
    </v-img> -->
  <v-row style="background-color: #fff" class="-mt-top" no-gutters>
    <Headers
      :img="require('@/assets/icons/About.jpg')"
      polygon
      title="facultyIdentity"
      description="facultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("aboutTheFaculty") }}
        </v-chip>
      </template>
    </Headers>

    <v-row justify="center" class="mt-12 ma-10">
      <v-col cols="12" sm="12" md="6">
        <img src="../../assets/brand.png" />
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-row justify="center">
          <v-col cols="12" md="12">
            <span style="font-weight: 600; font-size: 42px; line-height: 60px">
              "{{ $t("firmlyAllRounder") }}"
            </span>
          </v-col>
          <v-col
            cols="12"
            class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px] tw-relative"
          >
            <div>
              <span
                style="
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 28px;
                  color: #0d0e10;
                "
              >
                {{
                  $t(
                    "gSCMLogosAndLettersAreDesignedFromSixSquaresToCommunicateTheCubeOrCubeThatRepresentsDimensionality"
                  )
                }}
                {{ $t("andAWellRoundedViewAndAlwaysFirmly") }} <br /><br />
                {{ $t("thisRepresentsNIDAWithAllAspects") }}
              </span>
            </div>
            <img
              src="/about/overview-polygon.png"
              class="tw-absolute tw-right-[24px] tw-contain tw-w-[30%]"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <div style="background: #F6F6F6;"> -->
    <v-row
      class="mt-12 ma-10"
      style="
        margin-top: -50px;
        background: #f6f6f6;
        margin: 0px !important;
        padding: 40px;
      "
    >
      <v-col
        cols="12"
        sm="12"
        md="6"
        class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px] tw-relative"
      >
        <span style="font-weight: 600; font-size: 36px; line-height: 52px">
          "{{ $t("communicateAndCreative") }}"
        </span>
        <br />
        <br />
        <span
          style="
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
            color: #0d0e10;
          "
        >
          {{
            $t(
              "choosingColorsThatExpressTheIdentityOfTheNidaStudentIsClearlyThatIs"
            )
          }}
          <span style="font-weight: 600">{{
            $t("communicateAndCreative")
          }}</span>
        </span>
        <!-- <img src="/about/overview-polygon.png" class="tw-absolute tw-top-[250px] tw-contain tw-w-[30%]"/> -->
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-row justify="center">
          <v-col cols="3">
            <img src="../../assets/brand_green.png" />
          </v-col>
          <v-col cols="9" style="margin-top: 25px">
            <span style="font-weight: 600; font-size: 24px; line-height: 36px">
              {{ $t("green") }}
            </span>
            <br />
            <span
              style="
                font-weight: 400;
                font-size: 15px;
                line-height: 28px;
                color: #545454;
              "
            >
              {{ $t("gettingStartedInteractingAndGoodRelationships") }}
            </span>
          </v-col>
          <v-col cols="3">
            <img src="../../assets/brand_blue.png" />
          </v-col>
          <v-col cols="9" style="margin-top: 25px">
            <span style="font-weight: 600; font-size: 24px; line-height: 36px">
              {{ $t("blue") }}
            </span>
            <br />
            <span
              style="
                font-weight: 400;
                font-size: 15px;
                line-height: 28px;
                color: #545454;
              "
            >
              {{ $t("inspirationKnowledgeCreativityAndInitiative") }}
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- </div> -->
    <v-row
      align="center"
      justify="center"
      class="mt-12 ma-10"
      style="margin-top: -50px"
    >
      <v-col cols="12">
        <span style="font-weight: 600; font-size: 36px; line-height: 52px">
          {{ $t("downloadLogo") }} </span
        ><br /><br />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="pa-0"
        v-for="i in items"
        :key="`dw_${i.id}`"
      >
        <div class="cardbig" style="height: auto">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <span>
                <img :src="i.cover_img_url" style="height: 100px" />
                <span style="margin-left: 10px">{{
                  $store.state.lang == "th"
                    ? i.name_th
                    : i.name_en
                    ? i.name_en
                    : i.name_th
                }}</span>
              </span>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="text-right">
              <v-btn
                color="#2AB3A3"
                text
                @click="onClickDownload(i.cover_img_url)"
              >
                <v-icon>mdi-file-find</v-icon> {{ $t("viewFile") }}
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <!-- <v-col cols="12" sm="12" md="12" class="pa-0">
        <div class="cardbig" style="height: auto;">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <span>
                <img src="../../assets/brand_black.png" />
                <span style="margin-left: 10px;">Black</span>
              </span>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="text-right">
              <v-btn color="#2AB3A3" text>
                <v-icon>mdi-download</v-icon> ดาวน์โหลด
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="pa-0">
        <div class="cardbig" style="height: auto;">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <span>
                <img src="../../assets/brand_dark.png" />
                <span style="margin-left: 10px;">White</span>
              </span>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="text-right">
              <v-btn color="#2AB3A3" text>
                <v-icon>mdi-download</v-icon> ดาวน์โหลด
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="pa-0">
        <div class="cardbig" style="height: auto;">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <img src="../../assets/brand_ai.png" />
              <span>
                
                <span style="margin-left: 10px;">Illustrator</span>
              </span>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="text-right">
              <v-btn color="#2AB3A3" text>
                <v-icon>mdi-download</v-icon> ดาวน์โหลด
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col> -->
    </v-row>

    <!-- <v-row justify="center"> -->
    <Footers />
    <!-- </v-row> -->
  </v-row>
</template>
<script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import StudentAmounts from "@/components/StudentAmountsAbout.vue";
import Headers from "@/components/Headers.vue";
// import SuggestAbout from "@/components/SuggestsAbout.vue";
export default {
  components: { Footers, BigButton, StudentAmounts, Headers },
  data() {
    return {
      selectedtab: 1,

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
        { title: "Color", img: "../../assets/brand_color.png", type: ".PNG" },
        { title: "Black", img: "brand_black.png", type: ".PNG" },
        { title: "White", img: "brand_dark.png", type: ".PNG" },
        { title: "Illustrator", img: "brand_ai.png", type: ".Ai" },
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
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  methods: {
    onClickDownload(url) {
      // console.log(url);
      window.open(url, "_blank");
    },
    goTo(val) {
      window.open(val);
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/identitys`
      );
      // console.log("identitys", response.data.data);
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
  margin: 8px;
  padding: 20px 24px;
  gap: 16px;
  width: 145px;
  height: 48px;
  border: 1px solid #1c7bbc;
}

.notselectedtab {
  margin: 8px;
  padding: 20px 24px;
  gap: 16px;
  width: 145px;
  height: 48px;
  border: 1px solid #eeeeee;
  background: #f6f6f6;
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