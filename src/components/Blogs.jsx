import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="max-w-[670px] w-11/12 py-8 flex flex-col items-center justify-center h-screen gap-y-7 mt-[105px] mb-[110px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-xl">{post.title}</p>
            <p className="text-[12px]">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-[12px]">Posted on {post.date}</p>
            <p className="text-sm mt-[10px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-[10px] text-blue-500 underline font-bold mt-[5px]"
                  >{` #${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
