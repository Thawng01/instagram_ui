import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserSkeleton = () => {
    return (
        <>
            <Skeleton circle={true} height={40} width={40} />
            <div>
                <Skeleton width={60} height={13} className="name" />
                <Skeleton width={100} height={14} className="name" />
            </div>
        </>
    );
};

export default UserSkeleton;
