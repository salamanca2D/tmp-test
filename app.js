const fs = require("fs");
const path = require("path");
require("colors");

function listarDirectorioRaiz(_dir = "/") {
  _dir = _dir ? _dir : "/";
  fs.readdir(_dir, (err, files) => {
    if (err) {
      console.error("Error al leer el directorio raíz:".red, err);
      return;
    }

    console.log(`Archivos en el directorio: '${_dir}'`.bgCyan);
    files.forEach((file, index) => {
      console.log(1 + index + " - " + file);
    });
  });
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function step_1() {
  return new Promise((resolve, reject) => {
    readline.question("Programa inicializado, presione cualquier tecla para continuar: ".green, (input) => {
      resolve(input);
    });
  });
}

async function step_2() {
  return new Promise((resolve, reject) => {
    readline.question("Ingrese el directorio a analizar: ".green, (input) => {
      resolve(input);
    });
  });
}

async function main() {
  const step_1a = await step_1();
  const step_2a = await step_2();
  listarDirectorioRaiz(step_2a);
  readline.close();
}

main();
