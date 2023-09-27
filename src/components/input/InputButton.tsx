import { FC } from 'react';
import styled from 'styled-components';
interface InputProps {
  children?: JSX.Element;
  text?: string;
}
const InputWrap = styled.div`
  cursor: pointer;
  border-radius: 9px;
  border: 1px solid ${(props) => props.theme.lightBlue};
  position: relative;
  padding: 10px 12px;
`;

const InputStyle = styled.input``;

const InputButton: FC<InputProps> = ({ children, text }) => {
  return <InputWrap>{children ? children : <InputStyle type='submit' value={text} />}</InputWrap>;
};
export default InputButton;
