import { Fragment } from "react";
import Titulo from './componentes/Titulo';
import Pie from './componentes/Pie'
import Ciudad from './componentes/Ciudad'

function App() {

  return (
    <>
      <Titulo />
      <Ciudad
        nombre="Lima"
        descripcion="Capital del Perú"
        imagen = "https://i.natgeofe.com/n/4b1eeacc-59c7-476e-8870-fadf135a998e/cathedral-lima-peru.jpg?w=2880&h=1912"
      />
      <Pie />
    </>
  );
}

export default App;