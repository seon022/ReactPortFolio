import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed, fontSize, color }) => {
    TypingText.defaultProps = {
        fontSize: '24px', //기본값
        color: 'black', //기본값
    };
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);

    useEffect(() => {
        let typingText = text ? text : ''; //기본값
        let typingSpeed = speed ? speed : 300; //기본값
        const interval = setInterval(() => {
            setText((Text) => {
                let updated = Text;
                updated = Text + typingText[Count];
                return updated;
            });
            setCount(Count + 1);
        }, typingSpeed);
        Count === typingText.length && clearInterval(interval);
        return () => clearInterval(interval);
    });
    return <span style={{ fontSize: `${fontSize}`, color: `${color}` }}>{Text}</span>;
};

export default TypingText;
