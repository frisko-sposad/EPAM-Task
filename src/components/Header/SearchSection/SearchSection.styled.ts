import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const SearchByContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`;

export const SearchByBtnContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const SearchByBtnTitle = styled.span`
  margin: 10px 10px 10px 0;
`;
