<template>
  <div class="-mt-top">
    <Headers
      :img="require('@/assets/icons/About.jpg')"
      polygon
      title="aboutTheFaculty"
      description="overviewOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
    >
    </Headers>

    <section class="tw-max-w-[1200px] tw-mx-auto tw-px-[24px] md:tw-px-[64px]">
      <div
        class="tw-pt-[56px] sm:tw-pt-[64px] md:tw-pt-[100px] tw-pb-[32px] md:tw-pb-[56px] tw-text-center mx-auto tw-relative"
      >
        <div>
          <img
            src="/about/top-left-polygon.png"
            class="tw-absolute tw-left-[-60px] tw-top-[75px] tw-contain tw-w-[22%]"
          />
          <h2
            class="tw-text-[30px] sm:tw-text-[36px] md:tw-text-[42px] tw-font-semibold tw-m-0 tw-relative tw-z-1"
          >
            {{ $t("messageFromDean") }}
          </h2>
        </div>
        <!-- <div
          class="tw-max-w-[680px] mx-auto tw-text-[16px] tw-mt-[8px] tw-relative tw-z-1"
        >
          {{
            $t(
              "weWillOpenYourViewToCommunicationEducationThatCombinesInnovationAndDigitalTechnology"
            )
          }}
          {{ $t("ThatWillRadicallyChangePeopleIsBehaviorInModernSociety") }}
        </div>-->
      </div>

      <div class="tw-relative tw-z-1">
        <div
          style="background: #eefbfa; width: 100%"
          class="sm:tw-p-[48px] tw-p-[24px] md:tw-p-[56px]"
        >
          <div
            class="tw-flex tw-flex-col-reverse md:tw-flex-row sm:tw-gap-[48px] tw-gap-[24px] md:tw-gap-[56px] tw-items-center"
          >
            <div
              class="tw-flex tw-gap-[24px] tw-max-w-[100%] tw-flex-col md:tw-max-w-[calc(100%-320px)]"
            >
              <span class="tw-text-[22px] sm:tw-text-[28px] tw-font-semibold">{{
                $store.state.lang == "th"
                  ? items[0].title_th
                  : items[0].title_en
                  ? items[0].title_en
                  : items[0].title_th
              }}</span>
              <span
                style="font-weight: 400; font-size: 15px; line-height: 24px"
              >
                {{
                  $store.state.lang == "th"
                    ? items[0].desc_th
                    : items[0].desc_en
                    ? items[0].desc_en
                    : items[0].desc_th
                }}</span
              >
              <div
                class="tw-flex tw-flex-col tw-gap-[8px]"
                style="
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 28px;
                  color: #2ab3a3;
                "
              >
                {{
                  $store.state.lang == "th"
                    ? items[0].teacher_th
                    : items[0].teacher_en
                    ? items[0].teacher_en
                    : items[0].teacher_th
                }}

                <span
                  style="
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #0d0e10;
                  "
                >
                  {{
                    $store.state.lang == "th"
                      ? items[0].position_th
                      : items[0].position_en
                      ? items[0].position_en
                      : items[0].position_th
                  }}</span
                >
              </div>
            </div>
            <div
              class="tw-max-w-[100%] tw-max-h-[100%] sm:tw-max-w-[320px] sm:tw-max-h-[320px] tw-w-[100%] tw-flex tw-items-center tw-justify-center tw-p-[10px]"
              style="
                background-color: #2ab3a3;
                background-image: conic-gradient(
                  from 46.87deg at 50.15% 50.15%,
                  rgba(60, 204, 187, 0.4) 0deg,
                  rgba(255, 255, 255, 0) 360deg
                );
              "
            >
              <img
                class="tw-w-[100%]"
                :src="
                  items[0].imgUrl
                    ? items[0].imgUrl
                    : require('@/assets/aboutus_person1.png')
                "
              />
            </div>
          </div>
        </div>
      </div>
      <section
        class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px] tw-relative"
      >
        <img
          src="/about/overview-polygon.png"
          class="tw-absolute tw-right-[24px] tw-top-[-40px] tw-contain tw-w-[30%]"
        />
        <h2
          class="tw-text-[30px] sm:tw-text-[36px] md:tw-text-[42px] tw-font-semibold tw-m-0 tw-text-center tw-mb-[32px] sm:tw-mb-[48px] md:tw-mb-[56px] tw-relative tw-z-1"
        >
          {{ $t("overviewOfFaculty") }}
        </h2>

        <div
          class="tw-flex sm:tw-justify-center tw-gap-[16px] tw-mb-[24px] sm:tw-mb-[36px] tw-relative tw-z-1 tw-flex-wrap"
        >
          <div
            class="tw-px-[18px] tw-py-[12px] tw-cursor-pointer tw-flex tw-items-center tw-gap-[8px] tab-item tw-shrink-0"
            :class="{ 'active-tab': selectedtab == tab.id }"
            v-for="tab in tabs"
            @click="selectedtab = tab.id"
          >
            <img
              :src="
                selectedtab == tab.id
                  ? `${tab.icon.split('.svg')[0]}-active.svg`
                  : tab.icon
              "
            />
            <span class="tw-font-medium">
              {{ $t(tab.text) }}
            </span>
          </div>
        </div>

        <article class="tw-relative tw-z-1">
          <div
            style="background: #e9f4fc; width: 100%"
            class="tw-p-[24px] sm:tw-p-[32px] md:tw-p-[56px] tw-relative"
          >
            <img
              class="tw-absolute tw-contain"
              src="/about/overview-bg.png"
              style="right: 0; bottom: 0"
            />
            <div
              class="tw-flex tw-gap-[32px] sm:tw-gap-[48px] md:tw-gap-[56px] tw-z-1 tw-relative tw-flex tw-flex-col md:tw-flex-row tw-items-center"
            >
              <div
                style="
                  background-color: #1c7bbc;
                  background-image: conic-gradient(
                    from 47.11deg at 50.15% 50.15%,
                    #238ad0 0deg,
                    rgba(255, 255, 255, 0) 360deg
                  );
                "
                class="tw-min-w-[100%] tw-aspect-[1/1] tw-flex tw-items-center tw-justify-center tw-min-w-[250px] tw-min-h-[250px]"
              >
                <img
                  :src="`${
                    tabs
                      .find((tab) => tab.id === selectedtab)
                      .icon.split('.svg')[0]
                  }-filled.svg`"
                />
              </div>
              <div class="tw-flex tw-items-left tw-flex-col tw-w-[100%]">
                <div class="tw-text-[28px] tw-font-semibold tw-mb-[24px]">
                  {{ $t(tabs.find((tab) => tab.id === selectedtab).text) }}
                </div>
                <div class="tw-text-[15px]">
                  <template v-if="selectedtab == 1">
                    <span
                      v-html="
                        $store.state.lang == 'th'
                          ? items[0].history_th
                          : items[0].history_en
                          ? items[0].history_en
                          : items[0].history_th
                      "
                    ></span>
                    <!-- {{ items[0].history_th }} -->
                  </template>
                  <template v-if="selectedtab == 2">
                    <span
                      v-html="
                        $store.state.lang == 'th'
                          ? items[0].philosophy_th
                          : items[0].philosophy_en
                          ? items[0].philosophy_en
                          : items[0].philosophy_th
                      "
                    ></span>
                    <!-- {{ items[0].philosophy_th }} -->
                  </template>
                  <template v-if="selectedtab == 3">
                    <span
                      v-html="
                        $store.state.lang == 'th'
                          ? items[0].determination_th
                          : items[0].determination_en
                          ? items[0].determination_en
                          : items[0].determination_th
                      "
                    ></span>
                    <!-- {{ items[0].determination_th }} -->
                  </template>
                  <template v-if="selectedtab == 4">
                    <span
                      v-html="
                        $store.state.lang == 'th'
                          ? items[0].vision_th
                          : items[0].vision_en
                          ? items[0].vision_en
                          : items[0].vision_th
                      "
                    ></span>
                    <!-- {{ items[0].vision_th }} -->
                  </template>
                  <template v-if="selectedtab == 5">
                    <span
                      v-html="
                        $store.state.lang == 'th'
                          ? items[0].mission_th
                          : items[0].mission_en
                          ? items[0].mission_en
                          : items[0].mission_th
                      "
                    ></span>
                    <!-- {{ items[0].mission_th }} -->
                  </template>
                  <template v-if="selectedtab == 6">
                    <span
                      v-html="
                        $store.state.lang == 'th'
                          ? items[0].sharedValues_th
                          : items[0].sharedValues_en
                          ? items[0].sharedValues_en
                          : items[0].sharedValues_th
                      "
                    ></span>
                    <!-- {{ items[0].sharedValues_th }} -->
                  </template>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <div class="tw-relative">
        <img
          src="/about/statistic-polygon.png"
          class="tw-absolute tw-left-[-50px] tw-top-[32px] tw-contain tw-w-[28%]"
        />
        <div
          class="tw-mb-[32px] sm:tw-mb-[48px] md:tw-mb-[56px] tw-z-1 tw-relative"
        >
          <h2
            class="tw-text-[30px] sm:tw-text-[36px] md:tw-text-[42px] tw-font-semibold tw-m-0 tw-text-center"
          >
            {{
              $t("statisticsStudentsOfCommunicationArtsAndManagementInnovation")
            }}
          </h2>
        </div>
        <div class="tw-z-1 tw-relative">
          <StudentAmounts></StudentAmounts>
        </div>
      </div>

      <div
        justify="center"
        class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px] tw-relative"
      >
        <h2
          class="tw-text-[30px] sm:tw-text-[36px] md:tw-text-[42px] tw-font-semibold tw-m-0 tw-text-center tw-mb-[32px] sm:tw-mb-[48px] md:tw-mb-[56px] tw-relative tw-z-1"
        >
          {{ $t("facultyIntroductionVideo") }}
        </h2>
        <img
          class="tw-absolute tw-top-[-5%] tw-w-[120%] tw-h-[120%] tw-object-contain"
          src="/about/video-polygon.png"
        />
        <div class="tw-aspect-video tw-relative tw-max-w-[720px] mx-auto">
          <video
            controls
            src="http://gscm-service.yuzudigital.com/public/about_gscm.mp4"
            poster="https://gscm-service.yuzudigital.com/public/poster.jpg"
            playsinline
            class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
            ref="video"
          />
          <div
            v-if="!playing"
            class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
            style="
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                #000000 100%
              );
            "
          />
          <img
            v-if="!playing"
            class="tw-absolute tw-top-[calc(50%-56px/2)] tw-left-[calc(50%-56px/2);] tw-w-[56px] tw-h-[56px] tw-cursor-pointer tw-z-1"
            src="/about/play-video.svg"
            @click="
              $refs.video.play();
              playing = true;
            "
          />
        </div>
      </div>

      <!-- <div
        justify="center"
        class="tw-py-[56px] sm:tw-py-[64px] md:tw-py-[100px]"
      >
        <div class="tw-text-center tw-mb-[48px]">
          <h2 class="tw-text-[36px] tw-font-semibold tw-m-0">
            {{ $t("justInCaseYouInterested") }}
          </h2>
        </div>
        <div class="tw-flex tw-gap-[24px] sm:tw-flex-row tw-flex-col">
          <article
            class="tw-flex-1 tw-flex tw-p-[24px] tw-gap-[16px] sm:tw-flex-col sm:tw-gap-[36px] sm:tw-p-[36px] tw-relative tw-items-center sm:tw-items-start"
            style="cursor: pointer; background-color: #1c7bbc"
            @click="goTo('/course/master/all')"
          >
            <img
              src="/about/polygon-bottom.png"
              class="tw-absolute tw-max-w-[70%] tw-bottom-[0] tw-left-[0%]"
            />
            <div>
              <img
                class="tw-max-w-[32px] sm:tw-max-w-[48px]"
                src="/about/education-white.svg"
              />
            </div>

            <div class="tw-mt-auto">
              <span
                class="tw-text-[24px]"
                style="color: white; font-weight: 600; line-height: 36px"
                @click="goTo('/course/master/all')"
                >{{ $t("exploreCourse") }}</span
              >
              <v-icon style="float: right; margin-top: 4px; color: white"
                >mdi-arrow-right</v-icon
              >
            </div>
          </article>
          <article
            class="tw-flex-1 tw-flex tw-p-[24px] tw-gap-[16px] sm:tw-flex-col sm:tw-gap-[36px] sm:tw-p-[36px] tw-relative tw-items-center sm:tw-items-start"
            style="cursor: pointer; background-color: #2ab3a3"
            @click="goTo('https://cic.gscm.nida.ac.th/th/')"
          >
            <img
              src="/about/polygon-top.png"
              class="tw-absolute tw-max-w-[70%] tw-top-[0] tw-left-[30%]"
            />
            <div>
              <img
                class="tw-max-w-[32px] sm:tw-max-w-[48px]"
                src="/about/rocket-white.svg"
              />
            </div>

            <div class="tw-mt-auto">
              <span
                class="tw-text-[24px]"
                style="color: white; font-weight: 600; line-height: 36px"
                >{{ $t("cic1") }}<br />{{ $t("cic2") }}</span
              >
              <v-icon style="float: right; margin-top: 4px; color: white"
                >mdi-arrow-right</v-icon
              >
            </div>
          </article>
        </div>
      </div> -->
      <br />
    </section>

    <div justify="center">
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
      playing: false,
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
      tabs: [
        {
          id: 1,
          text: "historyOfFaculty",
          icon: "/about/tab-icon/history.svg",
        },
        { id: 2, text: "philosophy", icon: "/about/tab-icon/idea.svg" },
        { id: 3, text: "determination", icon: "/about/tab-icon/star.svg" },
        { id: 4, text: "vision", icon: "/about/tab-icon/binoculars.svg" },
        { id: 5, text: "mission", icon: "/about/tab-icon/rocket.svg" },
        { id: 6, text: "value", icon: "/about/tab-icon/partnership.svg" },
      ],
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
    goTo(val) {
      if (val == "https://cic.gscm.nida.ac.th/th/") {
        window.open(val);
      } else {
        this.$router.push(val);
      }
      // console.log("val", val);
      // window.open(val);
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/groupInformations?id=1`
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
.tab-item {
  background: #f6f6f6;
  border: 1px solid #eeeeee;
}
.active-tab {
  border-color: #1c7bbc;
  span {
    color: #1c7bbc;
  }
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