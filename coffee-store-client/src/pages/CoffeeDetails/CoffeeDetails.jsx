import { useLoaderData } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import BackToHome from "../../utils/BackToHome";
import { useEffect } from "react";

function CoffeeDetails() {
  const loadedCoffee = useLoaderData();
  //   console.log(loadedCoffee);

  useEffect(() => {
    window.scrollTo({ top: 120 });
  }, []);

  return (
    <div>
      <Logo />
      <div className="go-home my-12 mx-6 lg:mx-10 xl:mx-60 2xl:mx-72">
        <BackToHome />
      </div>
      <div className="coffeeDetails bg-[#F4F3F0] my-12 px-6 lg:mx-10 xl:mx-60 2xl:mx-72 py-16 md:px-24 space-y-8">
        <div className="grid md:grid-cols-2 gap-6 justify-center md:justify-between items-center">
          <div className="img">
            <img
              className="w-full md:w-10/12 max-w-full"
              src={loadedCoffee.photo}
              alt=""
            />
          </div>
          <div className="content space-y-2">
            <h3 className="text-4xl text-primaryNut font-rancho">Niceties</h3>
            <h4 className="text-lg font-normal">
              <span className="text-[#1B1A1A] font-semibold">Name: </span>
              <span className="text-[#5C5B5B]">{loadedCoffee.name} </span>
            </h4>
            <h4 className="text-lg font-normal">
              <span className="text-[#1B1A1A] font-semibold">Chef: </span>
              <span className="text-[#5C5B5B]">{loadedCoffee.chef} </span>
            </h4>
            <h4 className="text-lg font-normal">
              <span className="text-[#1B1A1A] font-semibold">Supplier: </span>
              <span className="text-[#5C5B5B]">{loadedCoffee.supplier} </span>
            </h4>
            <h4 className="text-lg font-normal">
              <span className="text-[#1B1A1A] font-semibold">Taste: </span>
              <span className="text-[#5C5B5B]">{loadedCoffee.taste} </span>
            </h4>
            <h4 className="text-lg font-normal">
              <span className="text-[#1B1A1A] font-semibold">Category: </span>
              <span className="text-[#5C5B5B]">{loadedCoffee.category} </span>
            </h4>
            <h4 className="text-lg font-normal">
              <span className="text-[#1B1A1A] font-semibold">Price: </span>
              <span className="text-[#5C5B5B]">{loadedCoffee.price} Taka</span>
            </h4>
          </div>
        </div>
        <div className="details space-y-4">
          <h3 className="text-2xl text-center font-rancho text-primaryNut">
            Details:
          </h3>
          <p className="text-base">{loadedCoffee.details}</p>
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetails;
