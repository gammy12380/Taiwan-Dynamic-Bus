import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import GpsWSVG from '../assets/svg/gps-white.svg';
import SearchSVG from '../assets/svg/search-black.svg';
import Logo from '../components/global/Logo';
import Bubble from '../components/bubble/Bubble';
import styled from 'styled-components';
const Main = styled.main`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`;

const CopyRight = styled.footer`
  position: absolute;
  left: 5%;
  bottom: 20px;
  color: ${(props) => props.theme.white};
  @media (max-width: ${(props) => props.theme.size.desktop}) {
    left: 20%;
  }
  @media (min-width: ${(props) => props.theme.size.tablet}) and (max-width: ${(props) => props.theme.size.laptop}) {
    left: 40%;
  }
  @media (max-width: ${(props) => props.theme.size.tablet}) {
    right: 5%;
    left: auto;
    font-size: 10px;
  }
`;

const generateRandomPosition = (maxX: number, maxY: number) => {
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return {
    left: `${randomX}px`,
    top: `${randomY}px`,
  };
};

const generateRandomSize = (minSize: number, maxSize: number) => {
  const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  return `${size}px`;
};

function Home() {
  const [divCount] = useState(Math.floor(Math.random() * 6) + 5);
  const divs = Array.from({ length: divCount });
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  const randomCircle = () => {
    return divs.map((_, index) => {
      const random = generateRandomSize(20, 100);
      return (
        <div
          key={index}
          className='random-div'
          style={{
            ...generateRandomPosition(maxX, maxY),
            width: random,
            height: random,
            borderRadius: '50%',
            border: '1px solid #F5F5F5',
            position: 'absolute',
          }}
        />
      );
    });
  };
  return (
    <Main>
      {randomCircle()}
      <Logo isHome style={{ position: 'absolute', top: '50px', left: '50px', width: '200px' }}></Logo>
      <Link to='./BusStations'>
        <Bubble className='nearByBus-blue'>
          <img src={GpsWSVG} alt='gps-icon' style={{ width: '30px', height: '30px' }} />
          <span style={{ color: '#F5F5F5', fontSize: '20px', fontWeight: 'bold' }}>附近公車站</span>
        </Bubble>
      </Link>
      <Link to='./NearbyBus'>
        <Bubble className='searchBus-white'>
          <img src={SearchSVG} alt='gps-icon' style={{ width: '30px', height: '30px' }} />
          <span style={{ color: '#131414', fontSize: '20px', fontWeight: 'bold' }}>查詢公車</span>
        </Bubble>
      </Link>
      <Link to='./PassengerTransport'>
        <Bubble className='searchBus-yellow'>
          <img src={SearchSVG} alt='gps-icon' style={{ width: '30px', height: '30px' }} />
          <span style={{ color: '#131414', fontSize: '20px', fontWeight: 'bold' }}>查詢客運</span>
        </Bubble>
      </Link>
      <CopyRight>
        <span>Taiwan Bus &copy; Code: Gammy / Design: KT</span>
      </CopyRight>
    </Main>
  );
}

export default Home;
