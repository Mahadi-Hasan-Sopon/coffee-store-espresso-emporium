function Logo() {
  return (
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
  );
}

export default Logo;
