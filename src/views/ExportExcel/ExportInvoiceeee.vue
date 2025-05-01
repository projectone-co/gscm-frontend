<template>
  <div style="background: white;">
    <v-btn
      color="green darken-1"
      dark
      absolute
      bottom
      right
      fixed
      fab
      style="margin-bottom: 65px"
      @click="printpo"
      v-if="printvisible"
    >
      <v-icon>mdi-printer</v-icon>
    </v-btn>
    <div ref="quotation_content">
      <div class="page">
        <v-row align="center">
          <!-- <v-img
            src="@/assets/slide2.png"
            max-width="150px"
            max-height="50px"
          ></v-img> -->
          <v-spacer></v-spacer>
          <h2 class="text-right mr-4" style="font-weight: 800">INVOICE</h2>
          <v-col cols="12" class="my-0 py-0"
            ><b>ชื่อบริษัท xxxxx</b>
            <br />
            <span>ที่อยู่ :</span>
            <br />
            <span>เลขประจำตัวผู้เสียภาษีอากร: xxxxxxxxx</span>

            <span class="ml-4">หมายเลขโทรศัพท์: xxxxxxxxx</span>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-10">
          <v-col cols="6">
            <span>ชื่อลูกค้า {{ name }}</span>
          </v-col>
          <v-col cols="6">
            <span> ที่อยู่ {{ custAddress }}</span>
          </v-col>
          <!-- <v-col cols="6"><span>เลขประจำตัวผู้เสียภาษี xxxxxxxxx</span></v-col> -->
          <!-- <v-col cols="6"
            ><span>หมายเลขโทรศัพท์ {{ tel }}</span>
          </v-col> -->
          <v-col cols="6"
            ><span>อีเมล {{ custEmail }}</span>
          </v-col>
          <v-col cols="6"> </v-col>
          <v-col cols="6"
            ><span>Line Id {{ custLine }}</span>
          </v-col>
          <!-- <v-col cols="6"
            ><span>orderdate {{ orderdate }}</span>
          </v-col> -->
        </v-row>
        <v-row>
          <v-col cols="12">
            <h4 class="pt-0" style="font-weight: 800">ออเดอร์ที่สั่ง</h4>
            <v-data-table
              :headers="headers"
              :items="orderProducts"
              :items-per-page="15"
              class="elevation-1"
              hide-default-footer
              disable-sort
              :mobile-breakpoint="0"
              disable-pagination
            >
              <!-- <template v-slot:[`description`]>
                <tr>
                  <td class="text-center">
                    <span>{{ description }}</span>
                  </td>
                  <td class="text-center">
                    <span>{{ valveAmount }}</span>
                  </td>
                </tr>
              </template> -->
              <!-- <template v-slot:[`item.description`]="{ item }">
                <img class="pa-1" :src="item.product.imgUrl" height="80px" />
              </template>
              <template v-slot:[`item.product.price`]="{ item }">
                <span>{{ convertPrice(item.product.price) }}</span>
              </template>
              <template v-slot:[`item.action`]="{ item }">
                <v-row justify="center">
                  <v-icon @click="viewProduct(item.product)">mdi-eye</v-icon>
                </v-row>
              </template> -->
            </v-data-table>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="end"
          no-gutters
          class="text-right mt-5"
          v-if="orderProducts.length <= 14"
        >
          <v-col class="text-right">
            <!-- <h5>ราคาทั้งหมด :</h5> -->
            <h5>รวม :</h5>
            <!-- <h5>รวมเงิน :</h5> -->
            <!-- <h5>ส่วนลด :</h5> -->
            <!-- <h5>จำนวนสุทธิ(ก่อนหักภาษี) : </h5>
                <h5>ภาษี 7% : </h5>
                <h5>ภาษีหัก ณ ที่จ่าย 0% : </h5> -->
            <!-- <h5>ส่วนลดเงินสด :</h5> -->
            <!-- <h5>รวมเงินหลังหักส่วนลดทั้งสิ้น :</h5> -->
          </v-col>
          <v-col cols="2" class="text-left">
            <h5 class="ml-2">{{ total }} บาท</h5>
            <!-- <h5 class="ml-2">{{ unit }} หน่วย</h5> -->
            <!-- <h5 class="ml-2">23000</h5> -->
            <!-- <h5 class="ml-2">{{ coupon }} บาท</h5> -->
            <!-- <h5 class="ml-2">0</h5>
                <h5 class="ml-2">100</h5>
                <h5 class="ml-2">0</h5> -->
            <!-- <h5 class="ml-2">10000</h5> -->
            <!-- <h5 class="ml-2">{{ lastTotal }} บาท</h5> -->
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <h3>รูปก่อนทำ</h3>
        </v-row>
        <v-row align="center" justify="center">
          <v-card
            v-for="(i, index) in valveImages"
            :key="index"
            class="ml-1 mt-1"
          >
            <v-img v-if="i.vBefore == true" :src="i.path" width="82px"></v-img>
          </v-card>
        </v-row>
        <v-row align="center" justify="center" class="mt-10">
          <h3>รูปหลังทำ</h3>
        </v-row>
        <v-row align="center" justify="center">
          <v-card
            v-for="(i, index) in valveImages"
            :key="index"
            class="ml-1 mt-1"
          >
            <v-img v-if="i.vBefore == false" :src="i.path" width="82px"></v-img>
          </v-card>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import JSPDF from "jspdf";
import html2canvas from "html2canvas";
import { Decode } from "@/services";
import { bahttext } from "bahttext";
export default {
  data() {
    return {
      name: "",
      custAddress: "",
      tel: "",
      custEmail: "",
      custLine: "",
      orderNo: "",
      orderdate: "",
      valveImages: [],
      taskId: "",
      //   headers: [
      //     {
      //       text: "รายการสินค้า",
      //       icon: "",
      //       subtext: "",
      //       sortable: false,
      //       width: "430px",
      //     },
      //     {
      //       text: "ราคาสินค้า",
      //       icon: "",
      //       subtext: "(รวมภาษี)",
      //       sortable: false,
      //       width: "80px",
      //     },
      //     {
      //       text: "รวมราคาสินค้า",
      //       icon: "",
      //       subtext: "(ก่อนภาษี)",
      //       sortable: false,
      //       width: "100px",
      //     },
      //     {
      //       text: "ส่วนลด %",
      //       icon: "",
      //       subtext: "",
      //       sortable: false,
      //       width: "100px",
      //     },
      //     {
      //       text: "ส่วนลด",
      //       icon: "",
      //       subtext: "(บาท)",
      //       sortable: false,
      //       width: "100px",
      //     },
      //     {
      //       text: "จำนวน",
      //       icon: "",
      //       subtext: "",
      //       sortable: false,
      //       width: "100px",
      //     },
      //     {
      //       text: "ราคาหักส่วนลด",
      //       icon: "",
      //       subtext: "ก่อนภาษี",
      //       sortable: false,
      //       width: "50px",
      //     },
      //     {
      //       text: "ราคาสุทธิ",
      //       icon: "",
      //       subtext: "",
      //       sortable: false,
      //       width: "80px",
      //     },
      //   ],
      printvisible: true,
      orderProducts: [],
      headers: [
        { text: "Description", value: "description", align: "center" },
        { text: "QTY", value: "qty", align: "center" },
        { text: "Unit Price", value: "price", align: "center" },
        { text: "Amount", value: "amount", align: "center" },
      ],
      totalText: "",
      total: 0,
      unit: 0,
      coupon: 0,
      lastTotal: 0,
    };
  },
  components: {},
  created() {
      // console.log('sdsdsdsds');
    const urlParams = this.$route.query;
    this.taskId = urlParams.taskId;
    // console.log("urlParams", urlParams);
    this.getOrderById()
  },
  methods: {
     convertPrice(val) {
      return new Intl.NumberFormat("en-NZ", {
        minimumFractionDigits: 2,
      }).format(val);
    },
    async getOrderById() {
      const auth = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbjEiLCJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiTGFzdCIsInRlbCI6bnVsbCwiZW1haWwiOm51bGwsImxpbmUiOm51bGwsImFjdGl2ZUZsYWciOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMDMtMTBUMTU6MjU6MTcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDMtMTBUMTU6MjU6MjAuMDAwWiIsImJyYW5jaElkIjpudWxsLCJpYXQiOjE2MTUzNjQ3NDd9.bHEoAnYPMxasnmecU4uhRUGHnzI0rpE2dmZVZAwgMVY`,
        },
      };
      const response = await this.axios.get(
        `https://edp-service.yuzudigital.com/tasks/` + this.taskId,
        auth
        // +this.orderId
      );
      // console.log("responseById", response.data.data);
      const data = response.data.data;
      this.name = data.custName + " " + data.custLastName;
      this.custAddress = data.custAddress;
      this.custEmail = data.custEmail;
      this.custLine = data.custLine;

      this.valveAmount = data.valveAmount;
      this.description =
        data.carBrand.name + " " + data.carModel.name + " " + data.plateNo;

      this.orderProducts.push({
        description:
          data.carBrand.name + " " + data.carModel.name + " " + data.plateNo,
      });
      this.orderProducts.push({ description: this.valveAmount });
      // console.log(
      //   "this.orderProducts.description",
      //   this.orderProducts.description
      // );
      this.valveImages = data.valveImages;
      //   for (let i in data.valveImages) {
      //     if (valveImages[i].vBefore == true) {
      //       this.beforeImages[i] = data.valveImages.path;
      //     }
      //     if (valveImages[i].vBefore == false) {
      //       this.afterImages[i] = data.valveImages.path;
      //     }
      //   }
    },
    printpo() {
      setTimeout(() => {
        window.print();
      }, 500);
      this.printvisible = false;
      setTimeout(() => {
        this.printvisible = true;
      }, 2000);
    },
    downloadPDF() {
      const Doc = new JSPDF();
      var canvasElement = document.createElement("canvas");
      html2canvas(this.$refs.quotation_content, { canvas: canvasElement }).then(
        function (canvas) {
          const img = canvas.toDataURL("image/png");
          Doc.addImage(img, "JPEG", 10, 10);
          Doc.save("quotation_001.pdf");
        }
      );
    },
    gen2pdfwrap() {
      let pages = document.getElementsByClassName("page");
      const Doc = new JSPDF("p", "pt", "a4");
      for (let index = 0; index < pages.length; index++) {
        var canvasElement = document.createElement("canvas");
        html2canvas(pages[index], { canvas: canvasElement }).then(function (
          canvas
        ) {
          const img = canvas.toDataURL("image/png");
          Doc.addPage(pages[index].offsetWidth, pages[index].offsetHeight);
          Doc.addImage(img, "PNG", 10, 10);
        });
      }
      setTimeout(() => {
        Doc.save("quotation_001.pdf");
      }, 2000);
    },
    pagearray(page, array) {
      let pagearr = [];
      let startitemindex = page * this.itemperpage - this.itemperpage;
      for (let index = 0; index < this.itemperpage; index++) {
        pagearr.push(array[startitemindex + index]);
      }
      // console.log(
      //   "Page ===",
      //   pagearr.filter((v) => !!v)
      // );
      return pagearr.filter((v) => !!v);
    },
    addCommas(nStr) {
      nStr += "";
      var x = nStr.split(".");
      var x1 = x[0];
      var x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sarabun&display=swap");
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.page {
  width: 21cm;
  height: 29.7cm;
  padding: 1cm;
  margin: 1cm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
@page {
  size: A4;
  margin: 0;
}
@media print {
  .page {
    margin: 0;
    box-shadow: 0;
  }
  * {
    -webkit-print-color-adjust: exact;
  }
}
#html-2-pdfwrapper {
  position: absolute;
  left: 20px;
  top: 50px;
  bottom: 0;
  overflow: auto;
  width: 600px;
}
.product_image {
  margin-bottom: -8px;
}
.paddingRight {
  padding-right: 7px;
}
.header_a {
  font-family: "Sarabun" !important;
  font-size: 12px !important;
}
.header {
  font-family: "Sarabun";
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;
}
.content {
  font-family: "Sarabun" !important;
  font-size: 12px !important;
}
.footer {
  font-family: "Sarabun";
  font-size: 14px;
}
.paddingTop {
  padding-top: 10px;
}
.paddingBottom {
  padding-bottom: 5px;
}
.itemset {
  max-height: 30px;
  max-width: 40px;
}
.content2 {
  font-family: "Sarabun" !important;
  font-size: 12px !important;
}
.centerdiv {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.fixed_header {
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;
  word-break: break-all;
  word-wrap: break-word;
}
p,
span,
td {
  font-size: 12px !important;
}
table.v-table tbody td:first-child,
table.v-table tbody td:not(:first-child),
table.v-table tbody th:first-child,
table.v-table tbody th:not(:first-child),
table.v-table thead td:first-child,
table.v-table thead td:not(:first-child),
table.v-table thead th:first-child,
table.v-table thead th:not(:first-child) {
  padding: 0 0px;
  /* padding-left: 15px; */
  padding-top: 8px;
}
.headertable-quotation-page {
  background-color: #e0effd;
  width: 150px !important;
}
.card-radius {
  border-radius: 8px;
  background-color: #f7f8f9;
}
</style>
