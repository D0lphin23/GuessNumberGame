"use strict";

function newGame() {
    const number = Math.floor(Math.random() * 100) + 1;
    const attempts = 10;

    console.log(number);

    const isNumber = function (num) {
        return (
            !isNaN(parseInt(num)) &&
            isFinite(num) &&
            num.includes(" ") === false
        );
    };

    const guessesNumber = function (number, attempts) {
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
            }

            let newAttempts = --attempts;

            if (answer === number) {
                if (
                    !confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
                ) {
                    return;
                }

                newGame();
            }

            if (newAttempts <= 0) {
                if (!confirm("Попытки закончились, хотите сыграть еще?")) {
                    return;
                }

                newGame();
            }

            if (answer > number) {
                confirm(
                    `Загаданное число меньше, осталось попыток ${newAttempts}`,
                );

                questionFunc();
            } else if (answer < number) {
                confirm(
                    `Загаданное число больше, осталось попыток ${newAttempts}`,
                );

                questionFunc();
            }
        }
        questionFunc();
    };

    guessesNumber(number, attempts);
}

newGame();
