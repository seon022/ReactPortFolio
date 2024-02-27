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
    box-sizing: border-box;
    &.pc{
        padding: 40px 20px 130px 20px;
    }
    &.mo{
        padding: 40px 10px 80px 10px;
    }
`


