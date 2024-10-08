import { CiSearch } from "react-icons/ci";
import SearchInput from "../common/SearchInput";
import styles from "./Hero.module.scss";
import Button from "../common/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near You
      </p>
      <div className={styles.searchContainer}>
        <SearchInput />
        <Button rounded>
          <div>
            <CiSearch fontsize={24} />
          </div>
        </Button>
      </div>
    </div>
  );
};
export default Hero;
