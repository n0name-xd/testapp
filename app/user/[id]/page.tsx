"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PostItem } from "../../components/common/PostIte";
import { getPostsByUserId, getUserDataById } from "../../libs/publicApi";
import { PostType, UserType } from "../../types/MapTypes";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addFavorite,
  removeFavorite,
  selectFavorite,
} from "@/lib/features/favoriteSlice";

const User = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(selectFavorite);

  const [posts, setPosts] = useState<PostType[]>([]);
  const [name, setName] = useState<string>("");

  const id = +params.id;

  useEffect(() => {
    getPostsByUserId(id).then((res: PostType[]) => setPosts(res));
    getUserDataById(id).then((res: UserType[]) => setName(res[0].name));
  }, []);

  const handleLike = () => {
    favoriteList.includes(id)
      ? dispatch(removeFavorite(id))
      : dispatch(addFavorite(id));
  };

  return (
    <div>
      <div className="user__header">
        <div className="user__like">
          <h2>{name}</h2>
          <Image
            onClick={handleLike}
            alt="star"
            src={
              favoriteList.includes(id)
                ? "/icons/star-gold.svg"
                : "/icons/star.svg"
            }
            width={24}
            height={24}
          />
        </div>
        <div>Posts</div>
      </div>
      <div className="post-list">
        {posts?.map((el: PostType) => {
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
