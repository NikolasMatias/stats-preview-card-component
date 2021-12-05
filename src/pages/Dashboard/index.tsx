import React, {useState} from 'react';
import { Container } from "~/components/Container/styles";
import Card from "~/components/Card";
import { Title, Bold, Description } from '~/components/Typography';
import useWindowDimensions from "~/hooks/useWindowDimensions";
import { ImageHeaderDesktop, ImageHeaderMobile } from '~/assets';
import ITicket from "~/modals/ITicket";

const Dashboard: React.FC = () => {
    const { width } = useWindowDimensions();
    const [ tickets ] = useState<ITicket[]>([
        {quantity: '10k+', complement: 'COMPANIES'},
        {quantity: '314', complement: 'TEMPLATES'},
        {quantity: '12M+', complement: 'QUERIES'},
    ]);

    //min-width: 720px

    return (
        <Container>
            <Card image={ width < 720 ? ImageHeaderMobile : ImageHeaderDesktop } tickets={tickets}>
                <Title>Get <Bold>insights</Bold> that help your business grow.</Title>
                <Description>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</Description>

            </Card>
        </Container>
    );
};

export default Dashboard;