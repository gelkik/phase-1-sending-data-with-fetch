// Add your code here
function submitData (name, email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,email
        }),
    })
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        const id = document.createElement('id');
        id.innerText = data.id;
        document.querySelector('body').appendChild(id);
    })
    .catch(error=>{
        alert('Error!');
        console.log(error.message)
    })
}
submitData('Steve','steve@steve.com')



// fetch('http://localhost:3000/users',{
//     method: 'POST',
//     headers: {
//         'Content Type': 'application/json'
//             Accept: 'application/json'
//     }
// })
