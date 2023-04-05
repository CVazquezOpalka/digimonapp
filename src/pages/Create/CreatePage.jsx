import React from "react";
import styled from "styled-components";
import { CreateCharacter } from "../../components/fomulario/CreateCharacter";

const CreatePage = () => {
  return (
    <Container>
      <h2 className="title">Crea a tu propio digimon</h2>
      <CreateCharacter />
    </Container>
  );
};

export default CreatePage;
const Container = styled.section`
  width: 100vw;
  height: 600px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #161623;
  &::before {
    content: "";
    position: absolute;
    top:350px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#ffc107, #e91e63);
    transform: translate(-250px, -120px);
    z-index: 
  }
  &::after {
    content: "";
    position: absolute;
    bottom:80px;
    right: 310px;
    width: 130px;
    height: 130px;
    background: linear-gradient(#2196f3, #31ff38);
    border-radius: 50%;
    transform: translate(250px, 120px);
  }
  .title {
    width: 100%;
    font-size: 25px;
    text-align: center;
    margin: 20px 0;
    text-transform: uppercase;
    text-decoration: underline;
    color: #fff;
  }
`;
