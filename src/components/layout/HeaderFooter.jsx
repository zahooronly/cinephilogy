import { Header } from "./Header";
import { Footer } from "./Footer";

export default function HeaderFooter({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
