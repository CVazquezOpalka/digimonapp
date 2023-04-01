import React from "react";
import styled from "styled-components";

const CreatePage = () => {
  return (
    <Container>
      <h2 className="title">Crea a tu propio digimon</h2>

      <form action="" className="contenedor-formulario">
          <h4>Nombre: </h4>
          <input type="text" />
          <h4>Nivel: </h4>
            <select name="selec" id="">
              <option value="Rookie">Rookie</option>
              <option value="Champion">Champion</option>
              <option value="Mega">Mega</option>
            </select>
      </form>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 500px;
  .contenedor-formulario {
    background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    text-align: center;
    line-height: 24px;
    margin: 20px 0;
    text-transform: uppercase;
  }
  
`;

export default CreatePage;
