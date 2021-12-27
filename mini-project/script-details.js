
let url = new URL(location.href);
let userId = url.searchParams.get('userId');

document.addEventListener('load', showUserDetail());

async function getUserDetail() {
    try {

        const config = {
            headers: {
                Accept: 'application/json'
            }
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId, config);
        const user = await response.json();

        return user;

    } catch (e) {
        console.error(e);
    }

}

async function showUserDetail() {
    const user = await getUserDetail();
    let userWrapper = document.createElement('div');
    userWrapper.classList.add('user-wrapper');

    let postsLink = document.createElement('button');
    postsLink.className = 'posts-btn';
    postsLink.innerText = 'Show Posts';

    getAllInnerObject(user, userWrapper);

    userWrapper.append(postsLink);
    document.body.append(userWrapper);

    postsLink.addEventListener('click', async(e) => {

        const posts = await getPosts();
        let postsContainer = document.createElement('div');
        postsContainer.className = 'posts-container';

        posts.forEach( post => {
            let postContainer = document.createElement('div');
            postContainer.className = 'post-main';

            let postDetailLink = document.createElement('a');
            postDetailLink.href = 'post-details.html?postId=' + post.id + '&userId=' + post.userId;
            postDetailLink.innerText = 'Show Post Detail';
             
            for (const key in post) {

               if( key === 'id' || key === 'title'){
                   let keyContainer = document.createElement('div');

                   keyContainer.innerHTML = `<strong>${key}:</strong> ${post[key]}`;
                   postContainer.append(keyContainer);
               }
            
            }
            postContainer.append(postDetailLink);
            postsContainer.append(postContainer);
        });

        document.body.append(postsContainer);
        // postsLink.disabled = true;

        postsLink.setAttribute("disabled", "");

    })

}

function getAllInnerObject(user, userWrapper) {

    for (const key in user) {
        let keyWrapper = document.createElement('div');
        keyWrapper.innerHTML = `<strong>${key}:</strong>`;
        keyWrapper.classList.add('detail-container');

        if (typeof user[key] === 'object') {
            getAllInnerObject(user[key], keyWrapper);
        } else {

            keyWrapper.innerHTML = `<strong>${key}:</strong> ${user[key]}`;

        }
        userWrapper.append(keyWrapper);
    }

}

async function getPosts() {
    try {
        const config = {

            headers: {
                Accept: 'application/json'
            }
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts', config);
        const posts = response.json();

        return posts;

    } catch (e) {
        console.error(e);
    }
}



