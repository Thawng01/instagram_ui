import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoChatbubbleSharp } from "react-icons/io5";

import { device } from "../../breakpoints";

const PostItem = ({ item, posts }) => {
    const navigate = useNavigate();
    return (
        <PostContainer>
            <img src={item.image[0]} alt="post" />
            <div
                className="overlay"
                onClick={() =>
                    navigate(`/p/${item._id}`, {
                        state: posts,
                    })
                }
            >
                <IoChatbubbleSharp id="icon" />
                <span>{item.comments.length}</span>
            </div>
        </PostContainer>
    );
};

export default PostItem;

const PostContainer = styled.div`
    max-width: calc((100% - 6px) / 3);
    max-height: 100px;
    margin: 1px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay {
        display: none;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }

    #icon {
        color: #fff;
        font-size: 22px;
        margin-right: 8px;
    }

    span {
        color: #fff;
    }

    &:hover .overlay {
        display: flex;
    }

    @media ${device.xMobile} {
        max-width: calc((100% - 12px) / 3);
        max-height: 200px;
        margin: 2px;
    }

    @media ${device.tabletL} {
        max-width: calc((100% - 30px) / 3);
        max-height: 250px;
        margin: 5px;
    }
`;
