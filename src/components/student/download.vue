<template>
  <v-row style="background-color: #fff" class="-mt-top" no-gutters>
    <Headers
      :img="require('@/assets/icons/student-download.jpg')"
      polygon
      title="documentDownload"
      description="facultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #FF7C84 0%, rgba(244, 212, 68, 0.92) 51.56%, rgba(244, 212, 68, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("currentStudent") }}
        </v-chip>
      </template>
    </Headers>
    <!-- <v-row
      style="
        background-color: #2ab3a3;
        width: 100vw;
        height: 512px;
        margin-top: -64px;
      "
      align="center"
      justify="center"
      v-if="showBanner"
    >
      <v-col cols="11" class="pt-12 mt-12">
        <v-chip outlined dark style="border: solid 1px">
          นักศึกษาปัจจุบัน
        </v-chip>
        <br />
        <span style="color: white; font-weight: 600; font-size: 57px">
          ดาวน์โหลดเอกสาร
        </span>
        <br />
      </v-col>
    </v-row> -->

    <!-- //body -->
    <v-row align="center" justify="center" class="my-12 py-12">
      <v-col cols="11" sm="11" md="11" v-for="i in items" class="pa-0">
        <div class="cardbig">
          <v-row style="font-size: 16px">
            <v-col cols="12" sm="6" md="6">
              <span style="font-size: 16px">
                <v-icon
                  class="mr-2"
                  style="font-weight: 600; font-size: 24px; color: #0d0e10"
                  >mdi-file-document</v-icon
                >
                <a style="color: initial" @click="viewFile(i.attachFile1)">
                  {{
                    $store.state.lang == "th"
                      ? i.name_th
                      : i.name_en
                      ? i.name_en
                      : i.name_th
                  }}
                </a>
              </span>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="text-right">
              <!-- <a :href="i.attachFile1" download > dsd </a> -->
              <v-btn
                color="#2AB3A3"
                text
                class="mr-2"
                @click="viewFile(i.attachFile1)"
                style="font-size: 16px"
                ><v-icon>mdi-file-find</v-icon> {{ $t("viewDocument") }}</v-btn
              >
              <!-- <v-btn color="#2AB3A3" text @click="viewFile(i.attachFile1)"
                ><v-icon>mdi-download</v-icon> {{ $t("download") }}</v-btn
              > -->
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <!-- <v-row class="my-10" align="center" justify="center">
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
        >แสดงเพิ่ม</v-btn
      >
    </v-row> -->
    <v-row justify="center">
      <Footers />
    </v-row>
  </v-row>
</template>
  <script>
import Footers from "@/components/Footers.vue";
import BigButton from "../BigButton.vue";
import Headers from "@/components/Headers.vue";
export default {
  components: { Footers, BigButton, Headers },
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
        // { title: "แบบคำร้องทั่วไป (PDF)" },
        // { title: "แบบคำร้องขอพักการศึกษา/รักษาสถานภาพการศึกษา (PDF)" },
        // { title: "แบบคำร้องขอหนังสือไปหน่วยงานภายนอก (PDF)" },
        // { title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)" },
      ],
      selectedtab: 1,
      selectedbtn: 1,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getAll();
  },
  watch: {},
  methods: {
    downloadFile(fileUrl) {
      // window.open(fileUrl, "_blank")
      var link = document.createElement("a");
      link.href = fileUrl;
      link.download = "file.pdf";
      link.setAttribute("download", "");
      link.dispatchEvent(new MouseEvent("click"));
    },
    viewFile(fileUrl) {
      window.open(fileUrl, "_blank");
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/downloadFilesStudents`
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