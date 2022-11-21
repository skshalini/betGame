function startTimer(duration, display) {               /* Set timer for countdown */
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      } 
    }, 1000);                             
    setTimeout(() => {                     /*Reload page after every minute*/
        alert('Time Up!!');
        document.location.reload();
      }, 60 * 1000);
   
  }

  window.onload = function () {
    var fiveMinutes = 60 * 1,              /*  countdown start for 1 minutes*/
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };

  function show() {                       /* To display bitcoin images  */
 

    let image = document.getElementById("image");
   
    image.src ="./image/poker2.1.png "
   
    document.getElementById("btnID")
            .style.display = "inline";
   }
   
   function show1() {
    
   
    let image = document.getElementById("image");
   
    image.src ="./image/poker3.1.png "
   
    document.getElementById("btnID")
            .style.display = "none";
   }
   function show2() {
    
   
    let image = document.getElementById("image");
   
    image.src =" ./image/poker4.1.png"
   
    document.getElementById("btnID")
            .style.display = "none";
   }
   
   function show3() {
    
   
    let image = document.getElementById("image");
   
    image.src =" ./image/poker1.1.png"
   
    document.getElementById("btnID")
            .style.display = "none";
   }
  

  function myFunction0() {                     /*  To display li buttons after clicking  */
    var x = document.getElementById("mydiv0");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction1() {
    var x = document.getElementById("mydiv1");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var x = document.getElementById("mydiv2");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction3() {
    var x = document.getElementById("mydiv3");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction4() {
    var x = document.getElementById("mydiv4");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction5() {
    var x = document.getElementById("mydiv5");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction6() {
    var x = document.getElementById("mydiv6");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction7() {
    var x = document.getElementById("mydiv7");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction8() {
    var x = document.getElementById("mydiv8");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction9() {
    var x = document.getElementById("mydiv9");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction10() {
    var x = document.getElementById("mydiv10");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction11() {
    var x = document.getElementById("mydiv11");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction12() {
    var x = document.getElementById("mydiv12");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction13() {
    var x = document.getElementById("mydiv13");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction14() {
    var x = document.getElementById("mydiv14");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction15() {
    var x = document.getElementById("mydiv15");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction16() {
    var x = document.getElementById("mydiv16");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction17() {
    var x = document.getElementById("mydiv17");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction18() {
    var x = document.getElementById("mydiv18");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction19() {
    var x = document.getElementById("mydiv19");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction20() {
    var x = document.getElementById("mydiv20");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction21() {
    var x = document.getElementById("mydiv21");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction22() {
    var x = document.getElementById("mydiv22");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction23() {
    var x = document.getElementById("mydiv23");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction24() {
    var x = document.getElementById("mydiv24");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction25() {
    var x = document.getElementById("mydiv25");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction26() {
    var x = document.getElementById("mydiv26");
    if (x.style.display == "none") {
      x.style.display = "block";

    } else {
      x.style.display = "none";
    }
  }
  function myFunction27() {
    var x = document.getElementById("mydiv27");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction28() {
    var x = document.getElementById("mydiv28");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction29() {
    var x = document.getElementById("mydiv29");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction30() {
    var x = document.getElementById("mydiv30");
    if (x.style.display == "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
  }
  function myFunction31() {
    var x = document.getElementById("mydiv31");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction32() {
    var x = document.getElementById("mydiv32");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction33() {
    var x = document.getElementById("mydiv33");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction34() {
    var x = document.getElementById("mydiv34");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction35() {
    var x = document.getElementById("mydiv35");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction36() {
    var x = document.getElementById("mydiv36");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction37() {
    var x = document.getElementById("mydiv37");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction38() {
    var x = document.getElementById("mydiv38");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction39() {
    var x = document.getElementById("mydiv39");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction40() {
    var x = document.getElementById("mydiv40");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction41() {
    var x = document.getElementById("mydiv41");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction42() {
    var x = document.getElementById("mydiv42");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction43() {
    var x = document.getElementById("mydiv43");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction44() {
    var x = document.getElementById("mydiv44");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction45() {
    var x = document.getElementById("mydiv45");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction46() {
    var x = document.getElementById("mydiv46");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction47() {
    var x = document.getElementById("mydiv47");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction48() {
    var x = document.getElementById("mydiv48");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction49() {
    var x = document.getElementById("mydiv49");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction50() {
    var x = document.getElementById("mydiv50");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction51() {
    var x = document.getElementById("mydiv51");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction52() {
    var x = document.getElementById("mydiv52");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction53() {
    var x = document.getElementById("mydiv53");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction54() {
    var x = document.getElementById("mydiv54");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction55() {
    var x = document.getElementById("mydiv55");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction56() {
    var x = document.getElementById("mydiv56");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction57() {
    var x = document.getElementById("mydiv57");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction58() {
    var x = document.getElementById("mydiv58");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction59() {
    var x = document.getElementById("mydiv59");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction60() {
    var x = document.getElementById("mydiv60");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction61() {
    var x = document.getElementById("mydiv61");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction62() {
    var x = document.getElementById("mydiv62");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction63() {
    var x = document.getElementById("mydiv63");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction64() {
    var x = document.getElementById("mydiv64");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction65() {
    var x = document.getElementById("mydiv65");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction66() {
    var x = document.getElementById("mydiv66");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction67() {
    var x = document.getElementById("mydiv67");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction68() {
    var x = document.getElementById("mydiv68");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction69() {
    var x = document.getElementById("mydiv69");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction70() {
    var x = document.getElementById("mydiv70");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction71() {
    var x = document.getElementById("mydiv71");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction72() {
    var x = document.getElementById("mydiv72");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction73() {
    var x = document.getElementById("mydiv73");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction74() {
    var x = document.getElementById("mydiv74");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction75() {
    var x = document.getElementById("mydiv75");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction76() {
    var x = document.getElementById("mydiv76");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction77() {
    var x = document.getElementById("mydiv77");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction78() {
    var x = document.getElementById("mydiv78");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction79() {
    var x = document.getElementById("mydiv79");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction80() {
    var x = document.getElementById("mydiv80");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction81() {
    var x = document.getElementById("mydiv81");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction82() {
    var x = document.getElementById("mydiv82");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction83() {
    var x = document.getElementById("mydiv83");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction84() {
    var x = document.getElementById("mydiv84");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction85() {
    var x = document.getElementById("mydiv85");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction86() {
    var x = document.getElementById("mydiv86");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction87() {
    var x = document.getElementById("mydiv87");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

  function myFunction88() {
    var x = document.getElementById("mydiv88");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction89() {
    var x = document.getElementById("mydiv89");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction90() {
    var x = document.getElementById("mydiv90");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction91() {
    var x = document.getElementById("mydiv91");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction92() {
    var x = document.getElementById("mydiv92");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction93() {
    var x = document.getElementById("mydiv93");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction94() {
    var x = document.getElementById("mydiv94");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction95() {
    var x = document.getElementById("mydiv95");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction96() {
    var x = document.getElementById("mydiv96");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction97() {
    var x = document.getElementById("mydiv97");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction98() {
    var x = document.getElementById("mydiv98");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }
  function myFunction99() {
    var x = document.getElementById("mydiv99");
    if (x.style.display == "none") {
      x.style.display = "block";

    }else {
      x.style.display = "none";
    }
  }

































 