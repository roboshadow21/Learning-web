// Создаем переменную, в нее добавляем поиск элемента по ID
let toggleThemeBtn = document.getElementById('toggle-theme-btn')
// Пишем обработку события
//toggleThemeBtn.addEventListener('click', function(){
//  document.body.classList.add('dark')
//})
toggleThemeBtn.addEventListener('click', function() {
document.body.classList.toggle('dark');
})
