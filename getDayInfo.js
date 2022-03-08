function getDayInfo(date) {
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const notStrDate = new Date(`${date.split('.')[2]}-${date.split('.')[1]}-${date.split('.')[0]}`);
    const firstDayOfMonth = new Date(notStrDate.getFullYear(), notStrDate.getMonth(), 1);
    let weekNumber = Math.ceil((notStrDate.getDate() - firstDayOfMonth.getDate() + 1) / 7)
    console.log(firstDayOfMonth.getDay())
    console.log(notStrDate.getDay())
    if (firstDayOfMonth.getDay() > notStrDate.getDay()) {
        weekNumber++
    }
    return `${days[notStrDate.getDay()]}, ${weekNumber} неделя ${months[notStrDate.getMonth()]} ${notStrDate.getFullYear()} года`
}

console.log(getDayInfo("1.02.2022"))






