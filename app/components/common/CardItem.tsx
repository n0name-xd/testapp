import Link from "next/link";

interface ICardItemProps {
  name: string;
  status: string;
  email: string;
  numberOfPhone: string;
  website: string;
  id: number;
}

export const CardItem: React.FC<ICardItemProps> = ({
  name,
  id,
  status,
  email,
  numberOfPhone,
  website,
}: ICardItemProps) => {
  return (
    <Link href={`/user/${id}`} className="card__link">
      <div className="card__container">
        <h3>{name}</h3>
        <div>{status}</div>
        <div>{email}</div>
        <div>{numberOfPhone}</div>
        <div>{website}</div>
      </div>
    </Link>
  );
};
