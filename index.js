function ingresar(id) {
    let resultado = [];

    do {
        let cadena = prompt('Ingresar dato');

        if (cadena == '') {
            const msg = "No hay dato!";
            document.getElementById(id).innerHTML = msg;
        } else {
            resultado.push(cadena);
        }
    } while (confirm('Desea continuar?'));

    let list = document.getElementById(id);
    let fraglist = document.createDocumentFragment();

    for (let index = 0; index < resultado.length; index++) {
        let li = document.createElement('li');
        li.textContent = resultado[index];
        li.className = 'list-group-item';
        fraglist.appendChild(li);
    }

    list.appendChild(fraglist);
}