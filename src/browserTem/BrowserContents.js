import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import MIContents from "../mainSub/MIContents";


const BrowserContents = ({children}) => {
    const { isMobile } = useResponsiveApi();
    return(
        <BCWrap className={isMobile? 'mo' : 'pc'}>
            {children}
        </BCWrap>
    );
}

export default BrowserContents;

const BCWrap = styled.div`
    position: relative;
    border-radius: 0 0 20px 20px;
    background-color: #fff;
    &.pc{
        padding: 40px 0 130px 0;
    }
    &.mo{
        padding: 40px 0 80px 0;
    }
`


