
import "./globals.css";

export const metadata = {
  title:{ 
  template:" %s | Technical Agency",
 default:"Technical Agency"
  }
}

export default async function RootLayout({
  children,
 
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(await children);
  
  return (
    <html lang="en">
      
      <body className="">
    
       <main>{children}</main> 

        </body>
      
    </html>
  );
}
