import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { Button } from "./Button.style";

const story = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Prev = styled(Button)`
    left: 0;
    .btn-icon {
        font-size: 20px;
    }
`;

const Next = styled(Button)`
    right: 0;
    .btn-icon {
        font-size: 20px;
    }
`;

const Story = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const ref = useRef();

    useEffect(() => {
        setContainerWidth(ref?.current?.offsetWidth);
    }, []);

    const handleScroll = useCallback(
        (value) => {
            if (value === -1) {
                const back = (ref.current.scrollLeft -= containerWidth);
                setScrollIndex(back);
            } else if (value === +1) {
                const next = (ref.current.scrollLeft += containerWidth);
                setScrollIndex(next);
            } else {
                setScrollIndex(ref?.current?.scrollLeft);
            }
        },
        [containerWidth]
    );

    useEffect(() => {
        const el = ref?.current;
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleResize = useCallback(() => {
        setContainerWidth(ref?.current?.offsetWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return (
        <Container>
            <InnerContainer ref={ref}>
                {story.map((_, i) => (
                    <StoryItem key={i}>
                        <Image src="/logo.png" alt="story" />
                        <Name>Salaithawng</Name>
                    </StoryItem>
                ))}
            </InnerContainer>
            {scrollIndex > 0 && (
                <Prev onClick={() => handleScroll(-1)}>
                    <IoChevronBack className="btn-icon" />
                </Prev>
            )}

            {scrollIndex + containerWidth < story.length * 95 && (
                <Next onClick={() => handleScroll(+1)}>
                    <IoChevronForward className="btn-icon" />
                </Next>
            )}
        </Container>
    );
};

export default Story;

const Container = styled.div`
    height: 110px;
    border: 1px solid lightgray;
    margin: 20px 0;
    background-color: #fff;
    border-radius: var(--border-radius);
    position: relative;
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
    height: 100%;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
`;

const Image = styled.img`
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin-bottom: 5px;
`;

const Name = styled.p`
    text-transform: lowercase;
`;
