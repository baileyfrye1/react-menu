const Categories = ({ categories, filterCategories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => (
        <button
          type='button'
          className='btn'
          key={category}
          onClick={() => filterCategories(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default Categories;
