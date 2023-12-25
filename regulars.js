const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/; //1 задание 
const isValidTime = timeRegex.test("15:30"); 
const isValidTime2 = timeRegex.test("25:30"); 

console.log(isValidTime);
console.log(isValidTime2);
//---------------------------------------------------------------

const phoneNumberRegex = /^\(\+994\)\s(?:50|51|55|70|77)\s\d{3}\s\d{2}\s\d{2}$|^\(\+994\)-(?:50|51|55|70|77)-\d{3}-\d{2}-\d{2}$/;


const isValidPhoneNumber1 = phoneNumberRegex.test("(+994) 50 123 45 67");
const isValidPhoneNumber2 = phoneNumberRegex.test("(+994)-51-234-56-78"); 
const isValidPhoneNumber3 = phoneNumberRegex.test("(+994) 60 123 45 67"); 
const isValidPhoneNumber4 = phoneNumberRegex.test("(+994)-55-678-90-12"); 

console.log(isValidPhoneNumber1);
console.log(isValidPhoneNumber2);
console.log(isValidPhoneNumber3);
console.log(isValidPhoneNumber4);
//-------------------------------------------------------------------

const passwordInput = document.getElementById('passwordInput');
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&_])(?=.*\d)(?=.*[!?.,]).{8,16}$/;

    passwordInput.addEventListener('input', function () {
        const isPasswordValid = passwordRegex.test(passwordInput.value);

        console.log("Пароль валиден:", isPasswordValid);
    });

//------------------------------------------------------------------

const textInput = document.getElementById('textInput');

textInput.addEventListener('input', function () {
    // Заменяем все цифры на символ "D" и обновляем значение ввода
    textInput.value = textInput.value.replace(/\d/g, 'D');
});
//-----------------------------------------------------------------

const textInput1 = document.getElementById('textInput');

textInput.addEventListener('input', function () {
    // Заменяем все цифры на символ "D" и обновляем значение ввода
    textInput.value = textInput.value.replace(/\d/g, 'N');
});

