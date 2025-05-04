import "./globals.css";

export const metadata = {
  title: "LearnToSquare",
  description: "I dont know what to write here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
