import styled from "styled-components";

const Circlebg = ({children, type} )=>{
    return(
        <CircleWrap>
            <ul>
                <li className={type}></li>
                <li className={type}></li>
                <li className={type}></li>
                <li className={type}></li>
                <li className={type}></li>
            </ul>
            <p>{children}</p>
        </CircleWrap>
    )
}
export default Circlebg;

const CircleWrap = styled.div`

    position: relative;
    display: inline-block;
    padding: 0 10px;
    margin-left: 10px;
    ul{
        position: absolute;
        left: 50%;
        top: 0;
        display: flex;
        width: 100%;
        height: 120%;
        justify-content: center;
        align-items: center;
        padding: 0;
        background: none;
        transform: translateX(-50%);
    }
    li{
        display: block;
        height: 120%;
        border-radius: 100%;
        padding: 4px;
        background-color: #9FCBEA;
    }
    li.huge{
        width: 30%;
        margin: 0 -20px;
    }
    
    li.project{
        width: 34%;
        margin: 0 -16px;
    }
    li.wide{
        width: 28%;
        margin: 0 -10px;
    }
    p {
        position: relative;
        line-height: 100%;
        color: #fff;
    }
`