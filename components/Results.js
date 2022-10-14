import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move"

const Results = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-5 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
