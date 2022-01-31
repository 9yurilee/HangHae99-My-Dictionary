import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
// import App from "./App"

const Add = () => {
  const history = useHistory();
  return (
    <div style={{height:"100vh", width:"100vw"}}>
      <Container style={{ margin: "auto", justifyContent: "center", alignItems:"center" }}>
        <h1 style={{ display: "inline-flex"}}>우리말 단어장</h1>
        <hr style={{ border: "1px dotted #ddd"}}/>
        <h2 style={{ display: "inline-flex" }}>단어 추가하기</h2>
      <WordList>
          <p>단어</p>
          <p>발음</p>
          <p>의미</p>
          <p>예문</p>
      </WordList>
      </Container>
      <AddButton style={{ cursor: "pointer" }} onClick={() => {
          history.push('/');
        }}>
        <p style={{ color: "dimgray", textAlign : "center", margin: "auto"}}>저장하기</p>
       </AddButton>
      {/* 뭔가... 프롭스로 받아올 것 같은 느낌.. */}
    </div>
  );
};

const Container = styled.div`
  background-color: beige;
  width: 100%;
  height: 100vh;
  margin : auto;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const WordList = styled.div`
  background-color: bisque;
  width: 60%;
  max-height: 580px;
  height: 80%;
  margin : auto;
`;

const AddButton = styled.div`
  background-color: beige;
  width: 50%;
  height: 20px;
  margin: auto;
  padding: 10px
`;



export default Add;