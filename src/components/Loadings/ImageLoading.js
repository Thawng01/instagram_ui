import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageLoading = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Skeleton height="100%" className="body" />
        </div>
    );
};

export default ImageLoading;
