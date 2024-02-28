import { CardItem } from "./CardItem";
import { UserType } from "@/app/types/MapTypes";

export interface ICardListProps {
  data: UserType[];
}

export const CardList: React.FC<ICardListProps> = ({
  data,
}: ICardListProps) => {
  return (
    <div className="main__card-list">
      {data.map((elem: UserType) => {
        return (
          <CardItem
            id={elem.id}
            key={elem.id}
            name={elem.name}
            email={elem.email}
            numberOfPhone={elem.phone}
            status={elem.username}
            website={elem.website}
          />
        );
      })}
    </div>
  );
};
