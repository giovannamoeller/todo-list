const getDate = () => {
    const date = new Date();
    let weekDay, month;
    const day = date.getDate();
    const year = date.getFullYear();

    switch(date.getDay()) {
        case 1: weekDay = 'Monday'; break;
        case 2: weekDay = 'Tuesday'; break;
        case 3: weekDay = 'Wednesday'; break;
        case 4: weekDay = 'Thursday'; break;
        case 5: weekDay = 'Friday'; break;
        case 6: weekDay = 'Saturday'; break;
        case 7: weekDay = 'Sunday'; break;
    }

    switch(date.getMonth() + 1) {
        case 1: month = 'jan'; break;
        case 2: month = 'fev'; break;
        case 3: month = 'mar'; break;
        case 4: month = 'apr'; break;
        case 5: month = 'may'; break;
        case 6: month = 'jun'; break;
        case 7: month = 'jul'; break;
        case 8: month = 'aug'; break;
        case 9: month = 'sep'; break;
        case 10: month = 'oct'; break;
        case 11: month = 'nov'; break;
        case 12: month = 'dec'; break;
    }

    const fullDate = `${weekDay}, ${day} ${month} ${year}.`;

    return fullDate;

}

export default getDate;