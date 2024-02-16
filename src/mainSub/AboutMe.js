import styled from "styled-components";

const AboutMe =()=> {
    return(
        <div>
            <MyTitle>
                <div>
                    About Me!
                </div>
                <div>안녕하세요, 강선영입니다.</div>
            </MyTitle>
        </div>
    )
}

export default AboutMe;

const MyTitle= styled.div`
    font-size: 30px;
    font-weight: 900;
`