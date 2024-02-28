import React from "react";
import { CardList } from "../components/common/CardList";
import { getUsers } from "../libs/publicApi";

const Favorite = async () => {
  const users = await getUsers();
  return (
    <div className="main__container">
      <CardList data={users} />
    </div>
  );
};

export default Favorite;
