const apiUrlOficial = 'https://dolarapi.com/v1/dolares/oficial';
const apiUrlBlue = 'https://dolarapi.com/v1/dolares/blue';

async function getPrecioDolar() {
  try {
    const responseOf = await fetch(apiUrlOficial);
    const dataOf = await responseOf.json();

    // Ejemplo para mostrar los valores del dólar oficial y blue
    const oficialCompra = dataOf.compra;
    const oficialVenta = dataOf.venta;

    const responseBlue = await fetch(apiUrlBlue);
    const dataBlue = await responseBlue.json();

    const blueCompra = dataBlue.compra;
    const blueVenta = dataBlue.venta;

    document.getElementById('dolar').textContent = ` Dólar Oficial: Compra: ${oficialCompra} ARS | Venta: ${oficialVenta} ARS --
      Dólar  Blue: Compra: ${blueCompra} ARS | Venta: ${blueVenta} ARS 
    `;

  } catch (error) {
    console.error("Error al obtener el precio del dólar:", error);
  }
}
// Llama a la función al cargar la página
getPrecioDolar();