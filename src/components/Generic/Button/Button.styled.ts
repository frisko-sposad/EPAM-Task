import styled from 'styled-components';

interface BtnAction {
  active: boolean;
}

export const Btn = styled.button`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const SearchBtn = styled(Btn)`
  background-color: #c82333;
  padding: 10px;
`;

export const SearchByBtn = styled(Btn)<BtnAction>`
  background-color: #6c757d;
  border-color: #6c757d;
  margin-right: 10px;
  padding: 10px;
  background-color: ${(props) => props.active && '#c82333'};
`;

export const SortByBtn = styled(Btn)<BtnAction>`
  text-decoration: none;
  color: #000000;
  background: transparent;
  padding: 0 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  ${(props) => props.active && 'color:tomato; font-weight: 600'};
`;
