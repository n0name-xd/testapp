"use client";

import Image from "next/image";
import React from "react";
import { PostItem } from "../../components/common/PostIte";
import { getPostsByUserId } from "../../libs/publicApi";
import { PostType } from "../../types/MapTypes";

const User = async ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  const posts = await getPostsByUserId(id);

  return (
    <div>
      <div className="user__header">
        <div className="user__like">
          <h2>Leanne Graham</h2>
          <Image alt="star" src="/icons/star.svg" width={24} height={24} />
        </div>
        <div>Posts</div>
      </div>
      <div className="post-list">
        {posts.map((el: PostType) => {
          return (
            <PostItem
              key={el.id}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default User;
