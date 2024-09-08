// Функция для обновления текущего времени и даты в баннере с регионами
function updateDateTime() {
    const now = new Date();

    // Опции для форматирования времени (убрали timeZoneName для удаления GMT)
    const timeOptions = { hour: '2-digit', minute: '2-digit' };

    // Опции для форматирования даты
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };

    // Массив с информацией о часовых поясах и рабочих периодах для разных регионов
    const regions = [
        { id: 'utc', tz: 'UTC', period: '' },
        { id: 'asia', tz: 'Asia/Tokyo', period: '09-15' },
        { id: 'usa', tz: 'America/New_York', period: '08-16' },
        { id: 'europe', tz: 'Europe/Berlin', period: '08-16' },
        { id: 'uae', tz: 'Asia/Dubai', period: '09-17' },
        { id: 'singapore', tz: 'Asia/Singapore', period: '09-18' },
        { id: 'samerica', tz: 'America/Sao_Paulo', period: '09-17' },
        { id: 'safrica', tz: 'Africa/Johannesburg', period: '09-17' },
    ];

    regions.forEach(region => {
        // Форматирование времени и даты для каждого региона
        const regionTime = now.toLocaleTimeString('en-GB', { ...timeOptions, timeZone: region.tz });
        const regionDate = now.toLocaleDateString('en-GB', { ...dateOptions, timeZone: region.tz });

        // Получаем элемент ячейки баннера
        const box = document.getElementById(region.id);

        // Обновляем содержимое ячейки, добавляя дату и время
        box.innerHTML = `
            <div class="time">${regionTime}</div>
            <div class="date">${regionDate.toUpperCase()}</div>
        `;

        // Проверка активного периода
        if (region.period && isActiveHour(region.tz, region.period)) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });

    // Функция для проверки, входит ли текущий час в рабочий период региона
    function isActiveHour(timeZone, period) {
        const [startHour, endHour] = period.split('-').map(Number);
        const regionTime = new Date().toLocaleTimeString('en-GB', { ...timeOptions, timeZone });
        const regionHour = parseInt(regionTime.split(':')[0], 10);

        // Если рабочий период перекрывает полуночный рубеж
        if (startHour > endHour) {
            return regionHour >= startHour || regionHour < endHour;
        }

        return regionHour >= startHour && regionHour < endHour;
    }

    // Определяем режим дня или ночи и применяем его
    now.getHours() >= 7 && now.getHours() < 19 ? setDayMode() : setDarkMode();
}

// Обновляем время на странице каждую минуту
setInterval(updateDateTime, 60000); // Обновление каждую минуту
updateDateTime(); // Первоначальное обновление времени при загрузке страницы