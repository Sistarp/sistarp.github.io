document.addEventListener("DOMContentLoaded", function () {
  const interrogacoes = document.querySelectorAll(".beneficio-label");

  interrogacoes.forEach((interrogacao) => {
    interrogacao.addEventListener("click", () => {
      const explanation = interrogacao
        .closest("tr")
        .nextElementSibling.querySelector(".explanation");
      explanation.classList.toggle("visible");
    });
  });
});
