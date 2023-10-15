import PropTypes from "prop-types";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function CoffeeCard({ coffee, handleDelete }) {
  const { id, name, chef, price, photo } = coffee;


  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-3 items-center p-6 bg-[#F5F4F1] rounded-lg">
      <div className="photo md:flex-1">
        <img src={photo} alt={name} />
      </div>
      <div className="content mr-3 md:flex-1">
        <h4 className="text-lg font-normal">
          <span className="text-[#1B1A1A] font-semibold">Name: </span>
          <span className="text-[#5C5B5B]">{name} </span>
        </h4>
        <h4 className="text-lg font-normal">
          <span className="text-[#1B1A1A] font-semibold">Chef: </span>
          <span className="text-[#5C5B5B]">{chef} </span>
        </h4>
        <h4 className="text-lg font-normal">
          <span className="text-[#1B1A1A] font-semibold">Price: </span>
          <span className="text-[#5C5B5B]">{price} Taka</span>
        </h4>
      </div>

      <div className="actions flex sm:flex-col justify-center items-center gap-4">
        <button className="details p-2.5 bg-amber-300">
          <FaEye className="text-white" />
        </button>
        <button className="details p-2.5 bg-slate-800">
          <FaPen className="text-white" />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="details p-2.5 bg-red-600"
        >
          <MdDelete className="text-white" />
        </button>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default CoffeeCard;
