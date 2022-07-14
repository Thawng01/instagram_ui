import { useRef, useState } from "react";
import { MdArrowBack } from "react-icons/md";

import SelectImage from "./SelectImage";
import ModalAlert from "../commons/ModalAlert";
import { Content, Image, ImgContainer, Title } from "./createpost-style";
import Caption from "./Caption";
import OverlayLoading from "../Loadings/OverlayLoading";
import Error from "../errors/Error";
import { createPost } from "../../api/post";
import useToken from "../../hook/useToken";
import useApi from "../../hook/useApi";
import useUser from "../../hook/useUser";
import ModalBox from "../commons/ModalBox";

const CreatePost = ({ newPost, onClose }) => {
    const [images, setImages] = useState([]);
    const [caption, setCaption] = useState("");
    const [next, setNext] = useState(false);
    const [visible, setVisible] = useState(false);

    const id = useToken();
    const { user } = useUser();
    const ref = useRef();
    const postApi = useApi(createPost);

    const selectImage = () => ref.current.click();
    const handleChange = (e) => {
        const image = {
            url: e.target.files[0],
            img: URL.createObjectURL(e.target.files[0]),
        };
        setImages((prev) => [...prev, image]);
    };

    const handleNext = async () => {
        if (next) {
            const post = { user: id, caption, images };
            const result = await postApi.request(post);
            console.log(result);
            if (result.status === 200) {
                setImages([]);
                setCaption("");
                setNext(false);
                onClose();
            }
        } else {
            setNext(true);
        }
    };

    const handleBack = () => {
        if (next) {
            setNext(false);
        } else {
            setVisible(true);
        }
    };

    const handleDiscard = () => {
        setImages([]);
        setVisible(false);
        setNext(false);
        onClose();
    };

    const handleCaptionChange = (e) => setCaption(e.target.value);

    if (!newPost) return null;

    return (
        <ModalBox
            next={next}
            images={images}
            onClose={onClose}
            onVisible={() => setVisible(true)}
        >
            <Error error={postApi.error} />
            <OverlayLoading visible={postApi.loading} />
            <ModalAlert
                visible={visible}
                onClose={() => setVisible(false)}
                onAction={handleDiscard}
            />
            <Title image={images}>
                {images?.length > 0 && (
                    <MdArrowBack className="arrow-back" onClick={handleBack} />
                )}
                <span>Create new post</span>
                {images?.length > 0 && (
                    <span className="next" onClick={handleNext}>
                        {next ? "Share" : "Next"}
                    </span>
                )}
            </Title>
            {images.length > 0 ? (
                <Content>
                    <ImgContainer next={next}>
                        <Image src={images[0].img} />
                    </ImgContainer>

                    {next && (
                        <Caption
                            value={caption}
                            onChange={handleCaptionChange}
                            username={user?.username}
                            profile={user?.profileImg}
                            row={12}
                        />
                    )}
                </Content>
            ) : (
                <SelectImage
                    ref={ref}
                    onSelect={selectImage}
                    onChange={handleChange}
                />
            )}
        </ModalBox>
    );
};

export default CreatePost;
