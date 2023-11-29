import { useEffect, useState } from "react";
import { getPhotos, getPosts, getUsers } from "../api";
import PostReaction from "./postCard/postReactions/PostReaction";
import PostCardHeader from "./postCard/PostCardHeader";
import PostCardTitle from "./postCard/PostCardTitle";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResult = await getPosts();
        setPosts(postsResult);

        const usersResult = await getUsers();
        setUsers(usersResult);

        const photosResult = await getPhotos();
        setPhotos(photosResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return posts.map((post, i) => {
    const user = users.find((user) => user.id === post.userId);
    const userPhoto = photos.find((photo) => photo.id === user.id);

    if (!user || !userPhoto) {
      return <div>Loading...</div>;
    }

    return (
      <div className="p-6 m-2 bg-white border-2 border-gray-200 rounded-lg">
        <PostCardHeader
          src={userPhoto.thumbnailUrl}
          alt={userPhoto.title}
          name={user.username}
        />
        <PostCardTitle title={post.title} />
        <PostReaction />
      </div>
    );
  });
};

export default Post;
