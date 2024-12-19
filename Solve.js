//การเพิ่มข้อมูล
let all_output = "";
let bigi = 1;//สูตรที่
let state = 0;//สำหรับเเสดงว่าผู้ใช้หมุนฟังชั่นใด
//let boxbig = "";

let Face_Cube_front = "";//เก็บข้อมูลหน้าของลูก
let Face_Cube_on = "";//เก็บข้อมูลหน้าของลูก

let Face_follow_clock = "\nหน้าตามเข็มนาฬิกา"

/* สีส้ม ffa500
   สีฟ้า 00bfff
   สีเเดง ff0000
   สีเหลือง ffff00
   สีขาว ffffff
   สีเขียว 008000
*/

//คำเปิดหน้า1
let title_1 = "ขั้นตอนที่ 1 หน้าขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว"
let End1 = "\nจบขั้นตอนที่ 1 ต่อไป ==> ขั้นตอนที่2 ชั้นที่1"
function print() {
    if (bigi === 1) {
        //ทำหน้าขาว

        Face_Cube_on = "#ffff00";//บนเหลือง
        Face_Cube_front = "#008000";//หน้าเขียว

        all_output = all_output + title_1
        for (let stop1 = 0; stop1 < 5; stop1++) { //สำหรับสูตร 1
            //เริ่มที่ด้านเขียว

            if (green2 === "#008000" && yellow8 === "#ffffff") {
                //ขาวอยู่ที่เซลล์ 8 เหลือง
                s1();
                s1();
                bigi = 2; //จบสูตร 1 
                break;
            } else if (green4 === "#008000" && red6 === "#ffffff") {
                // เซลขาวอยู่ เเดง 6
                s5(); //หน้าเขียวทวนเข็ม
                bigi = 2;
                break;
            } else if (green6 === "#008000" && orang4 === "#ffffff") {
                s1();
                bigi = 2;
                break;
            } else if (red2 === "#008000" && yellow4 === "#ffffff") {

                //**************  ขาวอยู่เหลือง  ****************/

                //เหลือง 4 สีขาว
                //เเดง 2 สีเขียว
                s10();
                s1();
                s1();
            } else if (orang2 === "#008000" && yellow6 === "#ffffff") {
                //เหลือง 6 สีขาว
                //ส้ม 2 สีเขียว
                s9();
                s1();
                s1();
            } else if (blue2 === "#008000" && yellow2 === "#ffffff") {
                //เหลือง 6 สีขาว
                //ส้ม 2 สีเขียว
                s9();
                s9();
                s1();
                s1();
            } else if (red2 === "#008000" && yellow4 === "#ffffff") {
                //**************  ขาวอยู่เขียว  */

                //เหลือง 4 สีขาว
                //เเดง 2 สีเขียว
                s10();
                s1();
                s1();
            }

        }
        //เเสดงผล
        document.getElementById("output").innerHTML = all_output;
    }
}

//ทดสอบฟังก์ชัน



//เคลื่อนทุกหน้าไปทางขวา 
// ใช้สำหรับการเปลี่ยนสีเเต่ยังสามารถใช้สูตรเเก้เดิมได้
// มุม มองของสีเหลืองคือหมุนทวนเข็ม
function Chang_Face() {
    let g1_temp = window.green1;
    let g2_temp = window.green2;
    let g3_temp = window.green3;
    let g4_temp = window.green4;
    //  let g5_temp = window.green5;
    let g6_temp = window.green6;
    let g7_temp = window.green7;
    let g8_temp = window.green8;
    let g9_temp = window.green9;

    let y1_temp = window.yellow1;
    let y2_temp = window.yellow2;
    let y3_temp = window.yellow3;
    let y4_temp = window.yellow4;
    //  let y5_temp = window.yellow5;
    let y6_temp = window.yellow6;
    let y7_temp = window.yellow7;
    let y8_temp = window.yellow8;
    let y9_temp = window.yellow9;


    // หน้าเเดงทวนเข็ม
    //สลับเเบบทะเเยงมุม-F
    let tempnum1 = window.yellow1;
    let tempnum3 = window.yellow3;
    let tempnum9 = window.yellow9;
    let tempnum7 = window.yellow7;

    //สลับเเบบเเถบระหว่างกลาง-F
    let tempnum2 = window.yellow2;
    let tempnum6 = window.yellow6;
    let tempnum8 = window.yellow8;
    let tempnum4 = window.yellow4;

    let r1_temp = window.red1;
    let r2_temp = window.red2;
    let r3_temp = window.red3;
    let r4_temp = window.red4;
    //  let r5_temp = window.red5;
    let r6_temp = window.red6;
    let r7_temp = window.red7;
    let r8_temp = window.red8;
    let r9_temp = window.red9;

    let b1_temp = window.blue1;
    let b2_temp = window.blue2;
    let b3_temp = window.blue3;
    let b4_temp = window.blue4;
    //  let b5_temp = window.blue5;
    let b6_temp = window.blue6;
    let b7_temp = window.blue7;
    let b8_temp = window.blue8;
    let b9_temp = window.blue9;

    let w1_temp = window.white1;
    let w2_temp = window.white2;
    let w3_temp = window.white3;
    let w4_temp = window.white4;
    // let w5_temp = window.white5;
    let w6_temp = window.white6;
    let w7_temp = window.white7;
    let w8_temp = window.white8;
    let w9_temp = window.white9;

    let o1_temp = window.orang1;
    let o2_temp = window.orang2;
    let o3_temp = window.orang3;
    let o4_temp = window.orang4;
    //  let o5_temp = window.orang5;
    let o6_temp = window.orang6;
    let o7_temp = window.orang7;
    let o8_temp = window.orang8;
    let o9_temp = window.orang9;

    window.orang1 = g1_temp;
    window.orang2 = g2_temp;
    window.orang3 = g3_temp;
    window.orang4 = g4_temp;
    //   window.orang5 = g5_temp;
    window.orang6 = g6_temp;
    window.orang7 = g7_temp;
    window.orang8 = g8_temp;
    window.orang9 = g9_temp;

    window.yellow3 = tempnum1;
    window.yellow9 = tempnum3;
    window.yellow7 = tempnum9;
    window.yellow1 = tempnum7;

    window.yellow6 = tempnum2;
    window.yellow8 = tempnum6;
    window.yellow4 = tempnum8;
    window.yellow2 = tempnum4;

    window.green1 = r1_temp;
    window.green2 = r2_temp;
    window.green3 = r3_temp;
    window.green4 = r4_temp;
    // window.green5 = r5_temp;
    window.green6 = r6_temp;
    window.green7 = r7_temp;
    window.green8 = r8_temp;
    window.green9 = r9_temp;

    window.red1 = b1_temp;
    window.red2 = b2_temp;
    window.red3 = b3_temp;
    window.red4 = b4_temp;
    //  window.red5 = b5_temp;
    window.red6 = b6_temp;
    window.red7 = b7_temp;
    window.red8 = b8_temp;
    window.red9 = b9_temp;

    window.blue1 = o1_temp;
    window.blue2 = o2_temp;
    window.blue3 = o3_temp;
    window.blue4 = o4_temp;
    //  window.blue5 = o5_temp;
    window.blue6 = o6_temp;
    window.blue7 = o7_temp;
    window.blue8 = o8_temp;
    window.blue9 = o9_temp;

}


//การหมุน
function s1() {
    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {
        all_output = all_output + '\nหน้าตามเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {
        all_output = all_output + '\nขวาขึ้น';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {
        all_output = all_output + '\nหลังทวนเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {
        all_output = all_output + '\nซ้ายลง';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.green1;
    let tempnum3 = window.green3;
    let tempnum9 = window.green9;
    let tempnum7 = window.green7;
    window.green3 = tempnum1;
    window.green9 = tempnum3;
    window.green7 = tempnum9;
    window.green1 = tempnum7;
    //}

    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.green2;
    let tempnum6 = window.green6;
    let tempnum8 = window.green8;
    let tempnum4 = window.green4;
    window.green6 = tempnum2;
    window.green8 = tempnum6;
    window.green4 = tempnum8;
    window.green2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy7 = window.yellow7;
    let tempy9 = window.yellow9;
    let tempo1 = window.orang1;
    let tempo7 = window.orang7;
    let tempw7 = window.white7;
    let tempw9 = window.white9;
    let tempr3 = window.red3;
    let tempr9 = window.red9;
    window.orang1 = tempy7;
    window.orang7 = tempy9;
    Window.white7 = tempo1;
    window.white9 = tempo7;
    window.red9 = tempw7;
    window.red3 = tempw9;
    window.yellow7 = tempr9;
    window.yellow9 = tempr3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy8 = window.yellow8;
    let tempo4 = window.orang4;
    let tempw8 = window.white8;
    let tempr6 = window.red6;
    window.orang4 = tempy8;
    window.white8 = tempo4;
    window.red6 = tempw8;
    window.yellow8 = tempr6;
    //}
}// หน้าเขียวตามเข็ม
function s2() {

    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nขวาขึ้น';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nหน้าตามเข็มนาฬิกา';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nซ้ายลง';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nหลังทวนเข็มนาฬิกา';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.orang1;
    let tempnum3 = window.orang3;
    let tempnum9 = window.orang9;
    let tempnum7 = window.orang7;
    window.orang3 = tempnum1;
    window.orang9 = tempnum3;
    window.orang7 = tempnum9;
    window.orang1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.orang2;
    let tempnum6 = window.orang6;
    let tempnum8 = window.orang8;
    let tempnum4 = window.orang4;
    window.orang6 = tempnum2;
    window.orang8 = tempnum6;
    window.orang4 = tempnum8;
    window.orang2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy9 = window.yellow9;
    let tempy3 = window.yellow3;
    let tempb1 = window.blue1;
    let tempb7 = window.blue7;
    let tempw1 = window.white1;
    let tempw7 = Window.white7;
    let tempg3 = window.green3;
    let tempg9 = window.green9;
    window.blue1 = tempy9;
    window.blue7 = tempy3;
    window.white1 = tempb1;
    Window.white7 = tempb7;
    window.green9 = tempw1;
    window.green3 = tempw7;
    window.yellow9 = tempg9;
    window.yellow3 = tempg3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg6 = window.green6;
    let tempy6 = window.yellow6;
    let tempb4 = window.blue4;
    let tempw4 = window.white4;
    window.blue4 = tempy6;
    window.white4 = tempb4;
    window.green6 = tempw4;
    window.yellow6 = tempg6;
    //}
}// หน้าส้มตามเข็ม
function s3() {

    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nหลังทวนเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nขวาขึ้น';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nหน้าตามเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nซ้ายลง';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.blue1;
    let tempnum3 = window.blue3;
    let tempnum9 = window.blue9;
    let tempnum7 = window.blue7;
    window.blue3 = tempnum1;
    window.blue9 = tempnum3;
    window.blue7 = tempnum9;
    window.blue1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.blue2;
    let tempnum6 = window.blue6;
    let tempnum8 = window.blue8;
    let tempnum4 = window.blue4;
    window.blue6 = tempnum2;
    window.blue8 = tempnum6;
    window.blue4 = tempnum8;
    window.blue2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = window.yellow1;
    let tempy3 = window.yellow3;
    let tempr1 = window.red1;
    let tempr7 = window.red7;
    let tempw3 = window.white3;
    let tempw1 = window.white1;
    let tempo3 = window.orang3;
    let tempo9 = window.orang9;
    window.red1 = tempy3;
    window.red7 = tempy1;
    window.white3 = tempr1;
    window.white1 = tempr7;
    window.orang9 = tempw3;
    window.orang3 = tempw1;
    window.yellow3 = tempo9;
    window.yellow1 = tempo3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy2 = window.yellow2;
    let tempr4 = window.red4;
    let tempw2 = window.white2;
    let tempo6 = window.orang6;
    window.red4 = tempy2;
    window.white2 = tempr4;
    window.orang6 = tempw2;
    window.yellow2 = tempo6;
    //}
}// หน้าน้ำเงินตามเข็ม
function s4() {

    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nซ้ายลง';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nหลังทวนเข็มนาฬิกา';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nขวาขึ้น';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nหน้าตามเข็มนาฬิกา';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.red1;
    let tempnum3 = window.red3;
    let tempnum9 = window.red9;
    let tempnum7 = window.red7;
    window.red3 = tempnum1;
    window.red9 = tempnum3;
    window.red7 = tempnum9;
    window.red1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.red2;
    let tempnum6 = window.red6;
    let tempnum8 = window.red8;
    let tempnum4 = window.red4;
    window.red6 = tempnum2;
    window.red8 = tempnum6;
    window.red4 = tempnum8;
    window.red2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = window.yellow1;
    let tempy7 = window.yellow7;
    let tempg1 = window.green1;
    let tempg7 = window.green7;
    let tempw3 = window.white3;
    let tempw9 = window.white9;
    let tempb3 = window.blue3;
    let tempb9 = window.blue9;
    window.green1 = tempy1;
    window.green7 = tempy7;
    window.white9 = tempg1;
    window.white3 = tempg7;
    window.blue9 = tempw9;
    window.blue3 = tempw3;
    window.yellow1 = tempb9;
    window.yellow7 = tempb3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy4 = window.yellow4;
    let tempg4 = window.green4;
    let tempw6 = window.white6;
    let tempb6 = window.blue6;
    window.green4 = tempy4;
    window.white6 = tempg4;
    window.blue6 = tempw6;
    window.yellow4 = tempb6;
    //}
}// หน้าเเดงตามเข็ม
function s5() {

    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nหน้าทวนเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nซ้ายขึ้น';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nหลังตามเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nขวาลง';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.green1;
    let tempnum3 = window.green3;
    let tempnum9 = window.green9;
    let tempnum7 = window.green7;
    window.green1 = tempnum3;
    window.green7 = tempnum1;
    window.green9 = tempnum7;
    window.green3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.green2;
    let tempnum6 = window.green6;
    let tempnum8 = window.green8;
    let tempnum4 = window.green4;
    window.green2 = tempnum6;
    window.green4 = tempnum2;
    window.green8 = tempnum4;
    window.green6 = tempnum8;

    //  }
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy7 = window.yellow7;
    let tempy9 = window.yellow9;
    let tempo1 = window.orang1;
    let tempo7 = window.orang7;
    let tempw7 = Window.white7;
    let tempw9 = window.white9;
    let tempr3 = window.red3;
    let tempr9 = window.red9;
    window.orang1 = tempw7;
    window.orang7 = tempw9;
    Window.white7 = tempr9;
    window.white9 = tempr3;
    window.red9 = tempy7;
    window.red3 = tempy9;
    window.yellow7 = tempo1;
    window.yellow9 = tempo7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy8 = window.yellow8;
    let tempo4 = window.orang4;
    let tempw8 = window.white8;
    let tempr6 = window.red6;
    window.orang4 = tempw8;
    window.white8 = tempr6;
    window.red6 = tempy8;
    window.yellow8 = tempo4;
    //}
}// หน้าเขียวทวนเข็ม
function s6() {

    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nขวาลง';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nหน้าทวนเข็มนาฬิกา';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nซ้ายขึ้น';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nหลังตามเข็มนาฬิกา';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.orang1;
    let tempnum3 = window.orang3;
    let tempnum9 = window.orang9;
    let tempnum7 = window.orang7;
    window.orang1 = tempnum3;
    window.orang7 = tempnum1;
    window.orang9 = tempnum7;
    window.orang3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.orang2;
    let tempnum6 = window.orang6;
    let tempnum8 = window.orang8;
    let tempnum4 = window.orang4;
    window.orang2 = tempnum6;
    window.orang4 = tempnum2;
    window.orang8 = tempnum4;
    window.orang6 = tempnum8;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy9 = window.yellow9;
    let tempy3 = window.yellow3;
    let tempb1 = window.blue1;
    let tempb7 = window.blue7;
    let tempw1 = window.white1;
    let tempw7 = Window.white7;
    let tempg3 = window.green3;
    let tempg9 = window.green9;
    window.blue1 = tempw1;
    window.blue7 = tempw7;
    window.white1 = tempg9;
    Window.white7 = tempg3;
    window.green9 = tempy9;
    window.green3 = tempy3;
    window.yellow9 = tempb1;
    window.yellow3 = tempb7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg6 = window.green6;
    let tempy6 = window.yellow6;
    let tempb4 = window.blue4;
    let tempw4 = window.white4;
    window.blue4 = tempw4;
    window.white4 = tempg6;
    window.green6 = tempy6;
    window.yellow6 = tempb4;
    //}
}// หน้าส้มทวนเข็ม
function s7() {
    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nหลังตามเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nขวาลง';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nหน้าทวนเข็มนาฬิกา';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nซ้ายขึ้น';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.blue1;
    let tempnum3 = window.blue3;
    let tempnum9 = window.blue9;
    let tempnum7 = window.blue7;
    window.blue1 = tempnum3;
    window.blue7 = tempnum1;
    window.blue9 = tempnum7;
    window.blue3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.blue2;
    let tempnum6 = window.blue6;
    let tempnum8 = window.blue8;
    let tempnum4 = window.blue4;
    window.blue2 = tempnum6;
    window.blue4 = tempnum2;
    window.blue8 = tempnum4;
    window.blue6 = tempnum8;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = window.yellow1;
    let tempy3 = window.yellow3;
    let tempr1 = window.red1;
    let tempr7 = window.red7;
    let tempw3 = window.white3;
    let tempw1 = window.white1;
    let tempo3 = window.orang3;
    let tempo9 = window.orang9;
    window.red1 = tempw3;
    window.red7 = tempw1;
    window.white3 = tempo9;
    window.white1 = tempo3;
    window.orang9 = tempy3;
    window.orang3 = tempy1;
    window.yellow3 = tempr1;
    window.yellow1 = tempr7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy2 = window.yellow2;
    let tempr4 = window.red4;
    let tempw2 = window.white2;
    let tempo6 = window.orang6;
    window.red4 = tempw2;
    window.white2 = tempo6;
    window.orang6 = tempy2;
    window.yellow2 = tempr4;
    //}
}// หน้าน้ำเงินทวนเข็ม
function s8() {

    /* สีส้ม     #ffa500
       สีฟ้า     #00bfff
       สีเเดง    #ff0000
       สีเหลือง  #ffff00
       สีขาว    #ffffff
       สีเขียว   #008000
    */
    if (Face_Cube_front === "#008000" && Face_Cube_on === "#ffff00") {//หน้าเป็นหน้าเขียว
        all_output = all_output + '\nซ้ายขึ้น';
    } else if (Face_Cube_front === "#ffa500" && Face_Cube_on === "#ffff00") {//หน้าสีส้ม
        all_output = all_output + '\nหลังตามเข็มนาฬิกา';
    } else if (Face_Cube_front === "#00bfff" && Face_Cube_on === "#ffff00") {//สีฟ้า
        all_output = all_output + '\nขวาลง';
    } else if (Face_Cube_front === "#ff0000" && Face_Cube_on === "#ffff00") {//สีเเดง
        all_output = all_output + '\nหน้าทวนเข็มนาฬิกา';
    }

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.red1;
    let tempnum3 = window.red3;
    let tempnum9 = window.red9;
    let tempnum7 = window.red7;
    window.red1 = tempnum3;
    window.red7 = tempnum1;
    window.red9 = tempnum7;
    window.red3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง
    //{
    let tempnum2 = window.red2;
    let tempnum6 = window.red6;
    let tempnum8 = window.red8;
    let tempnum4 = window.red4;
    window.red2 = tempnum6;
    window.red4 = tempnum2;
    window.red8 = tempnum4;
    window.red6 = tempnum8;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = window.yellow1;
    let tempy7 = window.yellow7;
    let tempg1 = window.green1;
    let tempg7 = window.green7;
    let tempw3 = window.white3;
    let tempw9 = window.white9;
    let tempb3 = window.blue3;
    let tempb9 = window.blue9;
    window.green1 = tempw9;
    window.green7 = tempw3;
    window.white9 = tempb9;
    window.white3 = tempb3;
    window.blue9 = tempy1;
    window.blue3 = tempy7;
    window.yellow1 = tempg1;
    window.yellow7 = tempg7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy4 = window.yellow4;
    let tempg4 = window.green4;
    let tempw6 = window.white6;
    let tempb6 = window.blue6;
    window.green4 = tempw6;
    window.white6 = tempb6;
    window.blue6 = tempy4;
    window.yellow4 = tempg4;
    //}
}// หน้าเเดงทวนเข็ม
function s9() {

    all_output = all_output + '\nบนซ้าย';

    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.yellow1;
    let tempnum3 = window.yellow3;
    let tempnum9 = window.yellow9;
    let tempnum7 = window.yellow7;
    window.yellow3 = tempnum1;
    window.yellow9 = tempnum3;
    window.yellow7 = tempnum9;
    window.yellow1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.yellow2;
    let tempnum6 = window.yellow6;
    let tempnum8 = window.yellow8;
    let tempnum4 = window.yellow4;
    window.yellow6 = tempnum2;
    window.yellow8 = tempnum6;
    window.yellow4 = tempnum8;
    window.yellow2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempb3 = window.blue3;
    let tempb1 = window.blue1;
    let tempo1 = window.orang1;
    let tempo3 = window.orang3;
    let tempg1 = window.green1;
    let tempg3 = window.green3;
    let tempr3 = window.red3;
    let tempr1 = window.red1;
    window.orang3 = tempb3;
    window.orang1 = tempb1;
    window.green3 = tempo3;
    window.green1 = tempo1;
    window.red3 = tempg3;
    window.red1 = tempg1;
    window.blue3 = tempr3;
    window.blue1 = tempr1;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg2 = window.green2;
    let tempo2 = window.orang2;
    let tempb2 = window.blue2;
    let tempr2 = window.red2;
    window.orang2 = tempb2;
    window.green2 = tempo2;
    window.red2 = tempg2;
    window.blue2 = tempr2;
    //}
} // หน้าเหลืองตามเข็ม
function s10() {
    all_output = all_output + '\nบนขวา';
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = window.yellow1;
    let tempnum3 = window.yellow3;
    let tempnum9 = window.yellow9;
    let tempnum7 = window.yellow7;
    window.yellow7 = tempnum1;
    window.yellow9 = tempnum7;
    window.yellow3 = tempnum9;
    window.yellow1 = tempnum3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = window.yellow2;
    let tempnum6 = window.yellow6;
    let tempnum8 = window.yellow8;
    let tempnum4 = window.yellow4;
    window.yellow6 = tempnum8;
    window.yellow2 = tempnum6;
    window.yellow4 = tempnum2;
    window.yellow8 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempb3 = window.blue3;
    let tempb1 = window.blue1;
    let tempo1 = window.orang1;
    let tempo3 = window.orang3;
    let tempg1 = window.green1;
    let tempg3 = window.green3;
    let tempr3 = window.red3;
    let tempr1 = window.red1;
    window.orang3 = tempg3;
    window.orang1 = tempg1;
    window.green3 = tempr3;
    window.green1 = tempr1;
    window.red3 = tempb3;
    window.red1 = tempb1;
    window.blue3 = tempo3;
    window.blue1 = tempo1;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg2 = window.green2;
    let tempo2 = window.orang2;
    let tempb2 = window.blue2;
    let tempr2 = window.red2;
    window.orang2 = tempg2;
    window.green2 = tempr2;
    window.red2 = tempb2;
    window.blue2 = tempo2;
    //}
}// หน้าเหลืองทวนเข็ม

//ขาดสีขาว
