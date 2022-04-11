// Perimetro y area del cuadrado
// Datos iniciales
console.group("Cuadrado");
const lado = 5;
console.log("Los lados del cuadrado miden " + lado + "cm");

// Perimetro
p_cuadrado = lado * 4;
console.log("El perimetro del cuadrado es igual a " + p_cuadrado + "cm");

// Area
a_cuadrado = lado * lado;
console.log("El area del cuadrado es igual a " + a_cuadrado + "cm2");
console.groupEnd();

// Perimetro y area del triangulo
console.group("Triangulo");
// Datos iniciales
const lado_triangulo_1 = 6;
const lado_triangulo_2 = 6;
const lado_triangulo_3 = 4;
const altura_triangulo = 5.5;
console.log(
  "Los lados del triangulo miden " +
    lado_triangulo_1 +
    "cm, " +
    lado_triangulo_2 +
    "cm y " +
    lado_triangulo_3 +
    "cm. La altura es " +
    altura_triangulo +
    "cm."
);

// Perimetro
p_triangulo = lado_triangulo_1 + lado_triangulo_2 + lado_triangulo_3;
console.log("El perimetro del triangulo es igual a " + p_triangulo + "cm");

// Area
a_triangulo = (altura_triangulo * lado_triangulo_3) / 2;
console.log("El area del triangulo es igual a " + a_triangulo + "cm2");

console.groupEnd();

// Perimetro y area del circulo
// Datos iniciales
console.group("Circulo");
const radio = 5;
const diametro = radio * 2;
const PI = Math.PI;

console.log("El diametro del circulo es " + diametro + "cm");

// Perimetro
p_circulo = diametro * PI;
console.log(
  "El perimetro del circulo es igual a " + Math.round(p_circulo) + " cm"
);

// Area
a_circulo = radio * radio * PI;
console.log("El area del circulo es igual a " + Math.round(a_circulo) + " cm2");
console.groupEnd();

// Funciones
function perimetroCuadrado() {
  const lado = document.getElementById("lado_cuadrado").value;
  const p_cuadrado = lado * 4;
  alert("El perimetro del cuadrado es igual a " + p_cuadrado + "cm");
}

function areaCuadrado() {
  const lado = document.getElementById("lado_cuadrado").value;
  const a_cuadrado = lado * lado;
  alert("El area del cuadrado es igual a " + a_cuadrado + "cm2");
}

function perimetroTriangulo() {
  const lado1 = document.getElementById("lado1_triangulo").value;
  const lado2 = document.getElementById("lado2_triangulo").value;
  const lado3 = document.getElementById("lado3_triangulo").value;
  p_triangulo = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
  alert("El perimetro del triangulo es igual a " + p_triangulo + "cm");
}

function areaTriangulo() {
  const lado3 = document.getElementById("lado3_triangulo").value;
  const altura = document.getElementById("altura_triangulo").value;
  a_triangulo = (parseInt(altura) * parseInt(lado3)) / 2;
  alert("El area del triangulo es igual a " + a_triangulo + "cm2");
}

function perimetroCirculo() {
  const radio = document.getElementById("radio").value;
  const diametro = parseInt(radio) * 2;
  const PI = Math.PI;
  p_circulo = diametro * PI;
  alert("El perimetro del circulo es igual a " + Math.round(p_circulo) + " cm");
}

function areaCirculo() {
  const radio = document.getElementById("radio").value;
  const PI = Math.PI;
  a_circulo = parseInt(radio) * parseInt(radio) * PI;
  alert("El area del circulo es igual a " + Math.round(a_circulo) + " cm2");
}

function perimetroTrianguloIsosceles() {
  const lado1 = document.getElementById("lado1_isosceles").value;
  const lado2 = document.getElementById("lado2_isosceles").value;
  const lado3 = document.getElementById("lado3_isosceles").value;
  if (lado1 != lado2) {
    alert("Error, los dos lados no son iguales.");
  } else {
    p_triangulo = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
    alert("El perimetro del triangulo es igual a " + p_triangulo + "cm");
  }
}

function alturaTrianguloIsosceles() {
  const lado1 = document.getElementById("lado1_isosceles").value;
  const lado2 = document.getElementById("lado2_isosceles").value;
  const lado3 = document.getElementById("lado3_isosceles").value;
  if (lado1 != lado2) {
    alert("Error, los dos lados no son iguales.");
  } else {
    h_triangulo = Math.sqrt(
      parseInt(lado1) - (parseInt(lado3) * parseInt(lado3)) / 4
    );
    alert("La altura del triangulo es igual a " + h_triangulo + "cm");
  }
}
