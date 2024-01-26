let businessHours = [
    dayjs().set('hour',9).set('minute', 0).set('second', 0),
    dayjs().set('hour',10).set('minute', 0).set('second', 0),
    dayjs().set('hour',11).set('minute', 0).set('second', 0),
    dayjs().set('hour',12).set('minute', 0).set('second', 0),
    dayjs().set('hour',13).set('minute', 0).set('second', 0),
    dayjs().set('hour',14).set('minute', 0).set('second', 0),
    dayjs().set('hour',15).set('minute', 0).set('second', 0),
    dayjs().set('hour',16).set('minute', 0).set('second', 0),
    dayjs().set('hour',17).set('minute', 0).set('second', 0),
]


let timeSection = 'timeSection';
$('')
let hourBlock = $('<div>');
$('.container').append(hourBlock)



$('#currentDay').text(dayjs().format('dddd, MMMM D'));


let formattedBhours = businessHours.map(function(time) {
    return time.format("hA");
});

$.each(formattedBhours, function(index, time) {
    let hour = $('<li>').addClass('row hour time-block').text(time);

    $(hourBlock).append(hour);
})