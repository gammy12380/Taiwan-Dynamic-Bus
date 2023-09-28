import styled from 'styled-components';

const BusLayout = styled.div`
  display: grid;
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    padding: 30px 120px;
    grid-template-columns: 360px auto;
    gap: 10px;
    position: relative;
  }
`;

const SearchBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 74px;
  box-shadow: 0px 4px 5px 0px #00000080;
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    box-shadow: none;
    top: 30px;
    left: 120px;
    height: fit-content;
    width: calc(100% - 60% - 120px);
    width: 360px;
  }
`;

const BusRoute = styled.div`
  display: flex;
  height: 100vh;
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`;

const KeyBoard = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 275px;
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    width: calc(100% - 60% - 120px);
    grid-row-start: 2;
    top: calc(30px + 70px);
    left: 120px;
    width: 360px;
  }
`;

const FillFixed = styled.div`
  display: block;
  height: 74px;
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    display: none;
  }
`;

const City = styled.div`
  padding: 10px 16px;
  color: ${(props) => props.theme.white};
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    min-height: 60px;
    display: grid;
    align-items: end;
    grid-row-start: 1;
    grid-column-start: 2;
  }
`;

const SearchRoute = ({ SearchBarContent, KeyBoardContent, BusRouteContent, CityContent }: any) => {
  return (
    <BusLayout>
      <FillFixed></FillFixed>
      <SearchBar>{SearchBarContent}</SearchBar>
      <City>{CityContent}</City>
      <KeyBoard>{KeyBoardContent}</KeyBoard>
      <BusRoute>{BusRouteContent}</BusRoute>
    </BusLayout>
  );
};
export default SearchRoute;
