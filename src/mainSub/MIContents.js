

import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";
import { Link } from "react-scroll";

import BrowserContents from "../browserTem/BrowserContents";
import TypingText from "../util/TypingText";

const MIContents= ()=> {
    const { isMobile } = useResponsiveApi();
    return(
        <BrowserContents>
            <MIWrap className={isMobile? "about_mo": ""}>
                <div className="titleWrap">
                    <div className="googleColor"><span className="letterBlue">S</span><span className="letterRed">e</span><span className="letterYellow">on</span><span className="letterBlue">Y</span><span className="letterGr">ou</span><span className="letterRed">ng</span></div>
                    <div className="typing">{<TypingText text="PORTFOLIO" speed={120} fontSize="34px" color="#222"  />}</div>
                </div>
                <Link to="aboutSection" spy={true} smooth={true} >
                    <div className="goToAbout">아래로</div>
                </Link>
                <Skill className={isMobile? 'skill mo': 'skill'}>
                    <div className="skillIn">
                        <p className="html">html</p>
                        <p className="css">css</p>
                        <p className="js">js</p>
                        <p className="react">react</p>
                        <p className="ts">ts</p>
                        <p className="nodejs">nodejs</p>
                        <p className="jquery">jquery</p>
                    </div>
                </Skill>
            </MIWrap>
        </BrowserContents>
    )
}

export default MIContents;

const MIWrap = styled.div`

text-align: center;
padding: 60px 0;
&.about_mo{
    padding-top: 30px;
}
.titleWrap{
    padding : 20px;
    margin-bottom: 100px;
}
.googleColor{
    font-size: 32px;
    font-weight: 900;
    line-height: 1.5;
}
.letterBlue{
    color: #4285F4;
}

.letterRed{
    color: #EA4335;
}

.letterGr{
    color: #34A853;
}

.letterYellow{
    color: #FBBC05;
}
.typing{
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
}
.goToAbout{
        position: absolute;
        z-index: 1000;
        top: 60%;
        right: 50%;
        width: 50px;
        height: 50px;
        margin-right: -20px;
        border-radius: 50%;
        text-indent: -9999px;
        color: #222;
        background-color: rgba(0,0,0, 0.2);
        background-image: url(img/icon-down-line.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% auto;
        transition: 0.4s;
    }
    
.goToAbout:hover{
    transform: translateY(6px);
    transition: 0.4s;
}

`
const Skill = styled.div`
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    left: 50%;
    border-radius: 6px 6px 4px 4px;
    background-color: rgba(30,30,30, 0.2);
    text-align: center;
    
        &.skill{
            width: 42vw;
            margin-left: -21vw;
            padding: 10px;
        }
        &.mo{
            width: 76vw;
            margin-left: -38vw;
            padding: 8px;
        }
        .skillIn{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 94%;
            margin: 0 auto;
        }

        p{
            box-sizing: border-box;
            text-indent: -9999px;
            background-position: center;
            background-repeat: no-repeat;
        }
        &.skill p{
            width: 60px;
            height: 60px;
            margin: 0 6px;
            background-size: contain;
        }
        &.mo p{
            width: 13%;
            height: 40px;
            background-size: contain;
        }
        .html{
            background-image: url(img/icon-html.png);
        }
        
        .css{
            background-image: url(img/icon-css.png);
        }
        
        .js{
            background-image: url(img/icon-js.png);
        }
        &.skill .html, &.skill .css{
            max-height: 50px;
        }
        &.skill .js{
            max-height: 50px;
        }
        .react{
            background-image: url(img/icon-react.png);
        }
        .ts{
            background-image: url(img/icon-typescript.png);
        }
        .nodejs{
            background-image: url(img/icon-ts.svg);
        }
        .jquery{
            background-image: url(img/icons8-jquery.png);
        }
`