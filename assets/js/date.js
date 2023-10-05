let day = document.getElementById("1");
let hour = document.getElementById("2");
let minute = document.getElementById("3");
let second = document.getElementById("4");
let start = new Date("June 25, 2023 01:14:59");

function dayTitle(number) {
    if (number > 10 && [11, 12, 13, 14].includes(number%100)) return ' дней';
    last_num = number%10;
    if (last_num == 1) return ' день';
    if ([2,3,4].includes(last_num)) return ' дня';
    if ([5,6,7,8,9, 0].includes(last_num)) return ' дней';
}

function formatDate(difference) {
    //Arrange the difference of date in days, hours, minutes, and seconds format
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    //output.innerHTML += days + " дня " + hours + " часа " + minutes + " минут " + seconds + " секунд.";
    day.innerHTML = days + dayTitle(days)

    if ((hours%10 == 1)&&(hours != 11)) {
        hour.innerHTML = hours + " час"
    } else {
        hour.innerHTML = hours + " часа"
    }

    if ((minutes%10 == 1)&&(minutes != 11)) {
        minute.innerHTML = minutes + " минута"
    } else {
        minute.innerHTML = minutes + " минуты"
    }

    if ((seconds%10 == 1)&&(seconds != 11)) {
        second.innerHTML = seconds + " секунда"
    } else {
        second.innerHTML = seconds + " секунд"
    }


    }

function start123() {
    let end = new Date();
    let difference = end - start;
    formatDate(difference);
    setTimeout(start123, 1000);
}

start123();

