document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const display = document.querySelector('.display');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const value = e.target.value;
            const displayValue = display.value;

            switch(value) {
                case '=':
                    if(displayValue !== '') {
                        display.value = eval(displayValue);
                    }
                    break;
                case 'C':
                    display.value = '';
                    break;
                default:
                    display.value += value;
            }
        });
    });
});