function selecTextArea() {
    var textarea = document.getElementById('txt');
    var text = textarea.value;
    var allLorwerCase = text === text.toLowerCase();
    
    if (allLorwerCase) {
        console.log('Todo el texto está en minúsculas.');
        var modifyText = text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        return modifyText
        } else {
            console.log('El texto no está completamente en minúsculas.');
        }
        return allLorwerCase;
}

function restoreText() {
    var textarea = document.getElementById('txt');
    var text = textarea.value;
    
    var textRestaurado = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    return textRestaurado;
}

function updateSidebar(text) {
    var sidebar = document.querySelector('.sidebar');
    
    if (text) {
        var img = sidebar.querySelector('img.warning');
        var span = sidebar.querySelector('span.message');
        
        if (img) img.remove(); 
        var span = sidebar.querySelector('span.message');
        if (span) {
            span.innerHTML = `<b>${text}</b>`;
        } else {
            span = document.createElement('span');
            span.className = 'message';
            span.innerHTML = `<b>${text}</b>`;
            span.id = 'messag';
            sidebar.appendChild(span);
        }
        var button = sidebar.querySelector('button.btn-copy');
        if (button) button.style.display = 'block';
        
        console.log('text recibido:', text);
    }
}

function copiarAlPortapapeles() {
    var sidebar = document.querySelector('.sidebar');
    var span = sidebar.querySelector('span.message');

    if (span) {
        var text = span.innerText || span.textContent;

        var elementoTemporal = document.createElement('textarea');
        elementoTemporal.value = text;
        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();

        try {
            var success = document.execCommand('copy');
            if (success) {
                console.log('text copiado al portapapeles:', text);
            } else {
                console.error('No se pudo copiar el text al portapapeles.');
            }
        } catch (e) {
            console.error('Error al copiar al portapapeles:', e);
        }
        document.body.removeChild(elementoTemporal);
    } else {
        console.error('No hay text para copiar.');
    }
}

// Asignar la función de copiar al botón
document.addEventListener('DOMContentLoaded', function() {
    var sucbuttonCopycess = document.querySelector('button.btn-copy');
    if (sucbuttonCopycess) {
        sucbuttonCopycess.addEventListener('click', copiarAlPortapapeles);
    }
});