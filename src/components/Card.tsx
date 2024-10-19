import Button from './Button';

export type CardProps = {
    title: string;
    price: number;
    storage: string;
    usersAllowed: number;
    sendSize: number;
    cardType?: 'professional' | 'others';
};

function Card({ title, price, storage, usersAllowed, sendSize, cardType = 'professional' }: CardProps) {
    if (cardType === 'professional') {
        return (
            <section className="w-[350px] h-[501px] rounded-xl flex items-center justify-center flex-col p-8 bg-gradient-to-tl from-indigo-500 to-indigo-300 text-white font-semibold gap-4 shadow-md">
                <h2 className="text-xl tracking-wide">{title}</h2>
                <p className="text-7xl font-bold tracking-wide flex items-center gap-2 mb-4">
                    <span className="text-5xl mt-1">$</span> {price}
                </p>
                <hr className="w-full border-white/40" />
                <p>{storage} Storage</p>
                <hr className="w-full border-white/40" />

                <p>{usersAllowed} Users Allowed</p>
                <hr className="w-full border-white/40" />

                <p>Send up to {sendSize} GB</p>
                <hr className="w-full mb-4 border-white/40" />

                <Button text="learn more" />
            </section>
        );
    } else {
        return (
            <section className="max-md:w-[350px] max-md:h-[501px] w-[350px] h-[453px] rounded-xl flex items-center justify-center flex-col p-8 bg-white text-gray-900 font-semibold gap-4 shadow-md">
                <h2 className="text-xl tracking-wide">{title}</h2>
                <p className="text-7xl font-bold tracking-wide flex items-center gap-2 mb-4">
                    <span className="text-5xl mt-1">$</span> {price}
                </p>
                <hr className="w-full border-gray/40" />
                <p>{storage} Storage</p>
                <hr className="w-full border-gray/40" />

                <p>{usersAllowed} Users Allowed</p>
                <hr className="w-full border-gray/40" />

                <p>Send up to {sendSize} GB</p>
                <hr className="w-full mb-4 border-gray/40" />

                <Button buttonType="secondary" text="learn more" />
            </section>
        );
    }
}
export default Card;
