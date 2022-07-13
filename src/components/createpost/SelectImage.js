import { forwardRef } from "react";
import styled from "styled-components";
import { CgPlayButtonR } from "react-icons/cg";
import { MdOutlineInsertPhoto } from "react-icons/md";

const SelectImage = forwardRef(({ onSelect, onChange }, ref) => {
    return (
        <SelectImageContainer>
            <Icon>
                <MdOutlineInsertPhoto className="photo" />
                <CgPlayButtonR className="video" />
            </Icon>
            <Text>Drag photos and videos here</Text>
            <SelectImg onClick={onSelect}>Select from computer</SelectImg>
            <input
                ref={ref}
                type="file"
                name="images"
                style={{ display: "none" }}
                onChange={onChange}
            />
        </SelectImageContainer>
    );
});

export default SelectImage;

const Icon = styled.div`
    position: relative;
    width: 120px;
    height: 100px;

    .photo,
    .video {
        font-size: 60px;
        color: gray;
        position: absolute;
        bottom: 0;
    }

    .photo {
        left: 0px;
        font-size: 70px;
        transform: rotate(-10deg);
    }

    .video {
        right: 0;
        transform: rotate(10deg);
    }
`;

const SelectImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
`;

const Text = styled.h2`
    font-weight: 100;
    margin: 20px 0;
    font-family: var(--font);
`;

const SelectImg = styled.button`
    border: none;
    padding: 7px;
    background-color: var(--secondary);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
`;
