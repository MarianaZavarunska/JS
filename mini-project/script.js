//index

async function getUsers() {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            },
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/users', config);
        const users = await response.json();

        if(response.status >= 400 && response.status < 600){
           console.error("Bad response from server");
        }
        // console.log(users);
        return users;

    } catch (error) {
        console.error(error);
    }
}
getUsers();

async function buildThePage(){
    let users = await getUsers();
    let container = document.createElement('div');
    container.classList.add('container');
    

    users.forEach(user => {
        let userContainer = document.createElement('div');
        userContainer.classList.add('user-container');
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('btn-container');
        buttonContainer.innerHTML = `<a href='user-details.html'>Show Details</a>`;

        for (const property in user) {

            if(property === 'id' || property === 'name'){
                
                let propertyContainer = document.createElement('div');
                propertyContainer.innerHTML = `<span>${property}:</span> <span>${user[property]}</span>`;
                userContainer.append(propertyContainer,buttonContainer);
            } 
        }

        container.append(userContainer)
        
    });

    document.body.append(container);
}

document.addEventListener('load', buildThePage());


