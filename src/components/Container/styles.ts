import styled from "styled-components";

interface IContainer {

}

export const Container = styled.div<IContainer>`
  width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.colors.mainBackground };
  color: ${({ theme }) => theme.colors.mainHeading };
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  
  @media(min-width: 720px) {
    align-items: center;
    height: 100vh;
  }
`;