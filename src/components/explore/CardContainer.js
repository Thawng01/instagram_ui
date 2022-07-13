import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { fetchUsers } from "../../api/user";
import useApi from "../../hook/useApi";
import useToken from "../../hook/useToken";
import { device } from "../../breakpoints";
import Loading from "../Loadings/Loading";

const CardContainer = () => {
    const navigate = useNavigate();
    const { request, data, loading } = useApi(fetchUsers);
    const id = useToken();

    useEffect(() => {
        if (id) request(id);
    }, [id, request]);

    if (loading) return <Loading height={30} width={30} />;

    return (
        <Container>
            {data?.map((item) => {
                return (
                    <Item
                        key={item._id}
                        onClick={() =>
                            navigate("/profile/", { state: item._id })
                        }
                    >
                        <Overlay>
                            <p>{item.username}</p>
                        </Overlay>
                        <img src={item.profileImg} alt="people" />
                    </Item>
                );
            })}
        </Container>
    );
};

export default CardContainer;

const Container = styled.div`
    display: grid;
    gap: 0.1rem;
    grid-template-columns: 6rem 6rem 6rem;

    @media ${device.xMobile} {
        grid-template-columns: 9rem 9rem 9rem;
        gap: 0.2rem;
    }
    @media ${device.tablet} {
        grid-template-columns: 13rem 13rem 13rem;
        gap: 0.4rem;
    }
    @media ${device.tabletL} {
        grid-template-columns: 16rem 16rem 16rem;
        gap: 0.5rem;
    }
`;

const Item = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;
        font-family: var(--font);
    }

    ${Item}:hover & {
        display: flex;
    }
`;
