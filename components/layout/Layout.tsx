import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { useRouter } from "next/router";
import { NAUTH_PAGE_LIST } from "@/constants/CONST";

const URL = process.env.NEXT_PUBLIC_WEB_URL;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const [authPageYN, setAuthPageYN] = useState(false);

  useEffect(() => {
    console.log(router.pathname);
    if (NAUTH_PAGE_LIST.includes(router.pathname)) {
      setAuthPageYN(false);
    } else {
      setAuthPageYN(true);
    }
  }, [router]);

  return (
    <>
      <div className="flex">
        {authPageYN ? (
          <>
            <Navbar />
            <div>
              <Header />
              <main>{children}</main>
            </div>
          </>
        ) : (
          <main>{children}</main>
        )}
        {/* <Footer styleType={styleType} /> */}
      </div>
    </>
  );
};

export default Layout;
