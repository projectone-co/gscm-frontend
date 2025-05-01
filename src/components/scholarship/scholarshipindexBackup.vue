<template>
  <v-row style="background-color: #fff" class="-mt-top" no-gutters>
    <Headers
      :img="require('@/assets/icons/scholarship-image.png')"
      polygon
      title="scholarship"
      description="eligibilityCriteriaAndConditionsForScholarshipOfCommunicationArtsAndManagementInnovation"
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
    <div class="tw-w-[100%] tw-relative">
      <img
        src="/scholarship/top-left-polygon.png"
        class="tw-absolute tw-w-[30%] tw-max-w-[360px] tw-left-0 tw-top-[150px]"
      />
      <img
        src="/scholarship/bottom-right-polygon.png"
        class="tw-absolute tw-w-[40%] tw-max-w-[500px] tw-right-0 tw-bottom-[-250px]"
      />
      <Tabs :tabs="tabs" v-model="selectedtab" />
      <section
        class="tw-mt-[36px] sm:tw-mt-[48px] tw-max-w-[1200px] tw-mx-auto tw-px-[20px] sm:tw-px-[32px] md:tw-px-[64px] tw-relative"
      >
        <v-col
          cols="12"
          class="tw-my-[24px] sm:tw-my-[48px]"
          v-if="selectedtab == 1"
        >
          <v-row>
            <v-btn
              width="auto"
              height="48px"
              :class="
                selectedbtn == 1 ? 'mr-4 selectedbtn' : 'mr-4 notselectedbtn'
              "
              text
              @click="selectedbtn = 1"
            >
              <span
                :class="selectedbtn == 1 ? 'selectedspan' : 'notselectedspan'"
                >{{ $t("regularSector") }}</span
              >
            </v-btn>
            <v-btn
              width="auto"
              height="48px"
              :class="selectedbtn == 2 ? ' selectedbtn' : 'notselectedbtn'"
              text
              @click="selectedbtn = 2"
            >
              <span
                :class="selectedbtn == 2 ? 'selectedspan' : 'notselectedspan'"
                >{{ $t("specialSector") }}</span
              >
            </v-btn>
            <v-spacer></v-spacer>
            <!-- <span class="mt-4" style="color: #6b6b6b"
              >{{ $t("aboutRegularAndSpecialSector") }}
              <v-icon>mdi-information-outline</v-icon></span
            > -->
          </v-row>
        </v-col>

        <v-expansion-panels v-model="panel" accordion>
          <!-- <span>panel == {{ panel }}</span> -->
          <v-expansion-panel
            v-for="(item, i) in items"
            class="tw-p-[18px] sm:tw-p-[32px] md:tw-p-[36px] tw-border-0 !tw-rounded-none !tw-shadow-none"
            :style="
              panel == i
                ? 'background: linear-gradient(0, #EEFBFA 65%, #2AB3A3 35%);'
                : ''
            "
          >
            <!-- <div style="background-color: #2ab3a3"></div> -->
            <!-- :expand-icon="panel == i ? 'mdi-minus' : 'mdi-plus'" -->
            <v-expansion-panel-header
              :expand-icon="false"
              class="!tw-p-[0] !tw-min-h-[36px]"
            >
              <template v-slot:default="{ open }">
                <div class="tw-flex tw-justify-between tw-items-center">
                  <span
                    class="tw-text-[18px] sm:tw-text-[22px] md:tw-text-[24px] tw-font-semibold sm:tw-p-[5px] md:tw-p-[10px]"
                    :class="{ 'tw-text-white': open }"
                  >
                    {{
                      $store.state.lang == "th"
                        ? item.title_th
                        : item.title_en
                        ? item.title_en
                        : item.title_th
                    }}

                    <!-- <span style="font-weight: 400 !important; font-size: 16px">
                      {{
                        $store.state.lang == "th"
                          ? item.short_desc_th
                          : item.short_desc_en
                          ? item.short_desc_en
                          : item.short_desc_th
                      }}</span
                    > -->
                  </span>
                  <br />
                  <v-spacer />
                  <div class="tw-max-w-[50px]">
                    <v-icon
                      style="
                        background-color: #218f82;
                        color: white;
                        padding: 8px;
                        max-width: 36px;
                        max-height: 36px;
                      "
                      v-if="open"
                      >mdi-minus</v-icon
                    >
                    <v-icon
                      style="
                        background-color: #2ab3a3;
                        color: white;
                        padding: 8px;
                        max-width: 36px;
                        max-height: 36px;
                      "
                      v-else
                      >mdi-plus</v-icon
                    >
                  </div>
                </div>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="!tw-p-[0px] sub-panel-content">
              <!-- //ใส้ -->
              <br />
              <v-btn
                v-for="(desbtn, index) in item.seperate_data"
                :key="desbtn"
                width="auto"
                height="48px"
                class="mr-4 selectedbtninside"
                text
                @click="selectedbtninside = index"
              >
                <span class="selectedspaninside">
                  {{ $t("type") }}{{ index + 1 }}</span
                >
              </v-btn>

              <v-expansion-panels
                v-if="!item.seperate_data"
                v-model="panelinside[selectedbtninside]"
                accordion
                multiple
                style="box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.12)"
                class="tw-border-0 !tw-rounded-none tw-mt-[20px] sm:tw-mt-[32px] md:tw-mt-[36px] tw-ml-[-24px] tw-mr-[-24px] tw-min-w-[calc(100%+48px)]"
              >
                <v-expansion-panel
                  v-for="(item, index) in item.descriptions"
                  :key="index"
                  class="sub-panel"
                  variant="popout"
                >
                  <div>
                    <v-expansion-panel-header
                      :expand-icon="false"
                      class="!tw-min-h-0"
                    >
                      <template v-slot:default="{ open: openChild }">
                        <div class="tw-flex tw-justify-between">
                          <div
                            :class="{ 'tw-text-accent': openChild }"
                            class="tw-text-[16px] tw-font-medium"
                          >
                            <!-- {{ $t("TermsAndConditionsForScholarship") }} -->
                            {{ item.text_th }}
                          </div>
                          <v-icon size="18px" color="#2ab3a3" v-if="openChild">
                            $minus
                          </v-icon>
                          <v-icon size="18px" color="#0D0E10" v-else>
                            $plus
                          </v-icon>
                        </div>
                      </template>
                      <template v-slot:actions> </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-if="index !== 5">
                      <div
                        class="tw-m-0 tw-mt-[4px] tw-text-[16px] !tw-px-[18px] sm:!tw-px-[36px] tw-mb-[20px]"
                      >
                        <span v-html="item.value_th"></span>
                      </div>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content v-else>
                      <div
                        class="tw-m-0 tw-mt-[4px] tw-text-[16px] !tw-px-[18px] sm:!tw-px-[36px] tw-mb-[20px]"
                      >
                        <a
                          :href="item.value_th"
                          target="_blank"
                          style="text-decoration: none"
                          ><u>{{ item.name_file }}</u></a
                        >
                      </div>
                    </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-expansion-panels
                v-else
                v-model="panelinside[selectedbtninside]"
                accordion
                multiple
                style="box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.12)"
                class="tw-border-0 !tw-rounded-none tw-mt-[20px] sm:tw-mt-[32px] md:tw-mt-[36px] tw-ml-[-24px] tw-mr-[-24px] tw-min-w-[calc(100%+48px)]"
              >
                <!-- {{ selectedbtninside }} -->
                <!-- {{ item.seperate_data[selectedbtninside] }} -->
                <v-expansion-panel class="sub-panel">
                  <div>
                    <v-expansion-panel-header
                      :expand-icon="false"
                      class="!tw-min-h-0"
                    >
                      <template v-slot:default="{ open: openChild }">
                        <div class="tw-flex tw-justify-between">
                          <div
                            :class="{ 'tw-text-accent': openChild }"
                            class="tw-text-[16px] tw-font-medium"
                          >
                            <!-- <span v-if="$store.state.$store.state.lang == 'th'"
                              >เงื่อนไขและหลักเกณฑ์ในการรับทุน</span
                            >
                            <span v-else>Condition</span> -->
                            {{
                              $store.state.lang == "th"
                                ? "เงื่อนไขและหลักเกณฑ์ในการรับทุน"
                                : "Condition"
                            }}
                          </div>
                          <v-icon size="18px" color="#2ab3a3" v-if="openChild">
                            $minus
                          </v-icon>
                          <v-icon size="18px" color="#0D0E10" v-else>
                            $plus
                          </v-icon>
                        </div>
                      </template>
                      <template v-slot:actions> </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="tw-m-0 tw-mt-[4px] tw-text-[16px] !tw-px-[18px] sm:!tw-px-[36px] tw-mb-[20px]"
                      >
                        <span
                          v-html="
                            $store.state.lang == 'th'
                              ? item.seperate_data[selectedbtninside]
                                  .condition_th
                              : item.seperate_data[selectedbtninside]
                                  .condition_en
                          "
                        ></span>
                      </div>
                    </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
                <v-expansion-panel class="sub-panel">
                  <div>
                    <v-expansion-panel-header
                      :expand-icon="false"
                      class="!tw-min-h-0"
                    >
                      <template v-slot:default="{ open: openChild }">
                        <div class="tw-flex tw-justify-between">
                          <div
                            :class="{ 'tw-text-accent': openChild }"
                            class="tw-text-[16px] tw-font-medium"
                          >
                            {{
                              $store.state.lang == "th"
                                ? "จำนวนเงินทุน"
                                : "Amount"
                            }}
                          </div>
                          <v-icon size="18px" color="#2ab3a3" v-if="openChild">
                            $minus
                          </v-icon>
                          <v-icon size="18px" color="#0D0E10" v-else>
                            $plus
                          </v-icon>
                        </div>
                      </template>
                      <template v-slot:actions> </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="tw-m-0 tw-mt-[4px] tw-text-[16px] !tw-px-[18px] sm:!tw-px-[36px] tw-mb-[20px]"
                      >
                        <span
                          v-html="
                            $store.state.lang == 'th'
                              ? item.seperate_data[selectedbtninside]
                                  .amount_of_capital_th
                              : item.seperate_data[selectedbtninside]
                                  .amount_of_capital_th
                          "
                        ></span>
                      </div>
                    </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
                <v-expansion-panel class="sub-panel">
                  <div>
                    <v-expansion-panel-header
                      :expand-icon="false"
                      class="!tw-min-h-0"
                    >
                      <template v-slot:default="{ open: openChild }">
                        <div class="tw-flex tw-justify-between">
                          <div
                            :class="{ 'tw-text-accent': openChild }"
                            class="tw-text-[16px] tw-font-medium"
                          >
                            {{
                              $store.state.lang == "th"
                                ? "ระยะเวลาให้ทุน"
                                : "Scholarship Period"
                            }}
                          </div>
                          <v-icon size="18px" color="#2ab3a3" v-if="openChild">
                            $minus
                          </v-icon>
                          <v-icon size="18px" color="#0D0E10" v-else>
                            $plus
                          </v-icon>
                        </div>
                      </template>
                      <template v-slot:actions> </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="tw-m-0 tw-mt-[4px] tw-text-[16px] !tw-px-[18px] sm:!tw-px-[36px] tw-mb-[20px]"
                      >
                        <span
                          v-html="
                            $store.state.lang == 'th'
                              ? item.seperate_data[selectedbtninside]
                                  .time_of_funding_th
                              : item.seperate_data[selectedbtninside]
                                  .time_of_funding_en
                          "
                        ></span>
                      </div>
                    </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
                <v-expansion-panel class="sub-panel">
                  <div>
                    <v-expansion-panel-header
                      :expand-icon="false"
                      class="!tw-min-h-0"
                    >
                      <template v-slot:default="{ open: openChild }">
                        <div class="tw-flex tw-justify-between">
                          <div
                            :class="{ 'tw-text-accent': openChild }"
                            class="tw-text-[16px] tw-font-medium"
                          >
                            {{
                              $store.state.lang == "th" ? "วิธีขอทุน" : "How to"
                            }}
                          </div>
                          <v-icon size="18px" color="#2ab3a3" v-if="openChild">
                            $minus
                          </v-icon>
                          <v-icon size="18px" color="#0D0E10" v-else>
                            $plus
                          </v-icon>
                        </div>
                      </template>
                      <template v-slot:actions> </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="tw-m-0 tw-mt-[4px] tw-text-[16px] !tw-px-[18px] sm:!tw-px-[36px] tw-mb-[20px]"
                      >
                        <span
                          v-html="
                            $store.state.lang == 'th'
                              ? item.seperate_data[selectedbtninside]
                                  .how_to_get_funding_th
                              : item.seperate_data[selectedbtninside]
                                  .how_to_get_funding_en
                          "
                        ></span>
                      </div>
                    </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>

              <!-- //ใส้ -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div>
          <div
            class="greenbutton tw-my-[64px] sm:tw-my-[96px] md:tw-my-[128px] tw-relative tw-z-1"
          >
            <img
              src="/scholarship/contact-top-left.png"
              class="tw-absolute tw-top-0 tw-left-[0] tw-w-[28%]"
            />
            <img
              src="/scholarship/contact-right-bottom.png"
              class="tw-absolute tw-bottom-0 tw-right-[0] tw-w-[28%]"
            />
            <div
              align="center"
              justify="center"
              class="py-6 tw-z-1 tw-relative"
              no-gutters
            >
              <v-col cols="12" class="text-center pt-6">
                <span
                  class="tw-text-[30px] sm:tw-text-[36px] tw-text-white tw-font-semibold"
                  >{{ $t("stillHaveQuestions") }}</span
                >
              </v-col>
              <v-col cols="12" class="text-center">
                <span style="color: white; font-size: 16px">
                  {{ $t("ifYouHaveQuestionsAboutRegisterPleaseContactUs") }}
                </span>
              </v-col>
              <v-col cols="12" class="text-center my-6">
                <v-btn
                  @click="goTo('/contactus')"
                  color="#1C7BBC"
                  style="
                    color: white;
                    padding: 12px 16px;
                    width: 170px;
                    height: 60px;
                    font-size: 17px;
                    border-radius: 0px;
                    z-index: 1;
                  "
                  >{{ $t("contactForAsk") }}</v-btn
                >
              </v-col>
            </div>
          </div>
        </div>
      </section>
    </div>

    <v-row justify="center" no-gutters class="tw-relative tw-z-1">
      <Footers />
    </v-row>
  </v-row>
</template>
  <script>
import Footers from "@/components/Footers.vue";
import Headers from "@/components/Headers.vue";
import BigButton from "../BigButton.vue";
import Tabs from "../Tabs.vue";
import Scholarshipindex from "./scholarshipindex.vue";
export default {
  components: { Footers, Headers, BigButton, Tabs },
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
      showNav: true,
      items: [],
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
      selectedtab: 1,
      selectedbtn: 1,
      panel: -1,
      panelinside: [0],
      descriptions: [],
      typeCourse: "ภาคปกติ",
      selectedbtninside: [0],
      levelId: 14,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.$route.query.type) {
      this.newstype = this.$route.query.type;
    } else {
      this.newstype = "1";
    }
    // console.log("this.newstype", this.newstype);
    this.getAll();
  },
  watch: {
    selectedtab(val) {
      if (val == 1) {
        this.levelId = 14;
        this.typeCourse = "ภาคปกติ";
        this.selectedbtn = 1;
        this.getAll();
      } else if (val == 2) {
        this.levelId = 15;
        this.typeCourse = "ภาคพิเศษ";
        this.getAll();
      }
    },
    // newstype(val) {
    //   if (val) {
    //     if (val == "1") {
    //       this.title = "ข่าวสารและกิจกรรมคณะ";
    //     } else if (val == "2") {
    //       this.title = "ประกาศทั่วไป";
    //     } else if (val == "3") {
    //       this.title = "ประกาศผล";
    //     } else if (val == "4") {
    //       this.title = "สาระน่ารู้";
    //     }
    //   }
    // },
    selectedbtn(val) {
      if (val == 1) {
        this.panel = null;
        this.typeCourse = "ภาคปกติ";
        this.getAll();
      } else if (val == 2) {
        this.panel = null;
        this.typeCourse = "ภาคพิเศษ";
        this.getAll();
      }
    },
  },
  methods: {
    goTo(val) {
      this.$router.push(val);
    },
    async getAll() {
      this.panel = null;
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/scholarships?levelId=${this.levelId}&typeCourse=${this.typeCourse}`
      );
      // console.log(response.data.data, "news");
      this.items = response.data.data;
      this.items.forEach(async (element) => {
        if (element.seperate_type == "มี") {
          const response_seperate_type = await this.axios.get(
            `${process.env.VUE_APP_API}/scholarshipTypes?scholarshipId=${element.id}`
          );
          let result = response_seperate_type.data.data;
          element.seperate_data = result;
        } else {
          const response_seperate_type1 = await this.axios.get(
            `${process.env.VUE_APP_API}/scholarships/${element.id}`
          );
          let result1 = response_seperate_type1.data.data;

          result1.documentScholarships.forEach((element1) => {
            element.descriptions = [
              {
                text_th: "คำอธิบาย",
                text_en: "Description",
                value_th: element.short_desc_th,
                value_en: element.short_desc_en,
              },
              {
                text_th: "เงื่อนไขและหลักเกณฑ์ในการรับทุน",
                text_en: "Condition",
                value_th: element.condition_th,
                value_en: element.condition_en,
              },
              {
                text_th: "จำนวนเงินทุน",
                text_en: "Amount",
                value_th: element.amount_of_capital_th,
                value_en: element.amount_of_capital_th,
              },
              {
                text_th: "ระยะเวลาให้ทุน",
                text_en: "Scholarship Period",
                value_th: element.time_of_funding_th,
                value_en: element.time_of_funding_en,
              },
              {
                text_th: "วิธีขอทุน",
                text_en: "How to",
                value_th: element.how_to_get_funding_th,
                value_en: element.how_to_get_funding_en,
              },
              {
                text_th: "ดาวน์โหลดเอกสาร",
                text_en: "Download Document",
                value_th: element1.path,
                value_en: element1.path,
                name_file: element1.name,
              },
            ];
          });

          // console.log("result1", result1);
        }
      });

      // console.log("this.items", this.items);
      // https://gscm-service.yuzudigital.com/scholarships/65
    },
    gotodetail(id) {
      this.$router.push(`/newsdetail?id=${id}&type=${this.newstype}`);
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      // if (window.pageYOffset > 465) {
      //   // ซ่อน banner เปิด nav
      //   this.showBanner = false;
      //   this.showNav = true;
      // } else if (window.pageYOffset == 0) {
      //   this.showBanner = true;
      //   this.showNav = false;
      // }
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
<style scoped>
>>> p {
  margin: 0px;
}
</style>
  <style lang="scss" scoped>
::v-deep {
  .v-expansion-panel-header {
    overflow: hidden;
  }
  .v-expansion-panel-header__icon {
    max-width: 30px !important;
    i {
      max-width: 0 !important;
    }
  }
  .v-expansion-panels {
    border-radius: 0;
    &:not(.\!tw-shadow-none) {
      border: 1px solid #e2e2e2;
    }
    &::before {
      box-shadow: none;
    }
  }
  .v-expansion-panel {
    &::before {
      box-shadow: none;
    }
  }
}
.sub-panel-content {
  ::v-deep {
    .v-expansion-panel-content__wrap {
      padding-bottom: 0 !important;
    }
  }
}
.sub-panel {
  &:first-child {
    padding-top: 16px;
  }
  &:last-child {
    padding-bottom: 16px;
  }
  &::before {
    content: none;
  }
  &:not(:first-child) {
    &::after {
      right: 36px;
      left: 36px;
      @media (max-width: 500px) {
        right: 18px;
        left: 18px;
      }
    }
  }
  > div {
    > button {
      padding: 20px 36px;
      @media (max-width: 600px) {
        padding-left: 18px;
        padding-right: 18px;
      }
    }
    > * {
      padding: 0;
    }
    ::v-deep {
      .v-expansion-panel-content__wrap {
        padding: 0;
      }
      .v-expansion-panel-header__icon {
        display: none !important;
      }
    }
  }
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
.selectedbtninside {
  padding: 12px 18px;
  background: #ffffff;
  border: 1px solid #ffffff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
}
.notselectedbtninside {
  padding: 12px 18px;
  background: #62c8bc;
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
.selectedspaninside {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #2ab3a3;
}
.notselectedspaninside {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
}
</style>
<style lang="scss">
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 36px;
    color: white;
  }
  @media only screen and (min-width: 414px) {
    font-size: 42px;
    color: white;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 42px;
    color: white;
  }
}
.greenbutton {
  @media only screen and (min-width: 0px) {
    width: 100%;
    height: auto;
    // background: conic-gradient(
    //   from 51.2deg at 50% 50%,
    //   #4cbfb4 0deg,
    //   #2ab3a3 190deg
    // );
    background-color: #2ab3a3;
  }
  @media only screen and (min-width: 414px) {
    width: 100%;
    height: auto;
    // background: conic-gradient(
    //   from 51.2deg at 50% 50%,
    //   #4cbfb4 0deg,
    //   #2ab3a3 190deg
    // );
    background-color: #2ab3a3;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    height: auto;
    // background: conic-gradient(
    //   from 51.2deg at 50% 50%,
    //   #4cbfb4 0deg,
    //   #2ab3a3 190deg
    // );
    background-color: #2ab3a3;
  }
}
</style>