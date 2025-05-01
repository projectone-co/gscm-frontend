<template>
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/journeyBG.png')"
      polygon
      title="academicConferences"
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

    <Tabs :tabs="tabs" v-model="selectedtab" />
    <!-- //body -->
    <div
      class="tw-max-w-[1680px] tw-mx-auto tw-flex tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px] tw-justify-center tw-w-full tw-px-[16px] md:tw-px-[64px] tw-flex-col-reverse sm:tw-flex-row"
      no-gutters
    >
      <div class="tw-w-full sm:tw-w-1/6 sm:tw-mt-0 tw-mt-[16px] tw-self-end">
        <span class="tw-hidden sm:tw-block" v-if="selectedtab == 1"
          >{{ $t("all") }} : {{ items1.length }} {{ $t("searchresult") }}</span
        >
        <span class="tw-hidden sm:tw-block" v-if="selectedtab == 2"
          >{{ $t("all") }} : {{ items2.length }} {{ $t("searchresult") }}</span
        >
      </div>
      <div class="tw-flex-row tw-flex tw-w-full tw-flex-wrap sm:tw-flex-nowrap">
        <!-- <div
          class="sm:tw-max-w-[350px] tw-w-full sm:tw-ml-auto"
          v-if="selectedtab == 1"
        >
          <SearchInput
            :placeholder="`ค้นหาจากชื่อ`"
            @onSearch="handleSearch"
            v-model="search1"
          />
        </div>
        <div
          class="sm:tw-max-w-[350px] tw-w-full sm:tw-ml-auto"
          v-if="selectedtab == 2"
        >
          <SearchInput
            :placeholder="`ค้นหาจากชื่อ`"
            @onSearch="handleSearch"
            v-model="search2"
          />
        </div> -->
        <div class="tw-relative tw-px-6 tw-hidden sm:tw-block">
          <div class="divider tw-absolute tw-h-full tw-top-0 tw-left-[50%]" />
        </div>
        <div class="tw-flex tw-items-end tw-w-[100%] sm:tw-w-auto">
          <span class="tw-block sm:tw-hidden" v-if="selectedtab == 1"
            >{{ $t("all") }} : {{ items1.length }} {{ $t("journal") }}</span
          >
          <span class="tw-block sm:tw-hidden" v-if="selectedtab == 2"
            >{{ $t("all") }} : {{ items2.length }} {{ $t("journal") }}</span
          >
          <!-- <v-btn
            style="background: #2ab3a3; border-radius: 0px"
            class="!tw-h-[48px] tw-w-100% tw-ml-auto tw-mt-[12px] sm:tw-mt-0 sm:tw-ml-0"
            dark
            elevation="0"
            @click="gotohowto()"
            >{{ $t("howToArticleSubmission") }}</v-btn
          > -->
        </div>
      </div>
    </div>
    <div
      v-if="selectedtab == 1"
      class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
    >
      <div v-for="item in slicedItems1" :key="item.id">
        <v-card elevation="0" @click="gotodetail(item)">
          <div>
            <!-- <v-img
              src="@/assets/work/work2.jpeg"
              style="
                filter: blur(4px) brightness(0.5);
                z-index: 0;
                background: rgba(13, 14, 16, 0.2);
              "
            >
            </v-img> -->
            <!-- ติดตรงนี้ -->
            <!-- <v-img
              src="@/assets/work/work2.jpeg"
              style="position: absolute; z-index: 2; top: 8%"
              max-width="80%"
              max-height="80%"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img> -->
            <div class="tw-w-full tw-mb-[20px]">
              <image-with-cover
                margin="24px"
                ratio="[260/330]"
                :src="
                  item.cover_img_url
                    ? item.cover_img_url
                    : require('@/assets/default_image.jpeg')
                "
                :hasBackdrop="true"
              />
            </div>

            <div
              class="tw-text-[18px] sm:tw-text-[22px] tw-mb-[8px]"
              style="font-style: normal; font-weight: 600; color: #0d0e10"
            >
              <!-- ปีที่ 8 ฉบับที่ 1 -->
              {{
                $store.state.lang == "th"
                  ? item.name_th
                  : item.name_en
                  ? item.name_en
                  : item.name_th
              }}
            </div>
            <!-- <v-col cols="12" class="pa-0 pt-4 pb-2">
              <span
                ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
                นายใจดี สุขสม
              </span>
            </v-col> -->
            <div class="pa-0 tw-text-[14px] tw-w-full">
              <span
                ><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
                <!-- มกราคม-เมษายน 2565 -->
                {{ convertDate(item.updatedAt) }}
              </span>
            </div>
            <!-- <v-col cols="12" class="pa-0 pt-2">
              <span
                style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                "
              >
                รายวิชา: งานประชุมวิชาการ
              </span>
              <br />
              <span
                style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                "
              >
                อาจารย์ที่ปรึกษา รศ.ดร.ชุติสันต์ เกิดวิบูลย์เวช
              </span>
              <br />
            </v-col> -->
          </div>
        </v-card>
      </div>
    </div>
    <div
      v-if="selectedtab == 2"
      class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
    >
      <div v-for="item in slicedItems2" :key="item.id">
        <v-card elevation="0" @click="gotodetail(item)">
          <div>
            <!-- <v-img
              src="@/assets/work/work2.jpeg"
              style="
                filter: blur(4px) brightness(0.5);
                z-index: 0;
                background: rgba(13, 14, 16, 0.2);
              "
            >
            </v-img> -->
            <!-- ติดตรงนี้ -->
            <!-- <v-img
              src="@/assets/work/work2.jpeg"
              style="position: absolute; z-index: 2; top: 8%"
              max-width="80%"
              max-height="80%"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img> -->
            <div class="tw-w-full tw-mb-[20px]">
              <image-with-cover
                margin="24px"
                ratio="[260/330]"
                :src="
                  item.cover_img_url
                    ? item.cover_img_url
                    : require('@/assets/default_image.jpeg')
                "
                :hasBackdrop="true"
              />
            </div>

            <div
              class="tw-text-[18px] sm:tw-text-[22px] tw-mb-[8px]"
              style="font-style: normal; font-weight: 600; color: #0d0e10"
            >
              <!-- ปีที่ 8 ฉบับที่ 1 -->
              {{
                $store.state.lang == "th"
                  ? item.name_th
                  : item.name_en
                  ? item.name_en
                  : item.name_th
              }}
            </div>
            <!-- <v-col cols="12" class="pa-0 pt-4 pb-2">
              <span
                ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
                นายใจดี สุขสม
              </span>
            </v-col> -->
            <div class="pa-0 tw-text-[14px] tw-w-full">
              <span
                ><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
                <!-- มกราคม-เมษายน 2565 -->
                {{ convertDate(item.updatedAt) }}
              </span>
            </div>
            <!-- <v-col cols="12" class="pa-0 pt-2">
              <span
                style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                "
              >
                รายวิชา: งานประชุมวิชาการ
              </span>
              <br />
              <span
                style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  color: #545454;
                "
              >
                อาจารย์ที่ปรึกษา รศ.ดร.ชุติสันต์ เกิดวิบูลย์เวช
              </span>
              <br />
            </v-col> -->
          </div>
        </v-card>
      </div>
    </div>
    <v-row
      class="my-10"
      align="center"
      justify="center"
      no-gutters
      v-if="selectedtab == 1"
    >
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
        v-if="items1.length != slicedItems1.length"
        @click="showMore1()"
        >{{ $t("more") }}</v-btn
      >
    </v-row>
    <v-row
      class="my-10"
      align="center"
      justify="center"
      no-gutters
      v-if="selectedtab == 2"
    >
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
        v-if="items2.length != slicedItems2.length"
        @click="showMore2()"
        >{{ $t("more") }}</v-btn
      >
    </v-row>
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
import Tabs from "../Tabs.vue";
import SearchInput from "../SearchInput.vue";
import ImageWithCover from "../ImageWithCover.vue";

export default {
  components: {
    Footers,
    Headers,
    BigButton,
    Tabs,
    SearchInput,
    ImageWithCover,
  },
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
      tabs: [
        {
          id: 1,
          text: "NationalLevel",
          slug: "national",
        },
        {
          id: 2,
          text: "InternationalLevel",
          slug: "internationals",
        },
      ],
      search1: "",
      search2: "",
      offset: 1,
      limit: 10,
      selectedtab: 1,
      selectedbtn: 1,
      items1: [],
      items2: [],
      offset: 1,
      limit: 10,
      offset2: 1,
      limit2: 10,
      itemsToShow1: 8,
      itemsToShow2: 8,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.selectedtab = this.$route.path.includes("national") ? 1 : 2;
    this.getAll();
  },
  computed: {
    slicedItems1() {
      return this.items1.slice(0, this.itemsToShow1);
    },
    slicedItems2() {
      return this.items2.slice(0, this.itemsToShow2);
    },
  },
  watch: {
    selectedtab(val) {
      this.search1 = "";
      this.search2 = "";

      // console.log(this.search1);
      const pathParam = this.tabs.find((obj) => obj.id == val).slug;
      history.pushState({}, "", `/conference/${pathParam}`);
      if (val == 1) {
        // this.datatype = "วิทยานิพนธ์";
        this.offset = 1;
        this.getAll();
      } else if (val == 2) {
        // this.datatype = "งานวิจัย";
        this.offset = 1;
        this.getAll();
      }
    },
  },
  methods: {
    showMore1() {
      this.itemsToShow1 += 8;
    },
    showMore2() {
      this.itemsToShow2 += 8;
    },
    handleSearch() {
      this.offset = 1;
      this.getAll();
    },
    loadMore() {
      this.offset = this.offset + this.limit;
      this.getAll();
    },
    loadMore2() {
      this.offset2 = this.offset2 + this.limit2;
      this.getAll();
    },
    convertDate(val) {
      return moment(val).format("MM/DD/YYYY hh:mm");
    },
    async getAll() {
      this.items1 = [];
      this.items2 = [];
      if (this.search1) {
        const response = await this.axios.get(
          // `${
          //   process.env.VUE_APP_API
          // }/academicJournals?type_th=งานประชุมวิชาการ&offset=${
          //   this.offset
          // }&limit=${this.limit}${this.search1 ? "&name_th=" + this.search1 : ""}`
          `${process.env.VUE_APP_API}/academicJournals?type_th=งานประชุมวิชาการ&name_th=${this.search1}`
        );
        // console.log("items1", response.data.data);
        // this.items1 = response.data.data;
        this.items1 =
          this.offset > 1
            ? [...this.items1, ...response.data.data]
            : response.data.data;
      } else {
        const response = await this.axios.get(
          `${process.env.VUE_APP_API}/academicJournals?type_th=งานประชุมวิชาการ`
        );
        // console.log("items1", response.data.data);
        // this.items1 = response.data.data;
        this.items1 =
          this.offset > 1
            ? [...this.items1, ...response.data.data]
            : response.data.data;
      }

      // console.log("this.search2 ", this.search2);
      if (this.search2) {
        const response2 = await this.axios.get(
          // `${
          //   process.env.VUE_APP_API
          // }/academicJournals?type_th=งานประชุมวิชาการ_inter&offset=${
          //   this.offset2
          // }&limit=${this.limit2}${this.search2 ? "&name_th=" + this.search2 : ""}`
          `${process.env.VUE_APP_API}/academicJournals?type_th=งานประชุมวิชาการ_inter&name_th=${this.search2}`
        );
        // console.log("items2", response2.data.data);
        // this.items2 = response2.data.data;
        this.items2 =
          this.offset2 > 1
            ? [...this.items2, ...response2.data.data]
            : response2.data.data;
      } else {
        const response2 = await this.axios.get(
          // `${
          //   process.env.VUE_APP_API
          // }/academicJournals?type_th=งานประชุมวิชาการ_inter&offset=${
          //   this.offset2
          // }&limit=${this.limit2}${this.search2 ? "&name_th=" + this.search2 : ""}`
          `${process.env.VUE_APP_API}/academicJournals?type_th=งานประชุมวิชาการ_inter`
        );
        // console.log("items2", response2.data.data);
        // this.items2 = response2.data.data;
        this.items2 =
          this.offset2 > 1
            ? [...this.items2, ...response2.data.data]
            : response2.data.data;
      }

      this.search1 = "";
      this.search2 = "";
    },
    gotohowto(id) {
      this.$router.push(`/conference-howto`);
    },
    gotodetail(item) {
      // console.log("itemitem", item);
      const pathParam = this.tabs.find(
        (obj) => obj.id == this.selectedtab
      ).slug;
      this.$router.push(`/conference/${pathParam}/${item.id}`);
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
.divider {
  min-width: 1px;
  height: 100%;
  background: #e2e2e2;
  width: 1px;
  max-width: 1px;
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
.selectedtab {
  padding: 20px 24px;
  gap: 16px;

  // width: 212px;
  // height: 68px;
  border-bottom: 3px solid #2ab3a3;
}
.notselectedtab {
  padding: 20px 24px;
  gap: 16px;

  // width: 212px;
  // height: 68px;
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