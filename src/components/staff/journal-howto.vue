<template>
  <v-form style="background-color: #fff" class="-mt-top">
    <Headers
      title="ส่งบทความวิชาการ"
      mdColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #B429F9 0%, rgba(255, 143, 74, 0.92) 51.56%, rgba(255, 143, 74, 0.25) 100%);"
      smColor="background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #B429F9 0%, rgba(255, 143, 74, 0.92) 51.56%, rgba(255, 143, 74, 0.25) 100%);"
    >
      <template #before>
        <div class="tw-flex tw-items-center tw-w-fit tw-mx-auto sm:tw-mx-0">
          <v-icon
            color="white"
            style="font-size: 40px"
            class="mr-3"
            @click="goback()"
            >mdi-chevron-left-circle
          </v-icon>
          <span
            @click="goback()"
            style="
              font-family: 'IBM Plex Sans Thai';
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
              color: #ffffff;
              cursor: pointer;
            "
            >วารสารวิชาการ</span
          >
        </div>
      </template>
    </Headers>
    <Tabs :tabs="tabs" v-model="selectedtab" mobileOverflow />

    <div
      class="tw-gap-[56px] tw-max-w-[1680px] tw-mx-auto tw-flex tw-my-[24px] sm:tw-my-[36px] md:tw-my-[48px] tw-justify-center tw-w-full tw-px-[16px] md:tw-px-[64px] tw-flex-col-reverse md:tw-flex-row"
    >
      <!-- //body -->

      <div class="lg:tw-max-w-[calc(100%-360px)] tw-w-[100%]">
        <div v-if="selectedtab == 1">
          <div>
            <div>
              <span style="font-weight: 600; font-size: 28px"
                >วารสารนิเทศศาสตร์และนวัตกรรม นิด้า</span
              >
              <br />
              <span style="font-weight: 400; font-size: 15px"
                >วารสารนิเทศศาสตร์และนวัตกรรม นิด้า
                ได้การรับรองคุณภาพและคัดเลือกเข้าสู่ฐานข้อมูล TCI
                ให้เป็นวารสารกลุ่มที่ 2 (จนถึง 31 ธันวาคม 2567)</span
              >
              <!-- <v-col cols="12" class="mt-12">
                <img
                  src="@/assets/icons/VfBam11.png"
                  width=" 336px;"
                  height="474px"
                />
                <img
                  src="@/assets/icons/VfBam11.png"
                  width=" 336px;"
                  height="474px"
                />
              </v-col> -->
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >วัตถุประสงค์</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />1.
                  เพื่อเป็นแหล่งในการพัฒนาองค์ความรู้ในสาขานิเทศศาสตร์และนวัตกรรม<br />
                  2.
                  เพื่อเป็นแหล่งในการเผยแพร่ผลงานวิชาการและงานสร้างสรรค์ของคณาจารย์บุคลากร
                  และนักศึกษา</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >ข้อมูลเบื้องต้นของวารสาร</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />1.
                  เป็นวารสารวิชาการที่มีมาตรฐานตามเกณฑ์วารสารวิชาการระดับชาติที่เผยแพร่ผลงานบทความวิชาการ
                  (Article) หรือบทความวิจัย (Research article)
                  บทความวิจารณ์หนังสือ (Book review) และบทความปริทัศน์ (Review
                  article)<br />
                  2. กำหนดพิมพ์เผยแพร่ ปีละ 2 ฉบับ ฉบับที่ 1 มกราคม - มิถุนายน
                  และ ฉบับที่ 2 กรกฎาคม - ธันวาคม</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >ค่าธรรมเนียมการส่งบทความ</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />3,000 บาท ต่อบทความ</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >หลักเกณฑ์การพิจารณากลั่นกรองบทความ</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />1. บทความที่จะได้รับการตีพิมพ์
                  ต้องไม่เคยตีพิมพ์เผยแพร่ที่ใดมาก่อนและต้องไม่อยู่ในกระบวนการพิจารณาลงตีพิมพ์ในวารสารหรือสิ่งตีพิมพ์อื่นใด<br />
                  2. บทความที่จะได้รับการตีพิมพ์
                  ต้องเป็นบทความที่แสดงให้เห็นถึงคุณภาพทางวิชาการ
                  และมีประโยชน์ในเชิงทฤษฎีหรือเชิงปฏิบัติ
                  โดยผ่านการพิจารณาและให้ความเห็นชอบจากผู้ทรงคุณวุฒิ (Peer
                  review) ซึ่งต้องมีคุณสมบัติอย่างต่ำตามเกณฑ์มาตรฐาน
                  คือเป็นผู้เชี่ยวชาญในสาขานั้นๆ
                  ทำงานวิจัยและมีผลงานวิจัยอย่างต่อเนื่อง จำนวนอย่างน้อย 3
                  ท่านขึ้นไปต่อบทความ<br />
                  3.
                  กองบรรณาธิการขอสงวนสิทธิ์ในการตรวจแก้ไขรูปแบบบทความที่ส่งมาตีพิมพ์<br />
                  4. การยอมรับเรื่องที่จะตีพิมพ์เป็นสิทธิ์ของกองบรรณาธิการ
                  และกองบรรณาธิการจะไม่รับผิดชอบในเนื้อหาหรือความถูกต้องของเรื่องที่ส่งมาตีพิมพ์ทุกเรื่อง</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >คำแนะนำสำหรับผู้เขียน</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />วารสารนิเทศศาสตร์และนวัตกรรม นิด้า
                  เป็นวารสารที่นำเสนอบทความงานวิจัยและบทความทางวิชาการทุกลักษณะ
                  ขอบข่ายครอบคลุมงานวิชาการทางด้านนิเทศศาสตร์ นวัตกรรม
                  และการสื่อสาร</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >ลักษณะของบทความที่จะรับ</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />1. บทความงานวิจัยและบทความทางวิชาการในสาขานิเทศศาสตร์
                  นวัตกรรม และการสื่อสาร ที่ส่งมาต้องไม่เคยเผยแพร่ที่ใดมาก่อน<br />
                  2. ต้นฉบับงานจะเขียนเป็นภาษาไทยหรือภาษาอังกฤษก็ได้
                  โดยต้องมีบทคัดย่อทั้งภาษาไทยและภาษาอังกฤษทุกบทความ</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >รูปแบบการเขียนบทความ</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />- บทความต้องมีความยาวจำนวน 12-15 หน้า กระดาษ A4<br />
                  - รูปแบบตัวอักษร TH SarabunPSK<br />
                  - ชื่อเรื่อง ใช้อักษร ขนาด 18 พอยท์ ตัวหนา
                  และจัดให้อยู่กึ่งกลาง<br />
                  - หัวข้อ ใช้อักษร ขนาด 16 พอยท์ ตัวหนา และจัดให้อยู่ชิดซ้าย<br />
                  - ชื่อผู้เขียน ใช้อักษรขนาด 14 พอยท์ และจัดให้อยู่ชิดขวา<br />
                  - ตำแหน่งทางวิชาการ และหน่วยงาน/สถาบัน
                  ของผู้เขียนทุกคนในเชิงอรรถด้านล่างกระดาษ ใช้ตัวอักษรขนาด 12
                  พอยท์ และจัดอยู่ชิดซ้าย<br />
                  - เนื้อหา ใช้อักษร ขนาด 16 พอยท์ และจัดให้อยู่ชิดซ้าย<br />
                  - การกั้นขอบกระดาษ ด้านบน 1 นิ้ว ด้านล่าง 1 นิ้ว ด้านซ้าย 1
                  นิ้ว ด้านขวา 1 นิ้ว<br />
                  - การอ้างอิงในเนื้อความ ใช้ระบบ APA Style <br />
                  - บรรณานุกรม แยกเป็นภาษาไทย และภาษาอังกฤษ
                  (เรียงตามลำดับตัวอักษร)
                  ใช้ตามแบบที่วารสารนิเทศศาสตร์และนวัตกรรม นิด้า กำหนด</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >ส่วนประกอบของบทความ มีดังนี้</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />ก. หน้าแรก บทคัดย่อ (ABSTRACT) ภาษาไทย 1 หน้า
                  และภาษาอังกฤษ 1 หน้า ประกอบด้วย<br />
                  1. ชื่อบทความภาษาไทยและภาษาอังกฤษ 1 หน้า (Title)<br />
                  2. ชื่อผู้เขียนทุกคน (Authors) ให้ระบุเฉพาะชื่อและนามสกุล 
                  โดยไม่ต้องมีคำนำหน้านาม ทั้งภาษาไทยและภาษาอังกฤษ<br />
                  3.
                  ให้เขียนหน่วยงาน/สถาบันของผู้เขียนทุกคนในเชิงอรรถด้านล่างกระดาษ
                  ทั้งภาษาไทยและภาษาอังกฤษ<br />
                  4. ให้เขียนเครื่องหมาย*
                  ไว้บนชื่อบทความเพื่อระบุแหล่งทุนที่ได้รับการอุดหนุนในเชิงอรรถ<br />
                  5. บทคัดย่อ (ABSTRACT) ทั้งภาษาไทย และภาษาอังกฤษ
                  ความยาวไม่เกิน 250 คำ<br />
                  บทคัดย่อบทความวิจัย ขอให้เขียนบทคัดย่อแยกเป็น 3 ย่อหน้า
                  ย่อหน้าแรกให้ระบุวัตถุประสงค์ของงานวิจัย สมมติฐาน
                  ประโยชน์ที่จะได้รับ ย่อหน้าที่ 2 ให้อธิบายวิธีวิจัย ประชากร
                  กลุ่มตัวอย่าง สถิติที่ใช้ ย่อหน้าที่ 3 สรุปผลการวิจัย
                  และข้อเสนอแนะ (ถ้ามี) <br />
                  บทคัดย่อบทความวิชาการ
                  ให้เขียนสรุปประเด็นสำคัญของบทความพร้อมทั้งตรวจสอบบทคัดย่อภาษาอังกฤษให้ถูกต้องก่อนส่งบทความ<br />
                  6. คำสำคัญ (KEYWORDS) ความยาวไม่เกิน 3-5 คำ
                  ทั้งภาษาไทยและภาษาอังกฤษ<br />
                  7.ผู้นิพนธ์ประสานงาน (Corresponding author)
                  ให้ทำเครื่องหมายไว้บนนามสกุลและระบุไปรษณีย์อิเล็กทรอนิกส์
                  (E-mail) (ต้องเป็นอีเมลที่ติดต่อได้ตลอดจนกว่าจะตอบรับบทความ)
                  ไว้ในเชิงอรรถ<br />
                  ตัวอย่าง: *Corresponding author; E-mail address:
                  xxxxxxxxxxxxx@nida.ac.th<br /><br />

                  ข. ส่วนเนื้อหา ประกอบด้วย<br />
                  1. หลักการและเหตุผล<br />
                  2. วัตถุประสงค์ <br />
                  3. การทบทวนวรรณกรรม<br />
                  4. สมมติฐานและกรอบแนวคิดเชิงทฤษฎี<br />
                  5. ระเบียบวิธีวิจัย<br />
                  5.1 ประชากร กลุ่มตัวอย่าง และการสุ่มตัวอย่าง
                  สำหรับการวิจัยเชิงปริมาณ<br />
                  (หรือ ผู้ให้ข้อมูล การเลือกผู้ให้ข้อมูล หน่วยศึกษา
                  การเลือกหน่วยศึกษา สำหรับการวิจัยเชิงคุณภาพ) <br />
                  5.2 เครื่องมือ <br />
                  5.3 การทดสอบความเที่ยงตรงและความเชื่อมั่น<br />
                  5.4 การเก็บข้อมูลภาคสนาม
                  (ให้ระบุการได้รับการอนุมัติจากคณะกรรมการจริยธรรมการวิจัย –
                  ถ้ามี)<br />
                  5.5 การวิเคราะห์ข้อมูล สถิติที่ใช้ <br />
                  6. ผลการวิจัย<br />
                  7. การอภิปรายผล<br />
                  8. ข้อจำกัด<br />
                  9.
                  ข้อเสนอแนะเชิงปฏิบัติและข้อเสนอแนะสำหรับการวิจัยครั้งต่อไป<br />
                  10. สรุปผล<br />
                  11. บรรณานุกรม (ใช้รูปแบบ APA 7th edition)</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >รูปแบบการเขียนบทความ</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />- บทความต้องมีความยาวจำนวน 12-15 หน้า กระดาษ A4<br />
                  - รูปแบบตัวอักษร TH SarabunPSK<br />
                  - ชื่อเรื่อง ใช้อักษร ขนาด 18 พอยท์ ตัวหนา
                  และจัดให้อยู่กึ่งกลาง<br />
                  - หัวข้อ ใช้อักษร ขนาด 16 พอยท์ ตัวหนา และจัดให้อยู่ชิดซ้าย<br />
                  - ชื่อผู้เขียน ใช้อักษรขนาด 14 พอยท์ และจัดให้อยู่ชิดขวา<br />
                  - ตำแหน่งทางวิชาการ และหน่วยงาน/สถาบัน
                  ของผู้เขียนทุกคนในเชิงอรรถด้านล่างกระดาษ ใช้ตัวอักษรขนาด 12
                  พอยท์ และจัดอยู่ชิดซ้าย<br />
                  - เนื้อหา ใช้อักษร ขนาด 16 พอยท์ และจัดให้อยู่ชิดซ้าย<br />
                  - การกั้นขอบกระดาษ ด้านบน 1 นิ้ว ด้านล่าง 1 นิ้ว ด้านซ้าย 1
                  นิ้ว ด้านขวา 1 นิ้ว<br />
                  - การอ้างอิงในเนื้อความ ใช้ระบบ APA Style <br />
                  - บรรณานุกรม แยกเป็นภาษาไทย และภาษาอังกฤษ
                  (เรียงตามลำดับตัวอักษร)
                  ใช้ตามแบบที่วารสารนิเทศศาสตร์และนวัตกรรม นิด้า กำหนด</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >จริยธรรมการตีพิมพ์</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />วารสารนิเทศศาสตร์และนวัตกรรม นิด้า
                  เป็นวารสารที่นำเสนอบทความงานวิจัยและบทความทางวิชาการทุกลักษณะ
                  ขอบข่ายครอบคลุมงานวิชาการทางด้านนิเทศศาสตร์ นวัตกรรม
                  และการสื่อสาร เพื่อให้การดำเนินงานของวารสารเกิดมีคุณภาพ
                  อีกทั้งสอดคล้องกับมาตรฐานการตีพิมพ์ตามหลักจริยธรรม
                  จึงกำหนดจริยธรรมการตีพิมพ์ (Publication Ethics)
                  ดังต่อไปนี้</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >บทบาทหน้าที่และจริยธรรมของผู้เขียน</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  ><br />1. ผู้เขียนต้องรับรองว่า
                  บทความที่ส่งเป็นบทความที่ไม่เคยตีพิมพ์หรือเผยแพร่ที่ใดมาก่อนหรืออยู่ในระหว่างการพิจารณาเพื่อตีพิมพ์หรือเผยแพร่ในวารสารอื่น<br />
                  2. ผู้เขียนต้องรับรองว่า ไม่ได้บิดเบือนข้อมูล แก้ไข
                  หรือให้ข้อมูลที่เป็นเท็จ<br />
                  3. ผู้เขียนที่มีชื่อปรากฏในบทความ
                  ต้องเป็นผู้ที่มีส่วนร่วมในการดำเนินการบทความจริง<br />
                  4. ผู้เขียนบทความที่นำผลงานของผู้อื่นมาใช้ในบทความ
                  ต้องทำการอ้างอิงผลงานดังกล่าวตามรายการอ้างอิงให้ถูกต้องครบถ้วนและต้องมีบรรณานุกรม
                  (Reference) ท้ายบทความ<br />
                  5.
                  ผู้เขียนต้องเขียนบทความให้ถูกต้องตามรูปแบบของวารสารที่ได้กำหนดไว้<br />
                  6. ผู้เขียนบทความที่คัดลอกผลงานผู้อื่น ละเมิดลิขสิทธิ์ผู้อื่น
                  ถือเป็นความรับผิดชอบของผู้เขียนบทความโดยตรง<br />
                  7.ข้อความที่ปรากฏภายในบทความแต่ละเรื่องที่ตีพิมพ์ในวารสารวิชาการเป็นความคิดเห็นส่วนตัวของผู้เขียนบทความแต่ละท่าน
                  ไม่เกี่ยวข้องกับคณะนิเทศศาสตร์และนวัตกรรมการจัดการ
                  สถาบันบัณฑิตพัฒนบริหารศาสตร์แต่อย่างใด
                  ความรับผิดชอบด้านเนื้อหาและการตรวจร่างบทความแต่ละเรื่องเป็นของผู้เขียนบทความแต่ละท่าน
                  หากมีความผิดพลาดใด ๆ
                  ผู้เขียนบทความแต่ละท่านจะต้องรับผิดชอบบทความของตนเอง<br />
                  8.ผู้เขียนบทความต้องระบุผลประโยชน์ทับซ้อน (ถ้ามี)<br
                /></span>
              </v-col>

              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px">กำหนดการ</span>
                <br />
                <table>
                  <tr>
                    <th>โครงสร้างหลักสูตรแผน</th>
                    <th>วันจันทร์ที่ 18 กรกฎาคม 2565</th>
                  </tr>
                  <tr>
                    <td>ระยะเวลาส่งบทความ</td>
                    <td>บัดนี้ - 22 มิถุนายน 2565</td>
                  </tr>
                  <tr>
                    <td>รูปแบบการจัดงาน</td>
                    <td>ออนไลน์ผ่านระบบ ZOOM</td>
                  </tr>
                </table>
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px">กำหนดการ</span>
                <br />
                <span style="font-weight: 400; font-size: 15px"
                  >สามารถดูรายละเอียดการส่งบทความได้ที่ี่ลิงก์</span
                ><span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    color: #2ab3a3;
                    cursor: pointer;
                  "
                >
                  วิธีส่งบทความ<v-icon color="#2ab3a3"
                    >mdi-arrow-top-right</v-icon
                  >
                </span>
              </v-col>
            </div>
          </div>
        </div>

        <div v-if="selectedtab == 2">
          <div>
            <div>
              <span style="font-weight: 600; font-size: 28px"
                >International Conference 2022</span
              >
              <br />
              <span style="font-weight: 400; font-size: 15px"
                >On New Media, Communication & Technology (INCT) 2019</span
              >
              <br />
              <br />
              <br />

              <span style="font-weight: 600; font-size: 28px"
                >CALL FOR PAPERS</span
              >
              <br />
              <span style="font-weight: 400; font-size: 15px"
                >Date: 10 January 2019
                <br />
                Venue: Faculty of Communication Arts, Chulalongkorn University,
                Thailand</span
              >
              <!-- <v-col cols="12" class="mt-12">
                <img
                  src="@/assets/icons/1811010759011.png"
                  width=" 696px;"
                  height="984px"
                />
              </v-col> -->
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >Background</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  >The International Conference on New Media, Communication &
                  Technology (INCT) is organized by the collaboration of 3
                  universities including Faculty of Communication Arts
                  Chulalongkorn University, Faculty of Journalism and Mass
                  Communication Thammasat University, and School of
                  Communication Arts and Management Innovation National
                  Institute of Development Administration, where scholars and
                  their students had generously shared their thoughts on
                  academic knowledge. In 2019, the 1st INCT will be held at
                  Chulalongkorn University in Bangkok, Thailand.</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px">Theme</span>
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  >According to the theme of the conference “Towards
                  Communication 5.0: Media, Communication & People in the Age of
                  Disruptive Technology”, the general theme focus on discussing
                  perspectives on communication in the age of disruptive
                  technology.
                  <br />
                  <br />
                  The 1st INCT invites academic scholars from different
                  interests and backgrounds to present on and discuss the
                  finding from theoretical concepts and justification to
                  application.
                  <br />
                  <br />
                  Papers are encouraged to speak about the challenge of media,
                  communication including people among the age of disruptive
                  technology. The preliminary results and the future suggestions
                  can also be included</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >Abstract submission</span
                >
                <br />
                <span style="font-weight: 400; font-size: 16px"
                  >All abstracts of relevant topics are welcome to submit to
                  INCT2019@outlook.com</span
                >
                <br />
                <table>
                  <tr>
                    <th>The abstract submission deadline</th>
                    <th>20 November 2018</th>
                  </tr>
                  <tr>
                    <td>The abstract submission deadline</td>
                    <td>30 November 2018</td>
                  </tr>
                  <tr>
                    <td>The submission of extended abstract or full paper</td>
                    <td>15 December 2018</td>
                  </tr>
                </table>
                <br />
                <span style="font-weight: 400; font-size: 16px"
                  >Note: All abstracts should be written in English within 300
                  words</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >Tentative Program</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  >The conference venue is located at Faculty of Communication
                  Arts, Chulalongkorn University, Bangkok, Thailand. No
                  registration fee will be charged. During the
                  one-day-conference, refreshments, lunches and dinners will be
                  provided. The information on accommodation in close proximity
                  is available upon request.</span
                >
              </v-col>
              <v-col cols="12">
                <span style="font-weight: 600; font-size: 22px"
                  >Contact the Conference Organizer</span
                >
                <br />
                <span
                  style="
                    font-family: 'IBM Plex Sans Thai Looped';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                  "
                  >Department of International Affairs Faculty of Communication
                  Arts, Chulalongkorn University Phyathai Road, Patumwan Bangkok
                  10330 Email: commarts.interaffairs@gmail.com Tel. (+66) 2 218
                  2214
                </span>
              </v-col>
              <v-col cols="12" class="mb-12">
                <span style="font-weight: 600; font-size: 22px"
                  >Online Registration</span
                >
                <br />
                <span style="font-weight: 400; font-size: 15px">Click</span
                ><span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    color: #2ab3a3;
                    cursor: pointer;
                  "
                  @click="gotodetail()"
                >
                  Register<v-icon color="#2ab3a3">mdi-arrow-top-right</v-icon>
                </span>
              </v-col>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tw-flex tw-flex-col tw-gap-[24px] md:tw-max-w-[360px] tw-w-[100%]"
      >
        ผู้เสนอบทความส่งไฟล์บทความพร้อมกรอกข้อมูลผู้เขียน
        ได้ทางลิ้งค์ส่งบทความด้านล่าง กองบรรณาธิการจะไม่รับผิดชอบในทัศนะ
        ข้อคิดเห็นใดๆ ที่ปรากฎในข้อเขียนต่างๆ ของวารสาร
        เพราะถือเป็นความคิดเห็นส่วนตัวของผู้เขียนแต่ละท่าน
        มิใช่ความคิดเห็นหรือความรับผิดชอบของคณะผู้จัดทำประการใด เล่มวารสาร
        คลิกด้านล่าง
        <div
          class="btn-primary tw-flex tw-gap-[8px] tw-py-[12px] tw-text-white tw-justify-center tw-font-medium tw-cursor-pointer"
          @click="gotodetail()"
        >
          ส่งบทความ
          <img src="/img/arrow-up-right.svg" />
        </div>
      </div>
    </div>

    <div>
      <Footers />
    </div>
  </v-form>
</template>
  <script>
import Footers from "@/components/Footers.vue";
import Headers from "@/components/Headers.vue";
import BigButton from "../BigButton.vue";
import Tabs from "../Tabs.vue";
export default {
  components: {
    Footers,
    Headers,
    BigButton,
    Tabs,
  },
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
      showNav: false,
      tabs: [
        {
          id: 1,
          text: "นิเทศศาสตร์และนวัตกรรม",
        },
        {
          id: 2,
          text: "การสื่อสารและการจัดการ",
        },
      ],
      items: [
        {
          title:
            "COMMUNICATION FOR LOCALISM EMPOWERMENT THROUGH SINGING CONTEST KIKDUU TV PROGRAM",
          name: "Pimchaya Fakpiem",
        },
        {
          title:
            "การรังแกทางไซเบอร์ผ่านสื่อออนไลน์ สาเหตุ และแนวทางการจัดการปัญหา",
          name: "พินวา แสนใหม่",
        },
        {
          title:
            "ROLES OF DISCOURSES AND THE MEANINGS OF SAME-SEX MARRIAGE COMMUNICATED IN THE NEWS OF MASS MEDIA IN THAILAND",
          name: "Siriwat Mathet",
        },
        {
          title: "แบบฟอร์มการแจ้งเลือกแผนการเรียนและสาขาวิชาเอก (PDF)",
          name: "Siriwat Mathet",
        },
      ],
      selectedtab: 1,
      selectedbtn: 1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // console.log("selected", this.$route.query.selected);
    // this.selectedtab = this.$route.query.selected
    //   ? this.$route.query.selected
    //   : 1;
  },
  watch: {},
  methods: {
    async getAll() {
      const response = await this.axios.get(
        `${process.env.VUE_APP_API}/news?type=${this.newstype}`
      );
      // console.log("news", response.data.data);
      this.items = response.data.data;
    },
    gotodetail(id) {
      this.$router.push(`journal-detail-2`);
    },
    goback() {
      this.$router.push(`journal`);
    },
    handleScroll() {
      // console.log("window.pageYOffset", window.pageYOffset);
      this.pageYOffset = window.pageYOffset;
      if (window.pageYOffset > 465) {
        // ซ่อน banner เปิด nav
        this.showBanner = false;
        this.showNav = true;
      } else if (window.pageYOffset == 0) {
        this.showBanner = true;
        this.showNav = false;
      }
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
  <style lang="scss" scoped>
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #e2e2e2;
  text-align: left;
  padding: 18px;
}

tr:nth-child(even) {
  background-color: #f6f6f6;
}
</style>
<style lang="scss">
.cardbig {
  @media only screen and (min-width: 0px) {
    padding: 24px;
    gap: 24px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
  @media only screen and (min-width: 414px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
  @media only screen and (min-width: 1440px) {
    padding: 24px;
    gap: 24px;
    // height: 84px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }
}
.greenbutton {
  @media only screen and (min-width: 0px) {
    width: 100vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
  @media only screen and (min-width: 414px) {
    width: 100vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
  @media only screen and (min-width: 1440px) {
    width: 80vw;
    height: auto;
    background: conic-gradient(
      from 51.2deg at 50% 50%,
      #4cbfb4 0deg,
      #2ab3a3 190deg
    );
  }
}
</style>

<style scoped>
.v-application p {
  margin-bottom: 0px;
}
</style>