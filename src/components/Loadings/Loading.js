import styled, { keyframes } from "styled-components";

const Loading = ({ width, height }) => {
    return <Spinner style={{ width, height }} />;
};

export default Loading;

const rotate = keyframes`

 from {
     transform: rotate(0deg);
 }

 to {
     transform: rotate(360deg);
 }
`;

const Spinner = styled.div`
    border: 3px solid #f1f1f1; /* Light grey */
    border-top: 3px solid var(--secondary);
    border-radius: 50%;
    animation: ${rotate} 0.8s linear infinite;
`;
