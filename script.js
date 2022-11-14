var currentDayEl= $('#currentDay');
var currentDay= dayjs().format('dddd, MMMM D' )
var saveButtonsEl= $('.btn');
var saveMsgEl= $('#save-msg');

// current day
currentDayEl.text(currentDay);
// event listener for save buttons
saveButtonsEl.click(function(){
  var id = $(this).parent().attr('id');
  var value = $(this).prev().val();
  localStorage.setItem(id, value);
  saveMsgEl.text("Event saved to local storage ✔️" );
})
// onload loads all local storage data to the textarea 
 window.onload = function() {        
 $('textarea').each(function(){    
    var id = $(this).parent().attr('id');
    var text2 = localStorage.getItem(id);
    if (text2 !== null) $(this).val(text2);
 }); 
}
//  checks the current time to color code
 var currentTime= dayjs().hour();
 console.log(currentTime)
$(".time-block").each(function(){
    var id = $(this).attr('id');
    var hourNum=id.replace( /^\D+/g, '');
    if(hourNum< currentTime){
      $(this).addClass("past");
    }
    if (hourNum==currentTime){
      $(this).addClass("present");
    }
    if(hourNum>currentTime){
      $(this).addClass("future");
    }
})

