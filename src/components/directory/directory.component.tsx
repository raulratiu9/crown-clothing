import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="directory-container">
          <CategoryItem key={category.id} category={category} />
        </div>
      ))}
    </div>
  );
};

export default Directory;
