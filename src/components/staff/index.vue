<template>
  <!-- <v-form style="background-color: #fff">
    <v-img src="@/assets/icons/staffImage.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col
          cols="10"
          style="position: absolute; bottom: 10%; left: 10%"
          class="totextcenter"
        >
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            บุคลากร
          </span>
          <br />
          <span style="color: white; font-weight: 400; font-size: 22px"
            >คณาจารย์ และเจ้าหน้าที่</span
          >
        </v-col>
      </v-row>
    </v-img> -->
  <!-- <v-row style="background-color: #fff" class="-mt-top" no-gutters> -->
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/staffImage.png')"
      polygon
      title="personnel"
      description="teachersAndStaffOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
    >
      <!-- <template #above>
        <v-chip outlined dark style="border: solid 1px">
          นักศึกษาปัจจุบัน
        </v-chip>
      </template> -->
    </Headers>
    <Tabs :tabs="tabs" v-model="selectedtab" />
    <!-- <v-row align="center" justify="center" style="border-bottom: 1px solid #e2e2e2">
      <div :class="
  selectedtab == 1
    ? 'selectedtab text-center pt-7'
    : 'notselectedtab text-center pt-7'
" @click="selectedtab = '1'" style="cursor: pointer; width: 248px; height: 68px">
        <span :style="
  selectedtab == 1
    ? 'color: #2ab3a3; font-weight: 600;display: -webkit-inline-box;'
    : 'font-weight:600;display: -webkit-inline-box;'
">
          <v-img width="24.5px" height="21px" class="mr-3" src="@/assets/icons/user-speaker.png"></v-img>
          คณาจารย์</span>
      </div>
      <div :class="
  selectedtab == 2
    ? 'selectedtab text-center pt-7'
    : 'notselectedtab text-center pt-7'
" @click="selectedtab = '2'" style="cursor: pointer; width: 248px; height: 68px">
        <span :style="
  selectedtab == 2
    ? 'color: #2ab3a3; font-weight: 600;display: -webkit-inline-box;'
    : 'font-weight:600;display: -webkit-inline-box;'
">
          <v-img width="24.5px" height="21px" class="mr-3" src="@/assets/icons/group.png"></v-img>
          เจ้าหน้าที่</span>
      </div>
    </v-row> -->

    <!-- //body -->
    <div
      class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]"
      v-if="selectedtab == 1"
    >
      <div
        class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
      >
        <div v-for="i in teachers" :key="item">
          <StaffCard
            :name="$i18n.locale == 'th' ? i.name_th : i.name_en"
            :position="$i18n.locale == 'th' ? i.position_th : i.position_en"
            :image="i.images_url_profile"
            :id="i.id"
          />
        </div>
      </div>
    </div>

    <!-- <v-row align="top" justify="center" class="py-12 mx-3" v-if="selectedtab == 1">
      <v-col sm="6" md="3" cols="12" v-for="i in teachers" :key="`tc_${i.id}`" class="pa-3">
        <StaffCard :name="i.name_th" :position="i.position_th" :image="i.images_url_profile" :id="i.id" />
      </v-col>
    </v-row> -->
    <div
      class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]"
      v-if="selectedtab == 2"
    >
      <div
        class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
      >
        <div v-for="i in staffs" :key="item">
          <StaffEmpCard
            :name="$i18n.locale == 'th' ? i.name_th : i.name_en"
            :position="$i18n.locale == 'th' ? i.position_th : i.position_en"
            :image="i.images_url_profile"
            :id="i.id"
          />
        </div>
      </div>
    </div>
    <!-- <v-row align="top" justify="center" class="py-12 mx-3" v-if="selectedtab == 2">
      <v-col sm="6" md="3" cols="12" v-for="i in staffs" :key="`tc_${i.id}`" class="pa-3">
        <StaffEmpCard :name="i.name_th" :position="i.position_th" :image="i.images_url_profile" :id="i.id" />
      </v-col>
    </v-row> -->
    <!-- <v-row class="my-10" align="center" justify="center">
      <v-btn elevation="0" class="text-center" color="#2AB3A3" style="
          color: #fff;
          border-radius: 0px;
          padding: 12px 16px;
          width: 128px;
          height: 48px;
          font-size: 16px;
          font-weight: 500;
          box-shadow: none;
        ">แสดงเพิ่ม</v-btn>
    </v-row> -->
    <v-col cols="12">
      <v-row justify="center" align="center" class="mb-6" no-gutters>
        <!-- <v-btn
          color="#2AB3A3"
          dark
          class="
            !tw-shadow-none !tw-rounded-none !tw-font-semibold
            hover:!tw-bg-[#24988B]
          "
          width="128px"
          height="48px"
          :loading="loading"
          >{{ $t('more') }}</v-btn
        > -->
        <!-- @click="goload()" -->
      </v-row>
    </v-col>
    <!-- <v-row justify="center"> -->
    <Footers />
    <!-- </v-row> -->
    <!-- </v-row> -->
  </v-form>
</template>
<script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import StaffCard from "../StaffCard.vue";
import StaffEmpCard from "../StaffEmpCard.vue";
import Tabs from "../Tabs.vue";
import Headers from "@/components/Headers.vue";
export default {
  components: { Footers, BigButton, Headers, StaffCard, StaffEmpCard, Tabs },
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
        { title: "แบบคำร้องทั่วไป (PDF)" },
        { title: "แบบคำร้องขอพักการศึกษา/รักษาสถานภาพการศึกษา (PDF)" },
        { title: "แบบคำร้องขอหนังสือไปหน่วยงานภายนอก (PDF)" },
        { title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)" },
      ],
      selectedtab: 1,
      selectedbtn: 1,
      teachers: [],
      staffs: [],
      tabs: [
        {
          id: 1,
          text: "teachers",
          icon: "/icons/teacher.svg",
          iconActive: "/icons/teacher-active.svg",
        },
        {
          id: 2,
          text: "staff",
          icon: "/icons/staff.svg",
          iconActive: "/icons/staff-active.svg",
        },
      ],
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {
    selectedtab(val) {
      const pathParam = this.tabs.find((obj) => obj.id == val).text;
      history.pushState({}, "", `/${pathParam}`);
    },
  },
  methods: {
    async getAll() {
      const pathParam = this.$route.path.includes("teachers")
        ? "teachers"
        : "staff";
      this.selectedtab = this.tabs.find((tab) => tab.text === pathParam).id;
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/teacherDetails?types=1`
      );
      // console.log("teacherDetails", response.data.data);
      this.teachers = response.data.data;
      this.teachers.reverse();

      const responseStaff = await this.axios.get(
        `${process.env.VUE_APP_API}/teacherDetails?types=2`
      );
      // console.log("teacherDetails", responseStaff.data.data);
      this.staffs = responseStaff.data.data;
      this.staffs.reverse();
    },
    gotodetail(id) {
      const pathParam = this.tabs.find((obj) => obj.id == id).text;
      this.$router.push(`/${pathParam}/${id}`);
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

.cardtitle {
  width: 260px;
  height: 32px;
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #0d0e10;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.cardsubtitle {
  width: 260px;
  height: 24px;
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #545454;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
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