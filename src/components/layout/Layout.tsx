import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
