// console.log("start");
// $(function(){
//     console.log("alive");
//     $("#load").click(sendajex);
// });

// function sendajex(){
//     console.log("sending ajax request");
//     $.get("data.txt",handlerequest);

//     console.log("request sent ");
// }

// function handlerequest(response)
// {
//     console.log("request recieved");
//     $("#result").empty();
//     $("#result").append(response)

// }
// console.log("end");




// simplifiedd
$(function(){
    $("#load").click(function(){
    $.get("data.txt",function(response){
        $("#result").empty();
        $("#result").append(response);
});
});
});
