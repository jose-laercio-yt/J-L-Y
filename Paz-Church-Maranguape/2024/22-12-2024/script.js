// Script para ocultar o botão "Abrir em nova janela" do Google Drive
document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector(".google-drive-video");

  iframe.onload = function () {
    // Aguarda o carregamento do iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Remove elementos adicionais dentro do iframe (se possível)
    setTimeout(() => {
      const button = iframeDoc.querySelector(
        'div[aria-label="Abrir em nova janela"]'
      );
      if (button) {
        button.style.display = "none";
      }
    }, 1000);
  };
});

// Script do Disqus para comentários
(function () {
  var d = document,
    s = d.createElement("script");
  s.src = "https://paz-church-maranguape.disqus.com/embed.js"; // Substitua pelo seu shortname do Disqus
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
