

const RedireccionBoton = () => {
  const manejarClick = () => {
    // Abre una nueva pestaña con la URL indicada
    window.open("https://amzn.to/47ppAFc", '_blank');

    // Redirige la pestaña actual a otra URL
    window.location.href = "https://www.desatascospociten.es";
  };

  return <button onClick={manejarClick}>Ir a la Página</button>;
};

export default RedireccionBoton;


