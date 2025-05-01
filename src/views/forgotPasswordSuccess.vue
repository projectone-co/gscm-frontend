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
        <v-form>
          <v-row align="center" justify="center">
            <div class="mt-10">
              <h2>แก้ไขรหัสผ่านสำเร็จ</h2>
              <span>ท่านสามารถใช้รหัสผ่านใหม่</span>
              <br/>
              <span> ตามที่ท่านกำหนด เพื่อเข้าสู่ระบบได้ทันที </span>
            </div>
          </v-row>
        </v-form>
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
  created() {},
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
              this.$router.push("forgotPasswordSuccess");
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

