// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        for (const user of users) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user-container');

            let postBtn = document.createElement('button');
            postBtn.className = 'load-post';
            postBtn.innerText = 'Show Post'

            for (const key in user) {
                if (key === 'address' || key === 'company') continue;
                let propertyContainer = document.createElement('div');

                propertyContainer.innerHTML = `<b>${key}:</b>` + ' ' + `${user[key]}`;
                userContainer.append(propertyContainer);
            }

            let userId = user['id'];

            postBtn.addEventListener('click', () => {

                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(posts => posts.json())
                    .then(posts => {
                        for (const post of posts) {
                            let postContainer = document.createElement('div');
                            postContainer.classList.add('post-container');
                            
                            let btnPostContent = document.createElement('button');
                            btnPostContent.innerText = 'Show Content';

                            for (const key in post) {
                                if (key === 'userId' || key === 'id') continue;

                                let propertyKeyContainer = document.createElement('div');
                                propertyKeyContainer.innerHTML = `<b>${key}:</b>` + ' ' + `${post[key]}`;
                                postContainer.append(propertyKeyContainer);
                            }
                            let postId = post['id'];
                           

                            btnPostContent.addEventListener('click', () => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                                     .then(comments => comments.json())
                                     .then(comments => { 
                                         let commentContainer = document.createElement('div');
                                        commentContainer.classList.add('comment-container');
                                        for (const comment of comments) {
                                            commentContainer.innerHTML += `<b>name</b>: <mark>${comment['name']}</mark> </br> 
                                         <b>email</b>: ${comment['email']}</br></br> <b>body</b>: ${comment['body']}</br></br>`;
                                        }
                                         postContainer.insertBefore(commentContainer, btnPostContent);
                                    })
                                    btnPostContent.disabled = true;
                            });

                            postContainer.append(btnPostContent);
                            userContainer.insertBefore(postContainer, postBtn);

                        }
                        postBtn.disabled = true;
                    })
            });
            userContainer.append(postBtn);
            document.body.append(userContainer);

        }
    })

