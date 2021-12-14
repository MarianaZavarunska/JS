
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {

        for (const post of response) {
            let divPost = document.createElement('div');
            divPost.classList.add('post-container');
            let button = document.createElement('button');
            button.className = 'load-post';
            button.innerText = 'Show Post'

            for (const key in post) {
                if (key === 'body') continue;
                let divKey = document.createElement('div');
                divKey.classList.add('key-container');
                if (key === 'id') {
                    divKey.setAttribute('user-id', post[key]);
                }
                divKey.innerText = `${key}:` + " " + `${post[key]}`;
                // if (key === 'body') {
                //     divKey.id = 'post-content';

                //     button.addEventListener('click', () => {
                //         divKey.classList.toggle('active');
                //     })
                // }

                divPost.append(divKey);
            }

            divPost.append(button);
            document.body.append(divPost);
        }

        
        const btns = document.getElementsByClassName('load-post');

        for (const btn of btns) {
            btn.addEventListener('click', () => {

                if(btn.parentElement.childElementCount === 5) return;

                let number = btn.parentElement.querySelector('div[user-id]').getAttribute('user-id');
                fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
                    .then(response => response.json())
                    .then(response => {

                        let div = document.createElement('div')
                        div.classList.add('post-content');

                        div.innerText = `body: ${response['body']}`
                        btn.parentElement.insertBefore(div, btn);
                    })
            })
        }

    })


