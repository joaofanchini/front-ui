function toggle() {
    console.log('log2');
    let trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');

    let video = document.querySelector(video);
    video.currentTime = 0;
    video.pause();

    /* Adiciona seguindo a hierarquia da visualização que se encontra: No CSS vai ser '.trailer.active' */
    /**
     * Vale analisar que o toogle, ele funciona como um toggle msm, de modo que se vc ativar a função novamente, ele apenas desfaz o que fora feito 
     * 
     * Logo ele insere a classe e retira ela dps
     * 
     * Quando o toggle insere e retira as classes, ele também configura as definições de video. Toda vez que ele ativar vai renovar o tempo para o início
     */
}