// function toggleLinks(id) {
//   const links = document.getElementById(id);
//   links.style.display = links.style.display === "block" ? "none" : "block";
// }

//--------------------------v1-----------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   // Найти все элементы с классом "folder"
//   const folders = document.querySelectorAll(".folder");

//   folders.forEach((folder) => {
//     // Получаем ID целевого списка ссылок из data-id
//     const targetId = folder.getAttribute("data-id");

//     if (!targetId) {
//       console.warn("У папки нет атрибута data-id");
//       return;
//     }

//     // Добавляем обработчик клика
//     folder.addEventListener("click", function () {
//       const links = document.getElementById(targetId);
//       if (!links) {
//         console.warn(`Элемент с id="${targetId}" не найден`);
//         return;
//       }
//       links.style.display = links.style.display === "block" ? "none" : "block";
//     });
//   });
// });

// ------------------------------

// ---------------------------- v2 ---------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   const folders = document.querySelectorAll(".folder");

//   folders.forEach((folder) => {
//     const targetId = folder.getAttribute("data-id");

//     if (!targetId) {
//       console.warn("У папки нет атрибута data-id");
//       return;
//     }

//     folder.addEventListener("click", function (event) {
//       // Проверяем, был ли клик по ссылке
//       if (
//         event.target.tagName.toLowerCase() === "a" ||
//         event.target.tagName.toLowerCase() === "li"
//       ) {
//         return; // не меняем состояние папки
//       }

//       const links = document.getElementById(targetId);
//       if (!links) {
//         console.warn(`Элемент с id="${targetId}" не найден`);
//         return;
//       }

//       links.style.display = links.style.display === "block" ? "none" : "block";
//     });
//   });
// });
// -------------------------------------------------------------------

// --------------v3 ------------------
// опмтимизирует работу - обработчик событий вешается только на body, а не каждую папку отдельно

document.addEventListener("DOMContentLoaded", function () {
  // Контейнер всех папок (можешь указать конкретный div, если есть)
  const container = document.body;

  container.addEventListener("click", function (event) {
    // Проверяем, был ли клик внутри ссылки
    if (event.target.closest("a")) {
      return;
    }

    // Ищем ближайшего родителя с классом "folder"
    const folder = event.target.closest(".folder");

    // Если клик не по папке — выходим
    if (!folder) {
      return;
    }

    // Получаем ID целевого списка
    const targetId = folder.getAttribute("data-id");
    if (!targetId) {
      console.warn("У папки нет атрибута data-id");
      return;
    }

    // Находим список
    const links = document.getElementById(targetId);
    if (!links) {
      console.warn(`Элемент с id="${targetId}" не найден`);
      return;
    }

    // Переключаем видимость
    links.style.display = links.style.display === "block" ? "none" : "block";
  });
});
//---------------------------------
