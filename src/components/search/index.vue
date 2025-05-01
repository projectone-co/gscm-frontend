<template>
  <div>
    <div
      class="tw-mx-auto tw-max-w-[1440px] tw-w-full tw-h-full tw-items-center tw-px-[16px] md:tw-px-8"
    >
      <div
        class="tw-h-[80px] tw-bg-white tw-w-full tw-flex tw-w-full tw-items-center"
        style="border-bottom: 1px solid #e2e2e2"
      >
        <v-icon color="#0D0E10">mdi-magnify </v-icon>
        <input
          @keydown="handleEnter"
          :placeholder="$store.state.lang == 'th' ? 'ค้นหา...' : 'Search...'"
          v-model="search"
          class="tw-w-full tw-h-full py-3 px-4 border-none no-outline"
        />
        <div
          class="tw-text-weak tw-font-medium"
          :class="{ 'tw-text-accent': search }"
          @click="handleSearch"
        >
          {{ $store.state.lang == "th" ? "ค้นหา" : "Search" }}
        </div>
      </div>
      <div class="">
        <div class="tw-mb-[64px] sm:tw-mb-[96px]">
          <div
            class="tw-gap-[16px] tw-flex-wrap sm:tw-my-[36px] tw-my-[24px] md:tw-my-[48px] tw-flex tw-justify-between"
          >
            <div>
              <span>
                {{ $store.state.lang == "th" ? "ผลลัพธ์" : "Result" }}
                : {{ items.length }}
                {{ $store.state.lang == "th" ? "รายการ" : "List" }}</span
              >
            </div>
            <div>
              <!-- <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <span>
                    {{ $store.state.lang == "th" ? "จัดเรียงตาม" : "Sort by" }}
                  </span>
                  <v-btn
                    style="border: 1px solid #e2e2e2"
                    class="tw-ml-[12px] !tw-p-[12px] !tw-rounded-none !tw-h-[48px]"
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span style="color: #0d0e10">
                      {{ filter }} <v-icon>mdi-chevron-down</v-icon></span
                    >
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="filter = 'ความเกี่ยวข้อง'">
                    <v-list-item-title
                      >ความเกี่ยวข้อง related</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item @click="filter = 'ใหม่ล่าสุด'">
                    <v-list-item-title>ใหม่ล่าสุด</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu> -->
              <!-- <v-select
                v-model="filter"
                items="ความเกี่ยวข้อง,อื่นๆ"
                solo
                denses
              ></v-select> -->
            </div>
          </div>
          <div>
            <div v-if="!items.length">
              <div
                class="tw-mb-[8px] md:tw-text-[28px] sm:tw-text-[24px] tw-text-[22px]"
              >
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai';
                    font-style: normal;
                    font-weight: 600;
                  "
                >
                  {{
                    $store.state.lang == "th"
                      ? "ไม่มีผลลัพธสำหรับ"
                      : "No result"
                  }}
                  "{{ searched }}"
                </span>
              </div>
              <div>
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #545454;
                  "
                >
                  {{
                    $store.state.lang == "th"
                      ? "ลองค้นหาด้วยคำใหม่"
                      : "Try again"
                  }}
                </span>
              </div>
            </div>
            <div v-for="i in items" class="tw-mb-[16px]" v-else>
              <span
                class="text1"
                style="
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  text-overflow: ellipsis;
                  text-align: left;
                  overflow: hidden;
                "
              >
                <a @click="goToPage(i)" target="_blank">
                  {{
                    $store.state.lang == "th"
                      ? i.name_th
                      : i.name_en
                      ? i.name_en
                      : i.name_th
                  }}
                </a>
              </span>
              <span class="text2">
                {{ $store.state.lang == "th" ? i.typeSearch_th : i.typeSearch }}
              </span>
              <br />
              <div class="tw-flex tw-gap-[6px]">
                <!-- <div>
                  <img
                    src="@/assets/icons/16294481801.png"
                    style="min-width: 64px"
                    width="60px"
                    height="84px"
                  />
                </div> -->

                <div>
                  <span
                    class="text3"
                    style="
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 6;
                      text-overflow: ellipsis;
                      text-align: left;
                      overflow: hidden;
                    "
                  >
                    <!-- การแสวงหาข้อมูลจากกระดานสนทนาไทยเกี่ยวกับเนื้อหาด้านสุขภาพ
                    ที่ประสบความสำเร็จ - กมลชนก เศรษฐบุตร (หน้า 1 - 19) ·
                    <br />
                    ปัจจัยที่ส่งผลต่อการยอมรับเทคโนโลยีการใช้งานแอป ... -->
                  </span>
                </div>
              </div>
            </div>
            <div v-if="result">
              <!-- <v-pagination
                v-model="page"
                activeColor=""
                :length="6"
                color="#2AB3A3"
                class="md:tw-pt-[64px] sm:tw-pt-[48px] tw-pt-[32px]"
              ></v-pagination> -->
            </div>
            <!-- <div class="text-center tw-mt-[24px]">
              <span style="
                  font-family: 'IBM Plex Sans Thai';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  text-align: center;
                  color: #2ab3a3;
                "><v-icon>mdi-magnify</v-icon>ค้นหา การจัดการข้อมูล ใน Google</span>
            </div> -->
          </div>
        </div>
        <!-- <v-row> -->
        <!-- </v-row> -->
      </div>
    </div>
    <Footers />

    <v-dialog scrollable v-model="dialogStudentWork" width="600" height="80vh">
      <v-card class="" height="80vh">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialogStudentWork = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="px-8">
          <v-img :src="selectedImg" class="responsive" height="auto"></v-img>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      scrollable
      v-model="dialogAward"
      max-width="600px"
      height="80vh"
      v-if="selectedAward"
    >
      <v-card class="">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="selectedAward = null">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="px-8" style="max-height: 550px">
          <v-carousel
            v-model="model"
            height="355"
            hide-delimiters
            :show-arrows="true"
            style="padding-left: 0px; padding-right: 0px"
          >
            <div class="Homepage-Wrapper">
              <v-carousel-item
                class="!tw-h-[100px] sm:!tw-h-[230px]"
                v-for="(selectedAward, index1) in selectedAward.pathPic"
                :key="index1"
              >
                <img
                  class="Homepage-Banner"
                  :src="selectedAward.path"
                  alt="Snow"
                />
              </v-carousel-item>
            </div>
          </v-carousel>
          <br />
          <!-- <v-img src="@/assets/icons/02.png"></v-img>
        <br /> -->
          <span style="font-weight: 600; font-size: 22px; line-height: 32px">
            {{
              $store.state.lang == "th"
                ? selectedAward.name_th
                : selectedAward.name_en
                ? selectedAward.name_en
                : selectedAward.name_th
            }}
          </span>
          <br />
          <span style="font-weight: 400; font-size: 14px"
            ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
            {{ $t("receiver") }} :
            {{
              $store.state.lang == "th"
                ? selectedAward.recipient_th
                : selectedAward.recipient_en
                ? selectedAward.recipient_en
                : selectedAward.recipient_th
            }}</span
          >
          <br />
          <span style="font-weight: 400; font-size: 14px"
            ><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
            {{ $t("yearOfReceipt") }} : {{ selectedAward.years_received }}</span
          >
          <br />
          <br />
          <span
            style="
              font-family: 'IBM Plex Sans Thai Looped';
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              color: #545454;
            "
            v-html="
              $store.state.lang == 'th'
                ? selectedAward.desc_th
                : selectedAward.desc_en
                ? selectedAward.desc_en
                : selectedAward.desc_th
            "
          >
            <!-- {{ selectedAward.desc_th }} -->
          </span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Footers from "@/components/Footers.vue";
export default {
  components: { Footers },
  data() {
    return {
      dialogAward: false,
      dialogStudentWork: false,
      selectedImg: null,
      selectedAward: null,
      model: "",

      search: "",
      searched: "",
      // page: 1,
      filter: "ความเกี่ยวข้อง",
      result: false,

      items: [],
    };
  },

  created() {},
  mounted() {
    this.search = this.$route.query.keyword;
    this.searched = this.$route.query.keyword;
    this.searchGlobal();
  },

  methods: {
    goToPage(item) {
      if (item.typeSearch == "Course") {
        let name_en = item.name_en;
        let modifiedUrl = name_en.replace(/ /g, "_");
        const url = `/course/${
          item.levelId === 12 ? "master" : "doctoral"
        }/${modifiedUrl}`;
        window.open(url, "_blank");
      }
      if (item.typeSearch == "Enroll") {
        if (item.levelId == 12) {
          const url = `/apply/master`;
          window.open(url, "_blank");
        } else {
          const url = `/apply/doctoral`;
          window.open(url, "_blank");
        }
      }

      if (item.typeSearch == "Scholarship") {
        if (item.levelId == 12 || item.levelId == 13) {
          const url = `/scholarship`;
          window.open(url, "_blank");
        } else {
          const url = `/student-scholarship`;
          window.open(url, "_blank");
        }
      }

      if (item.typeSearch == "Carlendars") {
        if (item.types == 1) {
          const url = `/calendar/master`;
          window.open(url, "_blank");
        } else {
          const url = `/calendar/doctoral`;
          window.open(url, "_blank");
        }
      }

      if (item.typeSearch == "DownloadFilesStudents") {
        const url = item.attachFile1;
        window.open(url, "_blank");
      }

      if (item.typeSearch == "KnowledgeTestAndQualificationExams") {
        if (item.id == 1) {
          const url = `exam`;
          window.open(url, "_blank");
        }
        if (item.id == 2) {
          const url = `qualification`;
          window.open(url, "_blank");
        }
      }

      if (item.typeSearch == "Infographic") {
        this.selectedImg = item.image_url_en;
        this.dialogStudentWork = true;
      }

      if (item.typeSearch == "News") {
        let name_en = item.name_en;
        let modifiedUrl = name_en.replace(/ /g, "_");
        if (item.type == "1") {
          window.open(`/news/faculty/${modifiedUrl}`, "_blank");
        }
        if (item.type == "2") {
          window.open(`/news/general/${modifiedUrl}`, "_blank");
        }
        if (item.type == "3") {
          window.open(`/news/admission-result/${modifiedUrl}`, "_blank");
        }
        if (item.type == "4") {
          window.open(`/news/interesting/${modifiedUrl}`, "_blank");
        }
      }

      if (item.typeSearch == "ThesisAndResearchs") {
        const url = item.download_url;
        window.open(url, "_blank");
      }

      if (item.typeSearch == "AcademicJournals") {
        if (item.publisher_th == "ประกาศประชุมวิชาการระดับชาติ") {
          const url = `/conference/national/${item.id}`;
          window.open(url, "_blank");
        }
        if (item.publisher_th == "ประกาศประชุมวิชาการระดับนานาชาติ") {
          const url = `/conference/internationals/${item.id}`;
          window.open(url, "_blank");
        }
        if (item.publisher_th == "นิเทศศาสตร์และนวัตกรรม") {
          const url = `/journal/communication-arts-and-innovation/${item.id}`;
          window.open(url, "_blank");
        }
        if (item.publisher_th == "การสื่อสารและการจัดการ") {
          const url = `/journal/communication-and-management/${item.id}`;
          window.open(url, "_blank");
        }
      }

      if (item.typeSearch == "KnowledgeLibraries") {
        const url = item.attachFile1;
        window.open(url, "_blank");
      }

      if (item.typeSearch == "AnnualReports") {
        const url = `/annual-detail?id=${item.id}`;
        window.open(url, "_blank");
      }

      if (item.typeSearch == "TeacherDetails") {
        if (item.types == "1") {
          const url = `/teachers/${item.id}`;
          window.open(url, "_blank");
        } else {
          const url = `/staff`;
          window.open(url, "_blank");
        }
      }

      if (item.typeSearch == "Awards") {
        item.pathPic.unshift({ path: item.img_url });
        this.selectedAward = item;
        // console.log("this.selectedAward", this.selectedAward);
        this.dialogAward = true;
      }

      if (item.typeSearch == "Partners") {
        const url = `/partner`;
        window.open(url, "_blank");
      }
    },
    handleEnter(e) {
      if (e.key === "Enter") {
        this.handleSearch();
      }
    },
    handleSearch() {
      this.$router.push(`/search?keyword=${this.search}`);
      // this.searched = this.$route.query.keyword;
      this.searchGlobal();
      this.fab = false;
    },
    async searchGlobal() {
      this.searched = this.search;
      this.items = [];
      ///// get Course /////
      const responseCourse = await this.axios.get(
        `${process.env.VUE_APP_API}/courses?searchGlobal=${this.search}`
      );
      // console.log("responseCourse", responseCourse.data.data);
      if (responseCourse.data.data) {
        this.result = true;
        responseCourse.data.data.forEach((element) => {
          if (element.status == "เปิดใช้งาน") {
            this.items.push({
              name_th: element.title_th,
              name_en: element.title_en,
              levelId: element.levelId,
              typeSearch_th: "หลักสูตร",
              typeSearch: "Course",
            });
          }
        });
      }

      ///// get Enroll /////
      const responseEnroll = await this.axios.get(
        `${process.env.VUE_APP_API}/enrolls?searchGlobal=${this.search}`
      );
      // console.log("responseEnroll", responseEnroll.data.data);
      if (responseEnroll.data.data) {
        this.result = true;
        responseEnroll.data.data.forEach((element) => {
          if (element.status == "เปิดใช้งาน") {
            this.items.push({
              name_th: element.name_th,
              name_en: element.name_en,
              levelId: element.levelId,
              typeSearch_th: "ประกาศรับสมัคร",
              typeSearch: "Enroll",
            });
          }
        });
      }

      ///// get Scholarship /////
      const responseScholarship = await this.axios.get(
        `${process.env.VUE_APP_API}/scholarships?searchGlobal=${this.search}`
      );
      // console.log("responseScholarship", responseScholarship.data.data);
      if (responseScholarship.data.data) {
        this.result = true;
        responseScholarship.data.data.forEach((element) => {
          if (element.status == "เปิดใช้งาน") {
            this.items.push({
              name_th: element.title_th,
              name_en: element.title_en,
              levelId: element.levelId,
              typeSearch_th: "ทุนการศึกษา",
              typeSearch: "Scholarship",
            });
          }
        });
      }

      ///// get Carlendars /////
      const responseCarlendars = await this.axios.get(
        `${process.env.VUE_APP_API}/carlendars?searchGlobal=${this.search}`
      );
      // console.log("responseCarlendars", responseCarlendars.data.data);
      if (responseCarlendars.data.data) {
        this.result = true;
        responseCarlendars.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            table_name: element.table_name,
            types: element.types,
            typeSearch_th: "ตารางการศึกษา",
            typeSearch: "Carlendars",
          });
        });
      }

      ///// get downloadFilesStudents /////
      const responseFilesStudents = await this.axios.get(
        `${process.env.VUE_APP_API}/downloadFilesStudents?searchGlobal=${this.search}`
      );
      // console.log("responseFilesStudents", responseFilesStudents.data.data);
      if (responseFilesStudents.data.data) {
        this.result = true;
        responseFilesStudents.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            attachFile1: element.attachFile1,
            typeSearch_th: "ดาวน์โหลดเอกสาร",
            typeSearch: "DownloadFilesStudents",
          });
        });
      }

      ///// get knowledgeTestAndQualificationExams /////
      const responseTestExam = await this.axios.get(
        `${process.env.VUE_APP_API}/knowledgeTestAndQualificationExams?searchGlobal=${this.search}`
      );
      // console.log("responseTestExam", responseTestExam.data.data);
      if (responseTestExam.data.data) {
        this.result = true;
        responseTestExam.data.data.forEach((element) => {
          this.items.push({
            name_th: element.title_th,
            name_en: element.title_en,
            id: element.id,
            typeSearch_th: "สอบประมวลความรู้และสอบคุณสมบัติ",
            typeSearch: "KnowledgeTestAndQualificationExams",
          });
        });
      }

      ///// get studentWorks /////
      const responseStudentWorks = await this.axios.get(
        `${process.env.VUE_APP_API}/studentWorks?searchGlobal=${this.search}`
      );
      // console.log("responseStudentWorks", responseStudentWorks.data.data);
      if (responseStudentWorks.data.data) {
        this.result = true;
        responseStudentWorks.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            image_url_en: element.image_url_en,
            typeSearch_th: "ผลงานนักศึกษา",
            typeSearch: "Infographic",
          });
        });
      }

      ///// get News /////
      const responseNews = await this.axios.get(
        `${process.env.VUE_APP_API}/news?searchGlobal=${this.search}`
      );
      // console.log("responseNews", responseNews.data.data);
      if (responseNews.data.data) {
        this.result = true;
        responseNews.data.data.forEach((element) => {
          if (element.type == "5") {
            // if (element.status == "เปิดใช้งาน") {
            //   this.items.push({
            //     name_th: element.title_th,
            //     name_en: element.title_en,
            //     type: element.type,
            //     typeSearch_th: "บทความศิษย์เก่า",
            //     typeSearch: "News",
            //   });
            // }
          } else {
            if (element.status == "เปิดใช้งาน") {
              this.items.push({
                name_th: element.title_th,
                name_en: element.title_en,
                type: element.type,
                typeSearch_th: "ข่าวสาร",
                typeSearch: "News",
              });
            }
          }
        });
      }

      ///// get thesisAndResearchs /////
      const responseThesisAndResearchs = await this.axios.get(
        `${process.env.VUE_APP_API}/thesisAndResearchs?searchGlobal=${this.search}`
      );
      // console.log(
      //   "responseThesisAndResearchs",
      //   responseThesisAndResearchs.data.data
      // );
      if (responseThesisAndResearchs.data.data) {
        this.result = true;
        responseThesisAndResearchs.data.data.forEach((element) => {
          this.items.push({
            name_th: element.title_th,
            name_en: element.title_en,
            download_url: element.download_url,
            typeSearch_th: "วิทยานิพนธ์และงานวิจัย",
            typeSearch: "ThesisAndResearchs",
          });
        });
      }

      ///// get academicJournals /////
      const responseAcademicJournals = await this.axios.get(
        `${process.env.VUE_APP_API}/academicJournals?searchGlobal=${this.search}`
      );
      // console.log(
      //   "responseAcademicJournals",
      //   responseAcademicJournals.data.data
      // );
      if (responseAcademicJournals.data.data) {
        this.result = true;
        responseAcademicJournals.data.data.forEach((element) => {
          if (
            element.publisher_th == "นิเทศศาสตร์และนวัตกรรม" ||
            element.publisher_th == "การสื่อสารและการจัดการ"
          ) {
            this.items.push({
              name_th: element.name_th,
              name_en: element.name_en,
              id: element.id,
              publisher_th: element.publisher_th,
              typeSearch_th: "วารสารวิชาการ",
              typeSearch: "AcademicJournals",
            });
          } else {
            this.items.push({
              name_th: element.name_th,
              name_en: element.name_en,
              id: element.id,
              publisher_th: element.publisher_th,
              typeSearch_th: "งานประชุมวิชาการ",
              typeSearch: "AcademicConference",
            });
          }
        });
      }

      ///// get knowledgeLibraries /////
      const responseKnowledge = await this.axios.get(
        `${process.env.VUE_APP_API}/knowledgeLibraries?searchGlobal=${this.search}`
      );
      // console.log("responseKnowledge", responseKnowledge.data.data);
      if (responseKnowledge.data.data) {
        this.result = true;
        responseKnowledge.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            attachFile1: element.attachFile1,
            typeSearch_th: "คลังความรู้นิเทศศาสตร์",
            typeSearch: "KnowledgeLibraries",
          });
        });
      }

      ///// get annualReports /////
      const responseAnnualReports = await this.axios.get(
        `${process.env.VUE_APP_API}/annualReports?searchGlobal=${this.search}`
      );
      // console.log("responseAnnualReports", responseAnnualReports.data.data);
      if (responseAnnualReports.data.data) {
        this.result = true;
        responseAnnualReports.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            id: element.id,
            typeSearch_th: "รายงานประจำปี",
            typeSearch: "AnnualReports",
          });
        });
      }

      ///// get teacherDetails /////
      const responseTeacherDetails = await this.axios.get(
        `${process.env.VUE_APP_API}/teacherDetails?searchGlobal=${this.search}`
      );
      // console.log("responseTeacherDetails", responseTeacherDetails.data.data);
      if (responseTeacherDetails.data.data) {
        this.result = true;
        responseTeacherDetails.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            id: element.id,
            types: element.types,
            typeSearch_th: "บุคลากร",
            typeSearch: "TeacherDetails",
          });
        });
      }

      ///// get awards /////
      const responseAwards = await this.axios.get(
        `${process.env.VUE_APP_API}/awards?searchGlobal=${this.search}`
      );
      // console.log("responseAwards", responseAwards.data.data);
      if (responseAwards.data.data) {
        this.result = true;
        responseAwards.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            img_url: element.img_url,
            pathPic: element.pathPic,
            recipient_th: element.recipient_th,
            recipient_en: element.recipient_en,
            years_received: element.years_received,
            desc_th: element.desc_th,
            desc_en: element.desc_en,
            typeSearch_th: "รางวัลที่ได้รับ",
            typeSearch: "Awards",
          });
        });
      }

      ///// get Partners /////
      const responseMou = await this.axios.get(
        `${process.env.VUE_APP_API}/mou?searchGlobal=${this.search}`
      );
      // console.log("responseMou", responseMou.data.data);
      if (responseMou.data.data) {
        this.result = true;
        responseMou.data.data.forEach((element) => {
          this.items.push({
            name_th: element.name_th,
            name_en: element.name_en,
            typeSearch_th: "เครือข่ายความร่วมมือ",
            typeSearch: "Partners",
          });
        });
      }

      // console.log("this.items", this.items);
    },
  },
};
</script>
<style>
.no-outline {
  outline: none !important;
}

.text1 {
  font-family: "IBM Plex Sans Thai Looped";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;

  color: #0000cc;
}

.text2 {
  font-family: "IBM Plex Sans Thai Looped";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #06c167;
}

.text3 {
  font-family: "IBM Plex Sans Thai Looped";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}
</style>