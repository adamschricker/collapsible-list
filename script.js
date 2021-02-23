"use strict";

/**********************/
/** Collapsible List **/
/**********************/
Array.from(document.getElementsByClassName("collapsible-list")).forEach(_ => {
  Array.from(_.getElementsByTagName("li")).forEach(_ => {
    _.getElementsByTagName("div")[0].addEventListener("click", (e) => {
      e.currentTarget.setAttribute("role", "button");
      e.currentTarget.parentElement.classList.toggle("open");
    });
  });
});
