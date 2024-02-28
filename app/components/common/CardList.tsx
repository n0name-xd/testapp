import { IApiData } from "@/app/types/ApiTypes";
import { CardItem } from "./CardItem";

export interface ICardListProps {
  data: IApiData[];
}

export const CardList: React.FC<ICardListProps> = ({
  data,
}: ICardListProps) => {
  return (
    <div className="main__card-list">
      {data.map((elem: IApiData) => {
        return (
          <CardItem
            key={elem.id}
            name={elem.name}
            email={elem.email}
            numberOfPhone={elem.number}
            status={elem.some}
            website={elem.webSite}
          />
        );
      })}
    </div>
  );
};
