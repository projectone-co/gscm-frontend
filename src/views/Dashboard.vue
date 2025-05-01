<template>
  <div class="theme-light">
    <v-row class="ma-4">
      <h1 style="font-weight: 800; color: #000000">Dashboard</h1>
      <v-spacer></v-spacer>
      <v-badge content="6" overlap
        ><v-icon class="text-right" large>mdi-bell</v-icon></v-badge
      >
    </v-row>
    <!-- <h1 style="font-weight: 800; color: #577eba">Dashboard</h1> -->
    <!-- <v-row align="center" justify="center"> -->

    <!-- </v-row> -->
    <v-card outlined class="pa-4 ma-4 elevation-4">
      <h3>เลือกตัวกรอง</h3>
      <v-row justify="center">
        <v-col cols="12" md="4"
          ><v-select
            v-model="selectTypeDate"
            outlined
            dense
            label="เลือกตัวกรอง"
            :items="selectTypeDateitem"
            @change="onChangeSelectType"
          ></v-select
        ></v-col>
        <v-col
          cols="12"
          md="4"
          v-if="selectTypeDate === 'ปี' || selectTypeDate === 'เดือน'"
        >
          <v-select
            v-model="yearPicker"
            outlined
            dense
            label="เลือกปี"
            :items="yearPickeritem"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4" v-if="selectTypeDate === 'เดือน'">
          <v-select
            v-model="monthPicker"
            outlined
            dense
            label="เลือกเดือน"
            :items="monthPickeritem"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4" v-if="selectTypeDate === 'วัน'">
          <!-- <v-select outlined dense label="เลือกช่วงเวลา"></v-select> -->
          <v-menu
            ref="menufrom"
            v-model="menufrom"
            :close-on-content-click="false"
            :return-value.sync="datefrom"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="datefrom"
                label="ช่วงเวลา"
                readonly
                v-bind="attrs"
                v-on="on"
                dense
                outlined
              ></v-text-field>
            </template>
            <v-date-picker v-model="datefrom" no-title scrollable>
              <v-btn text color="primary" @click="menufrom = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menufrom.save(datefrom)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn class="mx-4">clear</v-btn>
          <v-btn color="#9FDF40" dark @click="submit">submit</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <v-card
          color="primary"
          class="pa-2 elevation-4"
          style="color: white; font-weight: 800"
        >
          <h1> อัตรากำไรเพิ่มขึ้น</h1>
          <v-card-text class="text-end" style="color: white">
            <h1 class="text-end" style="color: white; font-weight: 800">
              {{ growthProfit }}
            </h1>
            %
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card
          color="error"
          class="pa-2 elevation-4"
          style="color: white; font-weight: 800"
        >
          <h1> ยอดขายรวม</h1>
          <v-card-text class="text-end" style="color: white">
            <h1 class="text-end" style="color: white; font-weight: 800">
              {{ totalSale }}
            </h1>
            บาท
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card
          color="warning"
          class="pa-2 elevation-4"
          style="color: white; font-weight: 800"
        >
          <h1> ลูกค้าที่สั่งซื้อสินค้า</h1>
          <v-card-text class="text-end" style="color: white">
            <h1 class="text-end" style="color: white; font-weight: 800">
              {{ totalUser }}
            </h1>
            คน
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card
          color="success"
          class="pa-2 elevation-4"
          style="color: white; font-weight: 800"
        >
          <h1> จำนวนผลิตภัณฑ์</h1>
          <v-card-text class="text-end" style="color: white">
            <h1 class="text-end" style="color: white; font-weight: 800">
              {{ totalProduct }}
            </h1>
            ประเภท
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="12" md="12" sm="12"
        ><v-card
          ><h1>จำนวนสมาชิกในระบบ</h1>
          <div id="chart">
            <apexchart
              type="line"
              height="300"
              :options="chartOptions"
              :series="seriesUsers"
            ></apexchart></div></v-card
      ></v-col>
      <!-- <v-col cols="12" md="6" sm="12"
        ><v-card
          ><h1>ยอดขายรวมแยกตามรายการสินค้า</h1>
          <div id="chart">
            <apexchart
              type="line"
              height="300"
              :options="chartOptions"
              :series="seriesUsers"
            ></apexchart></div></v-card
      ></v-col>
      <v-col cols="12" md="12" sm="12"
        ><v-card
          ><h1>องค์กรที่มียอดซื้อมากที่สุด</h1>
          <v-data-table :headers="headerOrganize"></v-data-table></v-card
      ></v-col> -->
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectTypeDate: "วัน",
      selectTypeDateitem: ["ปี", "เดือน", "วัน"],
      yearPickeritem: ["2021"],
      yearPicker: "",
      monthPickeritem: [
        { text: "มกราคม", value: "1" },
        { text: "กุมภาพันธ์", value: "2" },
        { text: "มีนาคม", value: "3" },
        { text: "เมษายน", value: "4" },
        { text: "พฤษภาคม", value: "5" },
        { text: "มิถุนายน", value: "6" },
        { text: "กรกฎาคม", value: "7" },
        { text: "สิงหาคม", value: "8" },
        { text: "กันยายน", value: "9" },
        { text: "ตุลาคม", value: "10" },
        { text: "พฤศจิกายน", value: "11" },
        { text: "ธันวาคม", value: "12" },
      ],
      monthPicker: "",
      datefrom: new Date().toISOString().substr(0, 10),
      dateto: new Date().toISOString().substr(0, 10),
      menufrom: false,
      menuto: false,
      headerOrganize: [
        { text: "ผลิตภัณฑ์", value: "" },
        { text: "ผลรวมรายได้", value: "" },
        { text: "รายได้ปีที่แล้ว", value: "" },
        { text: "เปอร์เซ็นต์อะไรสักอย่าง", value: "" },
      ],
      seriesUsers: [
        {
          name: "จำนวนสมาชิก",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "จำนวนสมาชิก",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["มค", "กพ", "มีค", "เมษ", "พค", "มิย", "กค", "สค", "กย", "ตค", "พย", "ธค"],
        },
      },
      headers: [
        {
          text: "แบรนด์",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "จำนวน (ชิ้น)", value: "iron", align: "center" },
      ],
      headersStock: [
        {
          text: "สินค้า",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "จำนวนคงเหลือ (ชิ้น)", value: "iron", align: "center" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 200,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "2500",
        },
        {
          name: "Ice cream sandwich",
          calories: 200,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1700",
        },
        {
          name: "Eclair",
          calories: 300,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "1500",
        },
        {
          name: "Cupcake",
          calories: 300,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "1500",
        },
        {
          name: "Gingerbread",
          calories: 400,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "1500",
        },
        {
          name: "Jelly bean",
          calories: 400,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "1500",
        },
        {
          name: "Lollipop",
          calories: 400,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "1500",
        },
        {
          name: "Honeycomb",
          calories: 400,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "1500",
        },
        {
          name: "Donut",
          calories: 500,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "1500",
        },
        {
          name: "KitKat",
          calories: 500,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "1500",
        },
      ],
      stock: [
        {
          name: "Frozen Yogurt",
          calories: 200,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "2",
        },
        {
          name: "Ice cream sandwich",
          calories: 200,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "2",
        },
        {
          name: "Eclair",
          calories: 300,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "10",
        },
        {
          name: "Cupcake",
          calories: 300,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "1000",
        },
        {
          name: "Gingerbread",
          calories: 400,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "1000",
        },
        {
          name: "Jelly bean",
          calories: 400,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "1100",
        },
        {
          name: "Lollipop",
          calories: 400,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "1500",
        },
        {
          name: "Honeycomb",
          calories: 400,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "1500",
        },
        {
          name: "Donut",
          calories: 500,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "1500",
        },
        {
          name: "KitKat",
          calories: 500,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "1500",
        },
      ],
      growthProfit: 0,
      totalSale: 0,
      totalUser: 0,
      totalProduct: 0,
    };
  },
  created() {
    this.getHeaderCardSummary();
    // setInterval(() => {
    //   this.getAllOrder();
    // }, 10000);
  },
  methods: {
    async submit() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/reports/getHeaderCardSummary?year=${this.yearPicker}&month=${this.monthPicker}&day=${this.datefrom}`
      );
      // const response = await this.axios.get(
      //   `${process.env.VUE_APP_API}/reports/getHeaderCardSummary?year=` +
      //     this.yearPicker +
      //     "&month=" +
      //     this.monthPicker +
      //     "&day=" +
      //     this.datefrom
      // );
      this.growthProfit = response.data.data.growthProfit;
      this.totalSale = response.data.data.totalSale;
      this.totalUser = response.data.data.totalUser;
      this.totalProduct = response.data.data.totalProduct;
    },
    async getHeaderCardSummary() {
      var selectedDate = "";
      if ((this.selectTypeDate = "วัน")) {
        selectedDate = this.datefrom;
      }
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/reports/getHeaderCardSummary?year=${this.yearPicker}&month=${this.monthPicker}&day=${selectedDate}`
      );
      // console.log("response.data.data;", response.data.data.orderProducts);
      this.growthProfit = response.data.data.growthProfit;
      this.totalSale = response.data.data.totalSale;
      this.totalUser = response.data.data.totalUser;
      this.totalProduct = response.data.data.totalProduct;

      const responseUserCharts = await this.axios.get(
        `${process.env.VUE_APP_API}/reports/getUserCharts?year=${this.yearPicker}&month=${this.monthPicker}&day=${selectedDate}`
      );

      // console.log("response.data.data;", responseUserCharts.data.data);
      let userData = []
      responseUserCharts.data.data.forEach((user) => {
        userData.push(user.total)
      });

      this.seriesUsers[0].data = userData;
    },
    async onChangeSelectType() {
      this.yearPicker = "";
      this.monthPicker = "";
      this.datefrom = "";
      // if(this.selectTypeDate = 'วัน'){
      // this.datefrom = new Date().toISOString().substr(0, 10);
      // }
    },
  },
};
</script>
<style scoped>
.theme-light {
  /* background-color: rgb(235, 240, 248); */
}
</style>
