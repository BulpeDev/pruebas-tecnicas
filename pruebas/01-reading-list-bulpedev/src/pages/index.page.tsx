import CardBook from "@/components/CardBook/CardBook";
import books from "@/db/books.json";
import AppLayout from "@/layouts/AppLayout";
import { Inter } from "next/font/google";
import { ReactElement, useEffect, useState } from "react";
import styles from "../styles/home.module.scss";
import { NextPageWithLayout } from "./_app.page";
const inter = Inter({ subsets: ["latin"] });

enum SectionType {
  TO_READ,
  READ,
  FINISHED,
}

interface Book {
  id: number;
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
  section: SectionType; // Nueva propiedad para representar la sección del libro
}

interface Section {
  id: number;
  title: string;
  books: Book[];
}
const IndexPage: NextPageWithLayout = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    setBookList(
      books.library.map((book: any, index: number) => ({
        ...book.book,
        id: index,
        section: SectionType.TO_READ, // Asignamos la sección TO_READ por defecto
      }))
    );
  }, []);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    book: Book
  ) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(book));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLElement>,
    targetSection: SectionType,
    targetIndex: number
  ) => {
    event.preventDefault();
    const movedBook = JSON.parse(
      event.dataTransfer.getData("text/plain")
    ) as Book;

    if (movedBook.section !== targetSection) {
      // Move to a different section
      movedBook.section = targetSection;
      setBookList((prevList: Book[]) =>
        prevList.map((book: Book) =>
          book.id === movedBook.id ? { ...book, section: targetSection } : book
        )
      );
    } else {
      // Move within the same section
      setBookList((prevList: Book[]) => {
        const newList = [...prevList];
        newList.splice(targetIndex, 0, newList.splice(movedBook.id, 1)[0]);
        return newList.map((book, index) =>
          index === targetIndex ? { ...book, id: index } : book
        );
      });
    }
  };

  return (
    <>
      <section className={styles.main}>
        <section
          className={styles.cardListSection}
          id="section0"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 0, 0)}
        >
          <div className={styles.cardContainer}>
            {bookList
              .filter((b) => b.section === 0)
              .map((b, index) => (
                <div
                  key={b.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, b)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, 0, index)}
                >
                  <CardBook
                    title={b.title}
                    image={b.cover}
                    author={b.author?.name}
                    year={b.year}
                    genre={b.genre}
                    pages={b.pages}
                  />
                </div>
              ))}
          </div>
        </section>
        <section
          className={styles.cardListSection}
          id="section1"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 1, 0)}
        >
          <div className={styles.cardContainer}>
            {bookList
              .filter((b) => b.section === 1)
              .map((b, index) => (
                <div
                  key={b.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, b)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, 1, index)}
                >
                  <CardBook
                    title={b.title}
                    image={b.cover}
                    author={b.author?.name}
                    year={b.year}
                    genre={b.genre}
                    pages={b.pages}
                  />
                </div>
              ))}
          </div>
        </section>
        <section
          className={styles.cardListSection}
          id="section2"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 2, 0)}
        >
          <div className={styles.cardContainer}>
            {bookList
              .filter((b) => b.section === 2)
              .map((b, index) => (
                <div
                  key={b.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, b)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, 2, index)}
                >
                  <CardBook
                    title={b.title}
                    image={b.cover}
                    author={b.author?.name}
                    year={b.year}
                    genre={b.genre}
                    pages={b.pages}
                  />
                </div>
              ))}
          </div>
        </section>
      </section>
    </>
  );
};

IndexPage.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default IndexPage;
