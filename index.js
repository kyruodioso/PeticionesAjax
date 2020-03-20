let elementosIncertados = document.getElementById('elementos');
let ajax = new XMLHttpRequest;

ajax.open('GET' , 'https://jsonplaceholder.typicode.com/users');



 ajax.addEventListener('load' , (e)=>{
    let data = e.target.responseText;
    let dataJson = JSON.parse(data);
    let elementosJson = dataJson.map((elemento)=>{
        return (`<p>El email de ${elemento.name} es ${elemento.email}<br /></p>`);
        
    });
    elementosIncertados.innerHTML = elementosJson;
})

ajax.send();

