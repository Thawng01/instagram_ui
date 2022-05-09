import styled from "styled-components";

const PostOwner = () => {
    return (
        <Container>
            <img src="/logo.png" alt="post-owner-img" />
            <NameContainer>
                <p>Lian Cung</p>
                <span>23hr</span>
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
    }

    span {
        font-size: 12px;
        color: gray;
        margin-top: 9px;
    }
`;
