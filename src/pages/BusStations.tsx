import React, { useEffect, useState } from 'react';
import Input from '../components/input/Input';
import SearchRoute from '../components/layout/SearchRoute';
function BusStations() {
  const [inputVal, setInputVal] = useState<string>('');

  useEffect(() => {
    // 可以在 useEffect 中使用 inputVal，也可以为其添加类型
    console.log(inputVal);
  }, [inputVal]);

  return (
    <div>
      <SearchRoute
        SearchBarContent={
          <div>
            <Input val={inputVal} setInput={setInputVal}></Input>
          </div>
        }
        KeyBoardContent={
          <div>
            <p>KeyBoardContent</p>
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
