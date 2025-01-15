const TechCard = ({ skil }) => {
  return (
    <div className="bg-card-bg-light dark:bg-card-bg-dark rounded-2xl p-2 mb-4 mt-4">
      <div className="flex justify-center items-center w-full h-full p-2">
        <img src={skil.icon} alt={skil.name} />
      </div>
      <h1 className="text-white text-lg mb-6 lg:text-xl text-center mt-3">
        {skil.name}
      </h1>
    </div>
  );
};

export default TechCard;
