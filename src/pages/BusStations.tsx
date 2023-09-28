import React, { useEffect, useState } from 'react';
import Input from '../components/input/Input';
import InputButton from '../components/input/InputButton';
import SearchRoute from '../components/layout/SearchRoute';
import Logo from '../components/global/Logo';
import styled from 'styled-components';
import { keyBoards } from '../components/input/KeyBoards';

const KeyBoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  width: 768px;
  @media screen and (min-width: ${(props) => props.theme.size.laptop}) {
    max-width: 768px;
  }
`;

function BusStations() {
  const [inputVal, setInputVal] = useState<string>('');

  useEffect(() => {
    // 可以在 useEffect 中使用 inputVal，也可以为其添加类型
    console.log(inputVal);
  }, [inputVal]);

  const KeyBoardsRender = () => {
    const isBlues = [2, 3, 4, 8, 9, 13, 14, 18, 19, 20];
    const isSpan3 = ['設定', '回上一頁'];
    const isSpan2 = ['手動輸入'];
    return keyBoards.bus.key.map((item, index) => {
      let gridColumn = '1 span';
      if (index === 0 || isSpan3.includes(item)) {
        gridColumn = '3 span';
      } else if (isSpan2.includes(item)) {
        gridColumn = '2 span';
      }
      return (
        <InputButton
          isBlue={isBlues.includes(index + 1)}
          style={{ gridColumn }} // 设置 gridColumn
          text={item}
          key={index}
          handlerKeyBoard={() => handlerKeyBoard(item)} // 传递参数 item
        ></InputButton>
      );
    });
  };

  const handlerKeyBoard = (val: any) => {
    setInputVal((prev) => prev + val);
  };

  const busRoute = ['紅10', '紅10區', '紅12'];

  const BusRouterRender = () => {
    return busRoute.map((item, index) => (
      <li key={index} style={{ padding: '10px 16px', color: 'white' }}>
        {item}
      </li>
    ));
  };

  return (
    <div style={{ display: 'grid' }}>
      <SearchRoute
        SearchBarContent={
          <div style={{ display: 'flex', gap: '10px', alignItems: 'end' }}>
            <Logo style={{ minWidth: '132px' }} />
            <Input val={inputVal} setInput={setInputVal}></Input>
          </div>
        }
        CityContent={<div>City</div>}
        KeyBoardContent={
          <div
            style={{
              height: '550px',
              backgroundColor: 'var(--gray)',
              borderRadius: '10px',
              padding: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
            }}
          >
            <KeyBoardGrid>{KeyBoardsRender()}</KeyBoardGrid>
          </div>
        }
        BusRouteContent={<ul style={{ width: '100%' }}>{BusRouterRender()}</ul>}
      ></SearchRoute>
    </div>
  );
}

export default BusStations;
