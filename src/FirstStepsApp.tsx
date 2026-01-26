import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smash", quantity: 5 },
];

// Punto de entrada del carrito
export function FirstStepApp() {
  return (
    <>
      {/* <h1>¡Hola mundo!</h1>
            <p>Esto es un párrafo</p>

            <button>Haz clic</button>

            <div>
                <h2>Hola dentro de un div</h2>
            </div> */}
      <h1>Carrito de compras</h1>
      {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Super Smash" quantity={3} />
      <ItemCounter name="Super Mario" quantity={3} /> */}

      {/* Cada elemento de la lista debe tener un key único*/}
      {ItemsInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
