function loadusers(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res =>res.json())
    .then(users =>displayUsers(users))
}
loadusers();
function displayUsers(users){
    let ul=document.getElementById("users");
    for(let user of users){
        let li =document.createElement('li');
        li.innerHTML=user.name;
        ul.appendChild(li);
    }
}