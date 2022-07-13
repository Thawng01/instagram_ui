import React, { useState } from "react";
import PostAction from "./PostAction";
import PostDesc from "./PostDesc";

const PostBottom = ({ post, single }) => {
    const [likeNum, setLikeNum] = useState(post?.likes?.length);

    return (
        <>
            <PostAction
                postId={post?._id}
                likes={post?.likes}
                save={post?.savedBy}
                user={post?.user}
                createdAt={post?.createdAt}
                onLike={(num) => setLikeNum((prev) => prev + num)}
            />
            <PostDesc
                likeCount={likeNum}
                caption={post?.caption}
                createdAt={post?.createdAt}
                comments={post?.comments}
                user={post?.user}
                postId={post?._id}
                single={single}
            />
        </>
    );
};

export default PostBottom;
