import { Logo } from "../../components/ui/icons";

export const LandingHeader = () => {
  return (
    <header className="bg-background/70 py-14 backdrop-blur-lg ">
      <div className=" flex w-full justify-center lg:justify-start ">
        <Logo />
      </div>
    </header>
  );
};
