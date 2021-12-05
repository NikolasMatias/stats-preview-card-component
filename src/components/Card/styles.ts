import styled from "styled-components";

export const Row = styled.div`
  text-align: center;
  width: 90vw;
  height: auto;
  border-radius: 0 0 10px 10px;
  margin: 5vh 0 5vh 0;
  background-color: ${ ({ theme }) => theme.colors.cardBackground };

  @media(min-width: 720px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas: 
      "content image"
      "content image"
      "tickets image";

    width: 75vw;
    height: 60vh;
    border-radius: 10px 0 0 10px;
  }
`;

export const Content = styled.div`
  padding: 1rem;

  @media(min-width: 720px) {
    grid-area: content;
  }
`;

export const Tickets = styled.div`
  font-family: 'Lexenda Deca', sans-serif;
  display: flex;
  flex-direction: column;
  
  @media(min-width: 720px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: 1.5rem 0 1.5rem 0;
    grid-area: tickets;
  }
`;

export const Ticket = styled.div`
    margin: 1.5rem 0 1.5rem 0;
  
  @media(min-width: 720px) {
    margin: 0 1.5rem 0 1.5rem;
  }
`;

export const QuantityTicket = styled.h2`
  color: ${({ theme }) => theme.colors.stats};`;

export const ComplementTicket = styled.p`
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.statHeadings};
`;

export const Image = styled.img`
  height: 30vh;
  width: 100%;
  border-radius: 10px 10px 0 0;
  position: relative;
  
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    background-color: ${ ({ theme }) =>  theme.colors.accent};
  }

  @media(min-width: 720px) {
    grid-area: image;
    border-radius: 0 10px 10px 0;
    height: 60vh;
  }
`