const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center p-4 bg-gray-200 min-h-screen">
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg shadow-md mb-4 mx-2 h-80 w-60 animate-shimmer"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
