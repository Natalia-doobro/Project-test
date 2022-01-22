const input = document.querySelector('#sum-input');
const result = document.querySelector('.result');

input.addEventListener('input', formatting);

function formatting() {
    let sum = 0
     
    if (input.value === '') {
       return  result.textContent = 'enter amount'; 
    } else {
        sum = Number(input.value).toLocaleString('ru-RU', { minimumFractionDigits: 2 });
        console.log(sum);
        return result.textContent = sum;
    } 
};