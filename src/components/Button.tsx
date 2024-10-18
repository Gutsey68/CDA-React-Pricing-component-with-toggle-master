type ButtonProps = {
    text: string;
    buttonType?: 'primary' | 'secondary';
};

function Button({ text, buttonType = 'primary' }: ButtonProps) {
    if (buttonType === 'primary') {
        return (
            <button className="w-full border border-white rounded-lg py-2 text-white uppercase font-semibold tracking-wider hover:bg-white hover:text-indigo-600 transition-colors">
                {text}
            </button>
        );
    } else if (buttonType === 'secondary') {
        return (
            <button className="w-full border border-indigo-600 rounded-lg py-2 text-indigo-600 uppercase font-semibold tracking-wider hover:bg-indigo-400 hover:text-white transition-colors">
                {text}
            </button>
        );
    }
}
export default Button;
