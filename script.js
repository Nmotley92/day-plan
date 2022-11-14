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

