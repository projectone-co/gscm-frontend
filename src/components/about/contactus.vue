<template>
  <!-- <v-row style="background-color: #fff">
    <v-img src="@/assets/icons/New-Banner.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col cols="10" style="position: absolute; bottom: 10%; left: 10%">
          <span style="color: white; font-weight: 600; font-size: 57px">
            ติดต่อเรา
          </span>
          <br />
          <span style="color: white; font-weight: 400; font-size: 22px">สถาบันบัณฑิตพัฒนาบริหารศาสตร์ คณะนิเทศศาสตร์และนวัตกรรมการจัดการ</span>
        </v-col>
      </v-row>
    </v-img> -->
  <div style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/About.jpg')"
      polygon
      title="contact"
      description="nationalInstituteOfDevelopmentAdministrationOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #5CB270 0%, rgba(244, 242, 105, 0.92) 51.56%, rgba(244, 242, 105, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
    >
      <!-- <template #above>
        <v-chip outlined dark style="border: solid 1px">
          นักศึกษาปัจจุบัน
        </v-chip>
      </template> -->
    </Headers>

    <div
      class="tw-mt-[20px] sm:tw-mt-[0] tw-flex md:tw-flex-row tw-w-[100%] md:tw-mt-[64px] tw-flex-col tw-py-[24px] sm:tw-py-[40px] sm:tw-py-[64px] tw-p-[16px] sm:tw-p-[32px] md:tw-p-[64px] md:tw-pr-[0px] tw-gap-[24px] sm:tw-gap-[48px] sm:-tw-gap-[56px]"
    >
      <div
        class="tw-flex tw-flex-col tw-max-w-[100%] md:tw-max-w-[50%] tw-w-[100%]"
      >
        <div
          class="tw-mb-[32px] tw-text-[30px] tw-text-center md:tw-text-left sm:tw-text-[36px] tw-leading-[52px] tw-font-semibold"
        >
          {{ $t("contactInformation") }}
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/location.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("location") }}
            </span>
          </div>
          <div class="ul">
            <li>
              {{ items.c_Address }}
            </li>
          </div>
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/phone-outlined.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("phoneNumber") }}
            </span>
          </div>
          <div class="ul">
            <li>{{ items.c_phone }}</li>
          </div>
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/printer.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("fax") }}
            </span>
          </div>
          <div class="ul">
            <li>
              {{ items.c_fax }}
            </li>
          </div>
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/email.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("email") }}
            </span>
          </div>
          <div class="ul">
            <li>
              {{ items.c_email }}
            </li>
          </div>
        </div>
        <div class="tw-flex">
          <a
            :href="items.facebook"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.facebook"
            ><img
              src="/contact/logo-facebook2.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <a
            :href="items.instagram"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.instagram"
            ><img
              src="/contact/logo-instagram2.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <a
            :href="items.linkedin"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.linkedin"
            ><img
              src="/contact/logo-linkedin2.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <a
            :href="items.twitter"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.twitter"
            ><img
              src="/contact/logo-twitter2.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <a
            :href="items.youtube"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.youtube"
            ><img
              src="/contact/logo-youtube2.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <a
            :href="items.tiktok"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.tiktok"
            ><img
              src="/contact/tiktok.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
          <a
            :href="items.line"
            target="_blank"
            class="tw-p-[12px]"
            v-if="items.line"
            ><img
              src="/contact/line.svg"
              class="tw-max-w-[24px] tw-max-h-[24px] tw-min-w-[24px]"
          /></a>
        </div>
      </div>

      <div
        class="tw-mx-[-16px] tw-max-w-[calc(100%+32px)] sm:tw-max-w-[100%] sm:tw-mx-[0] md:tw-max-w-[50%] sm:tw-w-[100%] tw-p-[16px] sm:tw-p-[64px] bg-gradient-1 tw-relative tw-z-[1]"
      >
        <img
          src="/contact/contact-map.jpg"
          class="tw-w-[100%]"
          @click="onClickMap()"
        />
      </div>
    </div>

    <div
      class="tw-mb-[32px] sm:tw-mb-[0] tw-relative tw-flex md:tw-flex-row tw-w-[100%] md:tw-mt-[64px] tw-flex-col-reverse tw-py-[24px] sm:tw-py-[40px] sm:tw-py-[64px] tw-p-[16px] md:tw-p-[64px] md:tw-pl-[0px] tw-gap-[24px] sm:tw-gap-[48px] sm:-tw-gap-[56px]"
    >
      <img
        src="/contact/polygon-top-left.png"
        class="tw-absolute tw-max-w-[30%] tw-top-[-15%] tw-left-[0%]"
      />
      <img
        src="/contact/polygon-bottom-right.png"
        class="tw-absolute tw-w-[20%] tw-max-w-[200px] tw-right-0 tw-bottom-[0]"
      />
      <div
        class="tw-mx-[-16px] tw-max-w-[calc(100%+32px)] sm:tw-max-w-[100%] sm:tw-mx-[0] md:tw-max-w-[50%] sm:tw-w-[100%] tw-p-[16px] sm:tw-p-[64px] bg-gradient-2 tw-z-[1] tw-relative"
      >
        <img src="/contact/direction-map1.jpg" class="tw-w-[100%]" />
        <a
          class="tw-flex tw-mt-[16px] !tw-text-white tw-items-center"
          @click="onClickMap()"
        >
          {{ $t("openOnGoogleMap") }}
          <img
            src="/icons/arrow-up-right.svg"
            class="tw-max-w-[16px]"
            style="margin-left: 4px"
          />
        </a>
      </div>
      <div
        class="tw-flex tw-flex-col tw-max-w-[100%] md:tw-max-w-[50%] tw-w-[100%] tw-z-[1] tw-relative"
      >
        <div
          class="tw-mb-[32px] tw-text-[30px] tw-text-center md:tw-text-left sm:tw-text-[36px] tw-leading-[52px] tw-font-semibold"
        >
          {{ $t("journey") }}
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/car.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("byCar") }}
            </span>
          </div>
          <ul
            class="normal-ul"
            style="
              font-weight: 400;
              font-size: 15px;
              line-height: 28px;
              color: #0d0e10;
            "
          >
            <!-- <li>มาทางถนนรามคำแหง ผ่านสี่แยกลำสาลี ถึงสามแยกบ้านม้า เลี้ยวซ้ายเข้าถนนศรีบูรพา จากนั้นเลี้ยวซ้ายที่สี่แยกนิด้า สถาบันอยู่ทางซ้ายมือ</li>
            <li>มาทางถนนลาดพร้าว ผ่านตลาดบางกะปิ เข้าถนนเสรีไทย ถึงสี่แยกนิด้า สถาบันอยู่ทางขวามือ</li>
            <li>มาทางถนนรามอินทรา เลี้ยวเข้าถนนนวมินทร์ หรือเสรีไทย มาทางบางกะปิ ผ่านสี่แยกนิด้า สถาบันอยู่ทางซ้ายมือ</li>
            <div v-html="items.submission_details_th"></div> -->

            <p style="white-space: pre-wrap">
              <span
                v-html="
                  $store.state.lang == 'th'
                    ? items.travelByCar_th
                    : items.travelByCar_en
                    ? items.travelByCar_en
                    : items.travelByCar_th
                "
              ></span>
            </p>
            <!-- <div v-html="items.travelByBus_th"></div> -->
          </ul>
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/bus.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("byBus") }}
            </span>
          </div>
          <ul class="normal-ul">
            <!-- <li>รถประจำทาง ขสมก. หมายเลข 36ก, 60, 71, 151, ปอ. 60, ปอ. 501</li>
            <li>รถมินิบัส หมายเลข 27</li> -->

            <p style="white-space: pre-wrap">
              <span
                v-html="
                  $store.state.lang == 'th'
                    ? items.travelByBus_th
                    : items.travelByBus_en
                    ? items.travelByBus_en
                    : items.travelByBus_th
                "
              ></span>
            </p>
          </ul>
        </div>
        <div class="tw-mb-[16px]">
          <div class="tw-flex tw-gap-[14px] tw-mb-[4px]">
            <img src="/contact/boat.svg" />
            <span
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #2ab3a3;
              "
            >
              {{ $t("byBoat") }}
            </span>
          </div>
          <div class="ul">
            <!-- <li>คลองแสนแสบ โดยขึ้นที่ท่าวัดศรีบุญเรือง</li> -->
            <!-- items.travelByBoat_th -->
            <p style="white-space: pre-wrap">
              <span
                v-html="
                  $store.state.lang == 'th'
                    ? items.travelByBoat_th
                    : items.travelByBoat_en
                    ? items.travelByBoat_en
                    : items.travelByBoat_th
                "
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Footers />
    </div>
  </div>
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
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  methods: {
    onClickMap() {
      window.open(this.items.googleMapLink, "_blank");
    },
    goTo(val) {
      window.open(val);
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/c_configs/2`
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
.bg-gradient-1 {
  background: linear-gradient(270deg, #2ab3a3 0%, rgba(42, 179, 163, 0) 100%);
  @media (max-width: 960px) {
    background: linear-gradient(0deg, #2ab3a3 0%, rgba(42, 179, 163, 0) 100%);
  }
}
.bg-gradient-2 {
  background: linear-gradient(90deg, #2ab3a3 0%, rgba(42, 179, 163, 0) 100%);
  @media (max-width: 960px) {
    background: linear-gradient(0deg, #2ab3a3 0%, rgba(42, 179, 163, 0) 100%);
  }
}
.ul {
  margin-left: 36px;
  li {
    &::marker {
      font-size: 0;
    }
  }
}
ul {
  margin-bottom: 0;
  margin-left: 36px;
}
li {
  font-family: "IBM Plex Sans Thai Looped";
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