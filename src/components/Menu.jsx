import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <section className='section-center'>
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};
export default Menu;
