import React, { useEffect, useRef, useState } from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import styled from "styled-components";
import ErrorBoundary from "../errors/ErrorBoundary";

const PostImage = ({ images }) => {
    const [itemWidth, setItemWidth] = useState(0);
    const [scrollIndex, setScrollIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const ref = useRef();

    useEffect(() => {
        setItemWidth(ref.current.offsetWidth);
    }, []);

    const handleResize = () => setItemWidth(ref.current.offsetWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = (value) => {
        if (value === "next") {
            const next = (ref.current.scrollLeft += itemWidth);
            setScrollIndex(next);
            setActiveIndex((prev) => prev + 1);
        } else if (value === "prev") {
            const back = (ref.current.scrollLeft -= itemWidth);
            setScrollIndex(back);
            setActiveIndex((prev) => prev - 1);
        }
    };

    return (
        <ErrorBoundary>
            <Container>
                <InnerContainer ref={ref}>
                    {images?.map((img, i) => {
                        return <Image key={i} src={img} alt="card image" />;
                    })}
                </InnerContainer>

                {images?.length > 1 && (
                    <>
                        {scrollIndex > 0 && (
                            <PrevBtn onClick={() => handleScroll("prev")}>
                                <IoChevronBack />
                            </PrevBtn>
                        )}

                        {scrollIndex + itemWidth <
                            images?.length * itemWidth && (
                            <NextBtn onClick={() => handleScroll("next")}>
                                <IoChevronForward />
                            </NextBtn>
                        )}
                    </>
                )}
            </Container>
            {images?.length > 1 && (
                <DotContainer>
                    {images.map((_, i) => {
                        return (
                            <Dots
                                key={i}
                                active={i === activeIndex ? true : false}
                            />
                        );
                    })}
                </DotContainer>
            )}
        </ErrorBoundary>
    );
};

export default PostImage;

const Container = styled.div`
    position: relative;
    margin-bottom: 10px;
`;

const InnerContainer = styled.div`
    overflow-x: auto;
    display: flex;
    scroll-behavior: smooth;
    position: relative;
    max-height: 60vh;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const Button = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const PrevBtn = styled(Button)`
    left: 5px;
`;

const NextBtn = styled(Button)`
    right: 5px;
`;

const DotContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Dots = styled.div`
    background-color: ${(prop) => (prop.active ? "#0095f6" : "lightgray")};
    height: 6px;
    width: 6px;
    border-radius: 50%;
    margin: 0 3px;
`;
