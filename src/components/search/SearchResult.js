import styled from "styled-components";

const SearchResult = () => {
    return (
        <Container>
            <Image src="/logo.png" alt="user" />
            <NameContainer>
                <Name>Lian cung</Name>
                <InfoContainer>
                    <Info>lian cung</Info>
                    <Dot />
                    <PostNum>4 posts</PostNum>
                </InfoContainer>
            </NameContainer>
        </Container>
    );
};

export default SearchResult;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 0;
    cursor: pointer;
`;

const Image = styled.img`
    height: 55px;
    width: 55px;
    border-radius: 50%;
`;

const NameContainer = styled.div`
    margin-left: 7px;
`;

const Name = styled.p``;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;
`;

const Info = styled.p`
    color: gray;
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
`;
