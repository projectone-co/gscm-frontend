<template>
  <v-form style="background-color: #fff" class="-mt-top tw-w-full">
    <v-row no-gutters justify="center" align="center" class="tw-relative">
      <div
        class="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 tw-overflow-hidden"
      >
        <img
          :src="
            items.img_url
              ? items.img_url
              : require('@/assets/icons/news_img.png')
          "
          class="tw-h-full tw-w-full tw-object-cover tw-blur-[50px] tw-scale-150 tw-brightness-50"
        />
      </div>
      <v-col cols="11" md="8" class="tw-relative !tw-my-32">
        <v-icon
          color="white"
          style="font-size: 40px"
          class="mr-3"
          @click="goback()"
          >mdi-chevron-left-circle
        </v-icon>
        <span
          @click="goback()"
          style="
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #ffffff;
            cursor: pointer;
          "
          >{{ $t("alumnusNewsAndEvent") }}</span
        >
        <br />
        <h1
          class="tw-line-clamp-3 mb-0"
          style="color: white; font-weight: 600; font-size: 36px"
        >
          {{ $store.state.lang == "th" ? items.title_th : items.title_en }}
        </h1>
        <br />
        <!-- <img
            src="@/assets/icons/user-avatar.png"
            max-width="20px"
            max-height="20px"
          /> -->

        <span style="font-weight: 400; color: white" class="tw-mr-4"
          ><v-icon color="white">mdi-account-circle-outline</v-icon>
          {{ $t("publishedBy") }} Admin</span
        >
        <br class="tw-inline sm:tw-hidden" />
        <!-- <img
            src="@/assets/icons/Calendar.png"
            max-width="20px"
            max-height="20px"
          /> -->
        <span style="font-size: 14px; color: white" class="tw-leading-10">
          <v-icon color="white">mdi-calendar-outline</v-icon>
          {{ $t("publishedOn") }}: {{ convertDate(items.updatedAt) }}</span
        >
        <br />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" no-gutters>
      <v-col cols="11" md="8">
        <v-row align="center" justify="center" no-gutters>
          <image-with-cover
            style="margin-top: -80px"
            :src="require('@/assets/icons/news_img.png')"
          />
          <v-col cols="12"> </v-col>
        </v-row>
      </v-col>
      <v-col cols="11" md="8" class="my-12">
        <span
          style="
            font-family: 'IBM Plex Sans Thai Looped';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            color: #0d0e10;
          "
          v-html="
            $store.state.lang == 'th' ? items.full_desc_th : items.full_desc_en
          "
        >
          <!-- หลังจากที่มี Inbox มากมายเข้ามาหาแอดมิน
          อยากให้แอดมินช่วยสัมภาษณ์นักศึกษาปริญญาเอก เกี่ยวกับหลักสูตร
          การเรียนป.เอกยากมั้ย? และมีเคล็ดลับการเรียนอย่างไร?
          อยากให้พี่ๆป.เอกช่วยแชร์ประสบการณ์เล่าสู่กันฟัง... แอดมินก็จัดให้จ้า
          <br />
          <br />
          ....เริ่มที่ศิษย์เก่าปริญญาเอก นิเทศ@นิด้า รุ่นที่ 3 ดร.จารุวรรณ
          กิตตินราภรณ์ หรืออาจารย์เอ๋ ปัจจุบันเป็นอาจารย์ประจำคณะสื่อสารมวลชน
          มหาวิทยาลัยรามคำแหง
          <br />
          <br />
          ทำไมถึงเลือกเรียน ปริญญาเอกที่นิเทศฯ@นิด้า? ...
          "นิเทศนิด้าเป็นสถาบันที่รวบรวมอาจารย์ชั้นนำด้านนิเทศศาสตร์ของประเทศไทย"
          <br />
          <br />
          หลักสูตรปริญญาเอก ที่นิเทศฯ@นิด้า ในความคิด? ...
          "ได้ประสบการณ์การเรียนรู้อย่างสร้างสรรค์ในการจัดการด้านนวัตกรรมมาผสานกับงานทางด้านนิเทศศาสตร์"
          <br />
          <br />
          ตอนเรียนที่นิเทศฯ@นิด้าเป็นยังไงบ้าง ช่วยแชร์ประสบการณ์หน่อยค่ะ? ...
          "ช่วงที่เรียน coursework เป็นช่วงที่มีความสุขมาก
          ได้เปิดประสบการณ์แลกเปลี่ยน
          วิเคราะห์ปรากฏการณ์ที่เราสนใจกับอาจารย์ผู้สอนในแต่ละรายวิชาได้อย่างเต็มที่
          ในช่วงเขียนงานหลังสอบเปิดเล่มไปแล้วอาจมีท้อ
          มีเหนื่อยบ้างตามประสาปริญญาเอกแต่เราก็ได้กำลังใจดีๆจากอาจารย์ที่ปรึกษาและเพื่อนๆ
          ทำให้ความท้อ ความกังวลนั้นหายไปกลับมาเขียนงานได้ใหม่จนสำเร็จ"
          <br />
          <br />
          อาจารย์ที่นิเทศฯ@นิด้าเป็นอย่างไร? ... "นิเทศนิด้าเปรียบเสมือนครอบครัว
          นอกจากอาจารย์ที่ปรึกษาแล้วเราสามารถปรึกษาอาจารย์ทุกๆท่านได้ในทุกเรื่อง
          ไม่ว่าจะเป็นเรื่องหัวข้อ การงาน และการดำเนินชีวิต"
          <br />
          <br />
          สรุปว่าเรียน ป.เอกยากมั้ย? ...
          "เรียนป.เอกไม่ยากเพราะอยู่ที่ตัวเราว่าเราจะพยายามอดทนและฝ่าฟันไปกับหัวข้อที่เราสนใจได้มากหรือน้อย"
          เคล็ดลับก็คือ.. "อดทนและฝ่าฟันทุกอย่างเราทำได้" -->
        </span>
      </v-col>
      <v-col cols="11" md="8" sm="8">
        <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
          <div
            class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
          >
            <div v-for="i in items.pathPic" :key="i.id">
              <v-card elevation="0" class="ma-4">
                <v-row align="center" justify="center">
                  <v-img
                    width="300px"
                    height="300px"
                    :src="i.path"
                    style="
                      filter: blur(4px) brightness(0.5);
                      z-index: 0;
                      background: rgba(13, 14, 16, 0.2);
                    "
                    @click="opendialogdetail(i.path)"
                  >
                  </v-img>
                  <v-img
                    :src="i.path"
                    style="position: absolute; z-index: 2; top: 8%"
                    max-width="80%"
                    max-height="80%"
                    @click="opendialogdetail(i.path)"
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
                    <!-- {{ i.name_th }} -->
                  </span>
                  <br />
                </v-row>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>
      <v-row no-gutters justify="center">
        <Footers />
      </v-row>
    </v-row>
  </v-form>
</template>

<script>
import Footers from "@/components/Footers.vue";
import ImageWithCover from "../ImageWithCover.vue";
import moment from "moment";
export default {
  components: { Footers, ImageWithCover },
  data() {
    return {
      items: [],
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.getAll();
  },
  methods: {
    goback() {
      // this.$router.replace("alumninews");
      window.close();
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news/${this.$route.params.id}`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotoarticle(id) {
      // console.log("id", id);
      // this.$router.push("alumniarticle");
      window.open(`alumninews/${id}`, "_blank");
    },
    convertDate(val) {
      let monthTH = [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
      ];
      const d = new Date(val);
      // updatedAt

      return moment(val).format("DD " + monthTH[d.getMonth()] + " YYYY");
    },
  },
};
</script>