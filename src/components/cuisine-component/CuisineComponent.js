import React from "react";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function CuisineComponent(props) {
  return (
    <div className="CuisineComponentContainer">
      <h3>De los granos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Plato</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Moros y cristianos con chorizo ahumado</td>
            <td>
              carne molida y chicharrón, maduro en cuadritos y hogao. Con
              aguacate y tostadas de plátano
            </td>
            <td>$27.000</td>
            <td>
              <Form.Check type="checkbox" label="" />
            </td>
          </tr>
          <tr>
            <td>Arroz de lentejas con topping de lomo fino de cerdo</td>
            <td>salteado o chorizos en salsa de vino tinto y barbicue con topping de cebolla
                caramelizada. Se acompaña con papas fritas o patacones.</td>
            <td>$27.000</td>
            <td>
                <Form.Check type="checkbox" label="" />
            </td>
          </tr>
          <tr>
            <td>Cazuela de fríjoles</td>
            <td>Acompañado de chorizo, chicharroncito, maduro en cuadritos, maíz tierno,
                arroz, hogao y aguacate.
            </td>
            <td>$27.000</td>
            <td>
                <Form.Check type="checkbox" label="" />
            </td>
          </tr>
        </tbody>
      </Table>
      <div
        onClick={() => {
          props.handleSection("landing");
        }}
      >
        back
      </div>
    </div>
  );
}

export default CuisineComponent;
