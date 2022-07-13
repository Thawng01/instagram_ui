import React from "react";
import Picker from "emoji-picker-react";

const EmojiPicker = ({ onEmojiClick }) => {
    return (
        <Picker
            groupNames={{ smileys_people: "PEOPLE" }}
            onEmojiClick={onEmojiClick}
            preload
        />
    );
};

export default EmojiPicker;
