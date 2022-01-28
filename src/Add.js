import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
// import App from "./App"

const Add = () => {
  const history = useHistory();
  return (
    // div1 : return 대응 div. 전체 아우르는 div.
    <div style={{ color: "dimgray", textAlign: "center", height: "100vh" }}>
      <h1 style={{ display: "inline-flex" }}>📚우리말 단어장📚</h1>
      <hr />
      <h3 >단어 추가하기</h3>
      {/* div2 : div3 가로 정해주는 용도?!*/}
      <Container>
        {/* div3 */}
        <Contents>
          {/* !!!!게시글 작성에 필요한 input 3개를 ref로 관리하기!!! */}
          {/* !!!!작성 게시글 리덕스 내 게시글 목록에 추가!!!! */}
          {/* !!!!게시글 목록 파이어스토어에 저장하기!!!! */}
          <h3>단어: <input type="text" style={{ backgroundColor: "ghostwhite", border: "none" }} /></h3>
          <h3>의미: <input type="text" style={{ backgroundColor: "ghostwhite", border: "none" }} /> </h3>
          <h3>예문: <input type="text" style={{ backgroundColor: "ghostwhite", border: "none" }} /></h3>
        </Contents>
        {/* div4 */}
        <AddButton style={{ textAlign: "center" }} onClick={() => {
          history.push('/');
        }}>
          추가하기 🥰
        </AddButton>
      </Container>
    </div>
  );
};

const Container = styled.div`
border: solid #eee 2px;
border-radius: 10px;
width: 60vw;
height: 75vh;
text-align: left;
margin: auto;
padding-top: 20px;
`;
// 아니면 Container.h3로 지정 변경하는 방법이 나으려나??
const Contents = styled.div`
background-color: ghostwhite;
margin: 50px 60px;
padding: 10px;
text-align: justify;
// 줄 간격 넓히는 방법?
`;

const AddButton = styled.div`
background-color: dimgray;
color: #fff;
font-weight: bold;
font-size: 18px;
width: 250px;
margin: 20px auto;
padding: 10px;
border-radius: 15px;
cursor: pointer;
`;

export default Add;