import { useCallback, useEffect, useState } from "react";
import { createStory, fetchStory } from "../api/story";

const useStory = (userId) => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addNewStory = async (info) => {
        setLoading(true);
        try {
            const res = await createStory(info);
            setLoading(false);
            return res;
        } catch (error) {
            setError(error.response?.data);
            setLoading(false);
        }
    };

    const getStories = useCallback(async () => {
        const story = await fetchStory(userId);
        setStories(story.data);
    }, [userId, setStories]);

    useEffect(() => {
        if (userId) getStories();
    }, [userId, getStories]);

    if (error) setTimeout(() => setError(null), 3000);

    return { addNewStory, stories, loading, error };
};

export default useStory;
