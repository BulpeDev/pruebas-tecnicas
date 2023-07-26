interface CardSectionProps {}
import styles from "@/styles/booksSection.module.scss";

interface BookSectionProps {
  children: React.ReactNode;
}

const BooksSection: React.FC<BookSectionProps> = ({ children }) => {
  return <section className={styles.cardListSection}>{children}</section>;
};

export default BooksSection;
