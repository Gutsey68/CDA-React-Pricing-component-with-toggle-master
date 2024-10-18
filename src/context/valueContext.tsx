import { createContext, ReactNode, useContext, useState } from 'react';

interface CardInfo {
    id: string;
    title: string;
    storage: string;
    usersAllowed: number;
    sendSize: number;
    price: number;
    cardType: string;
}

interface ValueContextProps {
    cardInfos: CardInfo[];
    togglePrices: () => void;
    toggleCardType: boolean;
}

const initialCardInfos: CardInfo[] = [
    { id: '1', title: 'Basic', storage: '500 GB', usersAllowed: 2, sendSize: 3, price: 19.99, cardType: 'others' },
    { id: '2', title: 'Professional', storage: '1 TB', usersAllowed: 2, sendSize: 3, price: 24.99, cardType: 'professional' },
    { id: '3', title: 'Master', storage: '2 TB', usersAllowed: 2, sendSize: 20, price: 39.99, cardType: 'others' }
];

const ValueContext = createContext<ValueContextProps | undefined>(undefined);

export const ValueProvider = ({ children }: { children: ReactNode }) => {
    const [cardInfos, setCardInfos] = useState<CardInfo[]>(initialCardInfos);
    const [toggleCardType, setToggleCardType] = useState<boolean>(true);

    const togglePrices = () => {
        setToggleCardType(!toggleCardType);
        setCardInfos(prevCardInfos =>
            prevCardInfos.map(card => ({
                ...card,
                price:
                    card.price === 19.99
                        ? 199.99
                        : card.price === 199.99
                        ? 19.99
                        : card.price === 24.99
                        ? 249.99
                        : card.price === 249.99
                        ? 24.99
                        : card.price === 39.99
                        ? 399.99
                        : card.price === 399.99
                        ? 39.99
                        : card.price
            }))
        );
    };

    return <ValueContext.Provider value={{ cardInfos, togglePrices, toggleCardType }}>{children}</ValueContext.Provider>;
};

export const useValueContext = () => {
    const context = useContext(ValueContext);
    if (context === undefined) {
        throw new Error('useValueContext must be used within a ValueProvider');
    }
    return context;
};
