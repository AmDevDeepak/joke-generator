

const getJokes = async () => {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let res = await fetch(URL);
    let jsonRes = await res.json();
    const jokeDisp = document.getElementsByClassName(".joke");
    jokeDisp.textContent = `<h1>${jsonRes}</h1>`;
    console.log(jsonRes);
}

function jokesGenerator() {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        getJokes();
    })
}
