"use client";

import React, { useEffect, useState } from "react";
import { CardList } from "../components/common/CardList";
import { getUsers } from "../libs/publicApi";
import { selectFavorite } from "@/lib/features/favoriteSlice";
import { useAppSelector } from "@/lib/hooks";
import { UserType } from "../types/MapTypes";

const Favorite = () => {
  const favoriteList = useAppSelector(selectFavorite);
  const [users, setUsers] = useState<UserType[]>([]);
  const [showSmile, setShowSmile] = useState(false);

  useEffect(() => {
    getUsers().then((res) => {
      const usersList = res.filter((user) => favoriteList.includes(user.id));
      setShowSmile(usersList.length > 0);
      setUsers(usersList);
    });
  }, []);

  return (
    <div className="main__container">
      {!showSmile && <h1>Вы пока никого не добавили в избранное 😭</h1>}
      <CardList data={users} />
    </div>
  );
};

export default Favorite;
