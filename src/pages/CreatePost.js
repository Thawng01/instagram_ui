import { useRef, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import SelectImage from "../components/createpost/SelectImage";
import SharePost from "../components/createpost/SharePost";
import ModalAlert from "../components/createpost/ModalAlert";
import { Container, Image, ImgContainer, Title, Box } from "./createpost-style";

const CreatePost = ({ newPost, onClose }) => {
    const [image, setImage] = useState(null);
    const [next, setNext] = useState(false);
    const [visible, setVisible] = useState(false);

    const ref = useRef();
    const containerRef = useRef();

    const selectImage = () => ref.current.click();
    const handleChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleNext = () => setNext(true);
    const handleBack = () => {
        if (next) {
            setNext(false);
        } else {
            setVisible(true);
        }
    };

    const handleDiscard = () => {
        setImage(null);
        setVisible(false);
        onClose();
    };

    const handleCloseModal = (e) => {
        if (
            e.target.className === "container" ||
            e.target.className === "cancel"
        ) {
            setVisible(false);
        }
    };

    const handleAllClose = () => {
        if (image) {
            setVisible(true);
        } else {
            onClose();
        }
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "container" && image) {
            setVisible(true);
        } else if (e.target.id === "container") {
            onClose();
        }
    };

    if (!newPost) return null;

    return (
        <Container
            id="container"
            ref={containerRef}
            onClick={handleClickOutside}
        >
            <ModalAlert
                visible={visible}
                onClose={handleCloseModal}
                onDiscard={handleDiscard}
            />
            <IoMdClose className="close" onClick={handleAllClose} />
            <Box next={next}>
                <Title image={image}>
                    {image && (
                        <MdArrowBack
                            className="arrow-back"
                            onClick={handleBack}
                        />
                    )}
                    <span>Create new post</span>
                    {image && (
                        <span className="next" onClick={handleNext}>
                            {next ? "Share" : "Next"}
                        </span>
                    )}
                </Title>
                {image ? (
                    <ImgContainer next={next}>
                        <Image src={image} />
                        {next && <SharePost image={image} />}
                    </ImgContainer>
                ) : (
                    <SelectImage
                        ref={ref}
                        onSelect={selectImage}
                        onChange={handleChange}
                    />
                )}
            </Box>
        </Container>
    );
};

export default CreatePost;
