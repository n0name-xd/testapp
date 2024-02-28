import { CardList } from "./components/common/CardList";
import { IApiData } from "./types/ApiTypes";

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 2,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 3,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 4,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 5,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 6,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 7,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 8,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 9,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
  {
    id: 10,
    name: "Leanne Graham",
    some: "Bret",
    email: "Sincere@april.biz",
    number: "1-770-736-8031 x56442",
    webSite: "hildegard.org",
  },
] as IApiData[];

const Index = () => {
  return (
    <div className="main__container">
      <CardList data={data} />
      <div className="main__paginate">pagination</div>
    </div>
  );
};

export default Index;
