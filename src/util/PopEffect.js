import styled from 'styled-components';

export const PopEffect = ({ children }) => {
    const Anim = styled.div`
        @keyframes PopAni {
            0% {
                transform: translate(0);
            }
            25% {
                transform: translate(8px);
            }
            50% {
                transform: translate(0);
            }
            75% {
                transform: translate(8px);
            }
        }
    `;
    return <>{children}</>;
};
