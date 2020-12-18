
var currentdayEl = $("#currentDay");
currentdayEl.text(moment().format("MMMM D, YYYY"));
var currentTime = parseInt(moment().format('k'));

for (var hourCount = 9; hourCount < 18; hourCount++) {
    var hourgrabEl = $("#hour-" + hourCount);
    if(hourCount < currentTime) {
        hourgrabEl.attr("class","row time-block past");
    }
    else if(hourCount === currentTime) {
        hourgrabEl.attr("class","row time-block present");
    }
    else {
        hourgrabEl.attr("class","row time-block future");
    }
}


$(".fa-save").on("click", function(event){

    var post = $("." + event.target.id).val().trim();
    localStorage.setItem(event.target.id, post);

})

function getItem () {

    for (var i = 1; i < 10; i ++) {

        var storage = localStorage.getItem("description" + i);
        $(".description" + i).val(storage);
    }

}
getItem();



