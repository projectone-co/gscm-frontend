<template>
  <div style="background: white">
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
        <loading :active.sync="loading"></loading>

        <v-row dense>
          <v-col cols="12">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูลแจ้งเบาะแสยาเสพติด
            </h2>
          </v-col>
          <v-col cols="12">
            <h2 class="ml-0">หมายเลขร้องเรียน : {{ report_no }}</h2>
          </v-col>
        </v-row>

        <!-- <v-row dense> -->

        <br />
        <!-- <br />
          <br /> -->
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" style="margin-top: 20px">
            <h2 style="font-weight: 800; color: #577eba">
              ลักษณะการกระทำความผิด
            </h2>
          </v-col>
        </v-row>
        <v-col cols="12" md="3" v-for="(j, index) in reportTypes" :key="index">
          <v-checkbox
            v-model="j.type_name"
            :label="j.type_name"
            readonly
          ></v-checkbox>
          <span v-if="j.type_name == 'อื่นๆ โปรดระบุ'"
            ><b>ลักษณะการกระทำความผิดอื่นๆ ที่ประชาชนระบุมา: </b></span
          >
          <span v-if="j.type_name == 'อื่นๆ โปรดระบุ'">{{
            report_type_other
          }}</span>
        </v-col>
        <!-- <v-row dense>
        <v-col cols="12" md="12" v-if="report_type_other">
          <span><b>ลักษณะการกระทำความผิดอื่นๆ ที่ประชาชนระบุมา: </b></span>
          <span>{{ report_type_other }}</span>
        </v-col>
      </v-row> -->
        <v-row
          dense
          class="สถานที่"
          v-for="(i, index) in locations"
          :key="index"
          style="margin-top: 20px"
        >
          <v-col cols="12" md="12">
            <h2 style="font-weight: 800; color: #577eba">
              สถานที่กระทำความผิด {{ index + 1 }}
            </h2>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <span><b>สถานที่: </b></span>
            <span>{{ i.location_type }}</span>
            <!-- <v-text-field v-model="i.location_type" outlined dense disabled ></v-text-field> -->
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <span><b>ชื่อสถานที่: </b></span>
            <span>{{ i.location_name }}</span>
            <!-- <v-text-field v-model="i.location_name" outlined dense disabled ></v-text-field> -->
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <span><b>จังหวัด: </b></span>
            <span>{{ i.location_province }}</span>
            <!-- <v-text-field
            v-model="i.location_province"
            outlined
            dense
            disabled
           ></v-text-field> -->
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <span><b>เขต/อำเภอ: </b></span>
            <span>{{ i.location_district }}</span>
            <!-- <span>เขต/อำเภอ</span>
          <v-text-field
            v-model="i.location_district"
            outlined
            dense
            disabled></v-text-field> -->
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <span><b>แขวง/ตำบล: </b></span>
            <span>{{ i.location_sub_district }}</span>
            <!-- <span>แขวง/ตำบล</span>
          <v-text-field
            v-model="i.location_sub_district"
            outlined
            dense
          disabled ></v-text-field> -->
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <span><b>หมู่บ้าน: </b></span>
            <span>{{ i.location_village }}</span>
            <!-- <span>หมู่บ้าน</span>
          <v-text-field
            v-model="i.location_village"
            outlined
            dense
          disabled ></v-text-field> -->
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <span><b>ตำแหน่ง</b></span>
            <br />
            <GmapMap
              :center="{ lat: i.location_lat * 1, lng: i.location_lng * 1 }"
              :zoom="18"
              :options="mapOptions"
              map-style-id="roadmap"
              style="width: 100%; height: 50vmin; margin-top: 10px"
              ref="mapRef"
            >
              <GmapMarker
                :position="{
                  lat: i.location_lat * 1,
                  lng: i.location_lng * 1,
                }"
                :clickable="false"
                :draggable="false"
              />
            </GmapMap>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- <br /> -->
    <div ref="quotation_content">
      <div class="page">
        <v-row
          dense
          class="ข้อมูลกระทำความผิด"
          v-for="(i, index) in suspects"
          :key="index"
          style="margin-top: 10px"
        >
          <v-col cols="12" md="12">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูลผู้กระทำความผิด หรือ ผู้ที่ต้องการให้นำตัวไปบำบัด
              {{ index + 1 }}
            </h2>
          </v-col>
          <v-col cols="12"><b>ข้อมูลผู้ต้องสงสัย</b></v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>ชื่อ</span>
          <v-text-field v-model="i.suspect_name" outlined dense disabled ></v-text-field> -->
            <span><b>ชื่อ: </b></span>
            <span>{{ i.suspect_name }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>นามสกุล</span>
          <v-text-field
            v-model="i.suspect_lastname"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>นามสกุล: </b></span>
            <span>{{ i.suspect_lastname }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>ฉายา</span>
          <v-text-field
            v-model="i.suspect_nickname"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>ฉายา: </b></span>
            <span>{{ i.suspect_nickname }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>อายุประมาณ</span>
          <v-text-field v-model="i.suspect_age" outlined dense disabled ></v-text-field> -->
            <span><b>อายุประมาณ: </b></span>
            <span>{{ i.suspect_age }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>เพศ</span>
          <v-text-field v-model="i.suspect_sex" outlined dense disabled ></v-text-field> -->
            <span><b>เพศ: </b></span>
            <span>{{ i.suspect_sex }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>เจ้าหน้าที่ของรัฐ</span>
          <v-text-field
            v-model="i.suspect_is_grov"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>เจ้าหน้าที่ของรัฐ: </b></span>
            <span>{{ i.suspect_is_grov }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>ส่วนสูง</span>
          <v-text-field
            v-model="i.suspect_height"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>ส่วนสูง: </b></span>
            <span>{{ i.suspect_height }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>สีผิว</span>
          <v-text-field v-model="i.suspect_skin" outlined dense disabled ></v-text-field> -->
            <span><b>สีผิว: </b></span>
            <span>{{ i.suspect_skin }}</span>
          </v-col>

          <v-col cols="4" md="4" sm="12">
            <!-- <span>อาชีพ</span>
          <v-text-field v-model="i.suspect_job" outlined dense disabled ></v-text-field> -->
            <span><b>อาชีพ: </b></span>
            <span>{{ i.suspect_job }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>หน่วยงาน/บริษัท</span>
          <v-text-field
            v-model="i.suspect_company"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>หน่วยงาน/บริษัท: </b></span>
            <span>{{ i.suspect_company }}</span>
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <!-- <span>รอยสัก/แผลเป็น/ความพิการ/ลักษณะเด่น</span>
          <v-text-field
            v-model="i.suspect_tattoo"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>รอยสัก/แผลเป็น/ความพิการ/ลักษณะเด่น: </b></span>
            <span>{{ i.suspect_tattoo }}</span>
          </v-col>
          <!-- </v-row>
          <v-row dense class="ที่พักอาศัยปุจจุบัน"> -->
          <v-col cols="12" md="12">
            <h2 style="font-weight: 800; color: #577eba; margin-top: 20px">
              ที่พักอาศัยปัจจุบัน
            </h2>
          </v-col>
          <!-- <v-col cols="12" md="6">
            <v-checkbox
              v-model="i.suspect_is_in_area"
              label="ที่อยู่เดียวกับสถานที่กระทำผิด"
            ></v-checkbox>
          </v-col> -->
          <v-col cols="12" md="6"></v-col>
          <v-col cols="4" md="4">
            <!-- <span>ชื่อสถานที่</span>
          <v-text-field
            v-model="i.suspect_address_name"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>ชื่อสถานที่: </b></span>
            <span>{{ i.suspect_address_name }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>จังหวัด</span>
          <v-text-field
            v-model="i.suspect_province"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>จังหวัด: </b></span>
            <span>{{ i.suspect_province }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>เขต / อำเภอ</span>
          <v-text-field
            v-model="i.suspect_district"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>เขต / อำเภอ: </b></span>
            <span>{{ i.suspect_district }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>แขวง / ตำบล</span>
          <v-text-field
            v-model="i.suspect_sub_district"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>แขวง / ตำบล: </b></span>
            <span>{{ i.suspect_sub_district }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>หมู่บ้าน</span>
          <v-text-field
            v-model="i.suspect_village"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>หมู่บ้าน: </b></span>
            <span>{{ i.suspect_village }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <v-checkbox
            readonly
            v-model="i.suspect_is_in_area"
            label="เป็นบุคคลในพื้นที่หรือไม่"
          ></v-checkbox> -->
            <span><b>เป็นบุคคลในพื้นที่: </b></span>
            <span>{{ i.suspect_is_in_area ? "ใช่" : "ไม่ใช่" }}</span>
          </v-col>
          <!-- <v-col cols="12" md="6"></v-col> -->
          <v-col cols="12" md="12">
            <span><b>รายละเอียด: </b></span>
            <span>{{ i.suspect_detail || "-" }}</span>
            <!-- <span>รายละเอียด</span>
          <v-textarea
            v-model="i.suspect_detail"
            outlined
            dense
            rows="3"
            disabled
            placeholder="ระบุรายละเอียดการกระทำผิด ลักษณะที่อยู่อาศัย เช่น บ้านปูน/บ้านไม้ กี่ชั้น สีบ้าน จุดสังเกต ช่วงเวลากระทำผิด ราคายา แหล่งซื้อ จุดซุกซ่อน อาวุธปืน ยานพาหนะ เบอร์โทรศัพท์ LINE Facebook Social ต่าง ๆ"
          ></v-textarea> -->
          </v-col>
          <!-- </v-row>
         <v-row dense> ข้อมูล Social ของผู้ต้องสงสัย </v-row> -->
          <v-col cols="12" md="12" sm="4" style="margin-top: 20px">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูล Social ของผู้ต้องสงสัย {{ index + 1 }}
            </h2>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>Facebook</span>
          <v-text-field
            v-model="i.suspect_facebook"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>Facebook: </b></span>
            <span>{{ i.suspect_facebook || "-" }}</span>
          </v-col>
          <v-col cols="12" md="4" sm="4">
            <!-- <span>Instagram</span>
          <v-text-field
            v-model="i.suspect_instagram"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>Instagram: </b></span>
            <span>{{ i.suspect_instagram || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>Line ID</span>
          <v-text-field v-model="i.suspect_line" outlined dense disabled ></v-text-field> -->
            <span><b>Line ID: </b></span>
            <span>{{ i.suspect_line || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>Twitter</span>
          <v-text-field
            v-model="i.suspect_twitter"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>Twitter: </b></span>
            <span>{{ i.suspect_twitter || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>Tiktok</span>
          <v-text-field
            v-model="i.suspect_tiktok"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>Tiktok: </b></span>
            <span>{{ i.suspect_tiktok || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>อื่นๆ</span>
          <v-text-field
            v-model="i.suspect_social_other"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>อื่นๆ: </b></span>
            <span>{{ i.suspect_social_other || "-" }}</span>
          </v-col>
          <!-- </v-row>
      <v-row dense class="ต้องสงสัย"> -->
          <v-col cols="12" md="12" style="margin-top: 20px">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูลเบอร์โทรและอีเมลของผู้ต้องสงสัย {{ index + 1 }}
            </h2>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>Email</span>
          <v-text-field
            v-model="i.suspectContacts[index].suspect_email"
            outlined
            dense
          disabled ></v-text-field> -->
            <span><b>Email: </b></span>
            <span>{{ i.suspectContacts[index].suspect_email || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>เบอร์โทรศัพท์</span>
                    <v-text-field
                    v-model="i.suspectContacts[index].suspect_tel"
                    outlined
                    dense
                disabled ></v-text-field> -->
            <span><b>เบอร์โทรศัพท์: </b></span>
            <span>{{ i.suspectContacts[index].suspect_tel || "-" }}</span>
          </v-col>
          <!-- </v-row>
                   <v-row dense class="ข้อมูลบัตรประชาชน"> -->
          <v-col cols="12" md="12" style="margin-top: 20px">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูลบัตรประชาชน ข้อมูลบัญชีหรือเลขบัตรเครดิตของผู้ต้องสงสัย
              {{ index + 1 }}
            </h2>
          </v-col>
          <v-col cols="12" md="12">
            <!-- <span>หมายบัตรประชาชนผู้ต้องสงสัย</span>
                        <v-text-field
                            v-model="i.suspect_id_card"
                            outlined
                            dense
                        disabled ></v-text-field> -->
            <span><b>หมายบัตรประชาชนผู้ต้องสงสัย: </b></span>
            <span>{{ i.suspect_id_card || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>หมายเลขบัญชี หมายเลขบัตรเครดิต หรือบัตรเดบิต</span>
                            <v-text-field
                                v-model="i.suspectCards[index].suspect_card_no"
                                outlined
                                dense
                            disabled ></v-text-field> -->
            <span><b>หมายเลขบัญชี หมายเลขบัตรเครดิต หรือบัตรเดบิต: </b></span>
            <span>{{ i.suspectCards[index].suspect_card_no || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>ธนาคารหรือสถาบันการเงินของหมายเลขบัตรเครดิต หรือบัตรเดบิต</span>
                        <v-text-field
                            v-model="i.suspectCards[index].suspect_card_bank"
                            outlined
                            dense
                        disabled ></v-text-field> -->
            <span
              ><b
                >ธนาคารหรือสถาบันการเงินของหมายเลขบัตรเครดิต หรือบัตรเดบิต:
              </b></span
            >
            <span>{{ i.suspectCards[index].suspect_card_bank || "-" }}</span>
          </v-col>
          <!-- </v-row>
                          <v-row dense class="ข้อมูลยานพาหนะของผู้ต้องสงสัย"> -->
          <v-col cols="12" md="12" style="margin-top: 20px">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูลยานพาหนะของผู้ต้องสงสัย {{ index + 1 }}
            </h2>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>ประเภทรถ</span>
                <v-text-field
                    v-model="i.suspectTransports[index].transport_type"
                    outlined
                    dense
                disabled ></v-text-field> -->
            <span><b>ประเภทรถ: </b></span>
            <span>{{ i.suspectTransports[index].transport_type || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span> ยี่ห้อรถ </span>
                <v-text-field
                    v-model="i.suspectTransports[index].transport_brand"
                    outlined
                    dense
                disabled ></v-text-field> -->
            <span><b>ยี่ห้อรถ: </b></span>
            <span>{{ i.suspectTransports[index].transport_brand || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>สีรถ</span>
                <v-text-field
                    v-model="i.suspectTransports[index].transport_color"
                    outlined
                    dense
                disabled ></v-text-field> -->
            <span><b>สีรถ: </b></span>
            <span>{{ i.suspectTransports[index].transport_color || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>หมายเลขทะเบียน</span>
                    <v-text-field
                        v-model="i.suspectTransports[index].transport_license_no"
                        outlined
                        dense
                    disabled ></v-text-field> -->
            <span><b>หมายเลขทะเบียน: </b></span>
            <span>{{
              i.suspectTransports[index].transport_license_no || "-"
            }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>จังหวัด</span>
                    <v-text-field
                        v-model="i.suspectTransports[index].transport_license_province"
                        outlined
                        dense
                    disabled ></v-text-field> -->
            <span><b>จังหวัด: </b></span>
            <span>{{
              i.suspectTransports[index].transport_license_province || "-"
            }}</span>
          </v-col>
        </v-row>
      </div>
    </div>
    <div ref="quotation_content">
      <div class="page">
        <v-row dense class="ข้อมูลยาเสพติด" style="margin-top: 0px">
          <v-col cols="12" md="12">
            <h2 style="font-weight: 800; color: #577eba">ข้อมูลยาเสพติด</h2>
          </v-col>
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col
                cols="12"
                md="3"
                v-for="(j, index) in reportDrugs"
                :key="index"
              >
                <v-checkbox
                  v-model="j.drug_name"
                  :label="j.drug_name"
                  readonly
                ></v-checkbox>
                <span v-if="j.drug_name == 'อื่นๆ'"
                  ><b>ยาเสพติดอื่นๆ ที่ประชาชนระบุมา: </b></span
                >
                <span v-if="j.drug_name == 'อื่นๆ'">{{
                  report_drug_other
                }}</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- <v-row dense class="รูปถ่าย">
        <v-col cols="12" md="6" v-if="report_drug_other">
          <span>ยาเสพติดอื่นๆ ที่ประชาชนระบุมา</span>
          <v-text-field
            v-model="report_drug_other"
            outlined
            dense
            disabled
          ></v-text-field>
        </v-col>
      </v-row> -->
        <v-row dense class="ข้อมูลผู้แจ้ง" style="margin-top: 20px">
          <v-col cols="12">
            <h2 style="font-weight: 800; color: #577eba">
              ข้อมูลผู้แจ้ง (กรณีประสงค์จะให้ข้อมูล)
            </h2>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>ชื่อ</span>
          <v-text-field
            v-model="reporter_firstname"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>ชื่อ: </b></span>
            <span>{{ reporter_firstname || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>นามสกุล</span>
          <v-text-field
            v-model="reporter_lastname"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>นามสกุล: </b></span>
            <span>{{ reporter_lastname || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>เพศ</span>
          <v-text-field
            v-model="reporter_sex"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>เพศ: </b></span>
            <span>{{ reporter_sex || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>บ้านเลขที่</span>
          <v-text-field
            v-model="reporter_address"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>บ้านเลขที่: </b></span>
            <span>{{ reporter_address || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>โทรศัพท์</span>
          <v-text-field
            v-model="reporter_tel"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>โทรศัพท์: </b></span>
            <span>{{ reporter_tel || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>จังหวัด</span>
          <v-text-field
            v-model="reporter_province"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>จังหวัด: </b></span>
            <span>{{ reporter_province || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>เขต/อำเภอ</span>
          <v-text-field
            v-model="reporter_district"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>เขต/อำเภอ: </b></span>
            <span>{{ reporter_district || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>แขวง/ตำบล</span>
          <v-text-field
            v-model="reporter_sub_district"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>แขวง/ตำบล: </b></span>
            <span>{{ reporter_sub_district || "-" }}</span>
          </v-col>
          <v-col cols="4" md="4">
            <!-- <span>หมู่บ้าน</span>
          <v-text-field
            v-model="reporter_village"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>หมู่บ้าน: </b></span>
            <span>{{ reporter_village || "-" }}</span>
          </v-col>
        </v-row>

        <v-row dense class="รูปถ่าย" style="margin-top: 20px">
          <v-col cols="12">
            <h2 style="font-weight: 800; color: #577eba">รูปถ่าย</h2>
          </v-col>
          <v-col
            cols="12"
            md="3"
            v-for="(i, index) in reportImages"
            :key="index"
          >
            <v-img
              :src="i.image_url"
              max-height="350px"
              max-width="350px"
              style="cursor: pointer"
              @click="onClickImg(i.image_url)"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="mb-4" style="margin-top: 30px">
          <v-col cols="12">
            <h2 style="font-weight: 800; color: #577eba">สำหรับเจ้าหน้าที่</h2>
          </v-col>

          <v-col cols="12">
            <span>สถานะ<b style="color: #f00">*</b></span>
            <v-select
              v-model="status"
              :items="itemstatus"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="12">
            <span
              >ข้อความตอบกลับจากเจ้าหน้าที่<b style="color: #f00">*</b></span
            >
            <v-textarea
              outlined
              dense
              rows="5"
              placeholder="ระบุข้อความตอบกลับไปยังประชาชน"
              v-model="admin_comment"
            ></v-textarea>
          </v-col>
          <v-col cols="4" v-if="updateBy">
            <!-- <span>แก้ไขล่าสุดโดย</span>
          <v-text-field
            v-model="updateBy"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>แก้ไขล่าสุดโดย: </b></span>
            <span>{{ updateBy || "-" }}</span>
          </v-col>
          <v-col cols="4" v-if="updatedAt">
            <!-- <span>วันที่แก้ไขล่าสุด</span>
          <v-text-field
            v-model="updatedAt"
            outlined
            dense
            disabled
          ></v-text-field> -->
            <span><b>วันที่แก้ไขล่าสุด: </b></span>
            <span>{{ updatedAt || "-" }}</span>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- <v-row
            align="center"
            justify="center"
            class="ma-4"
            v-if="printvisible"
          >
            <v-btn @click="back()">กลับ</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="text-right" @click="submit()"
              >บันทึก</v-btn
            >
          </v-row>
          <v-col cols="12" md="12" v-if="printvisible">
            <v-btn color="primary" class="text-right" @click="printpo()"
              >ดาวน์โหลดเป็นไฟล์ PDF</v-btn
            >
          </v-col> -->
  </div>
</template>

<script>
import { Decode, Encode } from "@/services";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import moment from "moment";
import VueHtmlToPaper from "vue-html-to-paper";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      printvisible: true,
      marker: { position: { lat: 13.736717, lng: 100.523186 } },
      center: { lat: 13.736717, lng: 100.523186 },
      mapOptions: {
        disableDefaultUI: true,
      },
      loading: false,

      locations: [],
      reportDrugs: [],
      reportImages: [],
      reportTypes: [],
      suspects: [],
      report_no: "",
      report_type_other: "",
      reporter_address: "",
      reporter_district: "",
      reporter_firstname: "",
      reporter_lastname: "",
      reporter_province: "",
      reporter_sex: "",
      reporter_sub_district: "",
      reporter_tel: "",
      reporter_village: "",
      status: "",
      updateBy: "",
      updatedAt: new Date(),
      itemstatus: [
        "ยังไม่ได้ดำเนินการ",
        "พบพฤติการณ์",
        "ไม่พบพฤติการณ์",
        "พิสูจน์ทราบไม่ได้",
        "จับกุม",
        "รายงานตัว/หยุดพฤติการณ์",
        "หลบหนีออกนอกพื้นที่",
        "อยู่ระหว่างสอบสวนติดตาม",
      ],
      admin_comment: "",
      report_drug_other: "",
      id: "",
    };
  },
  created() {
    var user = JSON.parse(Decode.decode(localStorage.getItem("userBebraveWeb")));
    // console.log("user", user);
    var Bannerdata = JSON.parse(
      Decode.decode(localStorage.getItem("Bannerdata"))
    );
    // console.log("Bannerdata", Bannerdata);
    this.id = Bannerdata.id;
    this.getOne();
  },
  methods: {
    // convertDate(val) {
    //   return moment(val).format("MM/DD/YYYY hh:mm");
    // },
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
      console.log(
        "Page ===",
        pagearr.filter((v) => !!v)
      );
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
    // async printpo() {
    //   await this.$htmlToPaper("printMe");
    // },
    onClickImg(url) {
      window.open(url, "_blank");
    },
    async getOne() {
      this.loading = true;
      var user = JSON.parse(
        Decode.decode(localStorage.getItem("userBebraveWeb"))
      );
      const auth = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/reportForms/` + this.id,
        auth
      );
      const data = response.data.data;

      // console.log("response", response.data.data);
      this.locations = data.locations;
      this.reportDrugs = data.reportDrugs;
      this.reportImages = data.reportImages;
      this.reportTypes = data.reportTypes;
      this.suspects = data.suspects;
      this.report_no = data.report_no;
      this.report_type_other = data.report_type_other;
      this.reporter_address = data.reporter_address;
      this.reporter_district = data.reporter_district;
      this.reporter_firstname = data.reporter_firstname;
      this.reporter_lastname = data.reporter_lastname;
      this.reporter_province = data.reporter_province;
      this.reporter_sex = data.reporter_sex;
      this.reporter_sub_district = data.reporter_sub_district;
      this.reporter_tel = data.reporter_tel;
      this.reporter_village = data.reporter_village;
      this.status = data.status;
      this.updateBy = data.updateBy;
      this.updatedAt = moment(data.updatedAt).format("MM/DD/YYYY hh:mm");
      this.admin_comment = data.admin_comment;
      this.report_drug_other = data.report_drug_other;
      this.loading = false;
    },
    back() {
      this.$router.go(-1);
    },
    async submit() {
      this.loading = true;
      var user = JSON.parse(
        Decode.decode(localStorage.getItem("userBebraveWeb"))
      );
      // console.log(user);
      const auth = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      const data = {
        status: this.status,
        updateBy: user.user.name,
        updateAt: this.updatedAt,
        admin_comment: this.admin_comment,
      };
      const response = await this.axios.put(
        `${process.env.VUE_APP_API}/reportForms/` + this.id,
        data,
        auth
      );
      if (response.data.response_status == "SUCCESS") {
        this.$swal.fire({
          icon: "success",
          text: `อัพเดตข้อมูลสำเร็จ`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("table1");
      } else {
        this.$swal.fire({
          icon: "error",
          text: `อัพเดตข้อมูลไม่สำเร็จ`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      this.loading = false;
    },
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

  border: 0px #d3d3d3 solid;
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
