const AnimalImage = ({
  imgURL,
  name,
  species,
  category,
}: {
  imgURL: string;
  name: string;
  species: string;
  category: string;
}) => {
  return (
    <img
      src={imgURL}
      alt={`Image of ${name}, the ${species}, found as ${category}`}
      className="rounded-[16px] w-[287px] h-[178px] mb-[24px] md:w-[294px]"
    />
  );
};

export default AnimalImage;
