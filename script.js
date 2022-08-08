const box = document.querySelectorAll('.box')

// box.addEventListener('click', () => {
//     if(box.style.background == 'white') {
//         box.style.background = 'blue'
//     }
// })

box.forEach(el => {
    el.addEventListener('click', () => {
        // el.style.background = 'red'
        if (el.style.background == 'blue') {
            el.style = `
            background: red;
            border-radius: 50%;
            transition: .5s
            `
        } else {
            el.style = `
            background: blue;
            border-radius: 0;
            transition: .5s
            `
        }
    })
});