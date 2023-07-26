interface CardBookProps {}
import styles from "@/styles/cardBook.module.scss";
import { t } from "i18next";
import Image from "next/image";

interface CardBookProps {
  title: string;
  image: string;
  genre: string;
  year: number;
  pages: number;
  author: string;
}

const CardBook: React.FC<CardBookProps> = ({
  title,
  image,
  genre,
  year,
  pages,
  author,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.bookCover}
          src={image}
          alt={"portada libro"}
          width={0}
          height={0}
          priority={false}
        />
      </div>

      <div className={styles.cardInfo}>
        <h4>{title}</h4>
        <p>
          {t("autor: ")}
          <span>{author}</span>
        </p>
        <p>
          {t("year: ")}
          <span>{year}</span>
        </p>
        <p>
          {t("genre :")}
          <span>{genre}</span>
        </p>
        <p>
          {t("pages: ")}
          <span>{pages}</span>
        </p>
      </div>
    </div>
  );
};

export default CardBook;
