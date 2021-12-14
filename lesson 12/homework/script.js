
//===========================Task 1===========================

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        for (const user of response) {
            let div = document.createElement('div');
            div.classList.add('post');

            for (const key in user) {
                let innerDiv = document.createElement('div');
                innerDiv.classList.add('property');

                let spanKey = document.createElement('span');
                spanKey.innerText = `${key}:`;
                let spanValue = document.createElement('span');
                spanValue.innerText = user[key];

                innerDiv.append(spanKey, spanValue);
                div.appendChild(innerDiv);
            }

            document.body.append(div);
        }
    })

//===========================Task 2===========================

//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

async function getCommentsDate() {

    const config = {
        headers: {
            Accept: 'application/json'
        },
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/comments',config);
    const comments = await response.json();
    showComments(comments);
}

 getCommentsDate();

function showComments(comments) {

    for (const comment of comments) {
        let div = document.createElement('div');
        div.classList.add('comment-container');

        for (const key in comment) {
            let innerDiv = document.createElement('div');
            innerDiv.classList.add('property-comment');

            let spanKey = document.createElement('span');
            spanKey.innerText = `${key}:`;
            let spanValue = document.createElement('span');
            spanValue.innerText = comment[key];
            if(comment['postId']=== 1){
                innerDiv.classList.add('line-container');
            } 
            innerDiv.append(spanKey, spanValue);
            div.appendChild(innerDiv);
        }
        document.body.appendChild(div);
    }
}
