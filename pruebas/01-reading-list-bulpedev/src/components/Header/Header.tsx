interface HeaderProps {}
import styles from "@/styles/header.module.scss";
import Image from "next/image";
import IconBook from "../../../public/storage/icons/book-icon.svg";
import SearchBar from "../SearchBar/SearchBar";
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.h1}>
          Read<span>Me</span>
        </h1>
        <Image
          className={styles.imageLogo}
          src={IconBook}
          alt={"Icon Book Logo"}
        />
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
