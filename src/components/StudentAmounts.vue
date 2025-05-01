
<template>
  <!-- <v-container> -->
  <div class="tw-mx-4 sm:tw-mx-12">
    <v-row class="my-12 pb-12" justify="center" align="center" no-gutters>
      <v-col cols="12" class="text-center my-12">
        <h2
          class="fontbig mb-0"
          style="color: white; font-weight: 700; font-size: 42px"
        >
        {{ $t("numberOfStudentStudyingAndGraduating") }}
        </h2>
      </v-col>

      <v-col cols="12" md="4" sm="4">
        <v-row justify="center" class="mt-6">
          <v-card
            style="
              background-color: #2ab3a3;
              padding: 32px;
              width: 100%;
              border-radius: 0px;
              box-shadow: none;
            "
            class="mx-6 !tw-border-0"
            height="216px"
          >
            <v-row>
              <v-col cols="12"
                ><v-img
                  src="@/assets/icons/education.png"
                  width="48px"
                  height="48px"
                ></v-img>
              </v-col>
              <v-col cols="12" style="color: white">
                <span style="color: white; font-size: 28px; font-weight: 600"
                  >{{ form.graduated_amount || 0 }} </span
                >{{ $t("person") }}
              </v-col>
              <v-col cols="12" style="margin-top: -20px">
                <span style="color: white">{{ $t("graduatingStudent") }}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" sm="4">
        <v-row justify="center" class="mt-6">
          <v-card
            style="
              background-color: #2ab3a3;
              padding: 32px;
              width: 100%;
              border-radius: 0px;
              box-shadow: none;
            "
            class="mx-6 !tw-border-0"
            height="216px"
          >
            <v-row>
              <v-col cols="12"
                ><v-img
                  src="@/assets/icons/certification-star.png"
                  width="48px"
                  height="48px"
                ></v-img>
              </v-col>
              <v-col cols="12" style="color: white">
                <span style="color: white; font-size: 28px; font-weight: 600"
                  >{{ form.master_amount || 0 }} </span
                >{{ $t("person") }}
              </v-col>
              <v-col cols="12" style="margin-top: -20px">
                <span style="color: white">{{ $t("masterStudent") }}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" sm="4">
        <v-row justify="center" class="mt-6">
          <v-card
            style="
              background-color: #2ab3a3;
              padding: 32px;
              width: 100%;
              border-radius: 0px;
              box-shadow: none;
            "
            class="mx-6 !tw-border-0"
            height="216px"
          >
            <v-row>
              <v-col cols="12"
                ><v-img
                  src="@/assets/icons/certification-badge.png"
                  width="48px"
                  height="48px"
                ></v-img>
              </v-col>
              <v-col cols="12" style="color: white">
                <span style="color: white; font-size: 28px; font-weight: 600"
                  >{{ form.doctor_amount || 0 }} </span
                >{{ $t("person") }}
              </v-col>
              <v-col cols="12" style="margin-top: -20px">
                <span style="color: white">{{ $t("doctoralStudent") }}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <!-- </v-container> -->
</template>
<script>
import { Decode } from "@/services";
export default {
  data() {
    return {
      form: {
        graduated_amount: "",
        master_amount: "",
        doctor_amount: "",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/c_configs/2`
      );
      // console.log("response", response);
      this.form = response.data.data;
    },
  },
};
</script><style lang="scss">
.fontbig {
  @media only screen and (min-width: 0px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 414px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 42px;
  }
}
</style>