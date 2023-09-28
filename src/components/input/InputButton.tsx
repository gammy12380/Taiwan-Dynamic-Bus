import { FC } from 'react';
import styled from 'styled-components';
interface InputProps {
  children?: JSX.Element;
  text?: string;
  isBlue?: boolean;
  handlerKeyBoard?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
}
const InputWrap = styled.div`
  cursor: pointer;
  border-radius: 9px;
  border: 1px solid ${(props) => props.theme.lightBlue};
  position: relative;
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0px 0px 2px 0px ${(props) => props.theme.lightBlue},
    0px 0px 6px 0px ${(props) => props.theme.lightBlue};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow:
      0px 0px 4px 0px ${(props) => props.theme.yellow},
      0px 0px 6px 0px ${(props) => props.theme.yellow};
  }
`;

const InputStyle = styled.input`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  &.isBlue {
    color: ${(props) => props.theme.lightBlue};
  }
  &.isWhite {
    color: ${(props) => props.theme.white};
  }
`;

const InputButton: FC<InputProps> = ({ children, text, style, isBlue, handlerKeyBoard }) => {
  return (
    <InputWrap style={style} onClick={handlerKeyBoard}>
      {children ? children : <InputStyle type='submit' value={text} className={isBlue ? 'isBlue' : 'isWhite'} />}
    </InputWrap>
  );
};
export default InputButton;
