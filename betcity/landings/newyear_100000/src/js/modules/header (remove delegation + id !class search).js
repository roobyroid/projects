import { isMobile } from "../lib/functions.js";

export function initHeader() {
  const header = document.querySelector(".header");
  if (header) {
    const headerIcon = document.querySelector("._menu-icon");
    const headerMenu = document.querySelector("._menu-header");
    const triggerSubmenu = document.querySelector("._open-sublist");
    const burgerAppearenceWidth = 992;



    // disable focus on menu items
    if (window.innerWidth < burgerAppearenceWidth) {
      headerMenu.querySelectorAll("a, button, input, textarea, select").forEach(link => {
        link.setAttribute("tabIndex", -1);
      });
    }



    // click deligation
    document.addEventListener("click", e => {
      // open / close menu
      if (window.innerWidth < burgerAppearenceWidth) {
        if (e.target.classList.contains("_menu-icon") || e.target.closest("._menu-link")) {
          toggleMenu();
        }
      }

      // show / hide sub-list
      if (window.innerWidth >= 992 && isMobile.any()) {
        if (e.target.closest("._open-sublist")) {
          triggerSubmenu.classList.toggle("_active-trigger-sublist");
        } else {
          triggerSubmenu.classList.remove("_active-trigger-sublist");
        }
      } else if (window.innerWidth < 992 && isMobile.any()) {
        console.log("< 992");
        const dropDownMenu = triggerSubmenu.querySelector(".item-header__dd");
        if (e.target.closest("._open-sublist")) {
          dropDownMenu.style.maxHeight = dropDownMenu.style.maxHeight ? null : `${dropDownMenu.scrollHeight}px`;
          triggerSubmenu.classList.toggle("_active-trigger-sublist");
        }
      }
    });



    // close menu on Escape
    header.addEventListener("keydown", function (e) {
      if (event.key === "Escape") {
        if (headerMenu.classList.contains("_active-menu-header")) {
          toggleMenu();
        }
      }
    });



    // add class to header on scroll
    const headerOffset = 60;
    function scrollHeader() {
      let scrolled = window.scrollY;
      if (scrolled > headerOffset && !header.classList.contains("_scroll")) {
        header.classList.add("_scroll");
      } else if (scrolled < headerOffset && header.classList.contains("_scroll")) {
        header.classList.remove("_scroll");
      }
    }
    scrollHeader();
    document.addEventListener("scroll", () => {
      scrollHeader();
    });



    // close / open menu
    function toggleMenu() {
      document.body.classList.toggle("_lock");
      headerIcon.classList.toggle("_active-menu-icon");
      headerMenu.classList.toggle("_active-menu-header");
      tabLoopControl();
      const menuItems = headerMenu.querySelectorAll("._anim-menu-item");
      menuItems.forEach((item, i) => {
        item.style.setProperty("--i", `${i}`);
        item.classList.toggle("_animated-item");
      });
    }



    // header keybord controll
    function tabLoopControl() {
      const focusableElements = headerMenu.querySelectorAll("a, button, input, textarea, select");
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      firstFocusableElement.focus();

      if (headerMenu.classList.contains("_active-menu-header")) {
        headerMenu.addEventListener("keydown", handleTabKey);
        focusableElements.forEach(link => {
          link.removeAttribute("tabIndex");
        });
      } else {
        headerMenu.removeEventListener("keydown", handleTabKey);
        focusableElements.forEach(link => {
          link.setAttribute("tabIndex", "-1");
        });
        headerIcon.focus();
      }

      function handleTabKey(e) {
        const isTabPressed = e.key === "Tab" || e.keyCode === 9;
        if (!isTabPressed) return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    }
  }
}
