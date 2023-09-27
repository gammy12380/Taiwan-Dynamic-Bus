import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const BubbleWrap = styled.div.attrs(() => ({}))`
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &.nearByBus-blue {
    width: 350px;
    height: 350px;
    right: 5%;
    bottom: 50%;
    border: 1px solid ${(props) => props.theme.lightBlue};
    @media (min-width: ${(props) => props.theme.size.tablet}) and (max-width: ${(props) => props.theme.size.laptop}) {
      right: -10%;
    }
    @media (min-width: ${(props) => props.theme.size.mobileL}) and (max-width: ${(props) => props.theme.size.tablet}) {
      width: 300px;
      height: 300px;
      right: -10%;
    }
    @media (max-width: ${(props) => props.theme.size.mobileL}) {
      width: 250px;
      height: 250px;
      right: -14%;
      bottom: 40%;
    }
  }
  &.searchBus-white {
    width: 250px;
    height: 250px;
    right: 5%;
    bottom: 30%;
    border: 1px solid ${(props) => props.theme.white};
    @media (min-width: ${(props) => props.theme.size.tablet}) and (max-width: ${(props) => props.theme.size.laptop}) {
      right: -5%;
    }
    @media (min-width: ${(props) => props.theme.size.mobileL}) and (max-width: ${(props) => props.theme.size.tablet}) {
      width: 200px;
      height: 200px;
      right: -5%;
    }
    @media (max-width: ${(props) => props.theme.size.mobileL}) {
      width: 150px;
      height: 150px;
      right: -7%;
    }
  }
  &.searchBus-yellow {
    width: 250px;
    height: 250px;
    left: 40%;
    bottom: -8%;
    border: 1px solid ${(props) => props.theme.white};
    @media (min-width: ${(props) => props.theme.size.tablet}) and (max-width: ${(props) => props.theme.size.desktop}) {
      left: -5%;
    }
    @media (min-width: ${(props) => props.theme.size.mobileL}) and (max-width: ${(props) => props.theme.size.tablet}) {
      width: 200px;
      height: 200px;
      left: -8%;
    }
    @media (max-width: ${(props) => props.theme.size.mobileL}) {
      width: 150px;
      height: 150px;
      left: -7%;
      bottom: -5%;
    }
  }
`;

const BubbleShadow = styled.div`
  ${({ className }: any) => {
    switch (className) {
      case 'nearByBus-blue':
        return css`
          background-color: #1cc8ee0f;
        `;
      case 'searchBus-white':
        return css`
          background-color: none;
        `;
      case 'searchBus-yellow':
        return css`
          background-color: #fcd42c12;
        `;
      default:
        return css`
          /* 默认样式属性 */
        `;
    }
  }}
  width: 90%;
  height: 90%;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const BubbleCircle = styled.div`
  ${({ className }: any) => {
    switch (className) {
      case 'nearByBus-blue':
        return css`
          background: linear-gradient(323.99deg, #1cc8ee 65.35%, #ffffff 89.01%),
            linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%);
          border: 4px solid #1cc8ee;
          box-shadow:
            1px 13px 10px 0px #131414,
            0px 0px 32px 0px #1cc8ee;
        `;
      case 'searchBus-white':
        return css`
          background: linear-gradient(344.08deg, #f1f1f1 17.96%, #ffffff 84.68%),
            linear-gradient(0deg, #f5f5f5, #f5f5f5);
          border: 4px solid #f1f1f1;
          box-shadow:
            0px 11px 18px 0px #131414,
            0px 0px 8px 0px #ffffff;
        `;
      case 'searchBus-yellow':
        return css`
          background: linear-gradient(16.05deg, #fcd42c 49.56%, #ffffff 86.1%),
            linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%);
          border: 4px solid #fcd42c;
          box-shadow:
            0px 11px 24px 0px #131414,
            0px 0px 39px 0px #fcd42c;
        `;
      default:
        return css`
          /* 默认样式属性 */
        `;
    }
  }}
  width: 90%;
  height: 90%;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OffSetDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;

function Bubble({ children, className }: any) {
  useEffect(() => {}, []);

  return (
    <BubbleWrap className={className}>
      <BubbleShadow className={className}>
        <BubbleCircle className={className}>
          <OffSetDiv>{children}</OffSetDiv>
        </BubbleCircle>
      </BubbleShadow>
    </BubbleWrap>
  );
}

export default Bubble;
