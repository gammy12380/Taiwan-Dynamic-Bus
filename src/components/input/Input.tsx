import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
interface InputProps {
  val: string;
  setInput: (value: string) => void;
}

const InputStyle = styled.input`
  width: 100%;
  padding: 10px 16px;
  background-color: ${(props) => props.theme.gray};
  outline: none;
  border-radius: 6px;
  border: none;
  color: ${(props) => props.theme.white};
  ::placeholder {
    color: ${(props) => props.theme.lightGray};
  }
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    font-size: 20px;
  }
`;

const Input: FC<InputProps> = ({ val, setInput }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return <InputStyle type='text' value={val} onChange={handleChange} placeholder='請選擇路徑或手動輸入關鍵字' />;
};
export default Input;
