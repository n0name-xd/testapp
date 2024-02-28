import { CardList } from "./components/common/CardList";
import { getUsers } from "./libs/publicApi";

const Index = async () => {
  const users = await getUsers();

  return (
    <div className="main__container">
      <CardList data={users} />
      <div className="main__paginate">pagination</div>
    </div>
  );
};

export default Index;
