import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loadCardFB } from "./Store"

import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';

//파이어베이스 삭제용
import {db} from "./firebase"
import { doc, deleteDoc } from "firebase/firestore"


const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.list);

  const [color, setColor] = React.useState('white');
  const [icolor, setIcolor] = React.useState('dimgray');

  function onClick() {
    color === '#ddd' ? setColor('white') : setColor('#ddd');
    console.log('checkBtnClick');
    //function으로 해도 되긴 된다.
    icolor === 'white' ? setIcolor('dimgray') : setIcolor('white');
    //아이콘 변경으로 할 수 있는 방법은? 좋아요 토글버튼?
    //클릭 여부에 따라 카드 개별로 색깔 변경하게끔(isclicked)
    console.log('checked');
  }

  function deleteBtn() {
    return (
      prompt('비밀번호를 입력하세요'),
      alert('비밀번호를 확인하세요'),
      history.push('/'),
      console.log('reload')
    );
  }
  React.useEffect(() => {
    dispatch(loadCardFB());
    // const docRef = doc(db, "dict", "WaBUMIGgvjXvz0padprW");
    // deleteDoc(docRef)
  }, []);

  return (
    <div
      style={{
        color: 'dimgray',
        textAlign: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'fixed',
          backgroundColor: '#fff',
          top: '0',
          left: '0',
          width: '100%',
          height: '60px',
          borderBottom: '1px solid #eee',
        }}
      >
        <h1
          style={{ cursor: 'pointer', display: 'grid', margin: '15px auto' }}
          onClick={() => window.location.reload()}
        >
          📚우리말 단어장📚
        </h1>
      </div>
      <div style={{ marginTop: '70px', height: '100%' }}>
        <h3>단어 목록</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {list.map((a, i) => {
            return (
              <div key={i} style={{ width: '100%', display: 'flex' }}>
                <WordCard color={color}>
                  <h2>{a.word}</h2>
                  <p>{a.meaning}</p>
                  <p style={{ color: 'blue' }}>{a.example}</p>

                  <div style={{ float: 'right', cursor: 'pointer' }}>
                    <BsCheckCircle onClick={onClick} size={20} color={icolor} />
                    {/* color는 ㄹㅇ 색상. {위에서 선언한 변수 내지 받아오는 값!!} */}
                    <AiOutlineDelete
                      size={20}
                      style={{ marginLeft: '5px' }}
                      onClick={deleteBtn}
                    />
                  </div>
                </WordCard>
              </div>
            );
          })}
        </div>
      </div>
      <CircleButton>
        <IoIosAddCircle size={50} onClick={() => {
          history.push('/add');
        }} />
      </CircleButton>
      {/* 나는 로테이션 시키면 동그라미 자체가 오른쪽으로 이동하는 느낌인데, 샘플은 +만 도는 느낌.
          나도 동그라미를 주고 안에 +만 넣어서 로테이션 시켜볼까 */}
    </div>
  );
};

const CircleButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  
  &:hover {
    transition: 0.4s ease-in-out;
    transform: rotate(90deg);
    /* animation: backwards; */
    /* transform-origin: 50% 45% */
  }
`;

export default Main;

const WordCard = styled.div`
  min-width: 250px;
  width: 250px;
  text-align: left;
  margin: 10px 20px;
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
  background-color: ${(props) => props.color};
`;
// 아예 바깥으로 빠져나와야 리렌더링 안되고 색깔 변경 일어난다
