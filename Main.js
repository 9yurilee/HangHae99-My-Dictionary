import React from "react"
import { Link, useState, useHistory } from "react-router-dom"

import styled from "styled-components"

import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { IoIosAddCircle } from "react-icons/io"

// import App from "./App"
//여유되면 폰트 바꾸기!!

// 버튼 클릭할 때, 색깔 반전? 및 아이콘 변경 (BsCheckCircleFill)
// function Checked {
//   const [check, setCheck] = useState();
//   return (
//     e
//   )
// }


const Main = () => {
  const history = useHistory();
  // const alert = alert("비밀번호를 입력하세요")
  return (
    <div style={{ color: "dimgray", textAlign: "center", height: "100vh" }}>
      <h1 style={{ display: "inline-flex" }}>📚우리말 단어장📚</h1>
      <hr />
      <h3 >단어 목록</h3>
      {/* 카드 뷰로 만들기??? hover에 모달 효과 */}
      <div style={{ display: "flex" }}>
        <WordCard>
          <h2 >단어{' '}<span style={{ fontSize: "medium", color: "#ddd", fontWeight: "lighter" }}>[단어(발음)]</span></h2>
          <p>의미</p>
          <p style={{ color: "blue" }}>단어 예문</p>
          <div style={{ float: "right", cursor: "pointer" }}>
            <BsCheckCircle /> <AiOutlineDelete style={{ marginLeft: "5px" }} onClick={{alert: "ql"}}/>
            {/* 비밀번호 입력하라는 input+ alert! */}
          </div>
        </WordCard>
      </div>
      <div>
        <IoIosAddCircle
          size={50}
          style={{ position: "absolute", right: "0px", bottom: "0px", cursor: "pointer", margin: "0px 10px 10px 0px" }}
          onClick={() => {
            history.push('/add');
          }} />
      </div>
      <div>깃 테스트용</div>

    </div>

  );
};

const WordCard = styled.div`
width: 250px;
text-align: left;
margin : 10px 20px;
padding: 15px 15px;
border: solid #eee 2px;
border-radius: 10px;
`;

export default Main;