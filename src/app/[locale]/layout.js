import { cookies } from "next/headers";
import ClientLayout from "@/components/clientLayout";
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeContext";

export const metadata = {
  title: "PSdigital",
  description: "Digital agancy",
};

const RootLayout = ({ children }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="en" dir="ltr" className={`${theme ? theme.value : "light"}`}>
      <body className="leading-normal tracking-normal !overflow-x-hidden bg-[#01080f]  text-white dark:bg-white dark:text-[#01080f]">
        <ThemeProvider defaultTheme={theme ? theme.value : "light"}>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
