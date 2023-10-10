// ----------------------1 ЗАДАНИЕ --------------------//

// alert("Вы должны зарегистрироваться!");

// const regLogin = prompt("Введите логин:");
// const regPass = prompt("Введите пароль:");

// alert("Теперь вы должны авторизоваться!");

// global:while (true) {
//   const autLogin = prompt("Введите логин:");
//   const autPass = prompt("Введите пароль:");
//   if (autLogin === regLogin && autPass === regPass) {
//     alert("Вы успешно авторизовались!");
//     break global;
//   } else {
//     alert("Неверный логин или пароль. Пожалуйста, попробуйте снова.");
//   }
// }

// ----------------------2 ЗАДАНИЕ --------------------//

alert("Вы должны зарегистрироваться!");

const regLogin = prompt("Введите логин для регистрации:");
const regPass = prompt("Введите пароль для регистрации:");

let loginAttempts = 0;
let authorization = false;

while (authorization = true && loginAttempts < 4) {
  alert("Теперь вы должны авторизоваться!");

  author:for (let authAttempts = 0; authAttempts < 4; authAttempts++) {
    const autLogin = prompt("Введите логин:");
    const autPass = prompt("Введите пароль:");

    if (autLogin === regLogin && autPass === regPass) {
      alert("Вы успешно авторизовались!");
      authorization = true;
      break;
    } else {
      alert("Неверный логин или пароль. Попробуйте заново.");
    }
  }

  if (authorization = true) {
    loginAttempts++;
    if (loginAttempts < 3) {
      alert("Вы ввели неверные данные. Попробуйте снова.");
    } else {
      const createNewUser = confirm(
        "Вы ввели неверные данные 3 раза. Хотите создать нового пользователя?"
      );

      if (createNewUser) {
        alert("Давайте начнем сначала.");
        alert("Вы должны зарегистрироваться!");

        const regLogin = prompt("Введите логин для регистрации:");
        const regPass = prompt("Введите пароль для регистрации:");

        loginAttempts = 0;
      } else {
        alert("Попробуйте ввести данные заново");
      }
    }
  }

}

// На этом мои полномочия все, так сказать. Не получается сделать другие сложности, кроме 3. Если можно, то покажите праильное решение.