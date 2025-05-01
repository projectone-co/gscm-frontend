<template>
  <v-form>
    <loading :active.sync="loading"></loading>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 style="font-weight: 800; color: #577eba">แจ้งเบาะแสยาเสพติด</h1>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              label="ลักษณะการกระทำความผิด"
              outlined
              dense
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="ประเภทยาเสพติด"
              outlined
              dense
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="จังหวัด"
              outlined
              dense
              hide-details="auto"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="เลือกระยะเวลา"
              outlined
              dense
              hide-details="auto"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <!-- <v-col cols="4" class="mr-4">
            <v-text-field
              class="mb-4"
              v-model="search"
              dense
              hide-details
              outlined
              placeholder="ค้นหา"
            ></v-text-field>
          </v-col> -->
          <v-spacer></v-spacer>
          <!-- <v-col class="text-right">
            <v-btn @click="goToCreate()" color="primary" dark
              >เพิ่มรูปสไลด์</v-btn
            >
          </v-col> -->
        </v-row>
      </v-col>
      <!-- <v-col cols="12">
        <v-card outlined class="pa-4">
          <v-row align="center" justify="center">
            
            <img :src="imgUrl" width="50%" class="pa-4" />
          </v-row>
        </v-card>
      </v-col> -->
      <v-col cols="12">
        <v-card
          ><v-data-table
            :headers="headersBrand"
            :items="items"
            :search="search"
            disable-pagination
            hide-default-footer
            class="elevation-1"
            loading-text="กำลังโหลดข้อมูล"
          >
            <template v-slot:[`item.banner_url`]="{ item }">
              <img :src="item.banner_url" width="100px" class="ma-1" />
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-row justify="center">
                <!-- <v-icon @click="ViewBanner(item)">mdi-eye</v-icon> -->
                <v-icon @click="UpdateBanner(item)" class="mx-2"
                  >mdi-text-box-search-outline</v-icon
                >
                <!-- <v-icon @click="DeleteBanner(item)">mdi-delete</v-icon> -->
              </v-row>
            </template>
            <!-- <template v-slot:body="props" >
              <draggable
                :list="props.items"
                tag="tbody"
                @change="DragItems(props.items)"
              >
                <tr v-for="(item, index) in props.items" :key="index">
                  <td>
                    <v-icon small class="page__grab-icon">
                      mdi-arrow-all
                    </v-icon>
                  </td>
                  <td class="text-center">{{ item.sortindex }}</td>
                  <td class="text-center">
                    <img :src="item.imgUrl" width="100px" class="ma-1" />
                  </td>
                  <td class="text-center">{{ item.bannerName }}</td>
                  <td class="text-center">{{ item.description }}</td>
                  <td class="text-center">
                    <v-chip
                      class="orange lighten-2"
                      v-if="item.activeFlag == true"
                      >ใช้งาน</v-chip
                    >
                    <v-chip
                      class="grey lighten-9 white--text"
                      v-if="item.activeFlag == false"
                      >ไม่ใช้งาน</v-chip
                    >
                  </td>
                  <td class="text-center">
                    <v-row justify="center">
                      <v-icon @click="ViewBanner(item)">mdi-eye</v-icon>
                      <v-icon @click="UpdateBanner(item)" class="mx-2"
                        >mdi-pencil</v-icon
                      >
                      <v-icon @click="DeleteBanner(item)">mdi-delete</v-icon>
                    </v-row>
                  </td>
                </tr>
              </draggable>
            </template> -->
          </v-data-table></v-card
        >
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import draggable from "vuedraggable";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { Decode, Encode } from "@/services";
export default {
  components: {
    draggable,
    Loading,
  },
  data() {
    return {
      headersBrand: [
        { text: "ลำดับ", value: "count", align: "center" },
        // { text: "ประเภทยาเสพติด", value: "banner_title", align: "center" },
        { text: "หมายเลขร้องเรียน", value: "report_no", align: "center" },
        { text: "จังหวัด", value: "reporter_province", align: "center" },
        { text: "อำเภอ", value: "reporter_district", align: "center" },
        { text: "ตำบล", value: "reporter_sub_district", align: "center" },
        { text: "status", value: "status", align: "center" },
        { text: "ข้อมูล", value: "action", align: "center" },
// report_no: (...)
// report_type_other: (...)
// reporter_address: (...)
// reporter_district: (...)
// reporter_firstname: (...)
// reporter_lastname: (...)
// reporter_province: (...)
// reporter_sex: (...)
// reporter_sub_district: (...)
// reporter_tel: (...)
// reporter_village: (...)
// status: (...)
// updateBy: (...)
// updatedAt: (...)
      ],
      items: [],
      search: "",
      sortindex: 0,
      user: "",
      loading: false,
      imgUrl: "",
    };
  },
  created() {
    this.user = JSON.parse(
      Decode.decode(localStorage.getItem("userBebraveWeb"))
    );
    this.getAllbanner();
  },
  methods: {
    async DragItems(val) {
      this.loading = true;
      // console.log("this.itemsssssss", this.items);
      // console.log("beforeAPI", val);
      var user = JSON.parse(
        Decode.decode(localStorage.getItem("userBebraveWeb"))
      );
      const auth = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      const response = await this.axios.put(
        `${process.env.VUE_APP_API}/banners/updateIndex`,
        val,
        auth
      );
      // console.log("afterAPI", response);

      this.items = response.data.data;
      // for (let i in this.items) {
      //   this.items[i].count = parseInt(i) + 1;
      // }
      this.loading = false;
    },
    async getAllbanner() {
      this.loading = true;
      const auth = {
        headers: { Authorization: `Bearer ${this.user.token}` },
      };
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/reportForms`,
        auth
        // 'http://localhost:8081/types/'
      );
      // console.log("getAllbannerpe", response.data.data);
      this.items = response.data.data;
      // this.imgUrl = response.data.data.imgUrl;
      for (let i in this.items) {
        this.items[i].count = parseInt(i) + 1;
      }
      // console.log("itemBefore", this.items);
      // console.log("itemAfter", this.items);
      this.loading = false;
    },
    UpdateBanner(val) {
      // console.log("val", val);
      localStorage.setItem("Bannerdata", Encode.encode(val));
      this.$router.push("formlist");
    },
    ViewBanner(val) {
      localStorage.setItem("Bannerdata", Encode.encode(val));
      this.$router.push("ViewBanners");
    },
    async DeleteBanner(val) {
      this.$swal({
        text: "คุณต้องการลบข้อมูลใช่ หรือไม่ ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ต้องการลบข้อมูล",
      }).then(async (result) => {
        const auth = {
          headers: { Authorization: `Bearer ${this.user.token}` },
        };
        if (result.isConfirmed) {
          const response = await this.axios.delete(
            `${process.env.VUE_APP_API}/banner/` + val.id,
            auth
          );
          // console.log(response);

          this.$swal.fire({
            icon: "success",
            text: "ลบข้อมูลสำเร็จ",
            showConfirmButton: false,
            timer: 1000,
          });
          // await location.reload();
          this.getAllbanner();
        }
      });
    },
    goToCreate() {
      this.$router.push("createbanners");
    },
  },
};
</script>