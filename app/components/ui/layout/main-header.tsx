import { Logo } from "../icons";

export const MainHeader = () => {
  return (
    <header className=" sticky top-0 z-40 bg-background/70 py-14 backdrop-blur-lg ">
      <div className="container flex w-full justify-center lg:justify-start ">
        <Logo />
      </div>
    </header>
  );
};
