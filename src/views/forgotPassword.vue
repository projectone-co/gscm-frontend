<template>
  <div class="login-container">
    <v-container class="login-card" align="center">
      <v-card
        style="padding: 24px"
        height="600px"
        align="center"
        justify="center"
      >
        <v-img
          src="../assets/header1.png"
          max-height="200px"
          max-width="300px"
        ></v-img>
        <v-form ref="form">
          <v-row v-if="isValid ">
            <v-col cols="12">
              <h2>รีเซ็ตรหัสผ่าน</h2>
            </v-col>
            <v-col cols="12" class="mt-12">
              <v-text-field
                :rules="Rules.required"
                v-model="newPassword"
                label="password"
                type="password"
                solo
              >
              </v-text-field>
            </v-col>
            <v-col cols="12"
              ><v-btn rounded block @click="changePassword()" color="primary"
                >เปลี่ยนรหัสผ่าน</v-btn
              ></v-col
            >
          </v-row>

          <v-row
            v-if="!isValid"
            class="login-card"
            justify="center"
            align="center"
            style="height: 100%"
          >
            <div class="mt-10">
              <h2>Token หมดอายุ</h2>
              <h3>กรุณากดลืมรหัสผ่านที่แอพใหม่อีกครั้ง</h3>
            </div>
          </v-row>
        </v-form>
        <!-- <v-form>
          <v-row>
            <div class="mt-10">
              <h2>แก้ไขรหัสผ่านสำเร็จ</h2>
              <h3>ท่านสามารถเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้</h3>
            </div>
          </v-row>
        </v-form> -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isValid: false,
      newPassword: "",
      token: "",
      finish: false,
      Rules: {
        required: [(v) => !!v || "กรุณากรอกรหัสผ่าน"],
      },
    };
  },
  created() {
    this.asyncData();
  },
  methods: {
    close() {
      window.close();
    },
    changePassword() {
      if (this.$refs.form.validate(true)) {
        // console.log("เข้านะ");
        const data = {
          token: this.token,
          newPassword: this.newPassword,
        };
        axios
          .post(`${process.env.VUE_APP_API}/users/resetTokenPassword`, data)
          .then((response) => {
            // console.log("response", response);
            if (response.data.response_status === "ERROR") {
              this.$swal.fire({
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                icon: "error",
                title: "แก้ไขรหัสผ่านไม่สำเร็จ",
              });
            }
            if (response.data.response_status === "SUCCESS") {
              this.$swal.fire({
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                icon: "success",
                title: "แก้ไขรหัสผ่านสำเร็จ",
              });
              this.$router.push("forgotpasswordSuccess");
            }
          });
      }
    },
    async asyncData() {
      // var queryString = window.location.search.slice(7);
      this.token = this.$router.currentRoute.query.token;
      // console.log(this.token);
      const isValid = await axios.get(
        `${process.env.VUE_APP_API}/users/checkResetTokenPassword/${this.token}`
      );
      // console.log(isValid);
      if (isValid.data.response_status === "ERROR") {
        // alert('Token หมดอายุ')
        this.isValid = false;
      } else this.isValid = true;
      //  token
    },
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3e4e;
  > .login-card {
    background-color: #ffffff;
    padding: 24px;
    width: 400px;
    > .form {
      text-align: center;
    }
  }
}
</style>

