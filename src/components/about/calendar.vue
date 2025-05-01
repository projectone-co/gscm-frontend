<template>
  <!-- <v-form style="background-color: #fff">
    <v-img src="@/assets/icons/staffImage.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col
          cols="10"
          style="position: absolute; bottom: 10%; left: 10%"
          class="totextcenter"
        >
          <v-chip outlined dark style="border: solid 1px">
            เกี่ยวกับคณะ
          </v-chip>
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            รางวัลที่ได้รับ
          </span>
        </v-col>
      </v-row>
    </v-img> -->

  <div style="background-color: #fff" class="-mt-top" no-gutters>
    <Headers
      :img="require('@/assets/icons/calendarcover.png')"
      polygon
      title="studySchedule"
      description="studyCalendarStudyScheduleAndExamSchedule"
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
    <div class="tw-max-w-[1200px] tw-mx-auto tw-px-[16px] md:tw-px-[64px]">
      <Tabs :tabs="tabs" v-model="selectedtab" />
      <CalendarTabs :tabs="pageTabs" v-model="selectedPage" />
      <div
        class="tw-mt-[32px] sm:tw-mt-[40px] tw-mb-[56px] sm:tw-mb-[64px] md:tw-mb-[96px]"
      >
        <!-- <v-row class="fill-height"> -->
        <template v-if="selectedPage === 1">
          <div>
            <div
              class="tw-flex tw-flex-col sm:tw-flex-row tw-mb-[24px] sm:tw-mb-[36px] tw-items-start sm:tw-items-center tw-gap-[16px] sm:tw-gap-0"
            >
              <v-btn
                style="border-color: #e2e2e2; color: #0d0e10"
                class="tw-mr-[24px] tw-min-w-[85px] !tw-p-[12px] !tw-rounded-none !tw-h-[48px]"
                outlined
                @click="setToday"
              >
                <span>{{
                  $store.state.lang == "th" ? "วันนี้" : "Today"
                }}</span>
              </v-btn>
              <div class="tw-flex tw-items-center">
                <v-btn
                  fab
                  text
                  small
                  class="!tw-min-w-[48px] !tw-min-h-[48px]"
                  color="grey darken-2"
                  @click="prev"
                >
                  <v-icon small> mdi-arrow-left </v-icon>
                </v-btn>
                <v-btn
                  fab
                  text
                  small
                  class="!tw-min-w-[48px] !tw-min-h-[48px] tw-mr-[24px]"
                  color="grey darken-2"
                  @click="next"
                >
                  <v-icon small> mdi-arrow-right </v-icon>
                </v-btn>
                <v-toolbar-title
                  v-if="$refs.calendar"
                  class="tw-font-semibold !tw-text-[22px] sm:!tw-text-[24px] md:!tw-text-[28px] !tw-leading-none"
                >
                  {{ monthHeader }} {{ yearHeader }}
                  <!-- {{ $refs.calendar.title }} -->
                </v-toolbar-title>
              </div>
              <v-spacer class="tw-hidden sm:tw-block"></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="tw-p-[12px] !tw-rounded-none !tw-h-[48px] !tw-min-w-[120px] !tw-justify-between"
                    outlined
                    style="border-color: #e2e2e2; color: #0d0e10"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{
                      $store.state.lang == "th"
                        ? typeToLabel[type]
                        : typeToLabel_EN[type]
                    }}</span>
                    <v-icon right> mdi-chevron-down </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>{{ $t("month") }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>{{ $t("week") }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>{{ $t("day") }}</v-list-item-title>
                  </v-list-item>
                  <!-- <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item> -->
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-sheet
            height="600"
            class="tw-overflow-auto tw-relative tw-left-[16px] sm:tw-left-0 tw-ml-[-16px] sm:tw-ml-[0]"
          >
            <v-calendar
              class="tw-min-w-[500px] tw-mr-[16px] sm:tw-mr-[0]"
              ref="calendar"
              locale="th"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange(events)"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              content-class="custom-menu !tw-min-w-[300px] sm:!tw-max-w-[300px] sm:!tw-min-w-[350px] sm:!tw-max-w-[350px]"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
              @input="handleMenuClose"
            >
              <div
                class="tw-p-[24px] tw-bg-white !tw-rounded-none tw-flex tw-flex-col"
              >
                <v-icon class="tw-ml-auto" @click="selectedOpen = false">
                  mdi-close
                </v-icon>
                <div class="tw-text-[24px] tw-font-semibold tw-mb-[12px]">
                  {{
                    $store.state.lang == "th"
                      ? selectedEvent.name
                      : selectedEvent.name_en
                  }}
                </div>
                <div class="tw-text-[16px] tw-mb-[20px]" style="color: #545454">
                  {{
                    $store.state.lang == "th"
                      ? selectedEvent.desc_th
                      : selectedEvent.desc_en
                  }}
                </div>
                <div
                  class="tw-flex tw-gap-[12px] tw-mb-[12px]"
                  style="color: #545454"
                >
                  <img src="/icons/calendar-grey.svg" />
                  <!-- วันที่ {{ selectedEvent.start }} ถึงวันที่
                  {{ selectedEvent.end }} -->
                  <!-- วันอังคาร, 09 สิงหาคม 2565 -->
                  <v-row>
                    <v-col cols="12">
                      {{ selectedEvent.dayOfWeek }},
                      {{ selectedEvent.getDate }}
                      {{ selectedEvent.thaiMonth }}
                      {{ selectedEvent.getThaiYear }}
                    </v-col>
                    <!-- <v-col cols="2">
                      <span>ถึง</span>
                    </v-col>
                    <v-col cols="5">
                      {{ selectedEvent.dayOfWeek1 }},<br />
                      {{ selectedEvent.getDate1 }}
                      {{ selectedEvent.thaiMonth1 }}
                      {{ selectedEvent.getThaiYear1 }}
                    </v-col> -->
                  </v-row>
                </div>
                <div class="tw-flex tw-gap-[12px]" style="color: #545454">
                  <img src="/icons/time-grey.svg" />
                  {{ selectedEvent.timeStart }}
                  {{ $store.state.lang == "th" ? "ถึง" : "To" }}
                  {{ selectedEvent.timeEnd }}
                  <!-- 10:30 น. ถึง 11:30 น. -->
                </div>
                <!-- <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text> -->
              </div>
            </v-menu>
          </v-sheet>
        </template>
        <template v-if="selectedPage === 2">
          <div
            class="tw-mb-[24px] sm:tw-mb-[32px] tw-text-[22px] sm:tw-text-[28px] md:tw-text-[36px] tw-font-semibold"
          >
            <span style="color: #0d0e10">{{ $t("documentDownload") }}</span>
          </div>
          <DownloadItem
            :title="$store.state.lang == 'th' ? i.name_th : i.name_en"
            :downloadUrl="i.documentFiles"
            v-for="i in selectedtab == 1 ? scheduleItems : scheduleItems1"
          />
        </template>
        <template v-if="selectedPage === 3">
          <div
            class="tw-mb-[24px] sm:tw-mb-[32px] tw-text-[22px] sm:tw-text-[28px] md:tw-text-[36px] tw-font-semibold"
          >
            <span style="color: #0d0e10">{{ $t("documentDownload") }}</span>
          </div>
          <DownloadItem
            :title="$store.state.lang == 'th' ? i.name_th : i.name_en"
            :downloadUrl="i.documentFiles"
            v-for="i in selectedtab == 1
              ? examScheduleItems
              : examScheduleItems1"
          />
        </template>
      </div>
    </div>
    <div style="background-color: #f6f6f6" v-if="selectedPage === 1">
      <div
        class="tw-max-w-[1200px] tw-mx-auto tw-px-[16px] md:tw-px-[64px] md:tw-pt-[96px] md:tw-pb-[128px] tw-py-[56px] sm:tw-py-[64px]"
      >
        <div
          class="tw-mb-[24px] sm:tw-mb-[32px] tw-text-[22px] sm:tw-text-[28px] md:tw-text-[36px] tw-font-semibold"
        >
          <span style="color: #0d0e10">{{ $t("documentDownload") }}</span>
        </div>
        <DownloadItem
          :title="$store.state.lang == 'th' ? i.name_th : i.name_en"
          :downloadUrl="i.documentFiles"
          v-for="i in selectedtab == 1 ? items : items1"
        />
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
import Headers from "@/components/Headers.vue";
import ImageWithCover from "../ImageWithCover.vue";
import Tabs from "../Tabs.vue";
import CalendarTabs from "../_components-Calendar/CalendarTabs.vue";
import DownloadItem from "../_components-Calendar/DownloadItem.vue";
import moment from "moment";

export default {
  components: {
    Footers,
    BigButton,
    Headers,
    ImageWithCover,
    Tabs,
    CalendarTabs,
    DownloadItem,
  },
  data() {
    return {
      monthHeader: "",
      yearHeader: "",
      title: "ตารางการศึกษา",
      focus: "",
      type: "month",
      typeToLabel: {
        month: "เดือน",
        week: "สัปดาห์",
        day: "วัน",
        // "4day": "4 Days",
      },
      typeToLabel_EN: {
        month: "MONTH",
        week: "WEEK",
        day: "DAY",
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      events1: [],
      events2: [],
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
      names: [
        "Meeting",
        "Holiday",
        "PTO",
        "Travel",
        "Event",
        "Birthday",
        "Conference",
        "Party",
      ],
      tabs: [
        {
          id: 1,
          text: "masterDegree",
          icon: "/icons/certificate-star.svg",
          iconActive: "/icons/certificate-star-active.svg",
        },
        {
          id: 2,
          text: "doctoralDegree",
          icon: "/icons/certificate-badge.svg",
          iconActive: "/icons/certificate-badge-active.svg",
        },
      ],
      pageTabs: [
        {
          id: 1,
          text: "studyCalendar",
          icon: "/calendar/calendar-heat-map.svg",
          iconActive: "/calendar/calendar-heat-map-active.svg",
        },
        {
          id: 2,
          text: "studySchedule2",
          icon: "/calendar/notebook.svg",
          iconActive: "/calendar/notebook-active.svg",
        },
        {
          id: 3,
          text: "studyExam",
          icon: "/calendar/edit.svg",
          iconActive: "/calendar/edit-active.svg",
        },
      ],
      selectedtab: null,
      previousTab: null,
      selectedPage: 1,
      items: [
        // { title: "ปฏิทินการศึกษา 2565" },
        // { title: "ปฏิทินการศึกษา 2564" },
        // { title: "ปฏิทินการศึกษา 2563" },
        // { title: "ปฏิทินการศึกษา 2562" },
        // { title: "ปฏิทินการศึกษา 2561" },
      ],
      items1: [],
      scheduleItems: [
        // { title: "สาขาวิชาการจัดการการสื่อสารด้วยการวิเคราะห์ข้อมูล (1/2565)" },
        // { title: "สาขาวิชานิเทศศาสตร์และนวัตกรรม (1/2565)" },
      ],
      scheduleItems1: [],
      examScheduleItems: [],
      examScheduleItems1: [],

      mapTypes: {
        master: 1,
        doctoral: 2,
      },

      monthCalendar: null,

      backupCalandar: null,
    };
  },

  created() {
    if (this.$route.params.degree == "master") {
      this.selectedtab = 1;
    } else {
      this.selectedtab = 2;
    }

    this.previousTab = this.selectedtab;
  },

  mounted() {
    this.getAllTable();
    this.getAllCalendarItems();
    this.getAll();
    this.getAllexamScheduleItems();

    window.addEventListener("scroll", this.handleScroll);
    this.$refs.calendar.checkChange();

    this.setTitleCalendar();
  },
  watch: {
    "$store.state.lang"(val) {
      if (val) {
        this.$router.go();
      }
    },
    async selectedPage(val) {
      if (val == 1) {
        this.$refs.calendar = this.backupCalandar;
        setTimeout(() => {
          this.setTitleCalendar();
        }, 500);
      }
    },
    selectedtab(val) {
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.value == val).param;
      history.pushState({}, "", `/calendar/${pathParam}`);

      if (this.selectedtab == 1) {
        this.events = this.events1;
      } else {
        this.events = this.events2;
      }

      if (this.selectedtab !== this.previousTab) {
        this.$router.go();
      }
    },
    selectedEvent(val) {
      if (val) {
        console.log("val", val);

        let startDate = val.start;
        let getDate = new Date(val.start).getDate();
        let getThaiYear = new Date(val.start).getFullYear() + 543;
        this.selectedEvent.getDate = getDate;
        this.selectedEvent.getThaiYear = getThaiYear;

        // console.log("getDate", getDate);
        // console.log("getThaiYear", getThaiYear);

        let checkDay = moment(startDate).format("dddd");

        let checkMonth = moment(startDate).format("MM");
        // console.log("checkMonth", checkMonth);
        const thaiMonthNames = [
          "มกราคม",
          "กุมภาพันธ์",
          "มีนาคม",
          "เมษายน",
          "พฤษภาคม",
          "มิถุนายน",
          "กรกฎาคม",
          "สิงหาคม",
          "กันยายน",
          "ตุลาคม",
          "พฤศจิกายน",
          "ธันวาคม",
        ];
        const thaiMonthNames_EN = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const strippedNumber = checkMonth.replace(/^0+/, "");

        ///////////// End Date ////////////////

        let endDate = val.end;
        let getDate1 = new Date(val.end).getDate();
        let getThaiYear1 = new Date(val.end).getFullYear() + 543;
        this.selectedEvent.getDate1 = getDate1;
        this.selectedEvent.getThaiYear1 = getThaiYear1;

        // console.log("getDate1", getDate1);
        // console.log("getThaiYear1", getThaiYear1);

        let checkDay1 = moment(endDate).format("dddd");
        // console.log("checkDay1", checkDay1);

        let checkMonth1 = moment(endDate).format("MM");
        // console.log("checkMonth1", checkMonth1);
        const thaiMonthNames1 = [
          "มกราคม",
          "กุมภาพันธ์",
          "มีนาคม",
          "เมษายน",
          "พฤษภาคม",
          "มิถุนายน",
          "กรกฎาคม",
          "สิงหาคม",
          "กันยายน",
          "ตุลาคม",
          "พฤศจิกายน",
          "ธันวาคม",
        ];
        const thaiMonthNames1_EN = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const strippedNumber1 = checkMonth1.replace(/^0+/, "");

        if (this.$store.state.lang == "th") {
          this.selectedEvent.thaiMonth = thaiMonthNames[strippedNumber - 1];
          this.selectedEvent.thaiMonth1 = thaiMonthNames1[strippedNumber1 - 1];
          //////////////
          if (checkDay == "Monday") {
            this.selectedEvent.dayOfWeek = "วันจันทร์";
          }
          if (checkDay == "Tuesday") {
            this.selectedEvent.dayOfWeek = "วันอังคาร";
          }
          if (checkDay == "Wednesday") {
            this.selectedEvent.dayOfWeek = "วันพุทธ";
          }
          if (checkDay == "Thursday") {
            this.selectedEvent.dayOfWeek = "วันพฤหัสบดี";
          }
          if (checkDay == "Friday") {
            this.selectedEvent.dayOfWeek = "วันศุกร์";
          }
          if (checkDay == "Saturday") {
            this.selectedEvent.dayOfWeek = "วันเสาร์";
          }
          if (checkDay == "Sunday") {
            this.selectedEvent.dayOfWeek = "วันอาทิตย์";
          }
          //////////////
          if (checkDay1 == "Monday") {
            this.selectedEvent.dayOfWeek1 = "วันจันทร์";
          }
          if (checkDay1 == "Tuesday") {
            this.selectedEvent.dayOfWeek1 = "วันอังคาร";
          }
          if (checkDay1 == "Wednesday") {
            this.selectedEvent.dayOfWeek1 = "วันพุทธ";
          }
          if (checkDay1 == "Thursday") {
            this.selectedEvent.dayOfWeek1 = "วันพฤหัสบดี";
          }
          if (checkDay1 == "Friday") {
            this.selectedEvent.dayOfWeek1 = "วันศุกร์";
          }
          if (checkDay1 == "Saturday") {
            this.selectedEvent.dayOfWeek1 = "วันเสาร์";
          }
          if (checkDay1 == "Sunday") {
            this.selectedEvent.dayOfWeek1 = "วันอาทิตย์";
          }
        } else {
          this.selectedEvent.dayOfWeek = checkDay;
          this.selectedEvent.dayOfWeek1 = checkDay;
          //
          this.selectedEvent.thaiMonth = thaiMonthNames_EN[strippedNumber - 1];
          this.selectedEvent.thaiMonth1 =
            thaiMonthNames1_EN[strippedNumber1 - 1];
        }
        // console.log("this.selectedEvent 123", this.selectedEvent);
      } else {
        this.$router.go(0);
      }
    },
  },
  // examScheduleItems
  methods: {
    setTitleCalendar() {
      // console.log("this.$refs.calendar", this.$refs.calendar);
      const thaiMonthNames1 = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      const thaiMonthNames1_EN = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let checkMonth = moment(this.$refs.calendar.lastEnd.date).format("MM");
      // let checkMonth = moment(new Date()).format("MM");
      let checkYears = new Date(this.$refs.calendar.lastEnd.date).getFullYear();
      const strippedNumber1 = checkMonth.replace(/^0+/, "");
      if (this.$store.state.lang == "th") {
        this.monthHeader = thaiMonthNames1[strippedNumber1 - 1];
        this.yearHeader = parseInt(checkYears + 543);
      } else {
        this.monthHeader = thaiMonthNames1_EN[strippedNumber1 - 1];
        this.yearHeader = checkYears;
      }

      if (this.selectedPage == 1) {
        this.backupCalandar = this.$refs.calendar;
      }
    },
    handleMenuClose(event) {
      // console.log("event 123", event);
      // this.showEvent();
    },
    async getAllCalendarItems() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?types=1&&table_name=ปฎิทินการศึกษา`
      );
      // console.log("CalendarItems", response.data.data);
      this.items = response.data.data;
      const response1 = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?types=2&&table_name=ปฎิทินการศึกษา`
      );
      // console.log("CalendarItems", response1.data.data);
      this.items1 = response1.data.data;
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?types=1&&table_name=ตารางเรียน`
      );
      // console.log("scheduleItems", response.data.data);
      this.scheduleItems = response.data.data;
      const response1 = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?types=2&&table_name=ตารางเรียน`
      );
      // console.log("scheduleItems", response1.data.data);
      this.scheduleItems1 = response1.data.data;
    },
    async getAllexamScheduleItems() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?types=1&&table_name=ตารางสอบ`
      );
      // console.log("exam", response.data.data);
      this.examScheduleItems = response.data.data;
      const response1 = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?types=2&&table_name=ตารางสอบ`
      );
      // console.log("exam", response1.data.data);
      this.examScheduleItems1 = response1.data.data;
    },
    gotodetail(id) {
      this.$router.push(`/staff-detail?id=${id}`);
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
    ///////////////////////////////////////
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return "#2AB3A3";
    },
    setToday() {
      this.focus = "";
    },
    async prev() {
      await this.$refs.calendar.prev();

      const thaiMonthNames1 = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      const thaiMonthNames1_EN = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      console.log("this.$refs.calendar", this.$refs.calendar);

      let checkMonth = moment(this.$refs.calendar.lastEnd.date).format("MM");
      let checkYears = new Date(this.$refs.calendar.lastEnd.date).getFullYear();
      console.log("checkMonth", checkMonth);
      const strippedNumber1 = checkMonth.replace(/^0+/, "");
      if (this.$store.state.lang == "th") {
        this.monthHeader = thaiMonthNames1[strippedNumber1 - 1];
        this.yearHeader = parseInt(checkYears + 543);
      } else {
        this.monthHeader = thaiMonthNames1_EN[strippedNumber1 - 1];
        this.yearHeader = checkYears;
      }
    },

    async next() {
      await this.$refs.calendar.next();

      const thaiMonthNames1 = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      const thaiMonthNames1_EN = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // console.log("this.$refs.calendar", this.$refs.calendar);

      let checkMonth = moment(this.$refs.calendar.lastEnd.date).format("MM");
      let checkYears = new Date(this.$refs.calendar.lastEnd.date).getFullYear();
      // console.log("checkMonth", checkMonth);
      // console.log("checkYears", checkYears);
      const strippedNumber1 = checkMonth.replace(/^0+/, "");
      if (this.$store.state.lang == "th") {
        this.monthHeader = thaiMonthNames1[strippedNumber1 - 1];
        this.yearHeader = parseInt(checkYears + 543);
      } else {
        this.monthHeader = thaiMonthNames1_EN[strippedNumber1 - 1];
        this.yearHeader = checkYears;
      }
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        // this.$set(this, "selectedEvent", event);
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };
      // console.log("selectedElement", this.selectedElement);
      // console.log("nativeEvent", nativeEvent);

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    async getAllTable() {
      this.loading = true;
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/calendarAcademics?types=ปริญญาโท`
      );
      // console.log("events1", response.data.data);
      this.events1 = response.data.data;
      const response1 = await this.axios.get(
        `${process.env.VUE_APP_API}/calendarAcademics?types=ปริญญาเอก`
      );
      // console.log("events2", response1.data.data);
      this.events2 = response1.data.data;

      if (this.selectedtab == 1) {
        this.selectedOpen = false;
        this.events = this.events1;
      } else {
        this.selectedOpen = false;
        this.events = this.events2;
      }

      if (this.$store.state.lang == "th") {
        this.events.forEach((element) => {
          element.name = element.name_th;
        });
      } else {
        this.events.forEach((element) => {
          element.name = element.name_en;
        });
      }

      this.loading = false;
    },
    async updateRange(event) {
      // console.log("updateRange", event);
      // console.log("event update", event);
      // const events = [];
      // const min = new Date(`${start.date}T00:00:00`);
      // const max = new Date(`${end.date}T23:59:59`);
      // const days = (max.getTime() - min.getTime()) / 86400000;
      // const eventCount = this.rnd(days, days + 20);
      // for (let i = 0; i < eventCount; i++) {
      //   const allDay = this.rnd(0, 3) === 0;
      //   const firstTimestamp = this.rnd(min.getTime(), max.getTime());
      //   const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
      //   const second = new Date(first.getTime() + secondTimestamp);
      //   events.push({
      //     name: this.names[this.rnd(0, this.names.length - 1)],
      //     description:
      //       "Eiusmod ipsum est ipsum reprehenderit amet pariatur nisi qui.",
      //     start: first,
      //     end: second,
      //     color: this.colors[this.rnd(0, this.colors.length - 1)],
      //     timed: !allDay,
      //   });
      // }
      // this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-calendar {
  ::v-deep {
    .v-calendar-weekly__head-weekday,
    .v-calendar-daily_head-weekday {
      color: #6b6b6b !important;
      &.primary--text {
        color: #2ab3a3 !important;
      }
    }
    .v-calendar-weekly__day-label,
    .v-calendar-daily_head-day-label {
      .v-btn.primary {
        ::before {
          background: none;
        }
        background-color: #ffffff !important;
        color: #2ab3a3;
      }
    }
    .v-calendar-weekly__head-weekday {
      padding: 4px;
    }
    .v-calendar-weekly__day-label {
      margin-top: 0;
    }
    .v-event-more {
      margin-left: 1px;
      max-width: calc(100% - 1px);
    }
  }
}
.custom-menu {
  overflow: initial;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.12);
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