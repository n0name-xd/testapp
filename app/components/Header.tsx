import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div className="header__links">
        <Link href="/favorite">
          <span>Избранное</span>
          <Image alt="star" src="/icons/star.svg" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};
