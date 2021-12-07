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
    text-align: left;
  }
`;

export const Content = styled.div`
  padding: 1rem;

  @media(min-width: 720px) {
    grid-area: content;
    margin: 2rem 1rem 0 1rem;
  }

  @media(min-width: 992px) {
    margin: 3rem 4rem 0 2rem;
  }

  @media(min-width: 1200px) {
    margin: 3rem 5rem 0 3rem;
  }

  @media(min-width: 1400px) {
    margin: 3rem 5rem 0 3rem;
  }
`;

export const Tickets = styled.div`
  font-family: 'Lexenda Deca', sans-serif;
  display: flex;
  flex-direction: column;
  
  @media(min-width: 720px) {
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    margin: 1.5rem 5rem 1.5rem 3rem;
    grid-area: tickets;
  }
`;

export const Ticket = styled.div`
    margin: 1.5rem 0 1.5rem 0;

  @media(min-width: 720px) {
    margin: 0 .5rem 0 .5rem;
  }
  
  @media(min-width: 1400px) {
    margin: 0 2rem 0 2rem;
  }
`;

export const QuantityTicket = styled.h2`
  color: ${({ theme }) => theme.colors.stats};
  @media(min-width: 720px) {
    font-size: 1rem;
  }

  @media(min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const ComplementTicket = styled.p`
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.statHeadings};

  @media(min-width: 720px) {
    font-size: .6rem;
  }

  @media(min-width: 992px) {
    font-size: .8rem;
  }
`;

export const ImageContainer = styled.div`
  height: 30vh;
  width: 100%;
  border-radius: 10px 10px 0 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    border-radius: 10px 10px 0 0;
    background: ${ ({ theme }) =>  theme.colors.accentBackground};
    background-size: cover;
    
    @media(min-width: 720px) {
      border-radius: 0 10px 10px 0;
    }

    @media(min-width: 720px) {
      height: 60vh;
    }
  }
`;

export const Image = styled.img`
  height: 30vh;
  width: 100%;
  border-radius: 10px 10px 0 0;
  position: relative;

  @media(min-width: 720px) {
    grid-area: image;
    border-radius: 0 10px 10px 0;
    height: 60vh;
  }
`