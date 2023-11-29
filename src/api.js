import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getPosts = async () => {
  const posts = await axios.get(`${baseUrl}/posts`);

  return posts.data
};

export const getUsers = async () => {
    const users = await axios.get(`${baseUrl}/users`)

    return users.data
}

export const getPhotos = async () => {
    const photos = await axios.get(`${baseUrl}/photos`);

    return photos.data
}
