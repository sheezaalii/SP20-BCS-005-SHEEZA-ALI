//Sort the elements alphabatically and on click remove the li element in ul
$(function has() {
    $(".btn").click(gettext);
    $(".list li").click(sortEle);
  });
  
  function gettext() {
    var val = $("#entry").val();
    $(".list").append(`<li> ${val} </li>`);
    // $(".list li").click(remove);
    sortEle();
  }
  
  function remove() {
    $(this).remove();
  }
  
  function sortEle() {
    // Code for sorting the elements
    var list = $(".list li");
    arr = [];
    for (let i = 0; i < list.length; i++) {
      arr[i] = $(list[i]).html();
    }
    arr.sort();
    console.log(arr);
    for (let i = 0; i < list.length; i++) {
      $(list[i]).html(arr[i]);
    }
  }
  
 // Check that if email field is filled or not
   $(function main() {
     $("#press").click(() => {
       var mail = $("#email").val();
       if (!mail) {
         $("#email").addClass("red");
       } else {
         $("#email").removeClass("red");
         console.log(`The value of mail is set to ${mail}`);
       }
   });
   });

  // //Get the data using ajax

 $(function getFun() {
   $.ajax({
     type: "GET",
     url:  "https://usman-cui-recipies.herokuap.com/api/recipes/"+id,
     // data: "data",
     // dataType: "dataType",
     success: function (response, status) {
       console.log(response + " and the status is " + status);
     },
     error: function (XMLHttpRequest, status, errorThrown) {
       console.log(XMLHttpRequest);
     },
    });
});