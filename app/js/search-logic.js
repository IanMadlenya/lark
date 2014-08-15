var formLogic = (function(){

  function increment (value) {
    return ++value;
  }

  function subtract (value) {
    if(value > 0) {
      return --value;
    } else {
      return value;
    }
  }

  function calcDate (selectedDate, days) {
    var departureDate = Date.parse(selectedDate);
    var theFuture = new Date(+(new Date(departureDate)) + (1000 * 60 * 60 * 24 * days));
    var returnDate = {};
    returnDate.month = theFuture.getMonth()+1;
    returnDate.day = theFuture.getDate();
    returnDate.yaer = theFuture.getFullYear();
    return returnDate;
  }

  return {
    add: increment,
    subtract: subtract,
    calcDate: calcDate
  }
})();