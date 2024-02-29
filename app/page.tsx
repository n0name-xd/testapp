"use client";

import { CardList } from "./components/common/CardList";
import { getUsers } from "./libs/publicApi";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { UserType } from "./types/MapTypes";
import { PrevButton } from "./components/paginate/PrevButton";
import { NextButton } from "./components/paginate/NextButton";

const Index = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  //Так как юзеров всего 10, я решил размер страницы сделать по 5 записей,
  //что бы показать что работает пагинация

  const COUNT_USERS = 10;
  const PAGE_SIZE = 5;
  const pagesCount = COUNT_USERS / PAGE_SIZE;

  const [page, setPage] = useState<number>(1);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    getUsers(PAGE_SIZE, page).then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    getUsers(PAGE_SIZE, page).then((res) => setUsers(res));
  }, [page]);

  return (
    <div className="main__container">
      <CardList data={users} />
      <div className="main__paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<NextButton />}
          previousLabel={<PrevButton />}
          onPageChange={handlePageClick}
          pageCount={pagesCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Index;
