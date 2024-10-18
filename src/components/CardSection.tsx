import { useValueContext } from '../context/valueContext';
import Card, { CardProps } from './Card';

function CardSection() {
    const { cardInfos } = useValueContext();

    return (
        <div className="mt-20 flex items-center max-md:flex-col max-md:gap-4">
            {cardInfos.map(card => (
                <Card
                    cardType={card.cardType as CardProps['cardType']}
                    price={card.price}
                    title={card.title}
                    sendSize={card.sendSize}
                    storage={card.storage}
                    usersAllowed={card.usersAllowed}
                    key={card.id}
                />
            ))}
        </div>
    );
}
export default CardSection;
