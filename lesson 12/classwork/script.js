
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
            button.id = 'load-post';
            button.innerText = 'Show Post'

            for (const key in post) {
                let divKey = document.createElement('div');
                divKey.classList.add('key-container');

                divKey.innerText = `${key}:` + " " + `${post[key]}`;
                if (key === 'body') {
                    divKey.id = 'post-content';

                    button.addEventListener('click', () => {
                        divKey.classList.toggle('active');
                    })
                }

                divPost.append(divKey);
            }

            divPost.append(button);
            document.body.append(divPost);
        }
    })



