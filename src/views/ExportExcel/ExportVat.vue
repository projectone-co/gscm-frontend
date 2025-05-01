<template>
  <div style="background-color: #ffffff">
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
          <v-img
            src="@/assets/slide2.png"
            max-width="150px"
            max-height="50px"
          ></v-img>
          <v-spacer></v-spacer>
          <h2 class="text-right mr-4" style="font-weight: 800">
            ใบรับคำสั่งซื้อ
          </h2>
          <v-col cols="12" class="my-0 py-0"
            ><b>ชื่อบริษัท บริษัท พูนธนามาร์เก็ตติ้ง จำกัด</b>
            <br />
            <span
              >ที่อยู่ : 95 ถนน สุคนธสวัสดิ์ แขวง ลาดพร้าว เขต ลาดพร้าว
              กรุงเทพมหานคร 10230</span
            >
            <br />
            <span>เลขประจำตัวผู้เสียภาษีอากร: 0105535091676</span>

            <span class="ml-4">หมายเลขโทรศัพท์: 02 907 8000</span>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-10">
          <v-col cols="6">
            <span><b>ชื่อผู้ซื้อ</b> {{ name }}</span>
          </v-col>
          <v-col cols="6">
            <span> <b>ที่อยู่</b> {{ address }}</span>
          </v-col>
          <v-col cols="6"
            ><span><b>เลขประจำตัวผู้เสียภาษี</b> -</span></v-col
          >
          <v-col cols="6"
            ><span><b>หมายเลขโทรศัพท์</b> {{ tel }}</span>
          </v-col>
          <v-col cols="6"
            ><span><b>อีเมล</b> {{ email }}</span>
          </v-col>
          <v-col cols="6"> </v-col>
          <v-col cols="6"
            ><span><b>หมายเลขออเดอร์</b> {{ orderNo }}</span>
          </v-col>
          <v-col cols="6"
            ><span><b>วันที่สั่ง</b> {{ convertDate(orderdate) }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
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
              light
            >
              <!-- <template v-slot:[`item.product.imgUrl`]="{ item }">
                <img class="pa-1" :src="item.product.imgUrl" height="80px" />
              </template> -->
              <template v-slot:[`item.count`]="{ item }">
                <span>{{ item.count }}</span>
              </template>
              <template v-slot:[`item.product.sku`]="{ item }">
                <span>{{ item.product.sku }}</span>
              </template>
              <template v-slot:[`item.product.productName`]="{ item }">
                <span>{{ item.product.productName }}</span>
              </template>
              <template v-slot:[`item.amount`]="{ item }">
                <span>{{ item.amount }}</span>
              </template>
              <template v-slot:[`item.product.price`]="{ item }">
                <span>{{ convertPrice(item.product.price) }}</span>
              </template>
              <!-- <template v-slot:[`item.action`]="{ item }">
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
          v-if="orderProducts.length <= 6"
        >
          <v-col class="text-right">
            <h5>ราคาทั้งหมด :</h5>
            <h5>ค่าจัดส่ง :</h5>
            <h5>รวม :</h5>
            <!-- <h5>รวมเงิน :</h5> -->
            <h5>ส่วนลดบัตรเงินสด :</h5>
            <h5>ส่วนลดคูปอง :</h5>
            <!-- <h5 v-if="isUseCoupon">ส่วนลดคูปอง :</h5>
            <h5 v-if="isUseVoucher">ส่วนลดบัตรเงินสด :</h5> -->
            <!-- <h5>จำนวนสุทธิ(ก่อนหักภาษี) : </h5>
                <h5>ภาษี 7% : </h5>
                <h5>ภาษีหัก ณ ที่จ่าย 0% : </h5> -->
            <!-- <h5>ส่วนลดเงินสด :</h5> -->
            <h5>รวมเงินหลังหักส่วนลดทั้งสิ้น :</h5>
          </v-col>
          <v-col cols="2" class="text-left">
            <h5 class="ml-2">{{ convertPrice(totalPrice) }} บาท</h5>
            <h5 class="ml-2">{{ convertPrice(deliveryPrice) }} บาท</h5>
            <h5 class="ml-2">{{ unit }} หน่วย</h5>
            <!-- <h5 class="ml-2">23000</h5> -->
            <h5 class="ml-2">{{ convertPrice(voucherAmt) }} บาท</h5>
            <!-- <h5 class="ml-2">23000</h5> -->
            <h5 class="ml-2">
              <!-- <h5 class="ml-2" v-if="isUseCoupon"> -->
              {{ convertPrice(couponAmt) }} บาท
            </h5>
            <!-- <h5 class="ml-2">0</h5>
                <h5 class="ml-2">100</h5>
                <h5 class="ml-2">0</h5> -->
            <!-- <h5 class="ml-2">10000</h5> -->
            <h5 class="ml-2">{{ convertPrice(paymentPrice) }} บาท</h5>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" v-if="orderProducts.length <= 6">
          <v-col cols="12" class="mb-0">=({{ totalText }})=</v-col>
          <v-col cols="12"><v-divider></v-divider></v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้รับสินค้า)</span>
          </v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้จัดทำ)</span>
          </v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้รับเงิน)</span>
          </v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้อนุมัติ)</span>
          </v-col>
        </v-row>
        <v-row>
          <span
            >หมายเหตุ : เงื่อนไขการชำระสินค้า : บัตรเครดิต จำนวนเดือนที่ผ่อนชำระ
            : 0 เปอร์เซ็นต์ 10 เดือน
          </span>
        </v-row>
      </div>
    </div>
    <div ref="quotation_content" v-if="orderProducts.length > 6">
      <div class="page">
        <v-row
          align="center"
          justify="end"
          no-gutters
          class="text-right mt-5"
          v-if="orderProducts.length > 6"
        >
          <v-col class="text-right">
            <h5>ราคาทั้งหมด :</h5>
            <h5>ค่าจัดส่ง :</h5>
            <h5>รวม :</h5>
            <!-- <h5>รวมเงิน :</h5> -->
            <h5 v-if="isUseCoupon">ส่วนลดคูปอง :</h5>
            <h5 v-if="isUseVoucher">ส่วนลดบัตรเงินสด :</h5>
            <!-- <h5>จำนวนสุทธิ(ก่อนหักภาษี) : </h5>
                <h5>ภาษี 7% : </h5>
                <h5>ภาษีหัก ณ ที่จ่าย 0% : </h5> -->
            <!-- <h5>ส่วนลดเงินสด :</h5> -->
            <h5>รวมเงินหลังหักส่วนลดทั้งสิ้น :</h5>
          </v-col>
          <v-col cols="2" class="text-left">
            <h5 class="ml-2">{{ convertPrice(totalPrice) }} บาท</h5>
            <h5 class="ml-2">{{ convertPrice(deliveryPrice) }} บาท</h5>
            <h5 class="ml-2">{{ unit }} หน่วย</h5>
            <!-- <h5 class="ml-2">23000</h5> -->
            <h5 class="ml-2">
              <!-- <h5 class="ml-2" v-if="isUseCoupon"> -->
              {{ convertPrice(couponAmt) }} บาท
            </h5>
            <h5 class="ml-2">
              <!-- <h5 class="ml-2" v-if="isUseVoucher"> -->
              {{ convertPrice(voucherAmt) }} บาท
            </h5>
            <!-- <h5 class="ml-2">0</h5>
                <h5 class="ml-2">100</h5>
                <h5 class="ml-2">0</h5> -->
            <!-- <h5 class="ml-2">10000</h5> -->
            <h5 class="ml-2">{{ convertPrice(paymentPrice) }} บาท</h5>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" v-if="orderProducts.length > 6">
          <v-col cols="12" class="mb-0">=({{ totalText }})=</v-col>
          <v-col cols="12"><v-divider></v-divider></v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้รับสินค้า)</span>
          </v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้จัดทำ)</span>
          </v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้รับเงิน)</span>
          </v-col>
          <v-col cols="3" class="text-center mt-12">
            <v-divider></v-divider>
            <span>(ผู้อนุมัติ)</span>
          </v-col>
        </v-row>
        <v-row>
          <span
            >หมายเหตุ : เงื่อนไขการชำระสินค้า : บัตรเครดิต จำนวนเดือนที่ผ่อนชำระ
            : 0 เปอร์เซ็นต์ 10 เดือน
          </span>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import JSPDF from "jspdf";
import html2canvas from "html2canvas";
import { Decode } from "@/services";
import { bahttext } from "bahttext";
export default {
  data() {
    return {
      name: "",
      address: "",
      tel: "",
      email: "",
      orderNo: "",
      orderdate: "",
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
        { text: "ลำดับ", value: "count", align: "center" },
        { text: "รหัสสินค้า", value: "product.sku", align: "center" },
        { text: "ชื่อสินค้า", value: "product.productName", align: "center" },
        { text: "จำนวน", value: "amount", align: "center" },
        { text: "ราคาต่อหน่วย", value: "product.price", align: "center" },
        { text: "ส่วนลด", value: "product.price", align: "center" },
        { text: "ราคารวม", value: "product.price", align: "center" },
        // { text: "ตัวเลือก", value: "action", align: "center" },
        // { text: "จำนวน", value: "count" },
        // { text: "หมายเหตุ", value: "note" },
      ],
      totalText: "",
      total: 0,
      unit: 0,
      coupon: [],
      isUseCoupon: false,
      couponName: "",
      couponAmt: null,
      voucherAmt: null,
      isUseVoucher: false,
      paymentPrice: 0,
      deliveryPrice: 0,
    };
  },
  components: {},

  methods: {
    convertDate(val) {
      return moment(val).format("MM/DD/YYYY ");
    },
    convertPrice(val) {
      return new Intl.NumberFormat("en-NZ", {
        minimumFractionDigits: 2,
      }).format(val);
    },
    async getOrderById() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/orders/` + this.id
      );
      // console.log("responseById", response.data.data);
      const data = response.data.data;
      this.name = data.name;
      this.tel = data.tel;
      this.email = data.email;
      // this.orderNo = data.orderNo;
      this.address =
        data.addressDetail +
        " " +
        data.subDistrict +
        " " +
        data.district +
        " " +
        data.province +
        " " +
        data.postalCode;
      this.createdAt = data.createdAt;
      this.orderNo = data.orderNo;
      this.orderType = data.orderType;
      this.orderStatus = data.orderStatus;
      // this.orderdate = new Date(data.orderdate).toISOString().slice(0, 10);
      this.orderdate = data.orderdate;
      this.totalPrice = data.totalPrice;
      this.paymentPrice = data.paymentPrice;
      this.deliveryPrice = data.deliveryPrice;
      this.paymentType = data.paymentType;
      this.paymentTransactionId = data.paymentTransactionId;
      this.status = data.status;
      this.slipImg = data.slipImg;
      this.deliveryNo = data.deliveryNo;
      this.isUseCoupon = data.isUseCoupon;
      if (data.isUseCoupon) {
        this.couponName = data.coupon.couponName;
      }
      this.couponAmt = data.couponAmt;
      this.isUseVoucher = data.isUseVoucher;
      this.voucherAmt = data.voucherAmt;

      this.orderProducts = data.orderProducts;

      for (let i in this.orderProducts) {
        this.orderProducts[i].count = parseInt(i) + 1;
        // this.orderProducts[i].count =
        //   this.orderProducts[i].amount
        //   + " " + this.orderProducts[i].amountType;

        // this.orderProducts[i].product.price = new Intl.NumberFormat().format(
        //   data.orderProducts[i].product.price
        // );
        // console.log('this.orderProducts[i].price;',this.orderProducts[i].product.price);
        this.unit += this.orderProducts[i].amount;
        // this.total += this.orderProducts[i].product.price;
      }

      this.totalText = bahttext(this.paymentPrice);
      // console.log("word", this.totalText);
      this.paymentStatus = data.paymentStatus;

      if (data.paymentStatus == "WAITING_PAYMENT") {
        this.paymentStatusItems = [
          { text: "ตีกลับ", value: "REJECT" },
          { text: "ชำระเงินสำเร็จ", value: "SUCCESS" },
        ];
      }
      if (data.paymentStatus == "SUCCESS") {
        this.paymentStatusItems = [
          { text: "จัดส่งแล้ว", value: "DERIVERED" },
          { text: "ยกเลิก", value: "CANCEL" },
        ];
      }
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
  created() {
    // var orderdata = JSON.parse(
    //   Decode.decode(localStorage.getItem("orderdata"))
    // );
    // this.id = orderdata.id;

    const urlParams = this.$route.query;
    this.id = urlParams.id;
    // console.log("urlParams", urlParams);
    this.getOrderById();
  },
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
b,
td {
  font-size: 10px !important;
}
/* tr {
  font-size: 10px !important;
}
th {
  font-size: 10px !important;
} */
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
.page-color {
  background-color: #f7f8f9;
}
.headertable-quotation-page {
  background-color: #f7f8f9;
  width: 150px !important;
}
.card-radius {
  border-radius: 8px;
  background-color: #f7f8f9;
}
</style>
