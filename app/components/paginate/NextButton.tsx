import Image from "next/image";

export const NextButton = () => {
  return (
    <div className="pag__btn next__btn">
      <Image alt="arrow left" src="/icons/arrow.svg" width={26} height={16} />
    </div>
  );
};
