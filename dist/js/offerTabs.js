// const tabs = document.querySelectorAll(".beer__details");
// const contents = document.querySelectorAll(".menu__wrapper");

// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         removeActiveTab();
//         tab.classList.add("active");
//         const activeContent = document.querySelector(`#${tab.id}-content`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     });
// });
// function removeActiveTab() {
//   tabs.forEach((tab) => {
//     tab.classList.remove("active");
//   });
// }
// function removeActiveContent() {
//   contents.forEach((content) => {
//     content.classList.remove("active");
//   });
// }


 
      const itemNav = document.querySelectorAll(".drinksType li");
      const drinkGroup = document.querySelectorAll(".drinkGroup");
      itemNav.forEach((menuList) => {
        menuList.addEventListener("click", () => {
          removeActiveMenu();
          menuList.classList.add("active");
          const drinkGroupContent = document.querySelector(
            `#${menuList.id}-content`
          );
          removeContentActive();
          drinkGroupContent.classList.add("active");
        });
      });


      function removeActiveMenu() {
        itemNav.forEach((menu) => {
          menu.classList.remove("active");
        });
      }


      function removeContentActive() {
        drinkGroup.forEach((content) => {
          content.classList.remove("active");
        });
      }
