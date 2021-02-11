$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
var test = 0;
$(".filme-principal").mouseover(
    function() {        
        $('.filme-principal #video')[0].play(); // Iniciar visualização do video
        $('.filme-principal').css({
            height: '80vh',
            transition: '1s ease-in-out'
        }); 
        $('.filme-principal .titulo').css({
            'margin-top': '40%',
            opacity: '0',
            transition: '1s ease'
        });  
        $('.filme-principal .descricao').css({
            opacity: '0',
            transition: '1s ease'
        });  
        $('.filme-principal .botao').css({
            opacity: '0',
            transition: '1s ease'
        });  
    }

);
// $(".filme-principal").mouseout(
//     function() {
//         var teste = $('.filme-principal #video')[0].currentTime;
//         $('.filme-principal #video')[0].pause(); // Iniciar visualização do video
//         $('.filme-principal #video')[0].load();
//     }
// );