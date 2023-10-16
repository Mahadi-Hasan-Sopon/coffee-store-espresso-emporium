import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import Logo from "../../components/Logo/Logo";
import Swal from "sweetalert2";

function Home() {
  const loadedCoffees = useLoaderData();

  const [coffeeCards, setCoffeeCards] = useState(loadedCoffees);

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-espresso-emporium-q3048eiqt-mahadi-hasan-sopon.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingCoffeeCards = coffeeCards.filter(
                (coffee) => coffee._id !== id
              );
              setCoffeeCards(remainingCoffeeCards);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="home">
      <Logo />
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

      <div className="features mb-8 lg:mb-16 px-4 md:px-10 grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:justify-between mx-auto py-14 bg-[#ECEAE3]">
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

      <div className="coffeeCards-container py-6 md:py-10 lg:py-16 relative bg-white min-h-screen">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-lg text-[#1B1A1A] text-center">
            --- Sip & Savor ---
          </p>
          <h1 className="text-6xl font-normal font-rancho text-[#331A15] text-center">
            Our Popular Products
          </h1>
          <div className="addCoffee mt-3">
            <Link to="/coffees/new">
              <button
                className="flex justify-center gap-2 px-5 py-2 items-center font-normal text-xl font-rancho bg-[#E3B577] border-2 border-[#331A15]"
                type="button"
              >
                <span className="text-white"> Add Coffee</span>
                <FaCoffee className="text-[#331a15cb]" />
              </button>
            </Link>
          </div>
        </div>

        {/* dynamic data */}
        <div className="coffeeCards grid md:grid-cols-2 gap-6 my-12 px-4 lg:px-10 xl:px-60 2xl:px-72">
          {coffeeCards.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              handleDelete={handleDeleteClick}
            />
          ))}
        </div>
      </div>
      <div className="follow-us py-6 md:py-10 lg:py-16 ">
        <p className="text-xl text-center text-[#1B1A1A]">Follow Us Now</p>
        <h1 className="text-6xl font-normal font-rancho text-[#331A15] text-center">
          Follow on Instagram
        </h1>

        <div className="photos grid items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12 px-4 lg:px-10 xl:px-60 2xl:px-72">
          <img
            className="w-full"
            src="https://i.ibb.co/KDbY4Nd/Rectangle-9.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/rw5tkZv/Rectangle-10.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/XZqx07Z/Rectangle-11.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/DpPRxK0/Rectangle-12.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/dMRyVtx/Rectangle-13.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/rcFr8PL/Rectangle-14.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/RY0TwgX/Rectangle-15.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://i.ibb.co/5cV4Nc7/Rectangle-16.png"
            alt=""
          />
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
