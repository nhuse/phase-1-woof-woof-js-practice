document.addEventListener('DOMContentLoaded', () => {
    parsePups();
})

function parsePups() {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(json => json.forEach(addPupsToBar))
}

function addPupsToBar(pup) {
    let span = document.createElement('span')
    span.textContent = pup.name;
    span.addEventListener('click', () => {
        document.querySelector('#dog-info').innerHTML = '';
        let img = document.createElement('img');
        let h2Name = document.createElement('h2');
        let goodDog = document.createElement('button');

        img.src = pup.image;
        h2Name.textContent = pup.name;
        if(pup.isGoodDog){
            goodDog.textContent = 'Good Dog!';
        } else{
            goodDog.textContent = 'Bad Dog!'
        }

        document.querySelector('#dog-info').append(img, h2Name, goodDog);
        goodDog.addEventListener('click', () => {
            if(goodDog.textContent === 'Bad Dog!') {
                goodDog.textContent = 'Good Dog!';
            } else {
                goodDog.textContent = 'Bad Dog!';
            }
        })
    })

    document.querySelector('#dog-bar').append(span);
}