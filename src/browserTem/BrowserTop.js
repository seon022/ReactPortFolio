import styled from "styled-components";
import { useResponsiveApi } from "../context/responsive";

const BrowserTop = ()=> {
    const { isMobile } = useResponsiveApi();

    return(
        <BrowTop>
            <Tap>
                <Dots>
                    <p className="red">red</p>
                    <p className="yellow">ye</p>
                    <p className="green">gr</p>
                </Dots>
                <NowTap>
                    {isMobile? <p>FRONT-END</p> : <p>FRONT-END DEVELOPER</p>}
                    <p className="tapclose">닫기</p>
                </NowTap>
                <div className="tapPlus">plus</div>
            </Tap>
            <AddressBar>
                <BarLeftWrap>
                    {isMobile? 
                        <div className="barLeft">
                            <p className="back">back</p>
                        </div>
                        : <div className="barLeft">
                            <p className="back">back</p>
                            <p className="forward">forward</p>
                            <p className="refresh">refresh</p>
                            <p className="home">home</p>
                        </div>
                    }
                    <AddressBox>
                        <p className="pageInfo">pageInfo</p>
                        <div className="addressLetter">developer/강선영</div>
                        <p className={isMobile? "zoom hideInMobile" :"zoom" }>zoom</p>
                        <p className={isMobile? "bookmark hideInMobile": "bookmark" }>bookmark</p>
                    </AddressBox>
                </BarLeftWrap>
                <BarRight>
                    <p className={isMobile? "list hideInMobile" : "list"}>list</p>
                    <p className={isMobile? "sidePannel hideInMobile" : "sidePannel"}>sidePannel</p>
                    <p className="more">more</p>
                </BarRight>
            </AddressBar>
        </BrowTop>
    );
}
export default BrowserTop;



const BrowTop = styled.div`

.address{
}
.back{
    background-image: url(img/arrow_back.svg);
}
.forward{
    background-image: url(img/arrow_forward.svg);
}
.refresh{
    background-image: url(img/refresh.svg);
}
.home{
    background-image: url(img/home.svg);
}

.zoom{
    margin-left: 18px;
    background-image: url(img/zoom_in.svg);
}
.bookmark{
    margin: 0 10px;
    background-image: url(img/star.svg);
}

.list{
    background-image: url(img/queue_music.svg);
}
.sidePannel{
    background-image: url(img/side_navigation.svg);
}
.more{
    background-image: url(img/more_vert.svg);
}
`

const Tap = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;   
    padding: 10px 0 0 0;
    .tapPlus{
        width: 20px;
        height: 20px;
        margin-left: 10px;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        text-indent: -9999px;
        background-image: url(img/icon-plus.svg);
    }
`
const NowTap = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    font-weight: 900;
    padding: 10px 10px;
    margin-bottom: -2px;
    border-radius: 10px 10px 0 0 ;
    background-color: #F6F6F6;

        .tapName{
            width: 22vw;
            font-size: 13px;
        }
        .tapclose{
            width: 20px;
            height: 20px;
            margin-left: 20px;
            background-size: 18px auto;
            background-position: center;
            background-repeat: no-repeat;
            text-indent: -9999px;
            background-image: url(img/icon-close.svg);
        }
`


const Dots = styled.div`

    display: flex;
    align-items: center;    
    margin-left: 8px;
    margin-bottom: 6px;
        p{
            width: 16px;
            height: 16px;
            margin-left: 8px;
            text-indent: -9999px;
            border-radius: 50%;
        }
        .red{
            background-color: #FF554E;
        }
        .yellow{
            background-color: #FDB528;
        }
        .green{
            background-color: #25C338;
            margin-top: 2px;
        }

`
const AddressBar =styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100px;
    background-color: #F6F6F6;
    padding: 8px 0;

            p{
                width: 26px;
                height: 26px;
                text-indent: -9999px;
                background-size: 26px 26px;
                background-position: center;
                background-repeat: no-repeat;
            }
            .addressLetter{
                width: 100%;
                margin-left: 6px;
                max-width: 180px;
            }
`

const BarLeftWrap = styled.div`

display: flex;

    .barLeft{
        display: flex;
        align-items: center;
        margin-top: 6px;
    }
    .barLeft p {
        margin-left: 10px;
    }
    `
const AddressBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding: 4px 10px 4px 0;
    background-color: #fff;
    border-radius: 20px;
    p{
        width: 40px;
        height: 30px;
        background-size: 26px auto;
    }
    p.pageInfo{
        margin-left: 10px;
        background-size: 26px auto;
        background-image: url(img/pageinfo.svg);
    } 

`
const BarRight = styled.div`
    display: flex;
    align-items: center;   

    p{
        margin-top: 4%px;
        margin-right: 12px;
        background-size: 24px auto;
    }
`