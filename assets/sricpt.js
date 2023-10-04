

function formatTime(){
    var today = dayjs();
    $('#1a').text(today.format('h:mm ss, A dddd MMM D, YYYY'));

}

formatTime();
setInterval(formatTime, 1000);  
    
   


