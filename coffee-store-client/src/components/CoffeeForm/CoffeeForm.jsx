import PropTypes from "prop-types";

function CoffeeForm({ buttonText, handleFormSubmit }) {
  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div className="row sm:flex gap-6">
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter coffee name"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
            required
          />
        </div>
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Chef</span>
          </label>
          <input
            type="text"
            name="chef"
            placeholder="Enter coffee chef"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
      </div>
      <div className="row sm:flex gap-6">
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Supplier</span>
          </label>
          <input
            type="text"
            name="supplier"
            placeholder="Enter supplier name"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Taste</span>
          </label>
          <input
            type="text"
            name="taste"
            placeholder="Enter coffee test"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
      </div>
      <div className="row sm:flex gap-6">
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Enter coffee category"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Enter coffee details"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
      </div>
      <div className="row sm:flex gap-6">
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
        <div className="form-control flex flex-col gap-4 w-full">
          <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="850"
            className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
          />
        </div>
      </div>
      <div className="row sm:flex gap-6">
        <div className="form-control flex flex-col gap-4 w-full">
          <button className="text-primaryNut text-2xl font-rancho text-center py-3 bg-[#D2B48C] rounded">
            {buttonText ? buttonText : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

CoffeeForm.propTypes = {
  buttonText: PropTypes.string,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default CoffeeForm;
