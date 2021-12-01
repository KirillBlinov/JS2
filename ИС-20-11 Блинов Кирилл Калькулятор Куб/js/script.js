
let inputIn = document.querySelector('.input-in');  // input
function calculate(){  //кнопка подсчета значений
    //кнопка будет нажата
    //console.log(inputIn.value);  // value - значение input
    let b = + inputIn.value;  // + перевести в число!
    if (b!=''){
    S=b*b;  //подсчет площади грани 
    S1=b*b*6;  //подсчет общей площади куба
    V=b**3;  //подсчет объема куба
    document.getElementById('area').innerHTML=S;  //вывод значения в строку
    document.getElementById('total area').innerHTML=S1;
    document.getElementById('voluem').innerHTML=V;
    }
    else {
        alert('Введите данные!');
    }
}
function dele() {
    document.getElementById('area').innerHTML='';  //вывод значения в строку
    document.getElementById('total area').innerHTML='';                                       //кнопка очистки                         
    document.getElementById('voluem').innerHTML='';
    inputIn.value = '';
}
