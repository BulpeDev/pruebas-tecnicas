import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
