import { categories } from "@/consts/category";
import CategoryCard from "./CategoryCard";
import styles from "./VerticalCategory.module.scss";

const VerticalCategory = () => {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default VerticalCategory;
