let number = Number(prompt("Введите число: "));

if (number < 0) {
    number = number * (-1);
}

if (number < 10) {
    console.log(`${number} единиц.`);
} else {
    let one = number % 10;
    let dec = Math.floor((number % 100) / 10);
    let hund = Math.floor(number / 100);

    console.log(`Сотен: ${hund}, десятков: ${dec}, единиц: ${one}.`);
}