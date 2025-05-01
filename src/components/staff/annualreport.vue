<template>
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/journeyBG.png')"
      polygon
      title="annualReport"
      description="facultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #B429F9 0%, rgba(255, 143, 74, 0.92) 51.56%, rgba(255, 143, 74, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #B429F9 0%, rgba(255, 143, 74, 0.92) 51.56%, rgba(255, 143, 74, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("academicWork") }}
        </v-chip>
      </template>
    </Headers>
    <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
      <div
        class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
      >
        <div v-for="item in slicedItems" :key="item">
          <v-card elevation="0" @click="gotodetail(item.id)">
            <div>
              <div class="tw-w-full tw-mb-[20px]">
                <image-with-cover
                  margin="24px"
                  ratio="[260/330]"
                  :src="item.cover_img_url"
                  :hasBackdrop="true"
                />
              </div>

              <div
                class="tw-text-[18px] sm:tw-text-[22px] tw-mb-[8px]"
                style="font-style: normal; font-weight: 600; color: #0d0e10"
              >
                {{
                  $store.state.lang == "th"
                    ? item.name_th
                    : item.name_en
                    ? item.name_en
                    : item.name_th
                }}
              </div>
              <div class="pa-0 tw-text-[14px] tw-w-full">
                <span
                  ><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
                  <!-- มกราคม-เมษายน 2565 -->
                  {{ convertDate(item.updatedAt) }}
                </span>
              </div>
            </div>
          </v-card>
        </div>
      </div>
      <v-row class="my-10" align="center" justify="center" no-gutters>
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
          v-if="slicedItems.length != items.length"
          @click="showMore()"
          >{{ $t("more") }}</v-btn
        >
      </v-row>
    </div>
    <v-row justify="center" no-gutters>
      <Footers />
    </v-row>
  </v-form>
</template>
  <script>
import Footers from "@/components/Footers.vue";
import Headers from "@/components/Headers.vue";
import BigButton from "../BigButton.vue";
import moment from "moment";
import ImageWithCover from "../ImageWithCover.vue";
export default {
  components: { Footers, Headers, BigButton, ImageWithCover },
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
        // {
        //   title:
        //     "COMMUNICATION FOR LOCALISM EMPOWERMENT THROUGH SINGING CONTEST KIKDUU TV PROGRAM",
        //   name: "Pimchaya Fakpiem",
        // },
        // {
        //   title:
        //     "การรังแกทางไซเบอร์ผ่านสื่อออนไลน์ สาเหตุ และแนวทางการจัดการปัญหา",
        //   name: "พินวา แสนใหม่",
        // },
        // {
        //   title:
        //     "ROLES OF DISCOURSES AND THE MEANINGS OF SAME-SEX MARRIAGE COMMUNICATED IN THE NEWS OF MASS MEDIA IN THAILAND",
        //   name: "Siriwat Mathet",
        // },
        // {
        //   title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)",
        //   name: "Siriwat Mathet",
        // },
      ],
      selectedtab: 1,
      selectedbtn: 1,

      itemsToShow: 8,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  computed: {
    slicedItems() {
      return this.items.slice(0, this.itemsToShow);
    },
  },
  methods: {
    showMore() {
      this.itemsToShow += 8;
    },
    convertDate(val) {
      return moment(val).format("MM/DD/YYYY hh:mm");
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/annualReports`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotodetail(id) {
      this.$router.push(`/annual-detail?id=${id}`);
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
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
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
  position: -webkit-sticky; /* for Safari */
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
    // height: 84px;
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