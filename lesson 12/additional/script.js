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

                propertyContainer.innerText = `${key}:` + ' ' + `${user[key]}`;
                userContainer.append(propertyContainer);
            }

            let number = user['id'];
            postBtn.addEventListener('click', () => {

                fetch(`https://jsonplaceholder.typicode.com/users/${number}/posts`)
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
                                propertyKeyContainer.innerText = `${key}:` + ' ' + `${post[key]}`;
                                postContainer.append(propertyKeyContainer);
                            }

                            // btnPostContent.addEventListener('click', () => {
                            //     fetch(`https://jsonplaceholder.typicode.com/posts/${number}/comments`)
                            //          .then(response => response.json())
                            //          .then(response => {
                            //              let postContent = document.createElement('div');
                                        
                            //             //  postContent.innerText = response[number]['body']

                            //              postContainer.insertBefore(postContent, btnPostContent);
                            //         }
                            //     })
                            // })

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

