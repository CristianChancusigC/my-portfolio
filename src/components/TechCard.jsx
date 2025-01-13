const TechCard = ({ skil }) => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-full">
        <img src={skil.icon} alt={skil.name} />
      </div>
      <h1 className="text-white text-lg mb-6 lg:text-xl text-center">
        {skil.name}
      </h1>
    </div>
  );
};

export default TechCard;
