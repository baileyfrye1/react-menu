import { useState } from 'react';
import data from './data';

import Title from './components/Title';
import Categories from './components/Categories';
import Menu from './components/Menu';

const allCategories = [
  'all',
  ...new Set(data.map((menuItem) => menuItem.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    const newMenuItems = data.filter(
      (menuItem) => menuItem.category === category,
    );
    setMenuItems(category === 'all' ? data : newMenuItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text={'Our Menu'} />
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
