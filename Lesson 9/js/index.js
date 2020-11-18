const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(URL)
.then(function(response) {
    return response.json();
})
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
    }

    //Preston
    let preston = document.createElement('section');
    let preston_text = document.createElement('div');
    let h1_p = document.createElement('h1');
    let motto_p = document.createElement('h3');