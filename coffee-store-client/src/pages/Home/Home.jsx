function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Home Component</h1>

      <div className="coffees"></div>
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
