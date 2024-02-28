export interface IPostItemProps {
  description: string;
  title: string;
}

export const PostItem: React.FC<IPostItemProps> = ({
  title,
  description,
}: IPostItemProps) => {
  return (
    <div className="post__container">
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
};
