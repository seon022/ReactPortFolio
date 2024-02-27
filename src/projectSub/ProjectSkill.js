import styled from "styled-components";

const ProjectSkill = ({skill1, skill2, skill3, skill4})=> {
    return(
        <SkillWrap>
            <div className="pr_skills">
                <div className="pr_head">
                    skills
                </div>
                <div className="skillBox">
                    <p className={skill1}>{skill1}</p>
                    <p className={skill2}>{skill2}</p>
                    <p className={skill3}>{skill3}</p>
                    <p className={skill4}>{skill4}</p>
                </div>
            </div>
        </SkillWrap>
    );
}
export default ProjectSkill;

const SkillWrap = styled.div`

    .pr_skills{
            font-weight: 700;
            margin-bottom: 20px;
        }
    .pr_head{
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 15px;
    }
    .skillBox{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    .skillBox p{
        padding: 4px 10px;
        margin: 0 10px 10px 0;
        border-radius: 10px;
        font-weight: 700;
        color: #fff;
    }

    .React{
        background-color: #65A0E9;
    }
    .JavaScript{
        background-color: #EC9490;
    }
    .Styled-components{
        background-color: grey;
    }
    .HTML{
        background-color: grey;
    }
    .CSS{
        background-color: grey;
    }
    .jQuery{
        background-color: #2451A7;
    }
`