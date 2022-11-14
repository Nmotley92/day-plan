var currentDayEl= $('#currentDay');
var currentDay= dayjs().format('dddd, MMMM D' )
var saveButtonsEl= $('.btn');

// current day
currentDayEl.text(currentDay);
// event listener for save buttons
saveButtonsEl.click(function(){
  var id = $(this).parent().attr('id');
  var value = $(this).prev().val();
  localStorage.setItem(id, value);
})
// onload loads all local storage data to the textarea 
 window.onload = function() {        
 $('textarea').each(function(){    
    var id = $(this).parent().attr('id');
    var text2 = localStorage.getItem(id);
    if (text2 !== null) $(this).val(text2);
 }); 
}


