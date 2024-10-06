import Image from "next/image";
import { footerLinks } from "../constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex relative z-10 flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="justify-center">
        <div className="m-auto flex justify-center max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-base text-gray-700">
              Carhub 2023 <br />
              All right reserved &copy;
            </p>
          </div>
          <div className="footer__links">
            {footerLinks.map((e) => (
              <div key={e.title} className="footer__link">
                <h3 className="font-bold">{e.title}</h3>
                {e.links.map((data) => (
                  <Link
                    href={data.url}
                    key={data.title}
                    className="text-gray-500"
                  >
                    {data.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="m-auto max-w-[1440px] flex justify-center items-center flex-wrap mt-10 border-t border-grey-100 sm:px-16 px-6 py-10">
          <p> @2023 CarHub. All Rights Reserved</p>
          <div className="footer__copyright-link">
            <Link href="/" className="text-grey-500">
              Privacy Policy
            </Link>
          </div>
          <div className="footer__copyright-link">
            <Link href="/" className="text-grey-500">
              Terms of use
            </Link>
          </div>
        </div>
        </div>
    </footer>
  );
}
