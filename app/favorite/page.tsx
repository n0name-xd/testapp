import React from "react";
import { CardList } from "../components/common/CardList";
import { IApiData } from "../types/ApiTypes";

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
] as IApiData[];

interface IFavoriteProps {
  data: IApiData[];
}

const Favorite: React.FC<IFavoriteProps> = () => {
  return (
    <div className="main__container">
      <CardList data={data} />
    </div>
  );
};

export default Favorite;
