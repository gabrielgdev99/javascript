//FORMA 1
// function getWeekDayText (weekDay) {
//     let WeekDayText

//     switch(weekDay) {
//     case 0:
//         WeekDayText = 'Domingo'
//         return WeekDayText
//     case 1:
//         WeekDayText = 'Segunda-feira'
//         return WeekDayText
//     case 2:
//         WeekDayText = 'Terça-feira'
//         return WeekDayText
//     case 3:
//         WeekDayText = 'Quarta-feira'
//         return WeekDayText
//     case 4:
//         WeekDayText = 'Quinta-feira'
//         return WeekDayText
//     case 5:
//         WeekDayText = 'Sexta-feira'
//         return WeekDayText
//     case 6:
//         WeekDayText = 'Sábado'
//         return WeekDayText
//     default:
//         WeekDayText = ''
//     }
// }

//FORMA 2
function getWeekDayText (weekDay) {
    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
    return weekDays[weekDay]
}

// FORMA 1
// function getMonthText (month) {
//     let monthText

//     switch(month) {
//     case 0:
//         monthText = 'Janeiro'
//         return monthText
//     case 1:
//         monthText = 'Fevereiro'
//         return monthText
//     case 2:
//         monthText = 'Março'
//         return monthText
//     case 3:
//         monthText = 'Abril'
//         return monthText
//     case 4:
//         monthText = 'Maio'
//         return monthText
//     case 5:
//         monthText = 'Junho'
//         return monthText
//     case 6:
//         monthText = 'Julho'
//         return monthText
//     case 7:
//         monthText = 'Agosto'
//         return monthText
//     case 8:
//         monthText = 'Setembro'
//         return monthText
//     case 9:
//         monthText = 'Outubro'
//         return monthText
//     case 10:
//         monthText = 'Novembro'
//         return monthText
//     case 11:
//         monthText = 'Dezembro'
//         return monthText
//     default:
//         monthText = ''
//     }
// }


//FORMA 2
function getMonthText (month) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return months[month]
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function fullDate (data) {
const weekDay = date.getDay()
const WeekDayText = getWeekDayText(weekDay)
const month = date.getMonth()
const monthText = getMonthText(month)
    return (
    `${WeekDayText}, ${date.getDate()} de ${monthText} de ${date.getFullYear()} ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`
    )
}

const date = new Date()
const text = document.querySelector('.text')
text.innerHTML = fullDate(date)
console.log(date)


//USANDO DOCUMENTACAO
// const text = document.querySelector('.text')
// const date = new Date()
// text.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})
