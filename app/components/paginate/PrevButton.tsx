import Image from "next/image";

export const PrevButton = () => {
  return (
    <div className="pag__btn prev__btn">
      <Image alt="arrow left" src="/icons/arrow.svg" width={26} height={16} />
    </div>
  );
};
