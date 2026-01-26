import { useState } from "react";

// Importación desde archivo
// import "./ItemCounter.css";
// Importación como módulo
import styles from "./ItemCounter.module.css";

// Componente con propiedades
interface Props {
  name: string;
  quantity?: number;
}

// rafc -> Crea el componente
export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  // Muestra cada nombre dos veces, por efecto del StrictMode
  // console.log(name);

  const [count, setCount] = useState(quantity);

  // Función auxiliar para gestionar onClick
  // separando el template de la lógica
  /* const handleClick = () => {
    console.log(`Click en ${name}`);
  }; */

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  return (
    <section
      // className="item-row"     // como archivo
      className={styles.itemRow}  // como módulo, nombre de clase en camel case
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     gap: 10,
      //     marginTop: 10,
      //   }}
    >
      <span
        //className="item-text" // como archivo
        className={styles['item-text']}  // como módulo, nombre de clase con guiones
        style={{
          //width: 150,
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
