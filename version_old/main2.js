let color = "";
  let clickedBoxId = null;
  let clickedBoxColor = null;

  function setID(id) {
    clickedBoxId = id;
    console.log(id)
  }
  let boxcolor = ""; 
  let id = "";
  //{
  let green1 ="#000000";
  let green2 ="#000000";
  let green3 ="#000000";
  let green4 ="#000000";
  let green5 ="#008000";
  let green6 ="#000000";
  let green7 ="#000000";
  let green8 ="#000000";
  let green9 ="#000000";
  let orang1 ="#000000";
  let orang2 ="#000000";
  let orang3 ="#000000";
  let orang4 ="#000000";
  let orang5 ="#ffa500";
  let orang6 ="#000000";
  let orang7 ="#000000";
  let orang8 ="#000000";
  let orang9 ="#000000";
  let blue1 ="#000000";
  let blue2 ="#000000";
  let blue3 ="#000000";
  let blue4 ="#000000";
  let blue5 ="#00bfff";
  let blue6 ="#000000";
  let blue7 ="#000000";
  let blue8 ="#000000";
  let blue9 ="#000000";
  let red1 ="#000000";
  let red2 ="#000000";
  let red3 ="#000000";
  let red4 ="#000000";
  let red5 ="#ff0000";
  let red6 ="#000000";
  let red7 ="#000000";
  let red8 ="#000000";
  let red9 ="#000000";
  let yellow1 ="#000000";
  let yellow2 ="#000000";
  let yellow3 ="#000000";
  let yellow4 ="#000000";
  let yellow5 ="#ffff00";
  let yellow6 ="#000000";
  let yellow7 ="#000000";
  let yellow8 ="#000000";
  let yellow9 ="#000000";
  let white1 ="#000000";
  let white2 ="#000000";
  let white3 ="#000000";
  let white4 ="#000000";
  let white5 ="#ffffff";
  let white6 ="#000000";
  let white7 ="#000000";
  let white8 ="#000000";
  let white9 ="#000000";
  //}
  let bigbox ="green";
  const colorMap = {
    '#00bfff': true,
    '#ffa500': true,
    '#ffff00': true,
    '#ffffff': true,
    '#ff0000': true,
    '#008000': true
  };
  function setColor(color) {
    //myplay = color;
    clickedBoxColor = color;
    console.log(color)
    document.getElementById(clickedBoxId).style.backgroundColor = clickedBoxColor;
    if (clickedBoxId === "box5") {
      if (clickedBoxColor === "#008000") {
        bigbox = "green";
        temp1  = green1  ;
         temp2  = green2  ;
          temp3  = green3  ;
           temp4  = green4  ;
            temp6  = green6  ;
             temp7  = green7  ;
              temp8  = green8  ;
               temp9  = green9  ;
        document.getElementById("box1").style.backgroundColor = temp1; 
        document.getElementById("box2").style.backgroundColor = temp2;
        document.getElementById("box3").style.backgroundColor = temp3;
        document.getElementById("box4").style.backgroundColor = temp4; 
        document.getElementById("box6").style.backgroundColor = temp6; 
        document.getElementById("box7").style.backgroundColor = temp7;
        document.getElementById("box8").style.backgroundColor = temp8; 
        document.getElementById("box9").style.backgroundColor = temp9; 
        } else if (clickedBoxColor === "#ffa500") {
         bigbox = "orang";
         console.log("ผ่านเงื่อนไขส้ม  ")
      temp1 = orang1;
       temp2 = orang2;
        temp3 = orang3;
         temp4 = orang4;
          temp6 = orang6;
           temp7 = orang7;
            temp8 = orang8;
             temp9 = orang9;   
          document.getElementById("box1").style.backgroundColor = temp1;
          document.getElementById("box2").style.backgroundColor = temp2;
          document.getElementById("box3").style.backgroundColor = temp3;
          document.getElementById("box4").style.backgroundColor = temp4;
          document.getElementById("box6").style.backgroundColor = temp6;
          document.getElementById("box7").style.backgroundColor = temp7;
          document.getElementById("box8").style.backgroundColor = temp8;
          document.getElementById("box9").style.backgroundColor = temp9;
        } else if (clickedBoxColor === "#00bfff") {
          bigbox = "blue";
           console.log("ผ่านเงื่อนไขฟ้า")
        temp1 = blue1;
         temp2 = blue2;
          temp3 = blue3;
           temp4 = blue4;
            temp6 = blue6;
             temp7 = blue7;
              temp8 = blue8;
               temp9 = blue9;
           document.getElementById("box1").style.backgroundColor = temp1;
           document.getElementById("box2").style.backgroundColor = temp2;
           document.getElementById("box3").style.backgroundColor = temp3;
           document.getElementById("box4").style.backgroundColor = temp4;
           document.getElementById("box6").style.backgroundColor = temp6;
           document.getElementById("box7").style.backgroundColor = temp7;
           document.getElementById("box8").style.backgroundColor = temp8;
           document.getElementById("box9").style.backgroundColor = temp9;
        } else if (clickedBoxColor === "#ff0000") {
           bigbox = "red";
            console.log("ผ่านเงื่อนไขเเดง")
          temp1 = red1;
           temp2 = red2;
            temp3 = red3;
             temp4 = red4;
              temp6 = red6;
               temp7 = red7;
                temp8 = red8;
                 temp9 = red9;  
         document.getElementById("box1").style.backgroundColor = temp1;
         document.getElementById("box2").style.backgroundColor = temp2;
         document.getElementById("box3").style.backgroundColor = temp3;
         document.getElementById("box4").style.backgroundColor = temp4;
         document.getElementById("box6").style.backgroundColor = temp6;
         document.getElementById("box7").style.backgroundColor = temp7;
         document.getElementById("box8").style.backgroundColor = temp8;
         document.getElementById("box9").style.backgroundColor = temp9;
        } else if (clickedBoxColor === "#ffff00") {
            bigbox = "yellow";
             console.log("ผ่านเงื่อนไขเหลือง")
          temp1 = yellow1;
           temp2 = yellow2;
            temp3 = yellow3;
             temp4 = yellow4;
              temp6 = yellow6;
               temp7 = yellow7;
                temp8 = yellow8;
                 temp9 = yellow9;   
         document.getElementById("box1").style.backgroundColor = temp1;
         document.getElementById("box2").style.backgroundColor = temp2;
         document.getElementById("box3").style.backgroundColor = temp3;
         document.getElementById("box4").style.backgroundColor = temp4;
         document.getElementById("box6").style.backgroundColor = temp6;
         document.getElementById("box7").style.backgroundColor = temp7;
         document.getElementById("box8").style.backgroundColor = temp8;
         document.getElementById("box9").style.backgroundColor = temp9;
        } else if (clickedBoxColor === "#ffffff") {
             bigbox = "white";
              console.log("ผ่านเงื่อนไขขาว")
              temp1 = white1;
               temp2 = white2;
                temp3 = white3;
                 temp4 = white4;
                  temp6 = white6;
                   temp7 = white7;
                    temp8 = white8;
                     temp9 = white9;
          document.getElementById("box1").style.backgroundColor = temp1;
          document.getElementById("box2").style.backgroundColor = temp2;
          document.getElementById("box3").style.backgroundColor = temp3;
          document.getElementById("box4").style.backgroundColor = temp4;
          document.getElementById("box6").style.backgroundColor = temp6;
          document.getElementById("box7").style.backgroundColor = temp7;
          document.getElementById("box8").style.backgroundColor = temp8;
          document.getElementById("box9").style.backgroundColor = temp9;
           }
    } else if (bigbox === "green") {
      if (clickedBoxId === "box1") {
        if (colorMap[color]) {
          console.log("เพิ่มค่าสีลงตัวเเปรgree1")
          green1 = color;
        }
      } else if (clickedBoxId === "box2") {
        if (colorMap[color]) {
          green2 = color;
        }
      } else if (clickedBoxId === "box3") {
        if (colorMap[color]) {
          green3 = color;
        }
      } else if (clickedBoxId === "box4") {
        if (colorMap[color]) {
          green4 = color;
        }
      } else if (clickedBoxId === "box6") {
        if (colorMap[color]) {
          green6 = color;
        }
      } else if (clickedBoxId === "box7") {
        if (colorMap[color]) {
          green7 = color;
        }
      } else if (clickedBoxId === "box8") {
        if (colorMap[color]) {
          green8 = color;
        }
      } else if (clickedBoxId === "box9") {
        if (colorMap[color]) {
          green9 = color;
        }
      }
    } else if (bigbox === "orang") {
    if (clickedBoxId === "box1") {
      if (colorMap[color]) {
        orang1 = color;
      }
    } else if (clickedBoxId === "box2") {
      if (colorMap[color]) {
        orang2 = color;
      }
    } else if (clickedBoxId === "box3") {
      if (colorMap[color]) {
        orang3 = color;
      }
    } else if (clickedBoxId === "box4") {
      if (colorMap[color]) {
        orang4 = color;
      }
    } else if (clickedBoxId === "box6") {
      if (colorMap[color]) {
        orang6 = color;
      }
    } else if (clickedBoxId === "box7") {
      if (colorMap[color]) {
        orang7 = color;
      }
    } else if (clickedBoxId === "box8") {
      if (colorMap[color]) {
        orang8 = color;
      }
    } else if (clickedBoxId === "box9") {
      if (colorMap[color]) {
        orang9 = color;
      }
    }
    } else if (bigbox === "blue")  {
    if (clickedBoxId === "box1") {
      if (colorMap[color]) {
        blue1 = color;
      }
    } else if (clickedBoxId === "box2") {
      if (colorMap[color]) {
        blue2 = color;
      }
    } else if (clickedBoxId === "box3") {
      if (colorMap[color]) {
        blue3 = color;
      }
    } else if (clickedBoxId === "box4") {
      if (colorMap[color]) {
        blue4 = color;
      }
    } else if (clickedBoxId === "box6") {
      if (colorMap[color]) {
        blue6 = color;
      }
    } else if (clickedBoxId === "box7") {
      if (colorMap[color]) {
        blue7 = color;
      }
    } else if (clickedBoxId === "box8") {
      if (colorMap[color]) {
        blue8 = color;
      }
    } else if (clickedBoxId === "box9") {
      if (colorMap[color]) {
        blue9 = color;
      }
    }
    } else if (bigbox === "red")  {
    if (clickedBoxId === "box1") {
      if (colorMap[color]) {
        red1 = color;
      }
    } else if (clickedBoxId === "box2") {
      if (colorMap[color]) {
        red2 = color;
      }
    } else if (clickedBoxId === "box3") {
      if (colorMap[color]) {
        red3 = color;
      }
    } else if (clickedBoxId === "box4") {
      if (colorMap[color]) {
        red4 = color;
      }
    } else if (clickedBoxId === "box6") {
      if (colorMap[color]) {
        red6 = color;
      }
    } else if (clickedBoxId === "box7") {
      if (colorMap[color]) {
        red7 = color;
      }
    } else if (clickedBoxId === "box8") {
      if (colorMap[color]) {
        red8 = color;
      }
    } else if (clickedBoxId === "box9") {
      if (colorMap[color]) {
        red9 = color;
      }
    }
    } else if (bigbox === "yellow"){
  if (clickedBoxId === "box1") {
    if (colorMap[color]) {
      yellow1 = color;
    }
  } else if (clickedBoxId === "box2") {
    if (colorMap[color]) {
      yellow2 = color;
    }
  } else if (clickedBoxId === "box3") {
    if (colorMap[color]) {
      yellow3 = color;
    }
  } else if (clickedBoxId === "box4") {
    if (colorMap[color]) {
      yellow4 = color;
    }
  } else if (clickedBoxId === "box6") {
    if (colorMap[color]) {
      yellow6 = color;
    }
  } else if (clickedBoxId === "box7") {
    if (colorMap[color]) {
      yellow7 = color;
    }
  } else if (clickedBoxId === "box8") {
    if (colorMap[color]) {
      yellow8 = color;
    }
  } else if (clickedBoxId === "box9") {
    if (colorMap[color]) {
      yellow9 = color;
    }
  }
    } else if (bigbox === "white") {
  if (clickedBoxId === "box1") {
    if (colorMap[color]) {
      white1 = color;
    }
  } else if (clickedBoxId === "box2") {
    if (colorMap[color]) {
      white2 = color;
    }
  } else if (clickedBoxId === "box3") {
    if (colorMap[color]) {
      white3 = color;
    }
  } else if (clickedBoxId === "box4") {
    if (colorMap[color]) {
      white4 = color;
    }
  } else if (clickedBoxId === "box6") {
    if (colorMap[color]) {
      white6 = color;
    }
  } else if (clickedBoxId === "box7") {
    if (colorMap[color]) {
      white7 = color;
    }
  } else if (clickedBoxId === "box8") {
    if (colorMap[color]) {
      white8 = color;
    }
  } else if (clickedBoxId === "box9") {
    if (colorMap[color]) {
      white9 = color;
    }
  }
}
  }
  function chek(){
    console.log(white2)
    console.log(white4)
    console.log(white6)
    console.log(white8)
    
  }
  //การเพิ่มข้อมูล
  let all_output = " ";
  let bigi = 1;//สูตรที่
  //let boxbig = "";
  function print() {
    if (bigi === 1){
      let w = 1;
      let ww1 = 0;
      let ww2 = 0;
      let ww3 = 0;
      for (let stop1 = 0; stop1 < 5; stop1++){
        //ส่วนที่ 1-ใส่สูตรการหมุนเเล้ว เเถวที่ 1 หันข้าง c
        //{
        if (green2 === "#008000" && yellow8 === "#ffffff" &&w == 1) {
          all_output = all_output   + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'+ '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++){//ใช้ลูปทำไมครับ
            s1();
          }
          w = 2;
        } else if (orang2 === "#ffa500" && yellow6 === "#ffffff"&& w == 2) {
            all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' + '\n';
            document.getElementById("output").innerHTML = all_output;
            for (let stop3 = 0; stop3 < 2; stop3++) {
            s2();
            }
            w = 3;
        } else if (blue2  === "#00bfff" && yellow2 === "#ffffff"&& w == 3) {
            all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+ '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' + '\n' 
            document.getElementById("output").innerHTML = all_output;
            for (let stop3 = 0; stop3 < 2; stop3++) {
              s3();
            } 
            w = 4;
        } else if (red2   === "#ff0000" && yellow4 === "#ffffff"&& w == 4) {
        all_output = all_output   + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  +  '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
        document.getElementById("output").innerHTML = all_output;
        for (let stop3 = 0; stop3 < 2; stop3++) {
          s4();
          bigi = 2; //สำเร็จสูตร ตั้งเเต่ช่วงเริ่มต้น สามารถไปต่อสูตรต่อไปได้เลย
        }
      
        }     //}
        //ส่วนที่ 2-ใส่สูตรการหมุรเเล้ว เเถวที่ 1 หันข้าง c
        //{
         else if (green4 === "#008000" && red6   === "#ffffff"&& w == 1) {
        all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  
        document.getElementById("output").innerHTML = all_output;
    
            s5();
        
        w = 2;
        } else if (orang4 === "#ffa500" && green6  === "#ffffff"&& w == 2)  {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
             
               s6();
             
             w = 3;
        } else if (blue4  === "#00bfff" && orang6  === "#ffffff"&& w == 3)  {
        all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' 
        document.getElementById("output").innerHTML = all_output;
        
          s7();
        
        w = 4;
        } else if (red4   === "#ff0000" && blue6   === "#ffffff"&& w == 4)  {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม'
        document.getElementById("output").innerHTML = all_output;
            
            s8();
                
        bigi = 2;
          
        }   //}
        //ส่วนที่ 3-ใส่สูตรการหมุนเเล้ว เเถวที่ 1 หันข้าง c
        //{
        else if (green6 === "#008000" && orang4 === "#ffffff"&& w == 1) {
           all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' 
           document.getElementById("output").innerHTML = all_output;
           
           
              s1();
           w = 2;
        } else if (orang6 === "#ffa500" && blue4  === "#ffffff"&& w == 2)  {
           all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' 
           document.getElementById("output").innerHTML = all_output;
           
            s2();
           w = 3;
        } else if (blue6  === "#00bfff" && red4   === "#ffffff"&& w == 3)  {
           all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' 
           document.getElementById("output").innerHTML = all_output;
           
             s3();
           w = 4;
        
        
        } else if (red6   === "#ff0000" && green4 === "#ffffff"&& w == 4){
           all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม'
           document.getElementById("output").innerHTML = all_output;
          
            s4();
           
           bigi = 2;
        
        }        //}
        //ส่วนที่ 1-ใส่สูตรการหมุนเเล้ว เเถวที่ 1 หันเข้า c
        //{
        else if (green2 === "#ffffff" && yellow8 === "#008000" &&w == 1) {
        all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
          s5();
          s8();
          s10();
          s4();
          for (let stop2 = 0; stop2 < 2; stop2++){
            s1();
        }
        w = 2;
        } else if (orang2 === "#ffffff" && yellow6 === "#ffa500"&& w == 2) {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' ; + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
        document.getElementById("output").innerHTML = all_output;
            s6();
            s5();
            s10();
            s1();
            for (let stop3 = 0; stop3 < 2; stop3++) {
              s2();
             }
              w = 3;
        } else if (blue2  === "#ffffff" && yellow2 === "#00bfff"&& w == 3) {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง'  + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
        s7();
        s6();
        s10();
        s2();
        for (let stop3 = 0; stop3 < 2; stop3++) {
        s3();
        }
         w = 4;
        } else if (red2   === "#ffffff" && yellow4 === "#ff0000"&& w == 4) {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
        document.getElementById("output").innerHTML = all_output;
        s8();
        s7();
        s10();
        s3();
        for (let stop3 = 0; stop3 < 2; stop3++) {
          s4();
        }
        bigi = 2;
        }     //}
        //ส่วนที่ 2-ใส่สูตรการหมุนเเล้ว เเถวที่ 1 หันเข้า c
        //{
         else if (green4 === "#008000" && red6   === "#ffffff"&& w == 1) {
        all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  
        document.getElementById("output").innerHTML = all_output;
          s8();
          s10();
          s4();
          for (let stop2 = 0; stop2 < 2; stop2++){
          s1();
        }
        w = 2;
        } else if (orang4 === "#ffa500" && green6  === "#ffffff"&& w == 2)  {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  
        document.getElementById("output").innerHTML = all_output;
        s5()
        s10()
        s1()
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s2();
        }
             w = 3;
        } else if (blue4  === "#00bfff" && orang6  === "#ffffff"&& w == 3)  {
        all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
        s6()
        s10()
        s2()
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s3()
        }
        w = 4;
        } else if (red4   === "#ff0000" && blue6   === "#ffffff"&& w == 4)  {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
        document.getElementById("output").innerHTML = all_output;
        s7()
        s10()
        s3()
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s4()
        }
        bigi = 2;
        }         //}
        //ส่วนที่ 3-ใส่สูตรการหมุนเเล้ว เเถวที่ 1 หันเข้า c
        //{
        else if (green6 === "#ffffff" && orang4 === "#008000"&& w == 1) {
           all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nขวาขึ้น'+  '\nบนซ้าย'+ '\nขวาลง'+'\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
           document.getElementById("output").innerHTML = all_output;
          s2();
          s9();
          s6();
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s1();
           }w = 2;
        } else if (orang6 === "#ffffff" && blue4  === "#ffa500"&& w == 2)  {
           all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nขวาขึ้น'+  '\nบนซ้าย'+ '\nขวาลง'+'\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  
           document.getElementById("output").innerHTML = all_output;
        s3();
        s9();
        s7();
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s2();
           }w = 3;
        } else if (blue6  === "#ffffff" && red4   === "#00bfff"&& w == 3)  {
           all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nขวาขึ้น'+  '\nบนซ้าย'+ '\nขวาลง'+'\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  
           document.getElementById("output").innerHTML = all_output;
          s4();
          s9();
          s8();
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s3();
           }w = 4;
        } else if (red6   === "#ffffff" && green4 === "#ff0000"&& w == 4)  {
           all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nขวาขึ้น'+  '\nบนซ้าย'+ '\nขวาลง'+'\nหน้าตามเข็มนาฬิกา 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
           document.getElementById("output").innerHTML = all_output;
          s1();
          s9();
          s5();
        for (let stop2 = 0; stop2 < 2; stop2++) {
           s4();
           }
           bigi = 2;
        } 
        //}
        //ส่วนที่ 4-ใส่สูตรการหมุนเเล้ว เเถวที่ 1 หันเข้า c
        //{
        else if (green8 === "#ffffff" && white8 === "#008000"&& w == 1) {
           all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'
           document.getElementById("output").innerHTML = all_output;
          s5();
          s2();
          s9();
          s6();
          
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s1();
           }w = 2;
        } else if (orang8 === "#ffffff" && white4  === "#ffa500"&& w == 2)  {
           all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
           document.getElementById("output").innerHTML = all_output;
        s6();
        s3();
        s9();
       s7();
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s2();
           }w = 3;
        } else if (blue8  === "#ffffff" && white2   === "#00bfff"&& w == 3)  {
           all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง';
           document.getElementById("output").innerHTML = all_output;
          s7();
          s4();
          s9();
          s8();
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s3();
           }w = 4;
        } else if (red8   === "#ffffff" && white6 === "#ff0000"&& w == 4)  {
           all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'+'\nขั้นตอนที่2 ทำขาวให้เต็ม'
           document.getElementById("output").innerHTML = all_output;
          s8();
          s1();
          s9();
          s5();
        for (let stop2 = 0; stop2 < 2; stop2++) {
           s4();
           }
           bigi = 2;
        } 
        //}
        
        //หันออกซ้าย/ขวา เเถบบน
        //ส่วนที่ 1.1-ใส่สูตรการหมุนเเล้ว เเถวที่ 2 หันเข้า c
        //{
        else if (red2 === "#ffffff" && yellow4 === "#008000" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s4();
          s5();
          s8();
          w = 2;
        } else if (green2 === "#ffffff" && yellow8 === "#ffa500" && w == 2) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nซ้ายขึ้น'  
          document.getElementById("output").innerHTML = all_output;
          s1();
          s6();
          s5();
           w = 3;
        } else if (orang2 === "#ffffff" && yellow6 === "#00bfff" && w == 3) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nซ้ายขึ้น'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s7();
          s6();
           w = 4;
        } else if (blue2 === "#ffffff" && yellow2 === "#ff0000" && w == 4) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nซ้ายขึ้น'+ '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s3();
          s8();
          s7();
          bigi = 2;
        } //}
        //ส่วนที่ 1.2-ใส่สูตรการหมุนเเล้ว เเถวที่ 2 หันเข้า c
        //{
        else if (orang2 === "#ffffff" && yellow6 === "#008000" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง'  + '\nขวาขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s6();
          s1();
          s2();
          w = 2;
        } else if (blue2 === "#ffffff" && yellow2 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขวาขึ้น'
          document.getElementById("output").innerHTML = all_output;
          s7();
          s2();
          s3();
           w = 3;
        } else if (red2 === "#ffffff" && yellow4 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขวาขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s8();
          s3();
          s4();
           w = 4;
        } else if (green2 === "#ffffff" && yellow8 === "#ff0000" && w == 4) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nขวาลง' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขวาขึ้น'  + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s5();
          s4();
          s1();
          bigi = 2;
        } //}
        
        //หันออกซ้าย/ขวา เเถบล่าง
        //ส่วนที่ 2.1-ใส่สูตรการหมุนเเล้ว เเถวที่ 2 หันเข้า c
        //{
        else if (red8 === "#ffffff" && white6 === "#008000" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nซ้ายขึ้น' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nซ้ายลง'  
          document.getElementById("output").innerHTML = all_output;
          s8();
          s5();
          s4();
          w = 2;
        } else if (green8 === "#ffffff" && white8 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nซ้ายขึ้น' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nซ้ายลง' 
          document.getElementById("output").innerHTML = all_output;
          s5();
          s6();
          s1();
           w = 3;
        } else if (orang8 === "#ffffff" && white4 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nซ้ายขึ้น' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง'  + '\nซ้ายลง' 
          document.getElementById("output").innerHTML = all_output;
          s6();
          s7();
          s2(); w = 4;
        } else if (blue8 === "#ffffff" && white2 === "#ff0000" && w == 4) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nซ้ายขึ้น' + '\nหน้าทวนเข็มนาฬิกา 1 ครั้ง' + '\nซ้ายลง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s7();
          s8();
          s3();
          bigi = 2;
        } //}
        //ส่วนที่ 2.2-ใส่สูตรการหมุนเเล้ว เเถวที่ 2 หันเข้า c
        //{
        else if (orang8 === "#ffffff" && white4 === "#008000" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nขวาขึ้น' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง'  + '\nขวาลง' 
          document.getElementById("output").innerHTML = all_output;
          s2();
          s1();
          s6();
          w = 2;
        } else if (blue8 === "#ffffff" && white2 === "#ffa500" && w == 2) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nขวาขึ้น' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขวาลง'  
          document.getElementById("output").innerHTML = all_output;
          s3();
          s2();
          s7();
           w = 3;
        } else if (red8 === "#ffffff" && white6 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nขวาขึ้น' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขวาลง'  
          document.getElementById("output").innerHTML = all_output;
          s4();
          s3();
          s8();
           w = 4;
        } else if (green8 === "#ffffff" && white8 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nขวาขึ้น' + '\nหน้าตามเข็มนาฬิกา 1 ครั้ง' + '\nขวาลง'  + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s1();
          s4();
          s5();
          bigi = 2;
        } //}หันเข้า
         
        //หันขึ้นซ้าย/ขวา เเถบบน
        //ส่วนที่ 3.1-ใส่สูตรการหมุนเเล้ว เเถวที่ 2 หันข้าง c
        //{
        else if (yellow4 === "#ffffff" && red2 === "#008000" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s5();
          }
           w = 2;
        } else if (yellow8 === "#ffffff" && green2 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s6();
          }
           w = 3;
        } else if (yellow6 === "#ffffff" && orang2 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s7();
          }
           w = 4;
        } else if (yellow2 === "#ffffff" && blue2 === "#ff0000" && w == 4) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s8();
          }
          bigi = 2;
        } //}
        //ส่วนที่ 3.2-ใส่สูตรการหมุนเเล้ว เเถวที่ 2 หันเข้า c
        //{
        else if (yellow6 === "#ffffff" && orang2 === "#008000" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'
          document.getElementById("output").innerHTML = all_output;
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s1();
          }
          w = 2;
        } else if (yellow2 === "#ffffff" && blue2 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s2();
          }
           w = 3;
        } else if (yellow4 === "#ffffff" && red2 === "#00bfff" && w == 3) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s3();
          }
           w = 4;
        } else if (yellow8 === "#ffffff" && green2 === "#ff0000" && w == 4) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง'  + '\nขั้นตอนที่2 ทำขาวให้เต็ม'
          document.getElementById("output").innerHTML = all_output;
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s4();
          }
          bigi = 2;
        } //}
        
                 
        //หันลงซ้าย/ขวา เเถบล่าง
        //ส่วนที่ 4.1-ใส่ข้อมูลการหมุนเเล้ว เเถวที่ 2 หันข้าง c
        //{
        else if (white6 === "#ffffff" && red8 === "#008000" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nซ้ายขึ้น 2 ครั้ง' + '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s8();
          }
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s5();
          }
           w = 2;
        } else if (white8 === "#ffffff" && green8 === "#ffa500" && w == 2) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nซ้ายขึ้น 2 ครั้ง' + '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s5();
          }
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s6();
          } w = 3;
        } else if (white4 === "#ffffff" && orang8 === "#00bfff" && w == 3) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nซ้ายขึ้น 2 ครั้ง'  + '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s7();
          }
           w = 4;
        } else if (white2 === "#ffffff" && blue8 === "#ff0000" && w == 4) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nซ้ายขึ้น 2 ครั้ง'  + '\nบนขวา' + '\nหน้าทวนเข็มนาฬิกา 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s8();
          }
          bigi = 2;
        } //}
        //ส่วนที่ 4.2-ใส่ข้อมูลการหมุนเเล้ว เเถวที่ 2 หันเข้า c
        //{
        else if (white4 === "#ffffff" && orang8 === "#008000" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'   + '\nขวาขึ้น 2 ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s1();
          }
          w = 2;
        } else if (white2 === "#ffffff" && blue8 === "#ffa500" && w == 2) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nขวาขึ้น 2 ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s2();
          } w = 3;
        } else if (white6 === "#ffffff" && red8 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nขวาขึ้น 2 ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s3();
          } w = 4;
        } else if (white8 === "#ffffff" && green8 === "#ff0000" && w == 4) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'  + '\nขวาขึ้น 2 ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          s9();
          for (let stop2 = 0; stop2 < 2; stop2++) {
          s4();
          }
          bigi = 2;
        } //}
        
        //ส่วนที่ 1-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 หันข้างออกบน c
        //{
        else if (blue2 === "#008000" && yellow2 === "#ffffff" &&w == 1) {
        all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++){
            s10();
        }
          for (let stop2 = 0; stop2 < 2; stop2++){
            s1();
        }
        w = 2;
        } else if (red2 === "#ffa500" && yellow4 === "#ffffff"&& w == 2) {
        all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++){
            s9();
        }
          for (let stop2 = 0; stop2 < 2; stop2++){
            s2();
        } w = 3;
        } else if (green2  === "#00bfff" && yellow8 === "#ffffff"&& w == 3) {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง'
        document.getElementById("output").innerHTML = all_output;
        for (let stop2 = 0; stop2 < 2; stop2++){
            s9();
        }
        for (let stop2 = 0; stop2 < 2; stop2++){
            s3();
        }
         w = 4;
        } else if (orang2   === "#ff0000" && yellow6 === "#ffffff"&& w == 4) {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง'+ '\nขั้นตอนที่2 ทำขาวให้เต็ม'
        document.getElementById("output").innerHTML = all_output;
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s9();
        }
        for (let stop2 = 0; stop2 < 2; stop2++) {
          s4();
        }
      bigi = 2;
        }     //}
        //ส่วนที่ 2-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 หันข้างออกซ้าย c
        //{
        else if (blue4 === "#008000" && orang6 === "#ffffff" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nหลังทวนเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังตามเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s3();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          w = 2;
        } else if (red4 === "#ffa500" && blue6 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหลังทวนเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังตามเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s4();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          } w = 3;
        } else if (green4 === "#00bfff" && red6 === "#ffffff" && w == 3) {
          all_output = all_output   + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nหลังทวนเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังตามเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s1();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
           w = 4;
        } else if (orang4 === "#ff0000" && green6 === "#ffffff" && w == 4) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'  + '\nหลังทวนเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังตามเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s2();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          bigi = 2;
        } //}
        //ส่วนที่ 3-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 หันข้างออกขวา c
        //{
        else if (blue6 === "#008000" && red4 === "#ffffff" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nหลังตามเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังทวนเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
            s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s3();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          w = 2;
        } else if (red6 === "#ffa500" && green4 === "#ffffff" && w == 2) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหลังตามเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังทวนเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s4();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
           w = 3;
        } else if (green6 === "#00bfff" && orang4 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nหลังตามเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังทวนเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s1();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
           w = 4;
        } else if (orang6 === "#ff0000" && blue4 === "#ffffff" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหลังตามเข็ม 1 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหลังทวนเข็ม 1 ครั้ง'+ '\nหน้าทวนเข็ม 2 ครั้ง' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s2();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          bigi = 2;
        } //}
        //ส่วนที่ 4-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 หันข้างออกล่าง c
        //{
        else if (blue8 === "#008000" && white2 === "#ffffff" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'   + '\nหลังทวนเข็ม 2 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
          
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
         
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          w = 2;
        } else if (red8 === "#ffa500" && white6 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหลังทวนเข็ม 2 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
        
          
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
           w = 3;
        } else if (green8 === "#00bfff" && white8 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nหลังทวนเข็ม 2 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
        
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
           w = 4;
        } else if (orang8 === "#ff0000" && white4 === "#ffffff" && w == 4) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหลังทวนเข็ม 2 ครั้ง' + '\nบนซ้าย 2 ครั้ง'  + '\nหน้าทวนเข็ม 2 ครั้ง' +  '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
          
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          
          
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          bigi = 2;
        } //}
        
        //ส่วนที่ 1-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 ออกหน้าบน c
        //{
        else if (blue2 === "#ffffff" && yellow2 === "#008000" &&w == 1) {
        all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nบนขวา'  + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
        document.getElementById("output").innerHTML = all_output;
          s10();
          s4();
          s5();
          s8();
        w = 2;
        } else if (red2 === "#ffffff" && yellow4 === "#ffa500"&& w == 2) {
        all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  + '\nบนขวา'  + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
        document.getElementById("output").innerHTML = all_output;
            s10();
            s1();
            s6();
            s5();
             w = 3;
        } else if (green2  === "#ffffff" && yellow8 === "#00bfff"&& w == 3) {
        all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nบนขวา'  + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
        document.getElementById("output").innerHTML = all_output;
        s10();
        s2();
        s7();
        s6();
         w = 4;
        } else if (orang2   === "#ffffff" && yellow6 === "#ff0000"&& w == 4) {
        all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nบนขวา'  + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' + '\nขั้นตอนที่2 ทำขาวให้เต็ม'
        document.getElementById("output").innerHTML = all_output;
        s10();
        s3();
        s8();
        s7();
        
      bigi = 2;
        }     //}
        
        
        //ส่วนที่ 2-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 หันออกหน้าซ้าย c
        //{
        else if (blue4 === "#ffffff" && orang6 === "#008000" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nหลังทวนเข็ม'+ '\nบนขวา'   + '\nหลังตามเข็ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s3();
          s10();
          s7();
          s4();
          s5();
          s8();
          w = 2;
        } else if (red4 === "#ffffff" && blue6 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหลังทวนเข็ม'+ '\nบนขวา'  + '\nหลังตามเข็ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s4();
          s10();
          s8();
          s1();
          s6();
          s5();
 w = 3;
        } else if (green4 === "#ffffff" && red6 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nหลังทวนเข็ม'+ '\nบนขวา' + '\nหลังตามเข็ม' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s1();
          s10();
          s5();
          s2();
          s7();
          s6();
 w = 4;
        } else if (orang4 === "#ffffff" && green6 === "#ff0000" && w == 4) {
          all_output = all_output  + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nหลังทวนเข็ม'+ '\nบนขวา'  + '\nหลังตามเข็ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น'  + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s2();
          s10();
          s6();
          s3();
          s8();
          s7();

          bigi = 2;
        } //}
        //ส่วนที่ 3-ใส่สุตรการหมุนเเล้ว เเถวที่ 3 หันออกหน้าขวา c
        //{
        else if (blue6 === "#ffffff" && red4 === "#008000" && w == 1) {
          all_output = all_output + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nหลังตามเข็ม' + '\nบนขวา'  + '\nหลังทวนเข็ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s7();
          s10();
          s3();
          s4();
          s5();
          s8();
          w = 2;
        } else if (red6 === "#ffffff" && green4 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหลังตามเข็ม' + '\nบนขวา' + '\nหลังทวนเข็ม' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s8();
          s10();
          s4();
          s1();
          s6();
          s5();
 w = 3;
        } else if (green6 === "#ffffff" && orang4 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน'+ '\nหลังตามเข็ม' + '\nบนขวา'  + '\nหลังทวนเข็ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          s5();
          s10();
          s1();
          s2();
          s7();
          s6();
 w = 4;
        } else if (orang6 === "#ffffff" && blue4 === "#ff0000" && w == 4) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหลังตามเข็ม' + '\nบนขวา'  + '\nหลังทวนเข็ม'+ '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          s6();
          s10();
          s2();
          s3();
          s8();
          s7();
          bigi = 2;
        } //}
        //ส่วนที่ 4-ใส่สูตรการหมุนเเล้ว เเถวที่ 3 หันออกหน้าล่าง c
        //{
        else if (blue8 === "#ffffff" && white2 === "#008000" && w == 1) {
          all_output = all_output  + 'ขั้นตอนที่ 1 กากบาทขาว \nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหลังตามเข็ม 2 ครั้ง' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s7();
          }
          
          s10();
          s4();
          s5();
          s8();
          w = 2;
        } else if (red8 === "#ffffff" && white6 === "#ffa500" && w == 2) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหลังตามเข็ม 2 ครั้ง' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s8();
          }
          
          s10();
          s1();
          s6();
          s5();
 w = 3;
        } else if (green8 === "#ffffff" && white8 === "#00bfff" && w == 3) {
          all_output = all_output+ '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีน้ำเงิน' + '\nหลังตามเข็ม 2 ครั้ง' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s5();
          }
          
          s10();
          s2();
          s7();
          s6();
 w = 4;
        } else if (orang8 === "#ffffff" && white4 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหลังตามเข็ม 2 ครั้ง' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็มนาฬิกา' + '\nซ้ายขึ้น' + '\nขั้นตอนที่2 ทำขาวให้เต็ม' 
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s6();
          }
          
          s10();
          s3();
          s8();
          s7();

          bigi = 2;
        } //}
        
        //ส่วนที่ ? สีขาวเริ่มต้นนับกับเเถวเริ่มต้นของเหลือง
        //สำหรับ เมื่อขาวอยู่ที่ตำเเหน่งที่ถูกต้องเเล้ว{
          else if (green8 === "#008000" && white8 === "#ffffff"&& w == 1) 
        {
          if(ww1 == 0) {
            w = 2;
            ww1 = 1;

          }
        } else if (orang8 === "#ffa500" && white4 === "#ffffff"&& w == 2) {
           if (ww2 == 0) {
             w = 3;
             ww2 = 1;
   
           }
        } else if (blue8  === "#00bfff" && white2 === "#ffffff"&& w == 3) {
           if (ww3 == 0) {
             w = 4;
             ww3 = 1;

           }
        } else if (red8   === "#ff0000" && white6 === "#ffffff"&& w == 4) {
           bigi = 2;
          } //}
        
      }
    } else if (bigi === 2){
      let w = 1;
      let ww1 = 0;
      let ww2 = 0;
      let ww3 = 0;
      /*
      #00bfff  สีฟ้า
      #ffa500  สีส้ม
      #ffff00  สีเหลือง
      #ffffff  สีขาว
      #ff0000  สีเเดง
      #008000  สีเขียว
      */
      for (let stop1 = 0; stop1 < 5; stop1++){
        //ส่วนที่ 1.1-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านขวา ตำเเหน่งอิงเขียว เขียว1
        //{
        if (red3 === "#008000" && green1 === "#ffffff" && yellow7 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s2();
          s9();
          s6();
          w = 2;
        } else if (green3 === "#ffa500" && orang1 === "#ffffff" && yellow9 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s3();
          s9();
          s7();
          w = 3;
        } else if (orang3 === "#00bfff" && blue1 === "#ffffff" && yellow3 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s4();
          s9();
          s8();
          w = 4;
        } else if (blue3 === "#ff0000" && red1 === "#ffffff" && yellow1 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'+ 
           '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s1();
          s9();
          s5();
          bigi = 3;
          } //}
        //ส่วนที่ 1.2-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านซ้าย ตำเเหน่งอิงเขียว เขียว1
        //{
        else if (red3 === "#ffffff" && green1 === "#ffa500" && yellow7 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'   + '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s10();
          s6();
          w = 2;
        } else if (green3 === "#ffffff" && orang1 === "#00bfff" && yellow9 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'    + '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s3();
          s10();
          s7();
          w = 3;
        } else if (orang3 === "#ffffff" && blue1 === "#ff0000" && yellow3 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'    + '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s4();
          s10();
          s8();
          w = 4;
        } else if (blue3 === "#ffffff" && red1 === "#008000" && yellow1 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'    + '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          
          s1();
          s10();
          s5();
          bigi = 3;
        } //}
        //ส่วนที่ 2.1-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านซ้าย ตำเเหน่ง  อิงเขียวเขียว3
        //{
    else if (green3 === "#ffffff" && orang1 === "#ffa500" && yellow9 === "#008000" && w == 1) {
            all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
            document.getElementById("output").innerHTML = all_output;
            s5();
            s10();
            s1();
            
            w = 2;
    } else if (orang3 === "#ffffff" && blue1 === "#00bfff" && yellow3 === "#ffa500" && w == 2) {
      all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
      document.getElementById("output").innerHTML = all_output;
            s6();
            s10();
            s2();
           
            w = 3;
    } else if (blue3 === "#ffffff" && red1 === "#ff0000" && yellow1 === "#00bfff" && w == 3) {
      all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+ '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
      document.getElementById("output").innerHTML = all_output;
            s7();
            s10();
            s3();
           
            w = 4;
    } else if (red3 === "#ffffff" && green1 === "#008000" && yellow7 === "#ff0000" && w == 4) {
       all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'+
              '\nขั้นตอนที่3 ทำชั้นสอง'
       document.getElementById("output").innerHTML  = all_output;
            s8();
            s10();
            s4();
            
            bigi = 3;
        } //}
        //ส่วนที่ 2.2-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านขวา ตำเเหน่ง  อิงเขียวเขียว3
        //{
          else if (green3 === "#008000" && orang1 === "#ffffff" && yellow9 === "#ffa500" && w == 1) {
            all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + 
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
            document.getElementById("output").innerHTML = all_output;
            s2();
            s9();
            s6();
            w = 2;
          } else if (orang3 === "#ffa500" && blue3 === "#ffffff" && yellow3 === "#00bfff" && w == 2) {
            all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' +
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
            document.getElementById("output").innerHTML = all_output;
            s3();
            s9();
            s7();
            w = 3;
          } else if (blue3 === "#00bfff" && red1 === "#ffffff" && yellow1 === "#ff0000" && w == 3) {
            all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
            document.getElementById("output").innerHTML = all_output;
            s4();
            s9();
            s8();
            w = 4;
          } else if (red3 === "#ffffff" && green1 === "#008000" && yellow7 === "#008000" && w == 4) {
            all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'+
              '\nขั้นตอนที่3 ทำชั้นสอง'
            document.getElementById("output").innerHTML = all_output;
            s1();
            s9();
            s5();
            bigi = 3;
          } //}
          
        //ส่วนที่ 3.1-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านขวา ตำเเหน่ง  อิงเขียวเเดง1
        //{
        else if (blue3 === "#008000" && red1 === "#ffffff" && yellow1 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nบนขวา 2 ครั้ง' +
          '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++){
            s10();
        }
          s2();
          s9();
          s6();
          w = 2;
        } else if (red3 === "#ffa500" && green1 === "#ffffff" && yellow7 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+'\nบนขวา 2 ครั้ง' +
          '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s3();
          s9();
          s7();
          w = 3;
        } else if (green3 === "#00bfff" && orang1 === "#ffffff" && yellow9 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+'\nบนขวา 2 ครั้ง' +
          '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s4();
          s9();
          s8();
          w = 4;
        } else if (orang3 === "#ff0000" && blue1 === "#ffffff" && yellow3 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+'\nบนขวา 2 ครั้ง' +
          '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s1();
          s9();
          s5();
          bigi = 3;
        } //}
        //ส่วนที่ 3.2-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านซ้าย ตำเเหน่ง  อิงเขียวเเดง1
        //{
        else if (blue3 === "#ffffff" && red1 === "#ffa500" && yellow1 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nบนขวา' +
            '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s2();
          s10();
          s6();
          w = 2;
        } else if (red3 === "#ffffff" && green1 === "#00bfff" && yellow7 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  +'\nบนขวา' +
             '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s3();
          s10();
          s7();
          w = 3;
        } else if (green3 === "#ffffff" && orang1 === "#ff0000" && yellow9 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+'\nบนขวา' +
            '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s4();
          s10();
          s8();
          w = 4;
        } else if (orang3 === "#ffffff" && blue1 === "#008000" && yellow3 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +'\nบนขวา' +
            '\nขวาขึ้น' + '\nบนขวา' + '\nขวาลง' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML =all_output;
          s10()
          s1();
          s10();
          s5();
          bigi = 3;
        } //}
        //ส่วนที่ 4.1-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านซ้าย ตำเเหน่ง  อิงเขียวส้ม3
        //{
        else if (orang3 === "#ffffff" && blue1 === "#ffa500" && yellow3 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nบนขวา' +
            '\nขวาขึ้น' + '\nบนซ้าย 2 ครั้ง' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s2();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s6();
          w = 2;
        } else if (blue3 === "#ffffff" && red1 === "#00bfff" && yellow1 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  +'\nบนขวา' +
             '\nขวาขึ้น' + '\nบนซ้าย 2 ครั้ง' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s3();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s7();
          w = 3;
        } else if (red3 === "#ffffff" && green1 === "#ff0000" && yellow7 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +'\nบนขวา' +
             '\nขวาขึ้น' + '\nบนซ้าย 2 ครั้ง' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s4();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s8();
          w = 4;
        } else if (green3 === "#ffffff" && orang1 === "#008000" && yellow9 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'  +'\nบนขวา' +
             '\nขวาขึ้น' + '\nบนซ้าย 2 ครั้ง' + '\nขวาลง' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s1();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s9();
          }
          s5();
          bigi = 3;
        } //}
        //ส่วนที่ 4.2-ใส่สูตรเเล้ว เเถวบน หันออกข้าง ด้านขวา ตำเเหน่ง  อิงเขียวส้ม3
        //{
        else if (orang3 === "#008000" && blue1 === "#ffffff" && yellow3 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nบนซ้าย' +
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s2();
          s9();
          s6();
          w = 2;
        } else if (blue3 === "#ffa500" && red1 === "#ffffff" && yellow1 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  +'\nบนซ้าย' +
             '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s3();
          s9();
          s7();
          w = 3;
        } else if (red3 === "#00bfff" && green1 === "#ffffff" && yellow7 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+'\nบนซ้าย' +
             '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s4();
          s9();
          s8();
          w = 4;
        } else if (green3 === "#ff0000" && orang1 === "#ffffff" && yellow9 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'  +'\nบนซ้าย' +
             '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'+
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s1();
          s9();
          s5();
          bigi = 3;
        } //}
        
        //ส่วนที่ 5.1-ใส่สูตรเเล้ว เเถวบน หันขึ้น  ตำเเหน่งอิงเหลือง7
        //{
                  
        else if (red3 === "#ffa500" && green1 === "#008000" && yellow7 === "#ffffff" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' 
          + '\nหน้าตามเข็ม'+ '\nบนขวา'+ '\nหน้าตามเข็ม2ครั้ง'+ '\nบนซ้าย'+ '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s1();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          s9();
          s1();
          w = 2;
        } else if (green3 === "#00bfff" && orang1 === "#ffa500" && yellow9 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+ '\nหน้าตามเข็ม'+ '\nบนขวา'+ '\nหน้าตามเข็ม2ครั้ง'+ '\nบนซ้าย'+ '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
          s9();
          s2();
          w = 3;
        } else if (orang3 === "#ff0000" && blue1 === "#00bfff" && yellow3 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' + '\nหน้าตามเข็ม'+ '\nบนขวา'+ '\nหน้าตามเข็ม2ครั้ง'+ '\nบนซ้าย'+ '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s3();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
          s9();
          s3();
          w = 4;
        } else if (blue3 === "#008000" && red1 === "#ff0000" && yellow1 === "#ffffff" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+ '\nหน้าตามเข็ม'+ '\nบนขวา'+ '\nหน้าตามเข็ม2ครั้ง'+ '\nบนซ้าย'+ '\nหน้าตามเข็มนาฬิกา' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s4();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          s9();
          s4();
          bigi = 3;
        } //}
        //ส่วนที่ 5.2-ใส่สูตรเเล้ว เเถวบน หันขึ้น  ตำเเหน่งอิงเหลือง9
        //{
        else if (green3 === "#ffa500" && orang1 === "#008000" && yellow9 === "#ffffff" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' +
            '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s5();
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s4();
          s1();
          w = 2;
        } else if (orang3 === "#00bfff" && blue1 === "#ffa500" && yellow3 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' +
          '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s6();
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s1();
          s2();
          w = 3;
        } else if (blue3 === "#ff0000" && red1 === "#00bfff" && yellow1 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+
          '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s7();
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s2();
          s3();
          w = 4;
        } else if (red3 === "#008000" && green1 === "#ff0000" && yellow7 === "#ffffff" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +
          '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s8();
          s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s3();
          s4();
          bigi = 3;
        } //}
        //ส่วนที่ 5.3-ใส่สูตรเเล้ว เเถวบน หันขึ้น  ตำเเหน่งอิงเหลือง3
        //{
        else if (orang3 === "#ffa500" && blue1 === "#008000" && yellow3 === "#ffffff" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' +
          '\nบนซ้าย'+
            '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s5();
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s4();
          s1();
          w = 2;
        } else if (blue3 === "#00bfff" && blue1 === "#ffa500" && yellow1 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+
          '\nบนซ้าย' +
            '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s6();
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s1();
          s2();
          w = 3;
        } else if (red3 === "#ff0000" && blue1 === "#00bfff" && yellow7 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +
          '\nบนซ้าย'+
            '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s7();
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s2();
          s3();
          w = 4;
        } else if (green3 === "#008000" && orang1 === "#ff0000" && yellow9 === "#ffffff" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +
          '\nบนซ้าย'+
            '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s9();
          s8();
          s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s3();
          s4();
          bigi = 3;
        } //}
        //ส่วนที่ 5.4-ใส่สูตรเเล้ว เเถวบน หันขึ้น  ตำเเหน่งอิงเหลือง1
        //{
        
        else if (blue3 === "#ffa500" && red1 === "#008000" && yellow1 === "#ffffff" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'+
          '\nบนขวา' +
            '\nหน้าตามเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม2ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s1();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          s9();
          s1();
          w = 2;
        } else if (red3 === "#00bfff" && green1 === "#ffa500" && yellow7 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+
          '\nบนขวา' + '\nหน้าตามเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม2ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s2();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
          s9();
          s2();
          w = 3;
        } else if (green3 === "#ff0000" && orang1 === "#00bfff" && yellow9 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +
          '\nบนขวา'+ '\nหน้าตามเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม2ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s3();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
          s9();
          s3();
          w = 4;
        } else if (orang3 === "#008000" && blue1 === "#ff0000" && yellow3 === "#ffffff" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +
          '\nบนขวา'+ '\nหน้าตามเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม2ครั้ง' + '\nบนซ้าย' + '\nหน้าตามเข็มนาฬิกา' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s10();
          s4();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          s9();
          s4();
          bigi = 3;
        } //}
        
        //ส่วนที่ 1.1-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านขวา ตำเเหน่งอิงเขียว เขียว7 
        //{
      else  if (red9 === "#ffa500" && green7 === "#ffffff" && white9 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  
          + '\nซ้ายขึ้น' + '\nบนขวา'+ '\nซ้ายลง' +
           '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s8();
          s10();
          s4();
          
          s5();
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s4();
          s1();
          w = 2;
        } else if (green9 === "#00bfff" && orang7 === "#ffffff" && white7 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' +'\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' +
          '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s5();
          s10();
          s1();
          
          s6();
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s1();
          s2();
          w = 3;
        } else if (orang9 === "#ff0000" && blue7 === "#ffffff" && white1 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+'\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' +
          '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา'
          document.getElementById("output").innerHTML = all_output;
          s6();
          s10();
          s2();
          
          s7();
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s2();
          s3();
          w = 4;
        } else if (blue9 === "#008000" && red7 === "#ffffff" && white3 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง'+'\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' +
          '\nหน้าทวนเข็ม' + '\nซ้ายขึ้น' + '\nบนขวา 2 ครั้ง' + '\nซ้ายลง' + '\nหน้าตามเข็มนาฬิกา' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s7();
          s10();
          s3();
          
          s8();
          s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s3();
          s4();
          bigi = 3;
        } //}
        //ส่วนที่ 1.2-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านซ้าย ตำเเหน่งอิงเขียว เขียว7 
        //{
        else if (red9 === "#ffffff" && green7 === "#008000" && white9 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'
          + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง'
          + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s8();
          s10();
          s4();
          
          s5();
          s10();
          s1();
        
          w = 2;
        } else if (green9 === "#ffffff" && orang7 === "#ffa500" && white7 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s5();
          s10();
          s1();
          
          s6();
          s10();
          s2();
        
          w = 3;
        } else if (orang9 === "#ffffff" && blue7 === "#00bfff" && white1 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s6();
          s10();
          s2();
          
          s7();
          s10();
          s3();
        
          w = 4;
        } else if (blue9 === "#ffffff" && red7 === "#ff0000" && white3 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nซ้ายขึ้น' + '\nบนขวา' + '\nซ้ายลง' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s7();
          s10();
          s3();
          
          s8();
          s10();
          s4();
        
          bigi = 3;
        } //}
        //ส่วนที่ 2.1-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านขวา ตำเเหน่งอิงเขียว เขียว9
        //{
      else  if (green9 === "#ffa500" && orang7 === "#ffffff" && white7 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'
           + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'   
           + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s9();
          s6();
          
          s10();
          s2();
          s9();
          s6();
          w = 2;
        } else if (orang9 === "#00bfff" && blue7 === "#ffffff" && white1 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'    + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s3();
          s9();
          s7();
          
          s10();
          s3();
          s9();
          s7();
          w = 3;
        } else if (blue9 === "#ff0000" && red7 === "#ffffff" && white3 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'    + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s4();
          s9();
          s8();
          
          s10();
          s4();
          s9();
          s8();
          w = 4;
        } else if (red9 === "#008000" && green7 === "#ffffff" && white9 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'  + '\nบนขวา' + '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s1();
          s9();
          s5();
          
          s10();
          s1();
          s9();
          s5();
          bigi = 3;
        } //}
        //ส่วนที่ 2.2-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านซ้าย ตำเเหน่งอิงเขียว เขียว9
        //{
        else if (green9 === "#ffffff" && orang7 === "#008000" && white7 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' +
            '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม' +
            '\nบนซ้าย' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s5();
          s10();
          s1();
        
          s9();
          s5();
          s10();
          s1();
          w = 2;
        } else if (orang9 === "#ffffff" && blue7 === "#ffa500" && white1 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  +
           '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม' +
           '\nบนซ้าย' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s6();
          s10();
          s2();
          
          s9();
          s6();
          s10();
          s2();
          w = 3;
        } else if (blue9 === "#ffffff" && red7 === "#00bfff" && white3 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +
           '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม' +
           '\nบนซ้าย' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s7();
          s10();
          s3();
          
          s9();
          s7();
          s10();
          s3();
          w = 4;
        } else if (red9 === "#ffffff" && green7 === "#ff0000" && white9 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +
           '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม' +
           '\nบนซ้าย' + '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s8();
          s10();
          s4();
          
          s9();
          s8();
          s10();
          s4();
          bigi = 3;
        } //}
        
        //ส่วนที่ 3.1-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านขวา ตำเเหน่ง  อิงเขียวเเดง7
        //{
        else if (blue9 === "#ffa500" && red7 === "#ffffff" && white3 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว'  + '\nซ้ายลง'  + '\nบนซ้าย'  + '\nซ้ายขึ้น' + '\nบนขวา 3 ครั้ง' +
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s4();
          s9();
          s8();
          for (let stop2 = 0; stop2 < 3; stop2++) {
            s10();
          }
          s2();
          s9();
          s6();
          w = 2;
        } else if (red9 === "#00bfff" && green7 === "#ffffff" && white9 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  + '\nซ้ายลง'  + '\nบนซ้าย'  + '\nซ้ายขึ้น' + '\nบนขวา 3 ครั้ง' +
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s1();
          s9();
          s5();
          for (let stop2 = 0; stop2 < 3; stop2++) {
            s10();
          }
          s3();
          s9();
          s7();
          w = 3;
        } else if (green9 === "#ff0000" && orang7 === "#ffffff" && white7 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +
          '\nซ้ายลง' + '\nบนซ้าย' + '\nซ้ายขึ้น' + '\nบนขวา 3 ครั้ง' +
            '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s9();
          s6();
          for (let stop2 = 0; stop2 < 3; stop2++) {
            s10();
          }
          s4();
          s9();
          s8();
          w = 4;
        } else if (orang9 === "#008000" && blue7 === "#ffffff" && white1 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +
             '\nซ้ายลง' + '\nบนซ้าย' + '\nซ้ายขึ้น' + '\nบนขวา 3 ครั้ง' +
             '\nขวาขึ้น' + '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s3();
          s7();
          for (let stop2 = 0; stop2 < 3; stop2++) {
            s10();
          }
          s1();
          s9();
          s5();
          bigi = 3;
        } //}
        //ส่วนที่ 3.2-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านซ้าย ตำเเหน่ง  อิงเขียวเเดง7
        //{
        else if (blue9 === "#ffffff" && red7 === "#008000" && white3 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหลังตามเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหลังทวนเข็ม' + '\nหน้าทวนเข็ม' +
            '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s3();
          s5();
          s10();
          s1();
          w = 2;
        } else if (red9 === "#ffffff" && green7 === "#ffa500" && white9 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' 
          +'\nหลังตามเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหลังทวนเข็ม' + '\nหน้าทวนเข็ม' +
             '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s4();
          s6();
          s10();
          s2();
          w = 3;
        } else if (green9 === "#ffffff" && orang7 === "#00bfff" && white7 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +'\nหลังตามเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหลังทวนเข็ม' + '\nหน้าทวนเข็ม' +
             '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s1();
          s7();
          s10();
          s3();
          w = 4;
        } else if (orang9 === "#ffffff" && blue7 === "#ff0000" && white1 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +'\nหลังตามเข็ม' +
          '\nบนขวา 2 ครั้ง' + '\nหลังทวนเข็ม' + '\nหน้าทวนเข็ม' +
             '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s2();
          s8();
          s10();
          s4();
          bigi = 3;
        } //}
        //ส่วนที่ 4.1-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านซ้าย ตำเเหน่ง  อิงเขียวส้ม9
        //{
        else if (orang9 === "#ffffff" && blue7 === "#008000" && white1 === "#ffa500" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nขวาลง' + '\nบนขวา 2 ครั้ง' + '\nขวาขึ้น' + '\nบนขวา' +
            '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s6();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s2();
          s10();
          s5();
          s10();
          s1();
          w = 2;
        } else if (blue9 === "#ffffff" && red7 === "#ffa500" && white3 === "#00bfff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม' +'\nขวาลง' + '\nบนขวา 2 ครั้ง' + '\nซ้ายขึ้น' + '\nบนขวา' +
            '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s7();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s3();
          s10();
          s6();
          s10();
          s2();
          w = 3;
        } else if (red9 === "#ffffff" && green7 === "#00bfff" && white9 === "#ff0000" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า'+'\nขวาลง' + '\nบนขวา 2 ครั้ง' + '\nซ้ายขึ้น' + '\nบนขวา' +
            '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s8();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s4();
          s10();
          s7();
          s10();
          s3();
          w = 4;
        } else if (green9 === "#ffffff" && orang7 === "#ff0000" && white7 === "#008000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +'\nขวาลง' + '\nบนขวา 2 ครั้ง' + '\nซ้ายขึ้น' + '\nบนขวา' +
            '\nหน้าทวนเข็ม' + '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s5();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s10();
          }
          s1();
          s10();
          s8();
          s10();
          s4();
          bigi = 3;
        } //}
        //ส่วนที่ 4.2-ใส่สูตรเเล้ว เเถวล่าง หันออกข้าง ด้านขวา ตำเเหน่ง  อิงเขียวส้ม9
        //{
        else if (orang9 === "#ffa500" && blue7 === "#ffffff" && white1 === "#008000" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' + '\nหลังทวนเข็ม' + '\nบนซ้าย' + '\nหลังตามเข็ม' + '\nขวาขึ้น' +
            '\nบนซ้าย' + '\nขวาลง' 
          document.getElementById("output").innerHTML = all_output;
          s3();
          s9();
          s7();
          s2();
          s9();
          s6();
          w = 2;
        } else if (blue9 === "#00bfff" && red7 === "#ffffff" && white3 === "#ffa500" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'+'\nหลังทวนเข็ม' + '\nบนซ้าย' + '\nหลังตามเข็ม' + '\nขวาขึ้น' +
            '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s4();
          s9();
          s8();
          s3();
          s9();
          s7();
          w = 3;
        } else if (red9 === "#ff0000" && green7 === "#ffffff" && white9 === "#00bfff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +'\nหลังทวนเข็ม' + '\nบนซ้าย' + '\nหลังตามเข็ม' + '\nขวาขึ้น' +
            '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s1();
          s9();
          s5();
          s4();
          s9();
          s8();
          w = 4;
        } else if (green9 === "#008000" && orang7 === "#ffffff" && white7 === "#ff0000" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +'\nหลังทวนเข็ม' + '\nบนซ้าย' + '\nหลังตามเข็ม' + '\nขวาขึ้น' +
            '\nบนซ้าย' + '\nขวาลง'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s9();
          s6();
          s1();
          s9();
          s5();
          bigi = 3;
        } //}
        
        //ส่วนที่ 5.1- เเถวบน หันขึ้น  ตำเเหน่งอิงขาว9
        //{
              /*
              #00bfff  สีฟ้า
              #ffa500  สีส้ม
              #ffff00  สีเหลือง
              #ffffff  สีขาว
              #ff0000  สีเเดง
              #008000  สีเขียว
              */
        else if (red9 === "#008000" && green7 === "#ffa500" && white9 === "#ffffff" && w == 1) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเขียว' +
            '\nหน้าตามเข็ม' + '\nบนซ้าย' 
            + '\nหน้าทวนเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหน้าทวนเข็ม' 
            + '\nบนขวา'  + '\nหน้าตามเข็ม' 
          document.getElementById("output").innerHTML = all_output;
          s1();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s1();
          }
          s9();
          s1();
          w = 2;
        } else if (green9 === "#ffa500" && orang7 === "#00bfff" && white7 === "#ffffff" && w == 2) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีส้ม'  +'\nบนซ้าย' +
           '\nหน้าทวนเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหน้าทวนเข็ม' +
           '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s2();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s2();
          }
          s9();
          s2();
          w = 3;
        } else if (orang9 === "#00bfff" && blue7 === "#ff0000" && white1 === "#ffffff" && w == 3) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีฟ้า' +'\nบนซ้าย' +
           '\nหน้าทวนเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหน้าทวนเข็ม' +
           '\nบนขวา' + '\nหน้าตามเข็ม'
          document.getElementById("output").innerHTML = all_output;
          s3();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s3();
          }
          s9();
          s3();
          w = 4;
        } else if (blue9 === "#ff0000" && red7 === "#008000" && white3 === "#ffffff" && w == 4) {
          all_output = all_output + '\nตำเเหน่ง : บน-สีเหลือง / หน้า-สีเเดง' +'\nบนซ้าย' +
           '\nหน้าทวนเข็ม' + '\nบนขวา 2 ครั้ง' + '\nหน้าทวนเข็ม' +
           '\nบนขวา' + '\nหน้าตามเข็ม' +
            '\nขั้นตอนที่3 ทำชั้นสอง'
          document.getElementById("output").innerHTML = all_output;
          s4();
          s10();
          for (let stop2 = 0; stop2 < 2; stop2++) {
            s4();
          }
          s9();
          s4();
          bigi = 3;
        } //}
      }
    } 
  }
  //การหมุน
  function s1(){
    //สลับเเบบทะเเยงมุม-F
    //{
                let tempnum1 = green1;
                let tempnum3 = green3;
                let tempnum9 = green9;
                let tempnum7 = green7;
                green3 = tempnum1;
                green9 = tempnum3;
                green7 = tempnum9;
                green1 = tempnum7;
                //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
                let tempnum2 = green2;
                let tempnum6 = green6;
                let tempnum8 = green8;
                let tempnum4 = green4;
                green6 = tempnum2;
                green8 = tempnum6;
                green4 = tempnum8;
                green2 = tempnum4;
                //}
    //สลับเเบบทะเเยงมุม-T
    //{
                let tempy7 = yellow7;
                let tempy9 = yellow9;
                let tempo1 = orang1;
                let tempo7 = orang7;
                let tempw7 = white7;
                let tempw9 = white9;
                let tempr3 = red3;
                let tempr9 = red9;
                orang1 = tempy7;
                orang7 = tempy9;
                white7 = tempo1;
                white9 = tempo7;
                red9 = tempw7;
                red3 = tempw9;
                yellow7 = tempr9;
                yellow9 = tempr3;
                //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
                let tempy8 = yellow8;
                let tempo4 = orang4;
                let tempw8 = white8;
                let tempr6 = red6;
                orang4 = tempy8;
                white8 = tempo4;
                red6 = tempw8;
                yellow8 = tempr6;
                //}
  }// หน้าเขียวตามเข็ม
  function s2(){
     //สลับเเบบทะเเยงมุม-F
     //{
     let tempnum1 = orang1;
     let tempnum3 = orang3;
     let tempnum9 = orang9;
     let tempnum7 = orang7;
     orang3 = tempnum1;
     orang9 = tempnum3;
     orang7 = tempnum9;
     orang1 = tempnum7;
     //}
     //สลับเเบบเเถบระหว่างกลาง-F
     //{
     let tempnum2 = orang2;
     let tempnum6 = orang6;
     let tempnum8 = orang8;
     let tempnum4 = orang4;
     orang6 = tempnum2;
     orang8 = tempnum6;
     orang4 = tempnum8;
     orang2 = tempnum4;
     //}
     w = 3;
     //สลับเเบบทะเเยงมุม-T
     //{
     let tempy9 = yellow9;
     let tempy3 = yellow3;
     let tempb1 = blue1;
     let tempb7 = blue7;
     let tempw1 = white1;
     let tempw7 = white7;
     let tempg3 = green3;
     let tempg9 = green9;
     blue1 = tempy9;
     blue7 = tempy3;
     white1 = tempb1;
     white7 = tempb7;
     green9 = tempw1;
     green3 = tempw7;
     yellow9 = tempg9;
     yellow3 = tempg3;
     //}
     //สลับเเบบเเถบระหว่างกลาง-T
     //{
     let tempg6 = green6;
     let tempy6 = yellow6;
     let tempb4 = blue4;
     let tempw4 = white4;
     blue4 = tempy6;
     white4 = tempb4;
     green6 = tempw4;
     yellow6 = tempg6;
     //}
  }// หน้าส้มตามเข็ม
  function s3(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = blue1;
    let tempnum3 = blue3;
    let tempnum9 = blue9;
    let tempnum7 = blue7;
    blue3 = tempnum1;
    blue9 = tempnum3;
    blue7 = tempnum9;
    blue1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = blue2;
    let tempnum6 = blue6;
    let tempnum8 = blue8;
    let tempnum4 = blue4;
    blue6 = tempnum2;
    blue8 = tempnum6;
    blue4 = tempnum8;
    blue2 = tempnum4;
    //}
    w = 4;
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = yellow1;
    let tempy3 = yellow3;
    let tempr1 = red1;
    let tempr7 = red7;
    let tempw3 = white3;
    let tempw1 = white1;
    let tempo3 = orang3;
    let tempo9 = orang9;
    red1 = tempy3;
    red7 = tempy1;
    white3 = tempr1;
    white1 = tempr7;
    orang9 = tempw3;
    orang3 = tempw1;
    yellow3 = tempo9;
    yellow1 = tempo3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy2 = yellow2;
    let tempr4 = red4;
    let tempw2 = white2;
    let tempo6 = orang6;
    red4 = tempy2;
    white2 = tempr4;
    orang6 = tempw2;
    yellow2 = tempo6;
    //}
  }// หน้าน้ำเงินตามเข็ม
  function s4(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = red1;
    let tempnum3 = red3;
    let tempnum9 = red9;
    let tempnum7 = red7;
    red3 = tempnum1;
    red9 = tempnum3;
    red7 = tempnum9;
    red1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = red2;
    let tempnum6 = red6;
    let tempnum8 = red8;
    let tempnum4 = red4;
    red6 = tempnum2;
    red8 = tempnum6;
    red4 = tempnum8;
    red2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = yellow1;
    let tempy7 = yellow7;
    let tempg1 = green1;
    let tempg7 = green7;
    let tempw3 = white3;
    let tempw9 = white9;
    let tempb3 = blue3;
    let tempb9 = blue9;
    green1 = tempy1;
    green7 = tempy7;
    white9 = tempg1;
    white3 = tempg7;
    blue9 = tempw9;
    blue3 = tempw3;
    yellow1 = tempb9;
    yellow7 = tempb3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy4 = yellow4;
    let tempg4 = green4;
    let tempw6 = white6;
    let tempb6 = blue6;
    green4 = tempy4;
    white6 = tempg4;
    blue6 = tempw6;
    yellow4 = tempb6;
    //}
  }// หน้าเเดงตามเข็ม
  function s5(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = green1;
    let tempnum3 = green3;
    let tempnum9 = green9;
    let tempnum7 = green7;
    green1 = tempnum3;
    green7 = tempnum1;
    green9 = tempnum7;
    green3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = green2;
    let tempnum6 = green6;
    let tempnum8 = green8;
    let tempnum4 = green4;
    green2 = tempnum6;
    green4 = tempnum2;
    green8 = tempnum4;
    green6 = tempnum8;
    w = 2;
    //  }
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy7 = yellow7;
    let tempy9 = yellow9;
    let tempo1 = orang1;
    let tempo7 = orang7;
    let tempw7 = white7;
    let tempw9 = white9;
    let tempr3 = red3;
    let tempr9 = red9;
    orang1 = tempw7;
    orang7 = tempw9;
    white7 = tempr9;
    white9 = tempr3;
    red9 = tempy7;
    red3 = tempy9;
    yellow7 = tempo1;
    yellow9 = tempo7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy8 = yellow8;
    let tempo4 = orang4;
    let tempw8 = white8;
    let tempr6 = red6;
    orang4 = tempw8;
    white8 = tempr6;
    red6 = tempy8;
    yellow8 = tempo4;
    //}
  }// หน้าเขียวทวนเข็ม
  function s6(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = orang1;
    let tempnum3 = orang3;
    let tempnum9 = orang9;
    let tempnum7 = orang7;
    orang1 = tempnum3;
    orang7 = tempnum1;
    orang9 = tempnum7;
    orang3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = orang2;
    let tempnum6 = orang6;
    let tempnum8 = orang8;
    let tempnum4 = orang4;
    orang2 = tempnum6;
    orang4 = tempnum2;
    orang8 = tempnum4;
    orang6 = tempnum8;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy9 = yellow9;
    let tempy3 = yellow3;
    let tempb1 = blue1;
    let tempb7 = blue7;
    let tempw1 = white1;
    let tempw7 = white7;
    let tempg3 = green3;
    let tempg9 = green9;
    blue1 = tempw1;
    blue7 = tempw7;
    white1 = tempg9;
    white7 = tempg3;
    green9 = tempy9;
    green3 = tempy3;
    yellow9 = tempb1;
    yellow3 = tempb7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg6 = green6;
    let tempy6 = yellow6;
    let tempb4 = blue4;
    let tempw4 = white4;
    blue4 = tempw4;
    white4 = tempg6;
    green6 = tempy6;
    yellow6 = tempb4;
    //}
  }// หน้าส้มทวนเข็ม
  function s7(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = blue1;
    let tempnum3 = blue3;
    let tempnum9 = blue9;
    let tempnum7 = blue7;
    blue1 = tempnum3;
    blue7 = tempnum1;
    blue9 = tempnum7;
    blue3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = blue2;
    let tempnum6 = blue6;
    let tempnum8 = blue8;
    let tempnum4 = blue4;
    blue2 = tempnum6;
    blue4 = tempnum2;
    blue8 = tempnum4;
    blue6 = tempnum8;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = yellow1;
    let tempy3 = yellow3;
    let tempr1 = red1;
    let tempr7 = red7;
    let tempw3 = white3;
    let tempw1 = white1;
    let tempo3 = orang3;
    let tempo9 = orang9;
    red1 = tempw3;
    red7 = tempw1;
    white3 = tempo9;
    white1 = tempo3;
    orang9 = tempy3;
    orang3 = tempy1;
    yellow3 = tempr1;
    yellow1 = tempr7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy2 = yellow2;
    let tempr4 = red4;
    let tempw2 = white2;
    let tempo6 = orang6;
    red4 = tempw2;
    white2 = tempo6;
    orang6 = tempy2;
    yellow2 = tempr4;
    //}
  }// หน้าน้ำเงินทวนเข็ม
  function s8(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = red1;
    let tempnum3 = red3;
    let tempnum9 = red9;
    let tempnum7 = red7;
    red1 = tempnum3;
    red7 = tempnum1;
    red9 = tempnum7;
    red3 = tempnum9;
    //}
    //สลับเเบบเเถบระหว่างกลาง
    //{
    let tempnum2 = red2;
    let tempnum6 = red6;
    let tempnum8 = red8;
    let tempnum4 = red4;
    red2 = tempnum6;
    red4 = tempnum2;
    red8 = tempnum4;
    red6 = tempnum8;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempy1 = yellow1;
    let tempy7 = yellow7;
    let tempg1 = green1;
    let tempg7 = green7;
    let tempw3 = white3;
    let tempw9 = white9;
    let tempb3 = blue3;
    let tempb9 = blue9;
    green1 = tempw9;
    green7 = tempw3;
    white9 = tempb9;
    white3 = tempb3;
    blue9 = tempy1;
    blue3 = tempy7;
    yellow1 = tempg1;
    yellow7 = tempg7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempy4 = yellow4;
    let tempg4 = green4;
    let tempw6 = white6;
    let tempb6 = blue6;
    green4 = tempw6;
    white6 = tempb6;
    blue6 = tempy4;
    yellow4 = tempg4;
    //}
  }// หน้าเเดงทวนเข็ม
  function s9(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = yellow1;
    let tempnum3 = yellow3;
    let tempnum9 = yellow9;
    let tempnum7 = yellow7;
    yellow3 = tempnum1;
    yellow9 = tempnum3;
    yellow7 = tempnum9;
    yellow1 = tempnum7;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = yellow2;
    let tempnum6 = yellow6;
    let tempnum8 = yellow8;
    let tempnum4 = yellow4;
    yellow6 = tempnum2;
    yellow8 = tempnum6;
    yellow4 = tempnum8;
    yellow2 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempb3 = blue3;
    let tempb1 = blue1;
    let tempo1 = orang1;
    let tempo3 = orang3;
    let tempg1 = green1;
    let tempg3 = green3;
    let tempr3 = red3;
    let tempr1 = red1;
    orang3 = tempb3;
    orang1 = tempb1;
    green3 = tempo3;
    green1 = tempo1;
    red3   = tempg3;
    red1   = tempg1;
    blue3  = tempr3;
    blue1  = tempr1;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg2 = green2;
    let tempo2 = orang2;
    let tempb2 = blue2;
    let tempr2 = red2;
    orang2 = tempb2;
    green2 = tempo2;
    red2   = tempg2;
    blue2  = tempr2;
    //}
  } // หน้าเหลืองตามเข็ม
  function s10(){
    //สลับเเบบทะเเยงมุม-F
    //{
    let tempnum1 = yellow1;
    let tempnum3 = yellow3;
    let tempnum9 = yellow9;
    let tempnum7 = yellow7;
    yellow7 = tempnum1;
    yellow9 = tempnum7;
    yellow3 = tempnum9;
    yellow1 = tempnum3;
    //}
    //สลับเเบบเเถบระหว่างกลาง-F
    //{
    let tempnum2 = yellow2;
    let tempnum6 = yellow6;
    let tempnum8 = yellow8;
    let tempnum4 = yellow4;
    yellow6 = tempnum8;
    yellow2 = tempnum6;
    yellow4 = tempnum2;
    yellow8 = tempnum4;
    //}
    //สลับเเบบทะเเยงมุม-T
    //{
    let tempb3 = blue3;
    let tempb1 = blue1;
    let tempo1 = orang1;
    let tempo3 = orang3;
    let tempg1 = green1;
    let tempg3 = green3;
    let tempr3 = red3;
    let tempr1 = red1;
    orang3 = tempg3;
    orang1 = tempg1;
    green3 = tempr3;
    green1 = tempr1;
    red3 = tempb3;
    red1 = tempb1;
    blue3 = tempo3;
    blue1 = tempo1;
    //}
    //สลับเเบบเเถบระหว่างกลาง-T
    //{
    let tempg2 = green2;
    let tempo2 = orang2;
    let tempb2 = blue2;
    let tempr2 = red2;
    orang2 = tempg2;
    green2 = tempr2;
    red2 = tempb2;
    blue2 = tempo2;
    //}
  }// หน้าเหลืองทวนเข็ม