import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import moment from 'moment';

const CalendarTemplateBlock = styled.div`
  width: 50%;
  padding-right: 1rem;
  float: left;

  display: inline-table;
  text-align: left;
  h3 {
    margin: 1rem;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    height: 500px;
  }
  td {
    vertical-align: top;
    border: 3.5px solid ${palette.yellow[1]};
    width: 100px;
  }
`;

const Title = styled.div`
  color: ${palette.gray[8]};
  background: ${palette.yellow[4]};
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarTemplate = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  //startOf('month') : 그 달의 시작하는 week()
  const firstWeek = today.clone().startOf('month').week();
  //endOf('month'): 그 달의 끝나는 week()
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53 //1년은 52주, 며칠 더 있다면 53주로 표현해야함.
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{ backgroundColor: 'yellow' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index} style={{ backgroundColor: 'gray' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <CalendarTemplateBlock>
      <Title>
        <h3>캘린더</h3>
      </Title>
      <div>
        <button
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'));
          }}
        >
          이전달
        </button>
        <span> {today.format('YYYY년 MM월')} </span>
        <button
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'));
          }}
        >
          다음달
        </button>
      </div>
      <table>
        <tbody>
          <tr style={{ 'text-align': 'center' }}>
            <td>SUN</td>
            <td>MON</td>
            <td>TUE</td>
            <td>WED</td>
            <td>THU</td>
            <td>FRI</td>
            <td>SAT</td>
          </tr>
          {calendarArr()}
        </tbody>
      </table>
    </CalendarTemplateBlock>
  );
};

export default CalendarTemplate;
