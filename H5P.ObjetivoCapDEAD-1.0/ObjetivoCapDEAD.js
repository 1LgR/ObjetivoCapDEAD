var H5P = H5P || {};
 
H5P.ObjetivoCapDEAD = (function ($) {
  /**
   * Constructor function.
   * 
   */
  function C(options, id) {
    this.options = $.extend(
      true,
      {},
      {
        conteudoTexto: "Este é um card de texto personalizado.",
      },
      options
    );
    this.id = id;
  }

  C.prototype.attach = function ($container) {
    // Container principal do card
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    // Badge superior com ícone e título
    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add("badge-container");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("text-icon-container");
    

    const icon = document.createElement("div");
    icon.classList.add("text-icon");


    const title = document.createElement("p");
    title.innerHTML = "Objetivo do Capítulo"; // Título do card

    // Conteúdo do card
    const textContent = document.createElement("p");
    textContent.classList.add("text-card-content");
    textContent.innerHTML = this.options.conteudotexto;

    // Montagem dos elementos
    textContainer.appendChild(badgeContainer);
    badgeContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);
    badgeContainer.appendChild(title);
    textContainer.appendChild(textContent);

    $container.append(textContainer);
  };

  return C;
})(H5P.jQuery);