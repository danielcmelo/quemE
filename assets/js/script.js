function verificar() {
    let data = new Date();
    let ano = data.getFullYear(); //Esta propriedade me retorna 4 dígitos

    let fAno = document.getElementById('txt1')
    let idade = ano - Number(fAno.value);

    let sexo = document.getElementsByName('radsex')
    let genero;

    let img = document.createElement('img') //<img>
    img.setAttribute('id', 'foto') //<img id="foto">

    let res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Tente novamente');
    } else {
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/images/bebeMenino.png');
            } else if (idade <= 21) {
                img.setAttribute('src', 'assets/images/jovemHomem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/images/homem.png');
            } else {
                img.setAttribute('src', 'assets/images/homemVelho.png');
            }
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos`;
            res.appendChild(img);

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/images/bebeMenina.png');
            } else if (idade <= 21) {
                img.setAttribute('src', 'assets/images/jovemMulher.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/images/mulher.png');
            } else {
                img.setAttribute('src', 'assets/images/mulherVelha.png');
            }
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos uma ${genero} com ${idade} anos`;
            res.appendChild(img);
        }
    }
}