// Clock start

const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    numberHours = document.querySelector('.hours'),
    numberMinutes = document.querySelector('.minutes')

const clock = () => {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg);`
    min.style = `transform: rotate(${minutes}deg);`
    hour.style = `transform: rotate(${hours}deg);`
    // Get number minutes
    numberMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    // Get number hours
    numberHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()

    setTimeout(() => clock(), 1000);
}
clock()


const btns = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

btns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault() 
        removeActiveClass(btns, 'active')
        removeActiveClass(tabs, 'active')
        btn.classList.add('active')
        tabs[i].classList.add('active')
    })
});

const removeActiveClass = (array, className) => {
    array.forEach(el => {
        el.classList.remove(className)
    })
}

// Stopwatch start

const btn = document.querySelector('.stopwatch__btn'),
    secondsWatch = document.querySelector('.stopwatch__seconds'),
    minutesWatch = document.querySelector('.stopwatch__minutes'),
    hoursWatch = document.querySelector('.stopwatch__hours'),
    watchInfo = document.querySelector('.tabsLink__span')


btn.addEventListener('click', () => {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        watchInfo.classList.add('active')
        let i = 0
        setTimeout(() => stopWatch(btn, i), 1000)
    } else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'reset'
        watchInfo.classList.remove('active')
        watchInfo.classList.add('active_clear')
    } else {
        btn.innerHTML = 'start'
        secondsWatch.innerHTML = 0
        minutesWatch.innerHTML = 0
        hoursWatch.innerHTML = 0
        watchInfo.classList.remove('active_clear')
    }
})


function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 60) {
            i = 0
            secondsWatch.innerHTML = i
            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0
                hoursWatch.innerHTML++
            } else {
                minutesWatch.innerHTML++
            }
        } else {
            i++
            secondsWatch.innerHTML = i
        }
        setTimeout(() => stopWatch(el, i), 1000);
    }
}