import styles from "@/styles/searchBar.module.scss";
import Image from "next/image";
import searchIcon from "../../../public/storage/icons/search-icon.svg";
interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <label className={styles.label}>
      <span>Search Book:</span>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Search" />

        <Image className={styles.image} src={searchIcon} alt="" />
      </div>
    </label>
  );
};

export default SearchBar;
