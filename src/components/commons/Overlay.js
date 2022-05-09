import { useRef, useEffect } from "react";
import "./overlay.css";

const Overlay = ({ visible, onClose }) => {
    const ref = useRef();

    useEffect(() => {
        if (visible) {
            ref?.current?.classList.add("overlay");
        } else {
            ref?.current?.classList.remove("overlay");
        }
    }, [visible]);
    return <div ref={ref} onClick={onClose} />;
};

export default Overlay;
