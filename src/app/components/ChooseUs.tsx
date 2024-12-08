
const WhyChooseUs = () => {
      
    return (
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="../public/images/tacos.jpg"
              alt="Tacos"
              className="rounded-lg object-cover h-40"
            />
            <img
              src="/images/burger.jpg"
              alt="Burger"
              className="rounded-lg object-cover h-40"
            />
            <img
              src="/menu_items/fried-chicken.jpg"
              alt="Fried Chicken"
              className="rounded-lg object-cover h-40"
            />
            <img
              src="/images/cheesy-burger.jpg"
              alt="Cheesy Burger"
              className="rounded-lg object-cover h-40"
            />
          </div>
  
          {/* Right - Text and Icons */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-yellow-500">
              Why Choose Us
            </h2>
            <h3 className="text-5xl font-extrabold mt-4">
              Extra <span className="text-yellow-500">Ordinary Taste</span> <br />
              And Experienced
            </h3>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
              elit augue urna, vitae feugiat pretium donec id elementum.
            </p>
  
            {/* Icons Section */}
            <div className="flex space-x-8 mt-8">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 p-4 rounded-full">
                  <img
                    src="/icons/fast-food.svg"
                    alt="Fast Food"
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-white">Fast Food</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 p-4 rounded-full">
                  <img
                    src="/icons/lunch.svg"
                    alt="Lunch"
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-white">Lunch</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 p-4 rounded-full">
                  <img
                    src="/icons/dinner.svg"
                    alt="Dinner"
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-white">Dinner</span>
              </div>
            </div>
  
            {/* Experience Section */}
            <div className="mt-8 text-yellow-500 text-3xl font-bold">
              <span>30+</span> <span className="text-white">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>
      
  
    );
  }
  
  export default  WhyChooseUs;