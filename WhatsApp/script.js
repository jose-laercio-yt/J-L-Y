function gerarLink() {
  var ddd = document.getElementById("ddd").value;
  var numero = document.getElementById("numero").value;

  if (ddd && numero) {
    var link = `https://wa.me/55${ddd}${numero}`;
    var linkHTML = `<a href="${link}" target="_blank">Clique aqui para Envie Mensagem no Contato no WhatsApp</a>`;
    document.getElementById("linkWhatsApp").innerHTML = linkHTML;
  } else {
    alert("Por favor, preencha o DDD e o número.");
  }
}
