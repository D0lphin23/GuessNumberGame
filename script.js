"use strict";

const number = Math.floor(Math.random() * 100) + 1;

const isNumber = function (num) {
    return (
        !isNaN(parseInt(num)) && isFinite(num) && num.includes(" ") === false
    );
};

const guessesNumber = function (number) {
    function questionFunc() {
        const answerNumber = prompt("Угадай число от 1 до 100");

        if (answerNumber === null) {
            alert("Игра окончена!");
            return;
        }

        let answer = isNumber(answerNumber)
            ? Number(answerNumber)
            : answerNumber;

        if (typeof answer === "string") {
            alert("Введи число!");
            questionFunc();
        } else if (answer === number) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (answer > number) {
            confirm("Загаданное число меньше.");

            questionFunc();
        } else if (answer < number) {
            confirm("Загаданное число больше.");
            questionFunc();
        }
    }
    questionFunc();
};

guessesNumber(number);
