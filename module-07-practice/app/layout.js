import "./globals.css";
import CustomLink from "./components/CustomLink";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-9/12 mx-auto px-10">
        <header>
          <nav className="p-5">
            <ul className="flex gap-10 cursor-pointer">
              <li className="cursor-pointer">
                <CustomLink path="/">Home</CustomLink>
              </li>

              <li className="cursor-pointer">
                <CustomLink path="/dashboard">Dashboard</CustomLink>
              </li>

              <li className="cursor-pointer">
                <CustomLink path="/setting">Setting</CustomLink>
              </li>

              <li className="cursor-pointer">
                <CustomLink path="/blog">Blog</CustomLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
