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


$('#currentDay').text(dayjs().format('dddgd, MMMM D'));


