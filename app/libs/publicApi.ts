import { PostApiType, UserApiType } from "../types/ApiTypes";
import { PostType, UserType } from "../types/MapTypes";

export const getUsers = async (limit = 10, page = 1): Promise<UserType[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/users?_limit=${limit}&_page=${page}`
  );
  const data = await response.json();

  return data.map((el: UserApiType): UserType => {
    return {
      id: el.id,
      name: el.name,
      email: el.email,
      phone: el.phone,
      username: el.username,
      website: el.website,
    };
  });
};

export const getPostsByUserId = async (id: number): Promise<PostType[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts?userId=${id}`
  );

  const data = await response.json();

  return data.map((el: PostApiType): PostType => {
    return {
      id: el.id,
      description: el.body,
      title: el.title,
    };
  });
};
