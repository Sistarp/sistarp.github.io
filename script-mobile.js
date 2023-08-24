const cardHeaders = document.querySelectorAll(".card-header");

cardHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    if (content.style.display === "none") {
      content.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
    } else {
      content.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
