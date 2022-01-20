document.getElementById('botao').addEventListener('click', pesquisarFilmes);

function pesquisarFilmes(e) {
    var search = document.getElementById('pesquisar').value;
    buscarFilmes(search);
}

const API_KEY = "ef466735de9c425a2c0d3377d06c35d7";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false&query=`;

const h3 = document.querySelector(".titulo");
const p = document.querySelector(".resumo");
const poster = document.querySelector("#poster");

function buscarFilmes(search) {
    fetch(API_URL + search)
        .then((resposta) => resposta.json())
        .then((resposta) => {
            const titulo = resposta.results[0].title;
            const resumo = resposta.results[0].overview;
            const nomeDaImagem = resposta.results[0].backdrop_path;

            poster.src = "https://images.tmdb.org/t/p/w500" + nomeDaImagem;

            h3.innerHTML = titulo;
            p.innerHTML = resumo;
        })
        .catch((error) => {
            console.log(error);
        });
}