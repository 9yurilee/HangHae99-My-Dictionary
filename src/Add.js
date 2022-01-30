import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const Add = () => {
  const history = useHistory();
  
  const [word, setWord] = useState('');
  const [announce, setAnnounce] = useState('');
  const [mean, setMean] = useState('');
  const [ex, setEx] = useState('');

  const wordInput = useRef(null); 
  const announceInput = useRef(null); 
  const meanInput = useRef(null); 
  const exInput = useRef(null);

  console.log(wordInput.current)
  console.log(announceInput.current)
  console.log(meanInput.current)
  console.log(exInput.current)
  //null 뜸


  return (
    // div1 : return 대응 div. 전체 아우르는 div.
    <div style={{ color: "dimgray", textAlign: "center", height: "800px"}}>
      <h1 
      style={{ cursor: "pointer", display: "grid", margin: "15px auto", width: "100%" }}
      onClick={() => history.push('/')}
      >📚우리말 단어장📚</h1>
      <hr />
      <h3 style={{ margin: "30px" }} >단어 추가하기</h3>
      {/* div2 : div3 가로 정해주는 용도?!*/}
      <Container>
        {/* div3 */}
        <Contents>
          {/* !!!!게시글 작성에 필요한 input 3개를 ref로 관리하기!!! */}
          {/* ref는 리액트 컴포넌트에 접근해 원하는 값을 가져올 수 있게 하는?? */}
          {/* !!!!작성 게시글 리덕스 내 게시글 목록에 추가!!!! */}
          {/* !!!!게시글 목록 파이어스토어에 저장하기!!!! */}
          <h3>단어 <InputBox ref={wordInput} value={word}/></h3>
          <h3>발음 <InputBox ref={announceInput} value={announce}/></h3>         
          <h3>의미 <InputBox ref={meanInput} value={mean}/> </h3>
          <h3>예문 <InputBox ref={exInput} value={ex}/></h3>
          {/* map으로 동그라미 그렸듯이 단어, 의미, 예문을 각자 받아와야하나?
          그래서 저장 후에도 main에 뿌려주고? */}
        </Contents>
        {/* div4 */}
        <AddButton style={{ textAlign: "center" }} onClick={() => {
          history.push('/');
          window.location.reload();
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
height: 550px;
text-align: left;
margin: auto;
padding-top: 0px;
`;
// 아니면 Container.h3로 지정 변경하는 방법이 나으려나??
const Contents = styled.div`
margin: 20px 60px;
padding: 10px;
text-align: center;
justify-content: center;
`;

const InputBox = styled.input`
color: dimgray;
border : solid 2px #eee;
border-radius: 15px;
/* border-top: none;
border-left: none;
border-right: none;
border-bottom: solid 2px #eee; */
font-size: 20px;
width: 90%;
height: 30px;
margin-top: 8px;
margin-bottom: 10px;
display: inline-block;
text-align: center;
//input 안의 text 정렬
`;

const AddButton = styled.div`
background-color: #ffcc00;
color: #fff;
font-weight: bold;
font-size: 18px;
width: 200px;
margin: 10px auto 20px;
padding: 10px;
border-radius: 20px;
cursor: pointer;
`;

export default Add;