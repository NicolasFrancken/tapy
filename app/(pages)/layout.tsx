import Footer from "../components/ui/layout/footer";
import { MainHeader } from "../components/ui/layout/main-header";

export default async function PostsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MainHeader />
      <main className="container flex-1">{children}</main>
      <Footer />
    </div>
  );
}
