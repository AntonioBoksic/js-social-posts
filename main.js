
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const elContainer = document.getElementById("container") 

console.log(elContainer)

// forEach non mi funziona quando devo selezionare i 6 bottoni, me ne seleziona solo uno
/*
posts.forEach(element => {
    const elPost = `<div class="post">

    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${element.author.image} alt=${element.author.name}>                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>

    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    
    <div class="post__image">
        <img src=${element.media} alt="">
    </div>

    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" id="likeButton" data-postid="${element.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div> 

    </div>`;

    //aggiungo il template literal elPost nel container
    elContainer.innerHTML += elPost

    console.log(element.likes)
    

    //identifico il bottone in HTML 
    const elLikeButton = document.getElementById("likeButton")

    console.log(elLikeButton)

    elLikeButton.addEventListener("click",
        function() {
            elLikeButton.classList.add("liked");
            element.likes = 50 ;
            //return element.likes
            console.log(element.likes)
            
        }
    )
 
});
*/

//provo con for normale



for (i = 0 ; i < posts.length; i++) {
    const elPost = `<div class="post">

    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${posts[i].author.image} alt=${posts[i].author.name}>                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts[i].author.name}</div>
                <div class="post-meta__time">${posts[i].created}</div>
            </div>                    
        </div>
    </div>

    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    
    <div class="post__image">
        <img src=${posts[i].media} alt="">
    </div>

    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button"  id="likeButton" data-postid="${posts[i].id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
            </div>
        </div> 
    </div> 

    </div>`;

    //aggiungo il template literal elPost nel container
    elContainer.innerHTML += elPost


    //
    /*
    L' ERRORE è DA QUI IN POI USANDO GETELEMENTBYID/BYCLASS(QUERYSELECTOR: VADO SEMPRE A PRENDERE IL PRIMO LIKE BUTTON ( A PARTE CHE ID è SBAGLIATO A PRESCINDERE DATO CHE DOVREBBE ESSERE UNIVOCO, QUINDI NON POSSONO ESSERCENE 5),
    ANCHE CON QUERY SELECTOR ALL SUCCEDE CHE...(commento da finire intanto finisco esercizio)
    */
    //identifico il bottone in HTML 

/*
    const elLikeButton = document.querySelector("#likeButton")

    
    console.log(elLikeButton)

    elLikeButton.addEventListener("click",
        function() {
            elLikeButton.classList.add("liked");
            posts[i].likes = 50 ;
            console.log(posts[i])

        }
    )
                    */

}

// mi creo una nodelist con i bottoni dentro

const buttons = document.querySelectorAll(".like-button")

console.log(buttons)

// ad ogni bottone aggiungo una classe
buttons.forEach(bottone => {
    bottone.addEventListener("click",
    function() {
        bottone.classList.add("like-button--liked");
        //posts[i].likes = 50 ;
        //console.log(posts[i])

    }
)
});

// ora mi serve cambiare il contenuto di  class="js-likes-counter", quindi il suo innerHTML
//perchè semplicemente aggiornando i valori degli oggetti questi non vengono trasferiti nel template literal, questo è uno dei motivi per cui andremo ad utilizzare view.js come framework 


//mi creo una nodelist con i counter dentro
const counters = document.querySelectorAll(".js-likes-counter")

console.log(counters)





















//PROVE PER VEDERE SE SBAGLIO QUALCOSA A LIVELLO DI OGGETTO O ARRAY DI OGGETTI (PARE DI NO)
// // OGGETTO SINGOLO
// const palla = {
//     "colore": "rosso",
//     "diametro": 50
// }

// //cambio proprietà
// palla.colore = "verde"
// //aggiungo proprietà
// palla.edition = "special"
// //cambio proprietà
// palla.diametro = palla.diametro+1
// //console.log(palla)

// // ARRAY DI OGGETTI




/*

const arrPalle = [
    {
    "colore": "rosso",
    "diametro": 50

    },

    {
        "colore": "blu",
        "diametro": 22

    }
]

console.log(arrPalle)

arrPalle.forEach(element => {
    element.diametro += 1
    return element.diametro
});

console.log(arrPalle)
*/