function seleccionarTextoArea() {
    var textarea = document.getElementById('txt');
    var texto = textarea.value;
    var todoEnMinusculas = texto === texto.toLowerCase();
    
    if (todoEnMinusculas) {
        console.log('Todo el texto está en minúsculas.');
        var textoModificado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        
        textarea.value = textoModificado;
        
        console.log('Texto modificado: ' + textoModificado);

        return textoModificado
        } else {
            console.log('El texto no está completamente en minúsculas.');
        }
        return todoEnMinusculas;
}

function restaurarTexto() {
    var textarea = document.getElementById('txt');
    var texto = textarea.value;
    
    var textoRestaurado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    textarea.value = textoRestaurado;
    
    console.log('Texto restaurado: ' + textoRestaurado);

    return textoRestaurado;
}

function actualizarSidebar(texto) {
    var sidebar = document.querySelector('.sidebar');
    
    if (texto) {
        var img = sidebar.querySelector('img.warning');
        var span = sidebar.querySelector('span.message');
        
        if (img) img.remove(); 
        var span = sidebar.querySelector('span.message');
        if (span) {
            span.innerHTML = `<b>${texto}</b>`;
        } else {
            span = document.createElement('span');
            span.className = 'message';
            span.innerHTML = `<b>${texto}</b>`;
            span.id = 'messag';
            sidebar.appendChild(span);
        }
        var button = sidebar.querySelector('button.btn-copy');
        if (button) button.style.display = 'block';
        
        console.log('Texto recibido:', texto);
    }
}

function copiarTextoAr(id) {
    var textarea = document.getElementById(id);
    var value = textarea.value;
        navigator.clipboard.writeText(value);
        console.log('Contenido copiado al portapapeles');
    
}
