import CustomLink from "./components/CustomLink";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-11/12 mx-auto">
        <nav className="p-5">
          <ul className="flex items-center gap-5 ">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path={"/dashboard"}>Dashboard</CustomLink>
            </li>
            <li>
              <CustomLink path={"/setting"}>Setting</CustomLink>
            </li>
            <li>
              <CustomLink path={"/analytics"}>Analytics</CustomLink>
            </li>
          </ul>
        </nav>

        <div>{children}</div>
      </body>
    </html>
  );
}
