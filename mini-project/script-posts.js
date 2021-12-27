document.addEventListener('load', showPostDetail());



async function getPost(){

    let url = new URL(location.href);
    let postId = url.searchParams.get('id');
     
    const config ={
        headers:{
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId, config);
    const post = await response.json();

    return post;
}

async function getComments(){

    let url = new URL(location.href);
    let postId = url.searchParams.get('id');
   
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments', config);
    const comments = await response.json();

    return comments;
}

async function showPostDetail(){
    const post = await getPost();
    const comments = await getComments();


    let postContainer = document.createElement('div');
    postContainer.className = 'post-content';

    for (const key in post) {

        let postContent = document.createElement('div');
         postContent.innerHTML= `<strong>${key}:</strong> ${post[key]}`;
        postContainer.append(postContent); 
    }

    let title = document.createElement('h2');
    title.innerText = 'Comments';
    title.className = 'comments-title';

    let commentsContainer = document.createElement('div');
    commentsContainer.className = 'comments-container';


    for (const comment of comments) {
        let commentContainer = document.createElement('div');
        commentContainer.className = 'comment-container';

        for (const key in comment) {

           let commentContent = document.createElement('div');
           commentContent.innerHTML = `<strong>${key}:</strong> ${comment[key]}`;
           commentContainer.append(commentContent);
        }

        commentsContainer.append(commentContainer);
    }


    document.body.append(postContainer,title,commentsContainer);
}