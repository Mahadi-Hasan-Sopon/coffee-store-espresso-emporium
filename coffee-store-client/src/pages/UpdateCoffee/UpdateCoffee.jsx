import Swal from "sweetalert2";
import Logo from "../../components/Logo/Logo";
import { useLoaderData, useNavigate } from "react-router-dom";
import CoffeeForm from "../../components/CoffeeForm/CoffeeForm";
import { useEffect } from "react";
import BackToHome from "../../utils/BackToHome";

function UpdateCoffee() {
  const oldCoffee = useLoaderData();
  // console.log(oldCoffee);

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll({ top: 120 });
  }, []);

  const updateCoffeeCLick = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    // console.log(coffee);

    fetch(
      `https://coffee-store-espresso-exporium-backend-ro4my39q4.vercel.app/coffees/update/${oldCoffee._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          console.log("coffee updated successfully");
          Swal.fire("Success!", "Coffee updated!", "success");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Logo />
      <div className="go-home my-12 mx-6 lg:mx-10 xl:mx-60 2xl:mx-72">
        <BackToHome />
      </div>
      <div className="addCoffee bg-[#F4F3F0] my-12 px-6 lg:mx-10 xl:mx-60 2xl:mx-72 py-16 md:px-24 space-y-8">
        <h1 className="text-5xl font-normal font-rancho text-slaty text-center">
          Update Existing Coffee Details
        </h1>
        <p className="text-lg text-secondaryBlack text-opacity-70">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <CoffeeForm
          existingData={oldCoffee}
          buttonText={"Update Coffee Details"}
          handleFormSubmit={updateCoffeeCLick}
        />
      </div>
    </div>
  );
}

export default UpdateCoffee;
