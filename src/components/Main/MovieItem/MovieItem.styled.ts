import styled from 'styled-components';

export const MovieItemContainer = styled.div`
  color: gray;
  margin: 1rem;
  width: 300px;
  height: 532px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 300px;
  height: 475px;
`;

export const Info = styled.div`
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
`;

export const Title = styled.div`
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
`;

export const Year = styled.div`
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  white-space: nowrap;
  border: 1px solid gray;
`;
