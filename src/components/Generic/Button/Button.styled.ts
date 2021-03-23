import styled from 'styled-components';

export interface BtnAction {
  active: boolean;
}

export const Btn = styled.button<BtnAction>`
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

export const SearchByBtn = styled(Btn)`
  border-color: #6c757d;
  margin-right: 10px;
  padding: 10px;
  background-color: ${({ active }) => (active ? '#c82333' : '#6c757d')};
`;

export const SortByBtn = styled(Btn)`
  text-decoration: none;
  color: #000000;
  background: transparent;
  padding: 0 1rem;
  outline: none;
  ${({ active }) => active && 'color:tomato; font-weight: 600'};
`;
