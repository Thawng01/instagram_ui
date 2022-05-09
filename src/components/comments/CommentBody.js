import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";

const CommentBody = () => {
    return (
        <Container>
            <img src="/logo.png" alt="commentor-img" />
            <DetailContainer>
                <NameBodyContainer>
                    <p id="commentor-name">Thawng lian</p>
                    <p id="comment-body">
                        comment bodyfdfdf fdfdf fdfdf fdfdf drer3r{" "}
                    </p>
                </NameBodyContainer>
                <ReplyAndDateContainer>
                    <span id="date">12hr</span>
                    <span id="reply">Reply</span>
                </ReplyAndDateContainer>
            </DetailContainer>
            <IoHeartOutline id="heart-icon" />
        </Container>
    );
};

export default CommentBody;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px var(--side-margin);
    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }

    #heart-icon {
        font-size: 20px;
        cursor: pointer;
    }
`;

const DetailContainer = styled.div`
    margin-left: var(--side-margin);
    width: 100%;
`;

const NameBodyContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 12px;

    #commentor-name {
        font-size: 14px;
        font-weight: 600;
        padding-right: 6px;
    }
`;

const ReplyAndDateContainer = styled.div`
    display: flex;
    align-items: center;

    #date {
        font-size: 14px;
        color: gray;
    }

    #reply {
        color: gray;
        font-weight: 600;
        margin-left: 10px;
        font-size: 14px;
        cursor: pointer;
    }
`;
