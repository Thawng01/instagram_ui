import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ItemSkeleton = () => {
    return (
        <>
            <Skeleton width={170} height={15} />
            <Skeleton width={120} height={15} className="bottom" />
            <Skeleton width={150} height={15} />
        </>
    );
};

export default ItemSkeleton;
