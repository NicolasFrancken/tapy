import { Logo } from "./icons";

export const LandingHeader = () => {
  return (
    <header className="bg-background/70 pb-8 md:pb-16 backdrop-blur-lg ">
      <div className=" flex w-full justify-center md:justify-start ">
        <Logo />
      </div>
    </header>
  );
};

