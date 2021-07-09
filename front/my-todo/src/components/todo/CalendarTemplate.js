import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CalendarTemplateBlock = styled.div`
  width: 50%;
  padding-right: 1rem;
  background: ${palette.gray[2]};
  float: left;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const CalendarTemplate = () => {
  return (
    <CalendarTemplateBlock>
      <h3>Calendar</h3>
      <div className="calendar">
        <div className="header">
          <div className="year-month"></div>
          <div className="nav">
            <button className="nav-btn go-prev">&lt;</button>
            <button className="nav-btn go-today">Today</button>
            <button className="nav-btn go-next">&gt;</button>
          </div>
        </div>
        <div className="main">
          <div className="days">
            <div className="day">일</div>
            <div className="day">월</div>
            <div className="day">화</div>
            <div className="day">수</div>
            <div className="day">목</div>
            <div className="day">금</div>
            <div className="day">토</div>
          </div>
        </div>
        <div className="dates"></div>
      </div>
    </CalendarTemplateBlock>
  );
};

export default CalendarTemplate;
