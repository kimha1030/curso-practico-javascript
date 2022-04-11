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
