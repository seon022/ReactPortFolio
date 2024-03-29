import styled from 'styled-components';
import { useResponsiveApi } from '../context/responsive';
import { Shadow } from '../browserTem/Shadow';

import BrowserTop from '../browserTem/BrowserTop';
import M3Contents from '../mainSub/M3Contents';

const Main3 = () => {
    const { isMobile } = useResponsiveApi();

    return (
        <M3Wrap className={isMobile ? 'm2' : 'm2 pc_flex'}>
            <Web style={Shadow} className={isMobile ? 'webBox mo' : 'webBox'}>
                <BrowserTop />
                <M3Contents />
            </Web>
        </M3Wrap>
    );
};

export default Main3;

const M3Wrap = styled.div`
    max-width: 1480px;
    margin: 0 auto;
    margin-bottom: 60px;
    border-radius: 20px;
    &.m2.pc_flex {
        display: flex;
        justify-content: center;
        padding: 80px 20px 0 20px;
    }
    &.m2 {
        padding: 80px 16px 0 16px;
    }
`;
const Web = styled.div`
    border-radius: 20px;
    border: 1px solid #dcdcdc;
    background-color: #d8dde0;
    &.webBox {
        width: 100%;
        transition: 0.8s;
    }
    &.webBox.mo {
    }
`;
