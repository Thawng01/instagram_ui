import styled from "styled-components";
import ImageLoading from "./ImageLoading";
import ItemSkeleton from "./ItemSkeleton";
import UserSkeleton from "./UserSkeleton";

const SkeletonLoading = ({ slide }) => {
    return (
        <Container>
            <Header slide={slide}>
                <UserSkeleton />
            </Header>
            <Centered slide={slide}>{!slide && <ImageLoading />}</Centered>
            <Bottom slide={slide}>
                <ItemSkeleton />
            </Bottom>
        </Container>
    );
};

export default SkeletonLoading;

const Container = styled.div`
    .bottom {
        margin: 5px 0;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    border-bottom: ${(prop) => (prop.slide ? "0.4px solid #f1f1f1" : "none")};
    padding: ${(prop) => (prop.slide ? "10px" : "")};

    .name {
        margin-left: 10px;
    }
`;

const Centered = styled.div`
    margin: 15px 0;
    height: ${(prop) => (prop.slide ? "55vh" : "75vh")};
    border-bottom: ${(prop) => (prop.slide ? "0.4px solid #f1f1f1" : "none")};
`;

const Bottom = styled.div`
    padding: ${(prop) => (prop.slide ? "10px" : "")};
`;
