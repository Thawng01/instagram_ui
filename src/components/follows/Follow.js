import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { device } from "../../breakpoints";
import ErrorBoundary from "../errors/ErrorBoundary";

const Follow = ({ follwer, following, post, userId }) => {
    const navigate = useNavigate();

    return (
        <ErrorBoundary>
            <Centered>
                <div className="containers">
                    <span className="number">{post?.length}</span>
                    <span>Posts</span>
                </div>
                <div
                    className="containers"
                    onClick={() => navigate("follower/", { state: userId })}
                >
                    <span className="number">{follwer?.length}</span>
                    <span>Followers</span>
                </div>

                <div
                    className="containers"
                    onClick={() => navigate("following/", { state: userId })}
                >
                    <span className="number">{following?.length}</span>
                    <span>Following</span>
                </div>
            </Centered>
        </ErrorBoundary>
    );
};

export default Follow;

const Centered = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    height: 60px;
    margin-bottom: 7px;

    span {
        font-family: var(--font);
        font-size: var(--textSize);
    }

    .number {
        font-weight: 700;
        margin-right: 5px;
    }

    .containers {
        display: flex;
        flex-direction: column;
        cursor: pointer;

        @media ${device.tabletL} {
            flex-direction: row;
        }
    }

    @media ${device.tabletL} {
        justify-content: space-between;
    }
`;
