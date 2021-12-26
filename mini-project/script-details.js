document.addEventListener('load', showUserDetail());

async function getUserDetail() {
    let url = new URL(location.href);
    url = url.searchParams.get('id');

    try {

        const config = {
            headers: {
                Accept: 'application/json'
            }
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + url, config);
        const user = await response.json();

        return user;

    } catch (e) {
        console.error(e);
    }

}

async function showUserDetail() {
    const user = await getUserDetail();
    let userWrapper = document.createElement('div');

    getAllInnerObject(user, userWrapper, '<span style="margin-right:15px;"></span>');

    document.body.append(userWrapper);
}

function getAllInnerObject(user, userWrapper, space) {

    for (const key in user) {
        let keyWrapper = document.createElement('div');
        keyWrapper.innerHTML = space + `${key}:`;

        if (typeof user[key] === 'object') {
            getAllInnerObject(user[key], keyWrapper, space + space);
        } else {

            keyWrapper.innerHTML = space + `${key}: ${user[key]}`;

        }
        userWrapper.append(keyWrapper);
    }
}