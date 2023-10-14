import { useLoaderData } from "react-router-dom";
import "./Home.css";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

function Home() {
  const loadedCoffees = useLoaderData();

  const [coffeeCards, setCoffeeCards] = useState(loadedCoffees);

  const handleDeleteClick = (id) => {
    const remainingCoffeeCards = coffeeCards.filter(
      (coffee) => coffee.id !== id
    );
    setCoffeeCards(remainingCoffeeCards);
  };

  return (
    <div className="home">
      <div className="logo-container px-4 md:px-10 flex justify-center items-center gap-4 py-4 w-full max-h-[10vh]">
        <img
          className="w-16"
          src={"https://i.ibb.co/Btsrkg5/logo1.png"}
          alt="logo"
        />
        <h1 className="text-3xl md:text-6xl font-normal font-rancho text-white text-center">
          Espresso Emporium
        </h1>
      </div>
      <header className="hero-container h-[90vh] flex items-center">
        <div className="content px-4 md:px-10 md:w-full lg:w-1/2 ms-auto">
          <h1 className="text-5xl font-normal font-rancho text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-base font-normal text-white my-4">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="my-4 text-2xl font-rancho text-[#242222] py-2 px-6 bg-[#E3B577]">
            Learn More
          </button>
        </div>
      </header>

      <div className="features px-4 md:px-10 grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:justify-between mx-auto py-14 bg-[#ECEAE3]">
        <div className="feature1 flex flex-col gap-2 max-w-[300px]">
          <img className="w-20" src="https://i.ibb.co/VtysWqj/1.png" alt="" />
          <h2 className="text-3xl font-rancho text-[#331A15]">Awesome Aroma</h2>
          <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="feature2 flex flex-col gap-2 max-w-[300px]">
          <img className="w-20" src="https://i.ibb.co/KqhLFdd/2.png" alt="" />
          <h2 className="text-3xl font-rancho text-[#331A15]">High Quality</h2>
          <p className="text-[#1B1A1A]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="feature3 flex flex-col gap-2 max-w-[300px]">
          <img className="w-20" src="https://i.ibb.co/r0XQMvC/3.png" alt="" />
          <h2 className="text-3xl font-rancho text-[#331A15]">Pure Grades</h2>
          <p className="text-[#1B1A1A]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="feature4 flex flex-col gap-2 max-w-[300px]">
          <img className="w-20" src="https://i.ibb.co/SJkZtB9/4.png" alt="" />
          <h2 className="text-3xl font-rancho text-[#331A15]">
            Proper Roasting
          </h2>
          <p className="text-[#1B1A1A]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>

      <div className="coffeeCards-container my-28 relative bg-white min-h-screen">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-lg text-[#1B1A1A] text-center">
            --- Sip & Savor ---
          </p>
          <h1 className="text-6xl font-normal font-rancho text-[#331A15] text-center">
            Our Popular Products
          </h1>
          <div className="addCoffee mt-3">
            <button
              className="flex justify-center gap-2 px-5 py-2 items-center font-normal text-xl font-rancho bg-[#E3B577] border-2 border-[#331A15]"
              type="button"
            >
              <span className="text-white"> Add Coffee</span>
              <FaCoffee className="text-[#331a15cb]" />
            </button>
          </div>
        </div>

        {/* dynamic data */}
        <div className="coffeeCards grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-12 px-4 lg:px-6">
          {coffeeCards.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} handleDelete={handleDeleteClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

/**
 * <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>
 * 
 */
