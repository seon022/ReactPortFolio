import styled from "styled-components";
import SectionFiles from "../mainSub/SectionFiles";
import { useResponsiveApi } from "../context/responsive";

const Gnb = ()=>{
    const { isMobile } = useResponsiveApi();
    return(
        <GnbWrap>
            <div className={isMobile? "fileBox mo" : "fileBox"}>
                <SectionFiles />
            </div>
        </GnbWrap>
    )
}

export default Gnb;

const GnbWrap = styled.div`

.fileBox{
        position: relative;
        transition: 0.8s;
    }
    .fileBox.mo{
        width: 100%;
    }
`