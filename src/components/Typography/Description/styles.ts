import styled from "styled-components";

export const Description = styled.h3`
  color: ${ ({ theme }) =>  theme.colors.mainParagraph};
  font-family: ${ ({ theme }) => theme.typography.fonts[0].family};
  font-weight: ${ ({ theme }) => theme.typography.fonts[0].weights[1].value};
  text-align: center;
  margin-top: 1rem;
`;