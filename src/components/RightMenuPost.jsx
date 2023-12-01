import React, { useEffect, useState } from "react";
import { getComments, getPosts } from "../api";

const RightMenuPost = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResult = await getPosts();
        setPosts(postResult);

        const commentResult = await getComments();
        setComment(commentResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return posts.map((post, i) => {
    const comment = comments.find((comment) => comment.postId === post.id);

    if (!comment) {
        return <div>Loading...</div>
    }

    const commentTotal = Object.keys(comment).length;

    if (!commentTotal) {
      return <div>Loading...</div>;
    }

    if (i <= 5) {
      return (
        <div className="border-b-2 p-5">
          <p className="text-lg">{post.title}</p>
          <div className="mt-3 text-gray-500">
            <p>
              {commentTotal} {commentTotal > 1 ? "Comments" : "Comment"}
            </p>
          </div>
        </div>
      );
    } else {
      return;
    }
  });
};

export default RightMenuPost;
