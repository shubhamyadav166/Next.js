


export const metadata = {
  title: {
    template: " %s | Technical Agency",
    default: "Technical Agency"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="bg-yellow-600 top-0 left-0 w-full">Header Marketing group</h1>
      <main>{children}</main>
      <footer className="bg-black bottom-0 w-full text-white">Footer Marketing group</footer>
    </>
  );
}
