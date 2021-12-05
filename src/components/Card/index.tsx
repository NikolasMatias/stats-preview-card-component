import React from "react";
import {Row, Content, Image, Ticket, QuantityTicket, ComplementTicket, Tickets, ImageContainer} from './styles'
import ITicket from "~/modals/ITicket";

interface ICard {
    image: string,
    tickets?: ITicket[]
}

const Card: React.FC<ICard> = ({ children, image , tickets}) => {
    return (
        <Row>
            <ImageContainer>
                <Image src={image} alt="Imagem de apresentação do Header"/>
            </ImageContainer>
            <Content>{children}</Content>
            {tickets && <Tickets>
                {tickets?.map((ticket, index) => {
                    return (
                        <Ticket key={`${ticket.complement} - ${index}`}>
                            <QuantityTicket>{ticket.quantity}</QuantityTicket>
                            <ComplementTicket>{ticket.complement}</ComplementTicket>
                        </Ticket>
                    );
                })}
            </Tickets>}
        </Row>
    );
}

export default Card;