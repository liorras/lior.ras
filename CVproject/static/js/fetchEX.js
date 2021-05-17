fetch('https://reqres.in/api/users?page=2').then(
    response => response.json()
).then(
    responseOBJECT=> createUsersList(responseOBJECT.data)
).catch(
    err => console.log(err)
);

function createUsersList(users){
    console.log(users);
    const curr_main = document.querySelector("main");
    for(let user of users){
        const li = document.createElement('li');
        li.innerHTML = `<span>${user.first_name}</span> <span>${user.last_name}</span>` ;
        curr_main.appendChild(li);
    }
}