import React from "react";
import {Row, Content, Image, Ticket, QuantityTicket, ComplementTicket, Tickets} from './styles'
import ITicket from "~/modals/ITicket";

interface ICard {
    image: string,
    tickets?: ITicket[]
}

const Card: React.FC<ICard> = ({ children, image , tickets}) => {
    return (
        <Row>
            <Image src={image} alt="Imagem de apresentação do Header"/>
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