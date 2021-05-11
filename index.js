
          function openForm() {
            document.getElementById("myForm").style.display = "block";
            document.getElementById("PassportImage").style.display="none";
          }
          
          function closeForm() {
            document.getElementById("myForm").style.display = "none";
            document.getElementById("PassportImage").style.display="inline";
            
          }
        
          function Limit(id){
            var i=id.value.length;
            var charactersLeft = 200 - i;
            var count = document.getElementById('count');
          if(i>200){
            alert("Only 200 Characters allowed");
            id.value = id.value.substring(0, i-1);
          }
          else {
            count.innerHTML = "Characters left: " + charactersLeft;
     }
          }
          function empty(){
            var x= document.getElementById("fname").value;
            var y= document.getElementById("tel").value;
            var z= document.getElementById("email").value;
            var w=document.getElementById("subject").value;
             if (x == "" || y == ""||z == ""|| w=="") {
               if(x == ""){
             alert("Enter a Valid Name");
              return false;}
              if(y == ""){
             alert("Enter a Valid Phone Number");
              return false;}
              if(z == ""){
             alert("Enter a Valid Email");
              return false;}
              if(w == ""){
             alert("Enter Your Text");
             return false;
          }
        }
          else{
               alert("Your Request is Subbmited");
             }
        
        }
          



  var btnScroll=document.getElementById("ButtontoScrollup");
  btnScroll.addEventListener("click",function () {
  window.scrollTo(0,0);
  });
  
  var e = 0;
  function move(id) {
    if (e == 0) {
      e = 1;
      var val=id.innerHTML;
      var value = 1;
      var id1 = setInterval(frame, 10);
      function frame() {
        if (value >= val) {
          clearInterval(id1);
          e = 0;
        } else {
          value++;
          id.value = value ;
          
        }
      }
    }
  }





    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("PassportImage");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    function ChangeMouseIcon(id) {
    id.style.cursor = "zoom-in";
  }