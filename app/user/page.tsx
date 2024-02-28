"use client";

import Image from "next/image";
import React from "react";
import { PostItem } from "../components/common/PostIte";

export interface IUserProps {
  name?: string;
}

const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    description:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

const User: React.FC<IUserProps> = ({ name }: IUserProps) => {
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
        {posts.map((el) => {
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