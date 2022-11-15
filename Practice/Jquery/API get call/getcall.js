$(function(){
    loadrecipies();
    $("#recipie").on("click",".btn-danger",handledelete);
});

function handledelete(){
  
    var btn = $(this);
    let parentdiv = btn.closest(".recipies");
    let id = parentdiv.attr("data-id");
    console.log(id);
   $.ajax({
        url : "https://jsonplaceholder.typicode.com/posts/"+id,
        method: "delete",
        success: function(){
            loadrecipies();
        }
   });
}

function loadrecipies(){
    $.ajax({
        type : "get",
       url :  "https://jsonplaceholder.typicode.com/posts",
        success : function(response){
            console.log(response);
           var rescipies =  $("#recipie");
           rescipies.empty();
           for (var i =0 ; i<response.length; i++)
           {
            var rec = response[i];
            rescipies.append(`<div class="recipies" data-id = "${rec.id}"><h3>${rec.title}</h3><p>${rec.body}<button class ="btn btn-warning btn-sm float-right">Edit</button><button class ="btn btn-danger btn-sm float-right">Delete</button></p></div>`)
            // resci.append("<div><h3>"+ rec.title +"</h3></div>");
           }
        }
    });
}