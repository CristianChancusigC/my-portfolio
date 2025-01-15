const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-primary-500"
    : "bg-card-bg-light dark:bg-card-bg-dark text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
