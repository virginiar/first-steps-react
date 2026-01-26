// Componente con propiedades
interface Props {
  name: string;
  quantity?: number;
}

// rafc -> Crea el componente
export const ItemCounter = ({ name, quantity }: Props) => {
  // Muestra cada nombre dos veces, por efecto del StrictMode
  console.log(name);

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: 150,
        }}
      >
        {name}
      </span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
