$(function()
{ //jq will excute this funtion after page load
    //so do your bindings here
    $("#btn").click(handlebtn);
    $("#todos ").on("click","li",removeMe);
   
});

function handlebtn()
{
    var value = $("#newtodo").val();
    $("#newtodo").val("");
    if(!value)
    {
        $("#newtodo").addClass("error");
        return;
    }
    $(value).removeClass("error");
    $("#todos").append("<li>" + value + "</li>");
    // $("#todos li").click(removeMe);
};

function removeMe()
    {
        $(this).remove();
    };