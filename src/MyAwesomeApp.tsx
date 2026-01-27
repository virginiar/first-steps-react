// TAREA - Tarea básica en React

/**
 * 1\. Crear un componente de React dentro del `src` lladamo`MyAwesomeApp`
 * 2\. El componente debe de retornar(cambiar el nombre)
 * ```tsx
 *    <h1>Fernando</h1>
 *    <h3>Herrera</h3>
 * ```
 * 3\. Hacer las configuraciones respectivas para poder ver el componente en pantalla.
 */

// Definición como función
/* export function MyAwesomeApp() {
    return (
        <>
            <h1>Virginia</h1>
            <h3>R</h3>
        </>
    );
}; */

// TAREA - Tarea básica en React
/**
 * 1\. Crear un componente de React dentro del `src` lladamo`MyAwesomeApp`
 * 2\. El componente debe de retornar(cambiar el nombre)
 * ```tsx
 *    <h1>Fernando</h1>
 *    <h3>Herrera</h3>
 * ```
 * 3\. Hacer las configuraciones respectivas para poder ver el componente en pantalla.
 */
// Definición como función
/* export function MyAwesomeApp() {
    return (
        <>
            <h1>Virginia</h1>
            <h3>R</h3>
        </>
    );
}; */
import type { CSSProperties } from "react";

// Las variables que no cambian su valor deben estar fuera del
// componente para evitar su re-renderización constante
// Ejemplo de uso de diferentes tipos de variables
const firstName = "Virginia";
const lastName = "R";

const favoriteGames = ["Ajedrez", "Parchis", "Tetris"];

const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "España",
};

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

// Definición como función flecha
export const MyAwesomeApp = () => {
  return (
    <>
      <div data-testid='div-app'>
        <h1 data-testid="first-name-title">{firstName}</h1>
        <h3>{lastName}</h3>

        <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>
        <p>{2 + 2}</p>
        {/* Para mostrar un valor booleano, usar un operador ternario */}
        <h4>{isActive ? "Activo" : "No activo"}</h4>
        
        <p style={myStyles}>{JSON.stringify(address)}</p>
      </div>
    </>
  );
};
