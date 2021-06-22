var img = document.querySelectorAll('.small img');
for(var item of img) {
    item.onclick=zoom;
}

function zoom(e) {
    var exchange = e.target.src.replace('small', 'large');
    var large = document.getElementById('large');
    large.innerHTML='';
    large.src=exchange;
}

function imgError() {
    document.querySelector('#error').innerHTML="Отсутствует изображение";
}