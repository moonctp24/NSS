import { ReactNode } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const URL = process.env.NEXT_PUBLIC_WEB_URL;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </div>
      {/* <Footer styleType={styleType} /> */}
    </>
  );
};

export default Layout;
