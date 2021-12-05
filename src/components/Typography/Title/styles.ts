import styled from "styled-components";

export const Title = styled.h1`
  color: ${ ({ theme }) => theme.colors.mainHeading};
  font-family: ${ ({ theme }) => theme.typography.fonts[0].family};
  font-weight: ${ ({ theme }) => theme.typography.fonts[0].weights[1].value};

  @media(min-width: 720px) {
    text-align: left;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;