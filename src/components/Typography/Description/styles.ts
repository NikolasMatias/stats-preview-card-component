import styled from "styled-components";

export const Description = styled.h3`
  color: ${ ({ theme }) =>  theme.colors.mainParagraph};
  font-family: ${ ({ theme }) => theme.typography.fonts[0].family};
  font-weight: ${ ({ theme }) => theme.typography.fonts[0].weights[1].value};
  text-align: center;
  margin-top: 1rem;

  @media(min-width: 720px) {
    text-align: left;
    font-size: .7rem;
  }

  @media(min-width: 1200px) {
    font-size: .9rem;
  }

  @media(min-width: 1400px) {
    font-size: 1rem;
  }
`;