// Функция для включения дневного режима (светлая тема)
function setDayMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"; // Цвет текста по умолчанию для всей страницы
    
    document.getElementById("time-banner").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    
    const timeBoxes = document.querySelectorAll(".time-box");
    timeBoxes.forEach(box => {
        box.style.backgroundColor = "#f2f2f2"; // Цвет заднего фона ячеек баннера
        box.style.color = "black"; // Цвет текста в ячейках баннера
    });
}

// Функция для включения ночного режима (темная тема)
function setDarkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#B0C4DE"; // Цвет текста по умолчанию для всей страницы
    
    document.getElementById("time-banner").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    
    const timeBoxes = document.querySelectorAll(".time-box");
    timeBoxes.forEach(box => {
        box.style.backgroundColor = "#333"; // Цвет заднего фона ячеек баннера
        box.style.color = "#B0C4DE"; // Цвет текста в ячейках баннера
    });
}