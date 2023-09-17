const BASE_URL = "http://127.0.0.1:8000/outfit/";

export const getUserFeed = async (user_id) => {
    const url = `${BASE_URL}posts/get_feed/?user_id=${user_id}`;
    const res = await fetch(url);
    const json = res.json();
    return json;
};

export const getUserInfo = async (user_id) => {
    const url = `${BASE_URL}users/${user_id}`;
    const res = await fetch(url);
    const json = res.json();
    return json;
}
