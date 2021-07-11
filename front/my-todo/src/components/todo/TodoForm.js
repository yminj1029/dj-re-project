import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {
  MdCheckBoxOutlineBlank,
  MdcheckBox,
  MdRemoveCircleOutline,
  MdAdd,
} from 'react-icons/md';
const TodoTemplateBlock = styled.div`
  padding-left: 1rem;
  width: 50%;
  float: right;
  /*flex로 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 1rem;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  background: ${palette.yellow[4]};
  color: ${palette.gray[8]};
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  align-items: center; // 세로 중앙 정렬
  &:nth-child(even) {
    background: #f8f9fa;
  }
  .checkbox {
    cursor: pointer;
    flex: 1; // 차지할 수 있는 영역 모두 차지
    display: flex;
    align-items: center; // 세로 중앙 정렬
    svg {
      // 아이콘
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1; // 차지할 수 있는 영역 모두 차지
    }
    // 체크되었을 때 보여줄 스타일
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }

  // 엘리먼트 사이사이에 테두리를 넣어줌
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoInsert = styled.form`
  display: flex;
  width: 100%;
  background: ${palette.gray[7]};
  input {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    // 버튼을 제외한 영역을 모두 차지하기
    flex: 1;
  }
  button {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: ${palette.gray[5]};
    }
  }
`;
const TodoForm = () => {
  return (
    <TodoTemplateBlock>
      <Title>
        <h3>일정관리</h3>
      </Title>

      <TodoInsert>
        <input placeholder="할일을 입력하세요"></input>
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </TodoInsert>
      <Content>
        <div className="checkbox">
          <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
          <div className="text">할일1</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </Content>

      <Content>
        <div className="checkbox">
          <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
          <div className="text">할일1</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </Content>
      <Content>
        <div className="checkbox">
          <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
          <div className="text">dddddddddddddddddddddd</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </Content>
    </TodoTemplateBlock>
  );
};

export default TodoForm;
