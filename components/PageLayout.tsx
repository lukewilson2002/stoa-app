interface IPageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => (
  <main className="mx-auto max-w-3xl p-4">
    {children}
  </main>
);

export default PageLayout;
