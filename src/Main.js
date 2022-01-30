import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

import { BsCheckCircle, BsPlusLg } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { IoIosAddCircle } from "react-icons/io"

//여유되면 폰트 바꾸기!!

const Main = () => {
  const history = useHistory();
  const [color, setColor] = React.useState('white');
  const [icolor, setIcolor] = React.useState('dimgray');

  function onClick() {
    color === '#ddd' ? setColor('white') : setColor('#ddd');
    console.log("checkBtnClick");
    //function으로 해도 되긴 된다.
    icolor === 'white' ? setIcolor('dimgray') : setIcolor('white');
    //아이콘 변경으로 할 수 있는 방법은? 좋아요 토글버튼?
    console.log("checked");
  }

    function deleteBtn() {
      return (
        prompt("비밀번호를 입력하세요"),
        alert("비밀번호를 확인하세요"),
        history.push('/'),
        
        console.log("reload")
      )
    }

    return (
      <div style={{ color: "dimgray", textAlign: "center", height: "100vh"}}>
        <h1 
        style={{ cursor: "pointer", display: "inline-flex",  margin: "15px auto" }} 
        onClick={() => window.location.reload()}
        >📚우리말 단어장📚</h1>
        <hr />
        <h3 >단어 목록</h3>

        <div style={{ width: "100vw", display: "flex" }}>
          <WordCard color={color} >
            <h2 >단어{' '}<span style={{ fontSize: "medium", fontWeight: "lighter" }}>[단어(발음)]</span></h2>
            <p>의미</p>
            <p style={{ color: "blue" }}>단어 예문</p>
            <div style={{ float: "right", cursor: "pointer" }}>
              <BsCheckCircle onClick={onClick} size={20} color={icolor} />
              {/* color는 ㄹㅇ 색상. {위에서 선언한 변수 내지 받아오는 값!!} */}
              <AiOutlineDelete size={20} style={{ marginLeft: "5px" }} onClick={deleteBtn} />
            </div>
          </WordCard>
        </div>

        {/* <AddButton><BsPlusLg color={'#000'} style={{ }}/></AddButton> */}
        
        <CircleButton onClick={() => {
          history.push('/add')
        }} >
          <IoIosAddCircle size={50} />
        </CircleButton>
        {/* 나는 로테이션 시키면 동그라미 자체가 오른쪽으로 이동하는 느낌인데, 샘플은 +만 도는 느낌.
        나도 동그라미를 주고 안에 +만 넣어서 로테이션 시켜볼까 */}

      </div>

    );
  };

const CircleButton = styled.div`
position: absolute;
right: 0px; 
bottom: 0px;
cursor: pointer;
margin: 0px 10px 10px 0px;
&:hover {
  transition: 0.2s all ease;
  transform: rotate(90deg);
  /* animation: backwards; */
  /* transform-origin: 50% 45% */
}
`;

// const AddButton= styled.div`
// width: 50px;
// height: 50px;
// border-radius: 25px;
// position: absolute;
// right: 0px; 
// bottom: 0px;
// margin: 0px 10px 10px 0px;
// background-color: dimgray;
// cursor: pointer;
// `;

export default Main;

const WordCard = styled.div`
width: 250px;
text-align: left;
margin : 10px 20px;
padding: 15px 15px;
border: solid #eee 2px;
border-radius: 10px;
transition: 0.125s all ease;
&:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
  -webkit-transform: scale(1.05);
     -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
       -o-transform: scale(1.05);
          transform: scale(1.05);  
}
background-color: ${props => props.color};
`;
// 아예 바깥으로 빠져나와야 리렌더링 안되고 색깔 변경 일어난다