import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { createCardFB } from "./Store"

const Add = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const wordInput = React.useRef('');
  const meaningInput = React.useRef('');
  const exInput = React.useRef('');
  console.log(wordInput)

  const addWord = () => {
    dispatch(createCardFB({
        word: wordInput.current.value,
        meaning: meaningInput.current.value,
        example: exInput.current.value,
      }))
    history.push('/')
  }

  // db 연결 확인 콘솔
  // promise로 넘어오는거 확인 방법 : async, await (= set!!)
  // async ? 
  // React.useEffect(() => {
  //   dispatch(loadCardFB());

    // 새로운 컬렉션에 추가
    // addDoc(collection(db, "dicts"), {word: "newnew", isClicked: false});

    //삭제하기
    // const docRef = doc(db, "dict", "Ver6UFZhIf2U0LK8zjOd");
    // deleteDoc(docRef);

    //수정하기
    // const docRef = doc(db, "dict", "HF36l88oFXadtIotEpqb");
    // updateDoc(docRef, {isClicked: true});

    //추가하기
    // addDoc(collection(db, "dict"), {
    //추가할 데이터
    //   word: "new",
    //   isClicked: "false"
    // })

    // 콜렉션 > docs 순으로 접근해야
    // 콜렉션 불러오기 : collection(db, "dict")
    // docs 불러오기
    // const query = await getDocs(collection(db, "dict"));
    // console.log(query);
    // // 객체 
    // query.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });
  // }, []);

  return (
    <div style={{ color: "dimgray", textAlign: "center", height: "800px" }}>
      <h1
        style={{ cursor: "pointer", display: "grid", margin: "15px auto", width: "100%" }}
        onClick={() => history.push('/')}
      >📚우리말 단어장📚</h1>
      <hr />
      <h3 style={{ margin: "30px" }} >단어 추가하기</h3>
      <Container>
        <Contents>
          {/* !!!!게시글 목록 파이어스토어에 저장하기!!!! */}
          <h3>단어 <InputBox ref={wordInput} /></h3>
          <h3>의미 <InputBox ref={meaningInput} /> </h3>
          <h3>예문 <InputBox ref={exInput} /></h3>
          {/* <input>태그 사용시 value속성이 고정값이 아니라 나는 에러 발생(onChange handeler 어쩌구)
          => value값이 변하는 것({})이라면 defaultValue로 바꿔주면 오케이! */}
        </Contents>
        <AddButton style={{ textAlign: "center" }} onClick={addWord}>
          추가하기 🥰
        </AddButton>

      </Container>
    </div>
  );
};

const Container = styled.div`
border: solid #eee 2px;
border-radius: 10px;
width: 40%;
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
width: 60%;
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