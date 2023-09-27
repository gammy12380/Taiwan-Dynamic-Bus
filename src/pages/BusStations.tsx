import React, { useEffect, useState } from 'react';
import Input from '../components/input/Input';
import InputButton from '../components/input/InputButton';
import SearchRoute from '../components/layout/SearchRoute';
function BusStations() {
  const [inputVal, setInputVal] = useState<string>('');

  useEffect(() => {
    // 可以在 useEffect 中使用 inputVal，也可以为其添加类型
    console.log(inputVal);
  }, [inputVal]);

  return (
    <div style={{ display: 'grid' }}>
      <SearchRoute
        SearchBarContent={
          <div>
            <Input val={inputVal} setInput={setInputVal}></Input>
          </div>
        }
        CityContent={<div>City</div>}
        KeyBoardContent={
          <div>
            <InputButton>{<p>13</p>}</InputButton>
            <InputButton text='手動輸入' />
          </div>
        }
        BusRouteContent={
          <div>
            <p>請搜尋公車路線</p>
          </div>
        }
      ></SearchRoute>
    </div>
  );
}

export default BusStations;
