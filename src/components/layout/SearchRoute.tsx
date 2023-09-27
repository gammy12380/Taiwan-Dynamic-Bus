import styled from 'styled-components';

const BusLayout = styled.div`
  display: grid;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    padding: 30px 120px;
    grid-template-columns: 40% 60%;
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
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    box-shadow: none;
    top: 30px;
    left: 120px;
    min-height: 80px;
    width: calc(100% - 60% - 120px);
  }
`;

const BusRoute = styled.div`
  display: flex;
  height: 100vh;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`;

const KeyBoard = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    width: calc(100% - 60% - 120px);
    grid-row-start: 2;
    top: calc(30px + 80px);
    left: 120px;
  }
`;

const FillFixed = styled.div`
  display: block;
  height: 74px;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    display: none;
  }
`;

const City = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    min-height: 80px;
    display: grid;
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
