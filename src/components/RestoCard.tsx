type Props = {
  resto: string;
  key: number;
  categorizedRestaurants: {
    [category: string]: string[];
  };
};

const RestoCard = (props: Props) => {
  return (
    <div className="block rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border-1">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 text-2xl font-semibold">
        {props.resto}
      </div>
      <div className="p-6">
        <ul>
          {props.categorizedRestaurants[props.resto].map((restaurant, j) => (
            <li key={j}>{restaurant}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestoCard;
