let progress = document.getElementById('progressBar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;

  /*A a propriedade do css recebe um valor em porcetagem */

  progress.style.height = progressHeight + '%';
};
