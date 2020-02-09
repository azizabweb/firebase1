//your jquery code goes here

$("#singleimg1").hover(function () {
    $("#btn1").toggle()

});
$("#singleimg2").hover(function () {
    $("#btn2").toggle()

});
$("#singleimg3").hover(function () {
    $("#btn3").toggle()

});


$("#btn1").click(function () {
    $("#myModal").modal();

});
$("#btn2").click(function () {
    $("#myModal").modal();

});
$("#btn3").click(function () {
    $("#myModal").modal();

});
// end of jquery