// Add your code here

function submitData (name, email){
    // fetch('http://localhost:3000/users')
    // .then(response=>response.json())
    // .then(data=>console.log(data))
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        }),
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .catch(error=>{
        alert('Error!');
        console.log(error.message)
    })


    // const div = document.createElement('div');
    // div.className = 'user-creation';

    // const h2 = document.createElement('h2');
    // h2.textContent = name;

    // const p = document.createElement('p');
    // p.textContent = email;

    // div.append(h2,p);
    // document.querySelector('script').append(div);
}
submitData('Steve','steve@steve.com')



// fetch('http://localhost:3000/users',{
//     method: 'POST',
//     headers: {
//         'Content Type': 'application/json'
//             Accept: 'application/json'
//     }
// })
