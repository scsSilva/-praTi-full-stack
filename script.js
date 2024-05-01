const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(placeholder) {
  return new Promise((resolve) => {
    rl.question(placeholder, (input) => {
      resolve(input);
    });
  });
}

// Exercício 1
const convertCelsiusToFahrenheit = (temperatureCelsius) => {
  return 1.8 * temperatureCelsius + 32;
};

// Exercício 2
const elections = (totalVotes, whiteVotes, nullVotes, validVotes) => {
  const whiteVotesPercent = (whiteVotes * 100) / totalVotes;
  const nullVotesPercent = (nullVotes * 100) / totalVotes;
  const validNotesPercent = (validVotes * 100) / totalVotes;

  return {
    whiteVotesPercent,
    nullVotesPercent,
    validNotesPercent,
  };
};

// Exercício 3
const modifyNumbers = (numberOne, numberTwo, numberThree, numberFour) => {
  return {
    numberOne: numberOne + 25,
    numberTwo: numberTwo * 3,
    numberThree: numberThree * 0.12,
    numberFour: numberOne + numberTwo + numberThree + numberFour,
  };
};

// Exercícios 4 e 5
const media = (firstNote, secondNote) => {
  const note = (firstNote + secondNote) / 2;
  const message =
    note >= 6
      ? "PARABÉNS! Você foi aprovado"
      : "Você foi REPROVADO! Estude mais";

  return {
    note,
    message,
  };
};

// Exercício 6
const validateTriangle = (a, b, c) => {
  let message;

  if (a < b + c && b < a + c && c < a + b) {
    if (a === b || a === c || b === c) {
      message = "Forma um triângulo isósceles.";
    } else if (a === b && b === c) {
      message = "Forma um triângulo equilátero.";
    } else {
      message = "Forma um triângulo escaleno.";
    }
  } else {
    message = "Não forma um triângulo.";
  }

  return message;
};

// Exercício 7
const calculatePurchase = (totalApples) => {
  return totalApples < 12
    ? `Valor total da compra: R$ ${totalApples * 0.3}`
    : `Valor total da compra: R$ ${totalApples * 0.25}`;
};

// Exercício 8
const ascendingOrder = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return `${numberTwo} - ${numberOne}`;
  }

  return `${numberOne} - ${numberTwo}`;
};

// Exercício 9
const productRegion = (code) => {
  let region;

  if (code === 1) {
    region = "Sul";
  } else if (code === 2) {
    region = "Norte";
  } else if (code === 3) {
    region = "Leste";
  } else if (code === 4) {
    region = "Oeste";
  } else if (code === 5 || code === 6 || (code >= 25 && code <= 50)) {
    region = "Nordeste";
  } else if (code >= 7 && code <= 9) {
    region = "Sudeste";
  } else if (code >= 10 && code <= 20) {
    region = "Centro-Oeste";
  } else {
    region = "Produto Importado";
  }

  return region;
};

// Exercício 10
const printNumber = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number}\n`);
  }
};

// Exercício 11
const numberParity = (number) => {
  if (number % 2 === 0) {
    console.log("PAR");
  } else {
    console.log("ÍMPAR");
  }
};

// Exercício 12
const generateNumbers = () => {
  for (let n = 1000; n <= 1999; n++) {
    if (n % 11 === 5) {
      console.log(`${n}\n`);
    }
  }
};

// Exercício 13
const multiplicationTable = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(`${i} x ${number} = ${number * i}\n`);
  }
};

// Exercício 14
const mediaSimples = (numbers) => {
  let total = 0;
  let length = numbers.length;

  while (length != 0) {
    total += numbers[length - 1];
    length--;
  }

  console.log(`A média é ${total / numbers.length}`);
};

// Exercício 15
const mediaPonderada = (numbers) => {
  let total = 0;
  let weights = 0;
  let length = numbers.length;

  while (length != 0) {
    const { number, weight } = numbers[length - 1];

    total += number * weight;
    weights += weight;

    length--;
  }

  console.log(`A média é ${total / weights}`);
};

// Exercício 16
const listPrimeNumbers = () => {
  let count = 0;
  let number = 101;

  while (count < 50) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number}\n`);
      count++;
    }

    number++;
  }
};

const main = async () => {
  const option = await getInput(
    "Escolha o exercício que será executado (informe o número do exercício): "
  );

  if (option == 1) {
    const temp = await getInput("Temperatura em celsius: ");
    rl.close();

    console.log(convertCelsiusToFahrenheit(parseFloat(temp)));
  } else if (option == 2) {
    const totalVotes = await getInput("Total de votos: ");
    const whiteVotes = await getInput("Total de votos brancos: ");
    const nullVotes = await getInput("Total de votos nulos: ");
    const validVotes = await getInput("Total de votos válidos: ");
    rl.close();

    const resultElection = elections(
      parseInt(totalVotes),
      parseInt(whiteVotes),
      parseInt(nullVotes),
      parseInt(validVotes)
    );

    console.log(
      `Percentual de votos brancos: ${resultElection.whiteVotesPercent}%`
    );
    console.log(
      `Percentual de votos nulos: ${resultElection.nullVotesPercent}%`
    );
    console.log(
      `Percentual de votos válidos: ${resultElection.validNotesPercent}%`
    );
  } else if (option == 3) {
    const valueOne = await getInput("Primeiro número: ");
    const valueTwo = await getInput("Segundo número: ");
    const valueThree = await getInput("Terceiro número: ");
    const valueFour = await getInput("Quarto número: ");
    rl.close();

    const { numberOne, numberTwo, numberThree, numberFour } = modifyNumbers(
      parseFloat(valueOne),
      parseFloat(valueTwo),
      parseFloat(valueThree),
      parseFloat(valueFour)
    );

    console.log(`Primeiro valor: ${numberOne}`);
    console.log(`Segundo valor: ${numberTwo}`);
    console.log(`Terceiro valor: ${numberThree}`);
    console.log(`Quarto valor: ${numberFour}`);
  } else if (option == 4 || option == 5) {
    const firstNote = await getInput("Informe a primeira nota: ");
    const secondNote = await getInput("Informe a segunda nota: ");
    rl.close();

    const { note, message } = media(
      parseFloat(firstNote),
      parseFloat(secondNote)
    );

    console.log(`Média: ${note}`);
    console.log(message);
  } else if (option == 6) {
    const ladoA = await getInput("Valor do Lado A: ");
    const ladoB = await getInput("Valor do Lado B: ");
    const ladoC = await getInput("Valor do Lado C: ");
    rl.close();

    console.log(
      validateTriangle(parseFloat(ladoA), parseFloat(ladoB), parseFloat(ladoC))
    );
  } else if (option == 7) {
    const total = await getInput("Informe o total de maçãs: ");
    rl.close();

    console.log(calculatePurchase(parseInt(total)));
  } else if (option == 8) {
    const firstValue = await getInput("Informe o primeiro valor");
    const secondValue = await getInput("Informe o segundo valor: ");
    rl.close();

    console.log(
      ascendingOrder(parseFloat(firstValue), parseFloat(secondValue))
    );
  } else if (option == 9) {
    const originCode = await getInput("Informe o código de origem: ");
    rl.close();

    console.log(productRegion(parseInt(originCode)));
  } else if (option == 10) {
    const number = await getInput("Informe um número: ");
    rl.close();

    printNumber(parseInt(number));
  } else if (option == 11) {
    while (true) {
      const number = await getInput("Digite um número: ");

      if (number == null || parseInt(number) < 0) {
        break;
      } else {
        numberParity(parseInt(number));
      }
    }

    rl.close();
  } else if (option == 12) {
    rl.close();
    generateNumbers();
  } else if (option == 13) {
    for (let i = 0; i <= 4; i++) {
      const number = await getInput("Informe o número: ");

      multiplicationTable(parseInt(number));
    }

    rl.close();
  } else if (option == 14) {
    let number;
    const numbers = [];

    while (true) {
      number = parseFloat(await getInput("Informe um número: "));

      if (!isNaN(number) && number != 0) {
        numbers.push(number);
      } else {
        break;
      }
    }

    rl.close();

    mediaSimples(numbers);
  } else if (option == 15) {
    let number;
    let weight;
    const numbers = [];

    while (true) {
      number = parseFloat(await getInput("Informe um número: "));

      if (isNaN(number) || number === 0) {
        break;
      }

      weight = parseFloat(await getInput("Informe o seu peso: "));

      if (!isNaN(number) && number != 0) {
        numbers.push({ number, weight });
      }
    }

    rl.close();
    mediaPonderada(numbers);
  } else if (option == 16) {
    rl.close();
    listPrimeNumbers();
  }
};

main();
