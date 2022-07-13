import jwt_decode from "jwt-decode";

const useToken = () => {
    const token = localStorage.getItem("x-auth-token");
    const { id } = jwt_decode(token);
    return id;
};

export default useToken;
