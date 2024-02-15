const posts = [
    {
        "id": 0,
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
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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

const containerElement = document.querySelector('#container');

// for each object in the array
posts.forEach((post) => {
    // creates post
    const newPost = document.createElement('div');
    newPost.classList.add('post');

    newPost.innerHTML = `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post['author']['image']}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post['author']['name']}</div>
                <div class="post-meta__time">${post['created']}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post['content']}</div>
    <div class="post__image">
        <img src="${post['media']}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${post['id']}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${post['id']}" class="js-likes-counter">${post['likes']}</b> persone
            </div>
        </div>
    </div>
    `;

    // add post to page
    containerElement.append(newPost);
});

console.log(document.querySelectorAll('.js-likes-counter'))


const likeButtonList = document.querySelectorAll('.like-button');
const likeCounterList = document.querySelectorAll('.js-likes-counter');

likeButtonList.forEach(button =>{
    button.addEventListener('click', ()=>{

        // number that matches a button with the index of its post
        const buttonId = posts[button.getAttribute('data-postid')];
        
        // checks if you've like the post before
        if(!button.classList.contains('like-button--liked')){
            // if you are adding a like it increases the likes in the object array and changes the html to reflect it
            buttonId['likes']++;
            likeCounterList[button.getAttribute('data-postid')].innerHTML = buttonId['likes']
        } else{
            // if you are removing a like it decreses the likes in the object array and changes the html to reflect it
            buttonId['likes']--;
            likeCounterList[button.getAttribute('data-postid')].innerHTML = buttonId['likes']
        }

        // toogles the liked class onto the button
        button.classList.toggle('like-button--liked');
    })
})

console.log(document.querySelectorAll('.like-button'))
