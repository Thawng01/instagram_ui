import styled from "styled-components";

import UserImage from "../commons/UserImage";
import PostImage from "./PostImage";
import CommentInput from "./CommentInput";
import { fetchPosts } from "../../api/post";
import SkeletonLoading from "../Loadings/SkeletonLoading";
import PostBottom from "./PostBottom";
import Error from "../errors/Error";
import useFetch from "../../hook/useFetch";

const Post = () => {
    const { data, loading, error } = useFetch(fetchPosts);

    let content;

    if (loading) {
        content = <SkeletonLoading />;
    } else if (error) {
        content = <Error error={error} />;
    } else if (data?.length > 0) {
        content = data?.map((post) => {
            return (
                <ItemCardContainer key={post?._id}>
                    <div className="user-image-container">
                        <UserImage
                            info={post}
                            id={post?.user._id}
                            avatar={post?.user?.profileImg}
                            username={post?.user?.username}
                        />
                    </div>

                    <PostImage images={post.image} />
                    <PostBottom post={post} />
                    <CommentInput postId={post?._id} />
                </ItemCardContainer>
            );
        });
    }

    return content;
};

export default Post;

const ItemCardContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: var(--border-radius);
    margin: 20px 0;

    .user-image-container {
        margin: 15px 12px;
    }
`;
