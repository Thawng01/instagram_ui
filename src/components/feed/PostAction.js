import styled from "styled-components";
import { IoHeartOutline, IoBookmarkOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";

import { Flex } from "../../styles/Flex.styles";
const PostAction = () => {
    return (
        <Container>
            <Left>
                <IoHeartOutline className="card-action-icon " />
                <AiOutlineComment className="card-action-icon" />
                <FiSend className="card-action-icon" />
            </Left>
            <IoBookmarkOutline className="card-action-icon" />
        </Container>
    );
};

export default PostAction;

const Container = styled(Flex)`
    justify-content: space-between;
    margin: 12px;

    .card-action-icon {
        font-size: 23px;
        margin-right: 10px;
        cursor: pointer;

        &:hover {
            color: gray;
        }
    }
`;

const Left = styled(Flex)`
    justify-content: flex-start;
`;
