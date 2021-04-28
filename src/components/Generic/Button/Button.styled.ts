import styled from 'styled-components';

export interface BtnAction {
  active: boolean;
}

export const Btn = styled.span<BtnAction>`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const SearchBtn = styled(Btn)`
  ${({ active }) => (active ? 'color: white; background-color: #c82333;' : 'color: tomato; background-color: white;')};
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
  background: transparent;
  padding: 0 1rem;
  outline: none;
  color: #000000;
  ${({ active }) => active && 'font-weight: 600; color: tomato;'};
`;
