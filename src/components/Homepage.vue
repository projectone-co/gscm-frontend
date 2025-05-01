<template>
  <div id="app">
    <v-app id="inspire">
      <!-- :color="pageYOffset == 0 ? 'transparent' : '#1C7BBC;'" -->
      <v-app-bar
        app
        elevation="0"
        style="z-index: 999"
        :class="
          isOpenNav == true || pageYOffset > 40 || forcedNav || fab
            ? '!tw-bg-brand !tw-bg-opacity-[0.85] !tw-backdrop-blur-lg'
            : '!tw-bg-transparent'
        "
      >
        <div
          class="tw-flex tw-mx-auto tw-max-w-[1780pxx] tw-w-[100%] tw-items-center md:tw-px-8"
        >
          <v-img
            @click="gotohome()"
            :src="
              pageYOffset == 0
                ? require('@/assets/icons/wordmark-white.png')
                : require('@/assets/icons/wordmark-white.png')
            "
            max-height="100px"
            max-width="100px"
            class="mr-5 tw-ml-0"
            style="cursor: pointer"
          ></v-img>
          <!--GSCM Image-->
          <v-btn
            v-for="(topic, i) in NavbarContent"
            :key="i"
            dark
            x-large
            text
            class="hidden-md-and-down navbar !tw-py-[2px] !tw-rounded-none"
            :class="[
              contents == i && 'navbar-hover',
              topic.link ? '!tw-cursor-pointer' : '!tw-cursor-default',
            ]"
            router-link
            :to="topic.link"
            @mouseenter="opennavbar(i)"
          >
            {{ $t(topic.title) }}</v-btn
          >
          <div class="tw-w-12 tw-relative tw-ml-auto">
            <v-btn
              v-model="fab"
              @click="isSearchPage ? $router.push('/') : openSearchbar()"
              text
              center
              small
              dark
              class="-tw-ml-4 !tw-mr-0"
            >
              <v-icon v-if="fab || isSearchPage"> mdi-close </v-icon>
              <v-icon v-else> mdi-magnify </v-icon>
            </v-btn>
          </div>
          <div class="tw-w-12 tw-relative">
            <v-btn text center small dark class="-tw-ml-4 !tw-p-0">
              <select
                id="lang"
                class="tw-w-full tw-absolute tw-left-0 tw-right-0 tw-h-full tw-opacity-0 tw-cursor-pointer"
                @change="setLang"
                v-model="$store.state.lang"
              >
                <option value="th">ภาษาไทย</option>
                <option value="en">English</option>
              </select>
              <v-icon class="tw-pointer-events-none"> mdi-web </v-icon>
            </v-btn>
          </div>
          <v-btn
            color="#2CB3A3"
            dark
            style="border-radius: 0px; box-shadow: none"
            class="hidden-md-and-down"
            @click="goTo('/course/master/all')"
            >{{ $t("exploreCourse") }}
          </v-btn>
          <v-btn
            v-model="isOpenNav"
            text
            center
            small
            dark
            class="d-lg-none"
            style="margin: 0 -10px 0 -10px"
            @click="isOpenNav ? closenavbar() : opennavbar()"
          >
            <v-icon>{{ !isOpenNav ? "mdi-menu" : "mdi-close" }}</v-icon>
          </v-btn>
        </div>
        <!--Adding Hamburger visible md-->
      </v-app-bar>
      <!-- เมนู header -->
      <!-- <div id="app">
    <v-app id="inspire"> -->
      <div
        style="z-index: 998; min-height: 220px"
        v-if="isOpenNav"
        id="app"
        class="top-top tw-w-full tw-fixed hidden-md-and-down"
        @mouseleave="closenavbar()"
      >
        <div class="tw-bg-brand">
          <div class="tw-flex tw-mx-auto tw-max-w-[1780pxx] tw-w-full">
            <v-row
              v-for="(topic, i) in NavbarContent"
              :key="i"
              align="start"
              justify="center"
              class="!tw-p-12 !tw-pt-9 !-tw-mt-2 tw-bg-brand"
              v-show="contents == i && topic.items"
              no-gutters
              style="min-height: 220px"
            >
              <v-col cols="10">
                <v-row justify="center">
                  <v-col v-for="(menu, j) in topic.items" :key="j" cols="3">
                    <component
                      v-for="(item, k) in menu"
                      :key="k"
                      :is="
                        item.isNewtab ? 'a' : item.link ? 'router-link' : 'span'
                      "
                      :target="item.isNewtab ? '_blank' : ''"
                      :to="item.link"
                      :href="item.link"
                      :class="[
                        item.isHeader ? 'header !tw-mt-4' : 'body !tw-mt-3',
                        item.link && 'hover:!tw-text-brand-200',
                      ]"
                      >{{ $t(item.title) }}
                      <v-icon v-if="item.isNewtab" color="white"
                        >mdi-arrow-top-right</v-icon
                      ></component
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <div
        class="tw-fixed tw-w-full tw-h-full tw-backdrop-blur-[10px] tw-z-3 tw-top-[56px] md:tw-top-[64px] tw-left-0"
        :style="{ background: 'rgba(13, 14, 16, 0.2)' }"
        v-if="fab"
        style="z-index: 998"
        @click="fab = false"
      >
        <div class="tw-h-[64px] sm:tw-h-[80px] tw-bg-white" @click.stop="">
          <div
            class="tw-flex tw-mx-auto tw-max-w-[1780pxx] tw-w-full tw-h-full tw-items-center md:tw-px-8 tw-px-[16px]"
          >
            <div class="tw-flex tw-w-full tw-items-center">
              <v-icon color="#0D0E10">mdi-magnify </v-icon>
              <input
                placeholder="ค้นหา..."
                v-model="search"
                ref="searchInput"
                @keydown="handleEnter"
                class="tw-w-full tw-h-full py-3 px-4 border-none no-outline"
              />
              <div
                class="tw-text-weak tw-font-medium"
                :class="{ 'tw-text-accent': search }"
                @click="handleSearch"
              >
                ค้นหา
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="z-index: 998"
        v-if="isOpenNav"
        class="pt-top tw-top-0 tw-h-screen tw-overflow-y-scroll tw-flex tw-flex-col tw-w-full tw-fixed hidden-lg-and-up tw-text-white tw-text-lg"
      >
        <div
          v-for="(topic, i) in NavbarContent"
          :key="i"
          class="tw-flex tw-flex-col tw-bg-brand tw-border-b tw-border-brand-900"
        >
          <component
            :is="topic.items ? 'div' : 'router-link'"
            class="tw-flex tw-w-full tw-justify-between tw-items-center tw-p-4 !tw-text-white"
            router-link
            :to="topic.link"
            @click="opennavbar(contents != i ? i : null)"
          >
            <p
              router-link
              :to="topic.link"
              class="tw-w-fit tw-font-medium !tw-m-0"
            >
              {{ $t(topic.title) }}
            </p>
            <v-icon large color="white">
              {{
                !topic.items
                  ? "mdi-arrow-right-thin"
                  : contents == i
                  ? "mdi-chevron-up"
                  : "mdi-chevron-down"
              }}
            </v-icon>
          </component>
          <v-expand-transition>
            <v-row
              no-gutters
              v-show="contents == i"
              class="tw-w-full tw-items-start tw-bg-brand-900"
            >
              <v-col
                v-for="(menu, j) in topic.items"
                :key="j"
                cols="12"
                md="6"
                class="tw-w-full tw-flex tw-flex-col !tw-p-2 tw-items-start"
              >
                <component
                  v-for="(item, k) in menu"
                  :key="k"
                  :is="item.link ? 'router-link' : 'span'"
                  :to="item.link"
                  class="tw-text-lg tw-p-2"
                  :class="
                    item.isHeader
                      ? '-menu-header_color tw-font-semibold '
                      : '!tw-text-white'
                  "
                  >{{ $t(item.title) }}
                  <v-icon v-if="item.isNewtab" color="#ffffff"
                    >mdi-arrow-top-right</v-icon
                  ></component
                >
              </v-col>
            </v-row>
          </v-expand-transition>
        </div>
        <div
          class="tw-flex tw-bg-brand tw-w-full tw-justify-between tw-items-center tw-p-4 !tw-text-white"
        >
          <v-btn
            color="#2AB3A3"
            dark
            style="border-radius: 0px; box-shadow: none"
            class="tw-w-full !tw-font-semibold !tw-text-lg !tw-p-6"
            @click="goTo('/course/master/all')"
            >{{ $t("exploreCourse") }}
          </v-btn>
        </div>
        <div
          class="tw-w-full tw-h-full tw-backdrop-blur-md tw-z-0"
          @click="closenavbar"
        />
      </div>

      <v-main class="pt-top" style="background-color: white">
        <!-- <v-main style="background-color: white">
        <div class="pa-0 ma-0"> -->

        <router-view></router-view>
      </v-main>

      <!-- </div>
        </v-main> -->
    </v-app>
  </div>
</template>
<script>
import { Decode } from "@/services";

const forceNavPages = ["/search"];

const NAVBAR_CONTENT = [
  {
    title: "course",
    items: [
      [
        { title: "registerNotice", isHeader: true },
        { title: "register", link: "/apply/master" },
        // { title: "registerResult", link: "/news/admission-result" },
      ],
      [
        { title: "masterProgram", isHeader: true },
        { title: "allCourse", link: "/course/master/all" },
        // { title: "communicationArtsAndManagementInnovation", link: "#" },
        // { title: "communicationManagementWithDataAnalysis", link: "#" },
      ],
      [
        { title: "doctoralProgram", isHeader: true },
        { title: "allCourse", link: "/course/doctoral/all" },
        // { title: "communicationArtsAndManagementInnovation", link: "#" },
      ],
      [{ title: "scholarship", link: "/scholarship" }],
    ],
  },
  {
    title: "currentStudent",
    items: [
      [
        { title: "studySchedule", link: "/calendar/master" },
        { title: "scholarship", link: "/student-scholarship" },
        { title: "documentDownload", link: "/student-download" },
      ],
      [
        { title: "masterDegreeExamination", link: "/exam" },
        { title: "doctoralQualificationExamination", link: "/qualification" },
      ],
      [
        { title: "studentContribution", isHeader: true },
        { title: "infographic", link: "/studentwork" },
        { title: "video", link: "#", isNewtab: true },
      ],
      [
        { title: "studentServiceSystem", isHeader: true },
        // {
        //   title: "studentLogin",
        //   link: "https://reg.nida.ac.th/registrar/login.asp",
        //   isNewtab: true,
        // },
        // {
        //   title: "resourceReservationSystem",
        //   link: "http://ers.nida.ac.th/eReserve/SH/WebForms/Login.aspx",
        //   isNewtab: true,
        // },
        // {
        //   title: "eLearningSystem",
        //   link: "http://lms.nida.ac.th/moodle/",
        //   isNewtab: true,
        // },
        // {
        //   title: "library",
        //   link: "https://library.nida.ac.th/",
        //   isNewtab: true,
        // },
      ],
    ],
  },
  {
    title: "news",
    items: [
      [{ title: "facultyNewsAndEvent", link: "/news/faculty" }],
      [{ title: "generalNotice", link: "/news/general" }],
      [{ title: "registerResult", link: "/news/admission-result" }],
      [{ title: "goodToKnow", link: "/news/interesting" }],
    ],
  },
  {
    title: "academicWork",
    items: [
      [{ title: "dissertationAndResearch", link: "/dissertation" }],
      [
        { title: "academicConferences", isHeader: true },
        { title: "nationalAcademicConferences", link: "/conference/national" },
        {
          title: "internationalAcademicConferences",
          link: "/conference/internationals",
        },
      ],
      [
        { title: "academicJournal", isHeader: true },
        {
          title: "journalOfCommunicationArtsAndManagementInnovation",
          link: "/journal/communication-arts-and-innovation",
        },
        {
          title: "journalOfCommunicationAndManagement",
          link: "/journal/communication-and-management",
        },
      ],
      [
        { title: "communicationArtsKnowledge", link: "/knowledge" },
        { title: "annualReport", link: "/annualreport" },
      ],
    ],
  },
  {
    title: "aboutTheFaculty",
    items: [
      [
        { title: "facultyInformation", link: "/about-faculty" },
        { title: "facultyIdentity", link: "/brand" },
      ],
      [
        { title: "personnel", isHeader: true },
        { title: "teacherMembers", link: "/teachers" },
        { title: "staff", link: "/staff" },
      ],
      [
        // { title: "alumnus", link: "/alumni" },
        { title: "awards", link: "/awards" },
        { title: "cooperationNetwork", link: "/partner" },
      ],
      [
        {
          title: "cic",
          link: "https://cic.gscm.nida.ac.th/th/",
          isNewtab: true,
        },
        {
          title: "nida",
          link: "https://nida.ac.th/en/",
          isNewtab: true,
        },
      ],
    ],
  },
  {
    title: "contact",
    link: "/contactus",
  },
];

export default {
  computed: {
    forcedNav() {
      return forceNavPages.includes(this.$route.path);
    },
    isSearchPage() {
      return this.$route.path === "/search";
    },
  },
  watch: {
    isSearchPage(val) {
      if (val) {
        this.fab = true;
      } else {
        this.fab = false;
      }
    },
    $route(to, from) {
      this.closenavbar();
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  },
  data() {
    return {
      search: "",
      selected: 1,
      drawer: false,
      group: null,

      Header: "",
      // picture: "",
      username: "",
      NavigatorAdmin: [
        {
          headerName: "จัดการข้อมูล",
          menuItem: [
            {
              key: "menu3",
              text: "สาระความรู้",
              path: "/ManageBanners_3",
              name: "ManageBanners_3",
              icon: "youtube",
            },
          ],
        },
      ],
      NavigatorDefaut: [
        {
          headerName: "ข้อมูลรีพอร์ท",
          menuItem: [
            {
              key: "table1",
              text: "ข้อมูลการแจ้งเบาะแส",
              path: "/table1",
              name: "table1",
              icon: "youtube",
              pic: "@/assets/menu01.png",
            },
            {
              key: "table2",
              text: "รายชื่อผู้ต้องสงสัย",
              path: "/table2",
              name: "table2",
              icon: "youtube",
              pic: "@/assets/menu02.png",
            },
            {
              key: "table3",
              text: "ข้อมูลตามประเภทข้อมูล",
              path: "/table3",
              name: "table3",
              icon: "youtube",
              pic: "@/assets/menu03.png",
            },
          ],
        },
      ],
      NavbarContent: NAVBAR_CONTENT,

      Navigator: [],
      fab: false,
      transition: "slide-y-reverse-transition",
      bg: "#00000066",
      pageYOffset: 0,
      isOpenNav: false,
      overlay: false,
      contents: null,
      masterCourses: [],
      phDCourses: [],
    };
  },
  created() {
    if (Object.prototype.hasOwnProperty.call(localStorage, "Lang")) {
      // console.log('localStorage.getItem("Lang")', localStorage.getItem("Lang"));
      this.$store.commit("setLang", localStorage.getItem("Lang"));
      this.$i18n.locale = localStorage.getItem("Lang");
    }

    window.scrollTo(0, 0);
    this.Navigator = this.NavigatorDefaut;
    // console.log(this.$i18n.locale);
    // var checkuser = JSON.parse(
    //   Decode.decode(localStorage.getItem("userBebraveWeb"))
    // );
    // console.log("user", checkuser);
    // this.username = checkuser.name;

    // if (checkuser.user.user_type == "99") {
    // this.Navigator = this.NavigatorAdmin;
    // } else {
    //   this.Navigator = this.NavigatorDefaut;
    // }
    this.getCourses();

    this.CheckHeader();
    window.addEventListener("scroll", this.handleScroll);
    this.getStudentSystem();
  },

  methods: {
    async getStudentSystem() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/serviceSystemStudents`
      );
      // console.log("getStudentSystem", response.data.data[0]);
      // console.log("NAVBAR_CONTENT", NAVBAR_CONTENT[1].items[3]);
      if (response.data.data[0].login_link) {
        NAVBAR_CONTENT[1].items[3].push({
          title: "studentLogin",
          link: response.data.data[0].login_link,
          isNewtab: true,
        });
      }
      if (response.data.data[0].booking_link) {
        NAVBAR_CONTENT[1].items[3].push({
          title: "resourceReservationSystem",
          link: response.data.data[0].booking_link,
          isNewtab: true,
        });
      }
      if (response.data.data[0].e_learning_link) {
        NAVBAR_CONTENT[1].items[3].push({
          title: "eLearningSystem",
          link: response.data.data[0].e_learning_link,
          isNewtab: true,
        });
      }
      if (response.data.data[0].library_link) {
        NAVBAR_CONTENT[1].items[3].push({
          title: "library",
          link: response.data.data[0].library_link,
          isNewtab: true,
        });
      }
    },
    goTo(val) {
      this.$router.push(val);
    },
    async getCourses() {
      this.NavbarContent[0].items[1] = [];
      this.NavbarContent[0].items[1].push(
        { title: "masterProgram", isHeader: true },
        { title: "allCourse", link: "/course/master/all" }
      );
      this.NavbarContent[0].items[2] = [];
      this.NavbarContent[0].items[2].push(
        { title: "doctoralProgram", isHeader: true },
        { title: "allCourse", link: "/course/doctoral/all" }
      );
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/courses?status=เปิดใช้งาน`
        // 'http://localhost:8081/types/'
      );
      // console.log("getAllCourse Header", response.data.data);
      this.items = response.data.data;
      // this.imgUrl = response.data.data.imgUrl;
      // for (let i in this.items) {
      //   this.items[i].sortindex = parseInt(i) + 1;
      // }
      this.masterCourses = this.items.filter((x) => x.levelId == 12);
      this.phDCourses = this.items.filter((x) => x.levelId == 13);
      let that = this;
      this.masterCourses.forEach((element) => {
        let modifiedUrl = element.title_en.replace(/ /g, "_");
        that.NavbarContent[0].items[1].push({
          title:
            this.$store.state.lang == "th"
              ? element.title_th
              : element.title_en,

          link: `/course/master/${modifiedUrl}`,
        });
      });

      this.phDCourses.forEach((element) => {
        let modifiedUrl = element.title_en.replace(/ /g, "_");
        that.NavbarContent[0].items[2].push({
          title:
            this.$store.state.lang == "th"
              ? element.title_th
              : element.title_en,
          link: `/course/doctoral/${modifiedUrl}`,
        });
      });

      // console.log(this.NAVBAR_CONTENT);
    },
    handleEnter(e) {
      // console.log(e.key);
      if (e.key === "Enter") {
        this.handleSearch();
      }
    },
    handleSearch() {
      this.$router.push(`/search?keyword=${this.search}`);
      this.fab = false;
    },
    openSearchbar() {
      this.fab = !this.fab;
      if (this.fab) {
        this.isOpenNav = false;
        this.$nextTick(() => {
          const searchInput = this.$refs.searchInput;
          searchInput && searchInput.focus();
        });
      }
    },
    setLang(e) {
      let value = e.target.value;
      this.$store.commit("setLang", value);
      localStorage.setItem("Lang", value);
      // console.log(value);
      this.$i18n.locale = value;
    },
    goTosearch() {
      this.$router.push("/search");
    },
    opennavbar(val = null) {
      this.fab = false;
      if (val !== null && !this.NavbarContent[val].items)
        return this.closenavbar();
      this.isOpenNav = true;
      this.overlay = true;
      if (val !== null) this.contents = val;
      else this.contents = -1;
    },
    closenavbar() {
      this.isOpenNav = false;
      this.overlay = false;
      this.contents = null;
    },
    gotohome() {
      // console.log('window.location.search',this.$router.currentRoute.name);
      if (this.$router.currentRoute.name == "LanddingPage") {
        window.scrollTo(0, 0);
      } else {
        this.$router.push("/");
      }
      // this.$router.push("/");
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      // if (window.pageYOffset > 0) {
      //   if (this.view.topOfPage) this.view.topOfPage = false;
      // } else {
      //   if (!this.view.topOfPage) this.view.topOfPage = true;
      // }
    },
    howto() {
      window.open(
        "https://drive.google.com/file/d/1wVZ6qIWo_W3c9No1O7Ujg0peD_0Tbvxe/view?usp=sharing",
        "_blank"
      );
    },
    openKeys(val) {
      // console.log("openKeys", val);
    },
    handleClick(e) {
      // console.log("click", e);
    },
    titleClick(e) {
      // console.log("titleClick", e);
    },
    async ChangePage(val) {
      // // console.log('เข้า ChangePage', val)
      // // console.log(val, this.$router.currentRoute)
      if (val.name !== this.$router.currentRoute.name) {
        this.$router.push({ path: val.path }).catch(() => {});
      }
    },
    CheckHeader(val) {
      // console.log("check Header");
      this.Header = val;
    },
    Logout() {
      localStorage.removeItem("userBebraveWeb");
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.no-outline {
  outline: none !important;
}
.centerdiv {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.div_overflow {
  background-color: #f2f4f7;

  overflow: auto;
}
.header {
  /* color: #afafaf; */
  color: #7ecbff;
  border-bottom: 1px solid rgba(126, 203, 255, 0.5);
  padding: 0px 10px 10px 0px;
  margin-bottom: 15px;
}
.body {
  color: white;
}
</style>
<style>
.v-application ul,
.v-application ol {
  padding: 0px 0px !important;
}
.navbar:hover,
.navbar-hover {
  border-bottom: solid #2ab3a3 2px;
}
</style>
