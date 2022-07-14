import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { searchUser } from "../../api/user";
import useToken from "../../hook/useToken";
import UserListLoading from "../Loadings/UserListLoading";
import useFetch from "../../hook/useFetch";
import Error from "../errors/Error";

const SearchResult = ({ value }) => {
    const navigate = useNavigate();
    const id = useToken();
    const { error, data, loading } = useFetch(searchUser, id, value);

    if (loading)
        return (
            <div style={{ padding: 10 }}>
                <UserListLoading />
            </div>
        );

    if (data?.length === 0)
        return <p style={{ paddingLeft: 10 }}>No result.</p>;

    if (error) return <p>Sorry. Something went wrong.</p>;

    return (
        <>
            {data?.map((item) => {
                return (
                    <Container
                        key={item._id}
                        onClick={() =>
                            navigate("/profile/", { state: item._id })
                        }
                    >
                        <Image src={item?.profileImg} alt="user" />
                        <NameContainer>
                            <Name>{item?.username}</Name>
                            <InfoContainer>
                                <Info>{item?.fullname}</Info>
                                <Dot />
                                <PostNum>{item?.posts.length} posts</PostNum>
                            </InfoContainer>
                        </NameContainer>
                    </Container>
                );
            })}
        </>
    );
};

export default SearchResult;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding: 0 1rem;
    cursor: pointer;
`;

const Image = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 50%;
`;

const NameContainer = styled.div`
    margin-left: 7px;
`;

const Name = styled.p`
    font-size: var(--sTSize);
    font-family: var(--font);
    font-weight: 500;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;
`;

const Info = styled.p`
    color: gray;
    font-family: var(--font);
    font-size: 15px;
`;

const Dot = styled.div`
    background-color: gray;
    height: 2.5px;
    width: 2.5px;
    border-radius: 50%;
    margin: 0 6px;
`;

const PostNum = styled.span`
    color: gray;
    font-family: var(--font);
`;
