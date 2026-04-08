
import "./globals.css";

export const metadata = {
  title:{ 
  template:" %s | Technical Agency",
 default:"Technical Agency"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="">
      <h1 className="bg-amber-600 top-0 left-0 w-full">Header</h1> 
       <main>{children}</main> 
        <footer className="bg-teal-600 bottom-0 w-full text-white">Footer</footer>
        </body>
      
    </html>
  );
}
