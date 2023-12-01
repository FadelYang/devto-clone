import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getPosts = async () => {
  const posts = await axios.get(`${baseUrl}/posts`);

  return posts.data;
};

export const getUsers = async () => {
  const users = await axios.get(`${baseUrl}/users`);

  return users.data;
};

export const getPhotos = async () => {
  const photos = await axios.get(`${baseUrl}/photos`);

  return photos.data;
};

export const getComments = async () => {
  const comments = await axios.get(`${baseUrl}/comments`);

  return comments.data;
};

// category data
export const getPostCategory = () => {
  const category = [
    "Home", "Reading List", "Podcast", "Videos", "Tags", "FAQ", "Forem Shop", "Advertise on DEV", "About", "Contact", "Guides", "Software Comparation"
  ];

  return category
}