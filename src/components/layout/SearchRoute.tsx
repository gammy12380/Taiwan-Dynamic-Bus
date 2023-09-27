import styled from 'styled-components';

const BusLayout = styled.div`
  display: grid;
`;

const SearchBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 74px;
  box-shadow: 0px 4px 5px 0px #00000080;
`;

const BusRoute = styled.div`
  display: flex;
`;

const KeyBoard = styled.div`
  display: flex;
`;

const FillFixed = styled.div`
  display: block;
  height: 74px;
`;

const SearchRoute = ({ SearchBarContent, KeyBoardContent, BusRouteContent }: any) => {
  return (
    <BusLayout>
      <FillFixed></FillFixed>
      <SearchBar>{SearchBarContent}</SearchBar>
      <KeyBoard>{KeyBoardContent}</KeyBoard>
      <BusRoute>{BusRouteContent}</BusRoute>
    </BusLayout>
  );
};
export default SearchRoute;
