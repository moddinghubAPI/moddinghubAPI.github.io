
   function OnStart(){ 
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        document.getElementById("alltext1").style.visibility="hidden";
        document.getElementById("alltext2").style.visibility="hidden";
        document.getElementById("alltext3").style.visibility="hidden";
        document.getElementById("button1").style.visibility="hidden";
	      document.getElementByClass("button").style.visibility="hidden";
	      document.getElementById("NoBile").style.visibility="visable";
	      console.log("This site does not support mobile");
      }else{
        console.log("mobile check:off");
      }
    }
