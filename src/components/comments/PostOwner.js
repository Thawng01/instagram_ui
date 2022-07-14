import styled from "styled-components";
import formatDate from "../commons/formatDate";

const PostOwner = ({ user }) => {
    const createdAt = formatDate(new Date(user?.createdAt).getTime());

    return (
        <Container>
            <img src={user?.user?.profileImg} alt="post-owner-img" />
            <NameContainer>
                <p>
                    {user?.user?.username}{" "}
                    <span id="caption">{user?.caption}</span>
                </p>
                <span id="date">{createdAt}</span>
            </NameContainer>
        </Container>
    );
};

export default PostOwner;
const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 var(--side-margin);
    height: 70px;
    border-bottom: 0.1px solid #f1f1f1;

    img {
        height: 35px;
        width: 35px;
        border-radius: 50%;
    }
`;

const NameContainer = styled.div`
    margin-left: 15px;
    p {
        font-weight: 600;
        font-family: var(--font);
    }

    #caption {
        font-weight: 400;
    }

    #date {
        font-size: 11px;
        color: gray;
        margin-top: 9px;
        font-weight: 300;
    }
`;
