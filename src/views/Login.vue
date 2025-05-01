<template>
  <v-app id="inspire" style="background-color: #ffffff">
    <loading :active.sync="loading"></loading>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-row justify="center" align="center">
              <v-img
                src="@/assets/chum_logo.jpg"
                max-width="200px"
                max-height="250px"
              />
              <br />
              <!-- <span style="font-weight: 800; font-size: 28px" class="mt-2">
                Thai Drug admin web portal
              </span> -->
            </v-row>
            <v-card class="">
              <!-- <v-toolbar color="#9FDF40" style="color: white" class="text-center">
                <h3 v-if="!OTPpass" style="color: black" >
                  เข้าสู่ระบบด้วยหมายเลขโทรศัพท์
                </h3>
                <h3 v-else style="color: black">
                  กรุณากรอกรหัส OTP ที่ท่านได้รับทาง sms
                </h3>
              </v-toolbar> -->
              <v-card-text>
                <v-form
                  v-if="!OTPpass"
                  ref="loginfrom"
                  v-model="loginfrom"
                  :lazy-validation="lazy"
                >
                  <v-text-field
                    placeholder="Username"
                    type="text"
                    outlined
                    v-model="username"
                    :rules="rules.empty"
                  ></v-text-field>
                  <v-text-field
                    placeholder="Password"
                    type="password"
                    outlined
                    v-model="password"
                    :rules="rules.empty"
                  ></v-text-field>
                  <v-btn
                    color="#9FDF40"
                    style="color: white"
                    class="font-weight-light"
                    @click="login()"
                    rounded
                    block
                    >เข้าสู่ระบบ</v-btn
                  >
                </v-form>
                <v-form
                  v-else
                  ref="loginfrom"
                  v-model="loginfrom"
                  :lazy-validation="lazy"
                >
                  <v-text-field
                    placeholder="กรุณากรอก OTP ที่ท่านได้รับทาง sms"
                    type="number"
                    outlined
                    v-model="otp_code"
                    counter="6"
                    :rules="rules.empty"
                    @keydown.enter.prevent="verifyOTP()"
                  ></v-text-field>
                  <v-btn
                    color="#9FDF40"
                    style="color: white"
                    class="font-weight-light"
                    @click="verifyOTP()"
                    rounded
                    block
                    >ยืนยันรหัส OTP</v-btn
                  >
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn
                  color="#9FDF40"
                  style="color: white"
                  class="font-weight-light"
                  @click="login()"
                  >Login</v-btn
                > -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
import { Encode, Decode } from "@/services";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      loading: false,
      lazy: "",
      loginfrom: "",
      rules: {
        empty: [(v) => !!v || "กรุณากรอกข้อมูล"],
        counter: (value) => value.length <= 10 || "Max 10 characters",
      },
      // username: "adminadmin",
      // password: "654321",
      username: "",
      password: "",
      clicked: false,
      OTPpass: false,
      // api_key: this.api_key,
      api_key: "b31fb4cb0403b694565b0279a8aa3983",
      // secret_key: this.secret_key,
      secret_key: "8U13tP7rVfQrdwln",
      project_key: "4Zfi315cuX",
      phone: "",
      token: "",
      otp_code: "",
    };
  },
  created() {
    // if (Object.prototype.hasOwnProperty.call(localStorage, "userBebraveWeb")) {
    //   var checklogin = JSON.parse(
    //     Decode.decode(localStorage.getItem("userBebraveWeb"))
    //   ).name;
    //   if (checklogin !== "") {
    //     this.$router.push("/LanddingPage");
    //   }
    // }
  },
  methods: {
    async login() {
      if (this.username == "admin" && this.password == "1234") {
        await this.$swal.fire({
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          icon: "success",
          text: "เข้าสู่ระบบเสร็จสิ้น",
        });
        var temp = {
          id: 1,
          full_name: "a2 a2 name",
          tel: "0659032229",
          birth_day: "1997-06-19T00:00:00.000Z",
          gender: "ชาย",
          user_type: "user",
          createdAt: "2022-05-26T15:04:56.000Z",
          updatedAt: "2022-05-26T15:04:56.000Z",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGVsIjoiMDY1OTAzMjIyOSIsImZ1bGxfbmFtZSI6ImEyIGEyIG5hbWUiLCJpYXQiOjE2NTM2MzE5NTgsImV4cCI6MTY1MzcxODM1OH0.ddrEbkRSTi-wGWlpxU3jX7ky3Wz91TgGVqlDId2-ynI",
        };
        localStorage.setItem("userBebraveWeb", Encode.encode(temp));
        this.$router.push("/LanddingPage");
      } else {
        await this.$swal.fire({
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          icon: "error",
          text: "ไม่พบผู้ใช้งานนี้ในระบบ",
        });
        this.loading = false;
      }
      // if (this.$refs.loginfrom.validate(true)) {
      //   console.log("phone", this.phone.length);
      //   const login = {
      //     tel: this.phone,
      //   };

      //   this.loading = true;
      //   const response = await axios.post(
      //     `${process.env.VUE_APP_API}/users/login`,
      //     login
      //   );
      //   console.log("login", response.data);

      //   if (response.data.response_status === "SUCCESS") {
      //     console.log("login ผ่าน");
      //     this.clicked = true;
      //     localStorage.setItem("_temp", Encode.encode(response.data.data));
      //     this.loading = false;
      //     await this.OTP();
      //     // localStorage.setItem(userBebraveWeb, Encode.encode(response.data.data));
      //     // this.$router.push("/reportpeoplepoll2");
      //   } else if (this.phone.length != 10) {
      //     await this.$swal.fire({
      //       showConfirmButton: false,
      //       timer: 1000,
      //       timerProgressBar: true,
      //       icon: "error",
      //       text: "กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง",
      //     });
      //     this.loading = false;
      //   } else {
      //     await this.$swal.fire({
      //       showConfirmButton: false,
      //       timer: 1500,
      //       timerProgressBar: true,
      //       icon: "error",
      //       text: "ไม่พบผู้ใช้งานนี้ในระบบ",
      //     });
      //     this.loading = false;
      //   }
      // }
    },
    async OTP() {
      // let formData = new FormData();
      const auth = {
        headers: {
          "Content-Type": "application/json",
          api_key: this.api_key,
          secret_key: this.secret_key,
        },
      };
      const params = {
        project_key: this.project_key,
        phone: this.phone,
      };
      const response = await this.axios.post(
        `https://portal-otp.smsmkt.com/api/otp-send`,
        params,
        auth
      );
      // console.log("response", response);
      this.token = response.data.result.token;
      // console.log("token", this.token);
      if (response.data.code === "000") {
        this.OTPpass = true;
      } else if (this.phone == "") {
        await this.$swal.fire({
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          icon: "error",
          text: "กรุณากรอกหมายเลขโทรศัพท์",
        });
      } else {
        await this.$swal.fire({
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          icon: "error",
          text: "ระบบ OTPขัดข้อง",
        });
      }
    },
    async verifyOTP() {
      const auth = {
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
          api_key: this.api_key,
          secret_key: this.secret_key,
          // "Access-Control-Allow-Origin": "*"
        },
      };
      const params = {
        token: this.token,
        otp_code: this.otp_code,
      };
      // console.log("param", params);
      const response = await this.axios.post(
        `https://portal-otp.smsmkt.com/api/otp-validate`,
        params,
        auth
      );
      // console.log("verify otp success", response);
      if (response.data.code === "000") {
        await this.$swal.fire({
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          icon: "success",
          text: "เข้าสู่ระบบเสร็จสิ้น",
        });
        var temp = JSON.parse(Decode.decode(localStorage.getItem("_temp")));
        localStorage.setItem("userBebraveWeb", Encode.encode(temp));
        this.$router.push("/ManageBanners");
      } else {
        await this.$swal.fire({
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          icon: "error",
          text: "รหัส OTP ของท่านผิด กรุณากรอกใหม่อีกครั้ง",
        });
      }
    },
    resetValidation() {
      this.$refs.loginfrom.resetValidation();
    },
  },
};
</script>
