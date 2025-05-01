<template>
  <v-row style="background-color: #fff" class="-mt-top tw-w-full" no-gutters>
    <Headers
      :img="require('@/assets/icons/newscover.png')"
      polygon
      :title="$t('onlyNewsPage')"
      :description="
        $t(
          'latestUpdateNewsNoticeAndThingsToKnowOfCommunicationArtsAndManagementInnovation'
        )
      "
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #F67A7A 0%, rgba(170, 139, 234, 0.92) 51.56%, rgba(170, 139, 234, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #F67A7A 0%, rgba(170, 139, 234, 0.92) 51.56%, rgba(170, 139, 234, 0.25) 100%);"
    />
    <!-- <v-toolbar width="100vw">
      <v-row justify="center">
        <div
          :class="newstype == '1' ? 'btnblockgreen' : 'btnblocknav'"
          @click="(newstype = '1'), getAll()"
        >
          <v-icon :color="newstype == '1' ? '#2ab3a3' : '#545454'"
            >mdi-newspaper</v-icon
          >
          ข่าวสารและกิจกรรมคณะ
        </div>
        <div
          :class="newstype == '2' ? 'btnblockgreen' : 'btnblocknav'"
          @click="(newstype = '2'), getAll()"
        >
          <v-icon :color="newstype == '2' ? '#2ab3a3' : '#545454'"
            >mdi-bullhorn-variant-outline</v-icon
          >
          ประกาศทั่วไป
        </div>
        <div
          :class="newstype == '3' ? 'btnblockgreen' : 'btnblocknav'"
          @click="(newstype = '3'), getAll()"
        >
          <v-icon :color="newstype == '3' ? '#2ab3a3' : '#545454'"
            >mdi-account-school-outline</v-icon
          >
          ประกาศผล
        </div>
        <div
          :class="newstype == '4' ? 'btnblockgreen' : 'btnblocknav'"
          @click="(newstype = '4'), getAll()"
        >
          <v-icon :color="newstype == '4' ? '#2ab3a3' : '#545454'"
            >mdi-lightbulb-outline</v-icon
          >
          สาระน่ารู้
        </div>
      </v-row>
    </v-toolbar> -->
    <v-row align="center" justify="center" class="!tw-max-w-full" no-gutters>
      <v-col cols="12" class="mt-2">
        <v-tabs
          center-active
          centered
          class="tab-no-padding"
          slider-color="#2ab3a3"
          v-model="activeTab"
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.id"
            :class="
              newstype == tab.id
                ? 'selectedtab text-center'
                : 'notselectedtab text-center'
            "
            @click="(newstype = tab.id), getAll()"
            style="cursor: pointer"
          >
            <h2
              class="mb-0"
              :style="
                newstype == tab.id
                  ? 'color: #2ab3a3; font-weight: 600;display: -webkit-inline-box;'
                  : 'font-weight:600;display: -webkit-inline-box;'
              "
            >
              <v-icon :color="newstype == tab.id ? '#2ab3a3' : '#545454'">{{
                tab.icon
              }}</v-icon>
              {{ $t(tab.text) }}
            </h2>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <!-- <v-img src="@/assets/icons/polygonnews.png" style="float:right"></v-img> -->
    <!-- //มีปัญหา -->
    <!-- <v-col cols="12" class="mt-10">
      <v-row justify="center" no-gutters>
        <v-col cols="8">
          <v-row justify="center" no-gutters>
            <v-col cols="12">
              <span
                style="
                  font-weight: 500;
                  font-size: 22px;
                  line-height: 32px;
                  color: #2ab3a3;
                "
                >ข่าวสาร</span
              >
            </v-col>
            <v-col cols="12">
              <span
                style="
                  font-weight: 600;
                  font-size: 42px;
                  line-height: 60px;
                  color: #0d0e10;
                "
                >{{ title }}</span
              >
            </v-col>
            <v-col cols="10"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col> -->
    <v-row justify="center" no-gutters class="my-6 tw-w-full">
      <v-col cols="11" sm="8" v-for="(i, key) in slicedItems" :key="key">
        <NewsItem @click="gotodetail(i)" :item="i" />
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-row justify="center" align="center" class="mb-6" no-gutters>
        <v-btn
          color="#2AB3A3"
          dark
          class="!tw-shadow-none !tw-rounded-none !tw-font-semibold hover:!tw-bg-[#24988B]"
          width="128px"
          height="48px"
          :loading="loading"
          v-if="slicedItems.length != items.length"
          @click="showMore()"
          >{{ $t("more") }}</v-btn
        >
        <!-- @click="goload()" -->
      </v-row>
    </v-col>
    <v-col cols="12" class="mt-2">
      <v-divider />
    </v-col>
    <v-row justify="center" no-gutters>
      <Footers />
    </v-row>
  </v-row>
</template>
<script>
import Footers from "@/components/Footers.vue";
import Headers from "@/components/Headers.vue";
import NewsItem from "./newsItem.vue";
export default {
  components: { Footers, Headers, NewsItem },
  data() {
    return {
      isThai: false,
      isEnglish: false,
      isMixed: false,

      // ข่าวสารและกิจกรรมคณะ
      // ประกาศทั่วไป
      // ประกาศผล
      // สาระน่ารู้
      title: "ข่าวสารและกิจกรรมคณะ",
      newstype: "",
      loading: false,
      showBanner: true,
      showNav: true,
      items: [],
      tabs: [
        {
          id: 1,
          text: "onlyNewsPage",
          icon: "mdi-newspaper",
        },
        {
          id: 2,
          text: "generalNotice",
          icon: "mdi-bullhorn-variant-outline",
        },
        {
          id: 3,
          text: "registerResult",
          icon: "mdi-account-school-outline",
        },
        {
          id: 4,
          text: "goodToKnow",
          icon: "mdi-lightbulb-outline",
        },
      ],
      mapTypes: {
        faculty: 1,
        general: 2,
        "admission-result": 3,
        interesting: 4,
      },

      itemsToShow: 5,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.$route.params.type) {
      this.newstype = this.mapTypes[this.$route.params.type];
    } else {
      this.newstype = "1";
    }
    // console.log("this.newstype", this.newstype);
    this.getAll();
  },
  watch: {
    newstype(val) {
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.value == val).param;
      history.pushState({}, "", `/news/${pathParam}`);

      if (val) {
        if (val == "1") {
          this.title = "ข่าวสารและกิจกรรมคณะ";
        } else if (val == "2") {
          this.title = "ประกาศทั่วไป";
        } else if (val == "3") {
          this.title = "ประกาศผล";
        } else if (val == "4") {
          this.title = "สาระน่ารู้";
        }
      }
    },
  },
  computed: {
    activeTab() {
      return Number(this.newstype) - 1;
    },
    slicedItems() {
      return this.items.slice(0, this.itemsToShow);
    },
  },
  methods: {
    checkCharacterType(text) {
      const thaiPattern = /[\u0E01-\u0E5B]/;
      const englishPattern = /[a-zA-Z]/;

      const containsThai = thaiPattern.test(text);
      const containsEnglish = englishPattern.test(text);

      if (containsThai && !containsEnglish) {
        this.isThai = true;
        this.isEnglish = false;
        this.isMixed = false;
      } else if (!containsThai && containsEnglish) {
        this.isThai = false;
        this.isEnglish = true;
        this.isMixed = false;
      } else if (containsThai && containsEnglish) {
        this.isThai = false;
        this.isEnglish = false;
        this.isMixed = true;
      } else {
        this.isThai = false;
        this.isEnglish = false;
        this.isMixed = false;
      }
    },
    showMore() {
      this.itemsToShow += 5;
    },
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=${this.newstype}&status=เปิดใช้งาน`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotodetail(item) {
      const pathParam = Object.entries(this.mapTypes)
        .map(([param, value]) => ({
          param,
          value,
        }))
        .find((obj) => obj.value == this.newstype).param;
      // this.$router.push(`/newsdetail?id=${id}&type=${this.newstype}`);
      // window.open(`/news/${pathParam}/${id}`, "_blank");

      // console.log("item", item);
      let id = item.id;
      let title_en = item.url_seo_th
        ? item.url_seo_th
        : item.url_seo_en
        ? item.url_seo_en
        : item.title_en
        ? item.title_en
        : item.title_th;

      let modifiedUrl = title_en.replace(/ /g, "_");

      let filterItem = this.items.filter((x) => x.id === id);
      // console.log("filterItem", filterItem);
      this.checkCharacterType(filterItem[0].url_seo_th);

      // console.log(modifiedUrl);

      if (this.isEnglish) {
        window.open(`/news/${pathParam}/${modifiedUrl}`, "_blank");
      } else {
        window.open(`/news/${pathParam}/${modifiedUrl}`, "_blank");
      }
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      if (window.pageYOffset > 60) {
        // ซ่อน banner เปิด nav ควร 60
        // this.showBanner = false;
        // this.showNav = true;
      } else if (window.pageYOffset == 0) {
        // this.showBanner = true;
        // this.showNav = false;
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

.btnblockdark {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border-bottom: 1px solid #2ab3a3;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: center;

  /* Brand-Mint/Light/text */

  color: #2ab3a3;
}
* {
  box-sizing: border-box;
}
.btnblocknav {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  background: #ffffff;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
}
.btnblockgreen {
  padding: 16px 24px;
  gap: 8px;
  width: 256px;
  height: 56px;
  border-bottom: 3px solid #2ab3a3;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #2ab3a3;
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
  position: fixed;
  position: -webkit-sticky; /* for Safari */
  top: 4.3em;
  z-index: 2;
}
</style>
<style>
.tab-no-padding > .v-slide-group > .v-slide-group__prev--disabled {
  display: none !important;
}
</style>