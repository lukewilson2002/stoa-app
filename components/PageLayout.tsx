interface IPageLayoutProps {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: IPageLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl p-4">
      {children}
    </main>
  );
}
