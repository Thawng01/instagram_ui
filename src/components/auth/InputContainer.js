import styled from "styled-components";

const InputContainer = ({ children, label, value }) => {
    return (
        <Inputs>
            <Label value={value}>{label}</Label>
            {children}
        </Inputs>
    );
};

export default InputContainer;

const Inputs = styled.div`
    border: 0.5px solid lightgray;
    margin-top: 8px;
    border-radius: 4px;
    background-color: #fcfcfc;
    position: relative;
    display: flex;
    align-items: center;
    height: 38px;
    width: 100%;
`;

const Label = styled.label`
    color: gray;
    font-size: ${(prop) => (prop.value ? "10px" : "14px")};
    position: absolute;
    top: ${(prop) => (prop.value ? "0px " : "")};
    z-index: 1;
    padding: 2px 8px;
    transition: all 150ms ease;
`;
