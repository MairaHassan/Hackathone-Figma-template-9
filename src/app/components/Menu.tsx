import Image from 'next/image';

const Menu = () => {
  const menuItems = [
    { title: 'Lettuce Leaf', price: '12.5$', img: '/menu1.png' },
    { title: 'Fresh Breakfast', price: '14.5$', img: '/menu2.png' },
    { title: 'Mild Butter', price: '12.5$', img: '/butter.jpg' },
    { title: 'Fresh Bread', price: '12.5$', img: '/bread.jpg' },
    { title: 'Glow Cheese', price: '12.5$', img: '/cheese.jpg' },
    { title: 'Italian Pizza', price: '14.5$', img: '/pizza.jpg' },
    { title: 'Slice Beef', price: '12.5$', img: '/beef.jpg' },
    { title: 'Mushroom Pizza', price: '12.5$', img: '/mushroom.jpg' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="text-center py-10">
        <h2 className="text-yellow-400 text-lg">Choose & pick</h2>
        <h1 className="text-4xl font-bold">From Our Menu</h1>
      </div>
      <div className="flex justify-center space-x-10 text-gray-400 text-lg">
        <span className="text-yellow-400">Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
        <span>Dessert</span>
        <span>Drink</span>
        <span>Snack</span>
        <span>Soups</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
        <div className="hidden lg:block">
          <Image src="/lettuce.jpg" alt="Dish" width={500} height={500} className="rounded-lg" />
        </div>
        <div className="space-y-5">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <Image src={item.img} alt={item.title} width={60} height={60} className="rounded-md" />
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                </div>
              </div>
              <span className="text-yellow-400 font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
