<template>
  <v-sheet class="mx-auto" max-width="100vw" style="background-color: ">
    <v-slide-group multiple show-arrows center-active>
      <v-slide-item
        v-for="n in cardItems.filter((c) => c.levelId == selected)"
        :key="`courses_${n.id}`"
        v-slot="{ active, toggle }"
        class="tw-px-3"
      >
        <v-card
          style="border-radius: 0px"
          elevation="0"
          class="imagecard"
          @click="gotocourse(n)"
        >
          <!-- <v-img src="@/assets/icons/Cover.png"></v-img>-->
          <v-img :src="n.img_url"></v-img>

          <span
            v-if="n.facualty"
            style="font-weight: 400; font-size: 14px; line-height: 20px"
          >
            {{
              $store.state.lang == "th"
                ? n.facualty.name_th
                : n.facualty.name_en
                ? n.facualty.name_en
                : n.facualty.name_th
            }}
          </span>
          <br />
          <span
            class="fontcardtitle"
            style="
              font-family: 'IBM Plex Sans Thai';
              font-style: normal;
              font-weight: 600;

              line-height: 42px;
            "
          >
            {{
              $store.state.lang == "th"
                ? n.title_th
                : n.title_en
                ? n.title_en
                : n.title_th
            }}
          </span>
          <br />
          <div style="display: inline-flex">
            <v-img src="@/assets/icons/catalog.png"></v-img>
            <span
              style="
                font-family: 'IBM Plex Sans Thai';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                margin-left: 6px;
              "
              >{{ $t("latestUpdates") }} {{ convertToYear(n.updatedAt) }}</span
            >
          </div>
          <br />
          <br />
          <div class="tw-h-[100px]">
            <p
              class="line-clamp"
              style="
                --line-clamp: 4;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
              "
            >
              {{
                $store.state.lang == "th"
                  ? n.short_desc_th
                  : n.short_desc_en
                  ? n.short_desc_en
                  : n.short_desc_th
              }}
            </p>
          </div>
          <br />
          <v-btn
            class="mr-4 !tw-p-[12px] tw-mb-[18px] !tw-h-[48px]"
            color="#2AB3A3"
            dark
            style="
              border-radius: 0px;
              float: left;
              box-shadow: none;
              font-size: 16px;
            "
            @click="gotocourse(n)"
            >{{ $t("courseDetail") }}</v-btn
          >
          <v-btn
            class="mr-12 !tw-p-[12px] !tw-h-[48px]"
            color="#2AB3A3"
            text
            style="
              border-radius: 0px;
              float: left;
              box-shadow: none;
              font-size: 16px;
            "
            >{{ $t("register") }} <v-icon>mdi-arrow-right</v-icon></v-btn
          >
        </v-card>
        <!-- </v-col> -->
      </v-slide-item>
    </v-slide-group>
    <slot></slot>
  </v-sheet>
</template>
<script>
import moment from "moment";
const course_level = {
  master: 12,
  phd: 13,
};
export { course_level };
export default {
  emits: ["setcourses"],
  props: {
    selected: { type: Number, default: course_level.Master },
  },
  data() {
    return {
      course_level,
      items: [],
      masterItems: [],
      // masterItems: [
      //   {
      //     id: 1,
      //     title_th:
      //     short_desc_th:
      //     updatedAt:
      //     facualty:
      //   }
      // ],
      cardItems: [],
      user: "",
    };
  },

  created() {
    this.getAll();
    for (let i = 1; i < 20; i++) {
      this.cardItems.push({
        id: i,
        title_th: "title " + i,
        short_desc_th: "description " + i,
        levelId: i % 2 ? course_level.master : course_level.phd,
        updatedAt: "2022-11-04T09:05:01.000Z",
      });
    }
  },
  methods: {
    convertToYear(date) {
      return date ? moment(date).format("YYYY") * 1 + 543 : "";
    },
    gotocourse(item) {
      // gotocourse(courseId, courseLevel) {
      let courseId = item.id;
      let title_en = item.title_en;
      let courseLevel = item.levelId;
      let modifiedUrl = title_en.replace(/ /g, "_");

      this.$router.push(
        `/course/${
          courseLevel === course_level.master ? "master" : "doctoral"
        }/${modifiedUrl}`
      );
    },
    async getAll() {
      const auth = {
        headers: { Authorization: `Bearer ${this.user.token}` },
      };
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/courses?status=เปิดใช้งาน`

        // 'http://localhost:8081/types/'
      );
      // console.log("getAllCourse", response.data.data);
      this.cardItems = response.data.data;
      this.$emit("setcourses", this.cardItems);
    },
  },
};
</script>
<style lang="scss">
.imagecard {
  @media only screen and (min-width: 0px) {
    width: 272px;
    // height: 160px;
  }
  @media only screen and (min-width: 414px) {
    width: 292px;
    // height: 200px;
  }
  @media only screen and (min-width: 960px) {
    width: 544px;
    // height: 300px;
  }
}
.fontcardtitle {
  @media only screen and (min-width: 0px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 960px) {
    font-size: 28px;
  }
}
</style>

