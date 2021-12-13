let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

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
