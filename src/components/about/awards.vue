<template>
  <!-- <v-form>
    <v-img src="@/assets/icons/New-Banner.png" style="margin-top: -54px">
      <v-row justify="center">
        <v-col cols="10" style="position: absolute; bottom: 10%; left: 10%">
          <v-chip outlined dark style="border: solid 1px">
            เกี่ยวกับคณะ
          </v-chip>
          <br />
          <span style="color: white; font-weight: 600; font-size: 57px">
            รางวัลที่ได้รับ
          </span>
          <br />
        </v-col>
      </v-row>
    </v-img> -->

  <!-- <v-row style="background-color: #fff" class="-mt-top" no-gutters> -->
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      :img="require('@/assets/icons/About.jpg')"
      polygon
      title="awards"
      description="facultyOfCommunicationArtsAndManagementInnovation"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #2FEAA8 0%, rgba(2, 140, 243, 0.92) 51.56%, rgba(2, 140, 243, 0.25) 100%);"
    >
      <template #above>
        <v-chip outlined dark style="border: solid 1px">
          {{ $t("aboutTheFaculty") }}
        </v-chip>
      </template>
    </Headers>
    <v-row align="center" justify="center" class="mt-12" no-gutters>
      <v-col cols="11" md="8" sm="8">
        <span>{{ $t("all") }}: {{ awards.length }} {{ $t("awards") }}</span>
      </v-col>
      <v-col cols="11" md="3" sm="3">
        <div class="tw-flex tw-w-full">
          <div
            class="align-right"
            :class="{ focus: isFocusing || currentValue }"
          >
            <!-- <input type="select" ref="input" v-bind="{...$props, ...$attrs}" :value="currentValue" @change="onChange" @input="onChange" @focus="isFocusing = true" @blur="isFocusing = false" class="tw-w-full tw-h-full py-3 px-4 border-none no-outline" /> -->
            <v-select
              :items="itemsSelectyear"
              filled
              v-model="selectedYear"
              @change="getAll()"
            ></v-select>
          </div>
        </div>
        <!-- <SearchSelect :placeholder="`ค้นหาจากชื่อ${datatype}`" @onSearch="getAll" v-model="search" /> -->
        <!-- <v-text-field
          class="search-input"
          :placeholder="`ค้นหาจากชื่อ${datatype}`"
          outlined
          clearable
          append-icon="mdi-magnify"
        ></v-text-field> -->
      </v-col>
    </v-row>
    <div class="tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px]">
      <div
        class="tw-max-w-[1680px] tw-mx-auto tw-grid tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[24px] tw-px-[16px] md:tw-px-[64px]"
      >
        <div v-for="(i, index) in awards" :key="index">
          <v-card elevation="0" style="border-radius: 0px" class="">
            <!-- <image-with-cover :src="require('@/assets/icons/news_img.png')" /> -->
            <image-with-cover :src="i.img_url" />
            <br />
            <span style="font-weight: 600; font-size: 22px; line-height: 32px">
              {{
                $store.state.lang == "th"
                  ? i.name_th
                  : i.name_en
                  ? i.name_en
                  : i.name_th
              }}
            </span>
            <br />
            <span style="font-weight: 400; font-size: 14px"
              ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon>
              {{ $t("receiver") }} :
              {{
                $store.state.lang == "th"
                  ? i.recipient_th
                  : i.recipient_en
                  ? i.recipient_en
                  : i.recipient_th
              }}</span
            >
            <br />
            <span style="font-weight: 400; font-size: 14px"
              ><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
              {{ $t("yearOfReceipt") }} : {{ i.years_received }}</span
            >
            <br />
            <v-card-text class="pl-0">
              <v-btn
                @click="opendialogdetail(i)"
                style="
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  text-align: center;
                  color: #2ab3a3;

                  background-color: white;
                  border-radius: 0px;
                  border: 1px solid #2ab3a3;
                "
                elevation="0"
                >{{ $t("seeDetail") }}</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <!-- <v-row class="mt-12 ma-10" justify="center">
     
      <v-col cols="12" md="3" sm="6" justify="center" v-for="i in 8">
        <v-card elevation="0" style="border-radius: 0px" class="">
          <image-with-cover :src="require('@/assets/icons/news_img.png')" />
          <br />
          <span style="font-weight: 600; font-size: 22px; line-height: 32px">
            รางวัล Soul International Invention
          </span>
          <br />
          <span style="font-weight: 400; font-size: 14px"
            ><v-icon color="#2AB3A3">mdi-account-circle-outline</v-icon> ผู้รับ:
            นางสาวชุดาณัฏฐ์ สุดทองคง</span
          >
          <br />
          <span style="font-weight: 400; font-size: 14px"
            ><v-icon color="#2AB3A3">mdi-calendar-blank-outline</v-icon>
            ปีที่รับ: 2563</span
          >
          <br />
          <v-card-text class="pl-0">
            <v-btn
              @click="opendialogdetail()"
              style="
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #2ab3a3;

                background-color: white;
                border-radius: 0px;
                border: 1px solid #2ab3a3;
              "
              elevation="0"
              >ดูรายละเอียด</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    <v-dialog
      scrollable
      v-model="dialogdetail"
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
    <!-- <v-row justify="center"> -->
    <Footers />
    <!-- </v-row> -->
    <!-- </v-row> -->
  </v-form>
</template>

<script>
import Footers from "@/components/Footers.vue";
import ImageWithCover from "../ImageWithCover.vue";
import Headers from "@/components/Headers.vue";
import SearchSelect from "../SearchSelect.vue";
export default {
  components: { Footers, ImageWithCover, Headers, SearchSelect },
  data() {
    return {
      model: "",
      currentValue: "",
      isFocusing: false,
      dialogdetail: false,
      awards: [],
      selectedAward: null,
      selectedYear: "2565",
      itemsSelectyear: [],

      yearItems: [],
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getAllYears();
    this.getAll();
  },
  methods: {
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/awards?years_received=${this.selectedYear}`
      );
      // console.log("awards", response.data.data);
      this.awards = response.data.data;
      this.awards.reverse();
    },
    async getAllYears() {
      let getYears = [];
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/awards`
      );
      // console.log("getAllYears", response.data.data);
      this.yearItems = response.data.data;
      this.yearItems.reverse();

      let yearsAll = Object.values(
        this.yearItems.reduce(
          (a, c) => Object.assign(a, { [c.years_received]: c }),
          {}
        )
      );
      yearsAll.forEach((element) => {
        getYears.push(element.years_received);
      });

      getYears.sort(function (a, b) {
        return b - a;
      });

      this.itemsSelectyear = getYears.filter((x) => !!x);

      // console.log("this.itemsSelectyear", this.itemsSelectyear);
    },
    async opendialogdetail(award) {
      let itemEdit = {};
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/awards/${award.id}`
      );
      itemEdit = response.data.data;
      // this.selectedAward = award;
      itemEdit.pathPic.unshift({ path: itemEdit.img_url });
      this.selectedAward = itemEdit;
      // console.log("this.selectedAward", this.selectedAward);
      this.dialogdetail = true;
    },
    goback() {
      this.$route.push("alumni");
    },
  },
};
</script>
<style lang="scss" scoped>
.input-wrapper {
  &.focus {
    background: white;
    border-color: #2ab3a3;
  }
}
.no-outline {
  outline: none !important;
}
</style>