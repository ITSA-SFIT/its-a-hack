const ProblemStatementCard = ({ statementId, problemStatement, exampleFeatures, extracontent }) => {
    return (
      <div className="bg-red-950 flex flex-col p-4 m-2 w-full md:w-1/2 lg:w-2/5 flex-grow text-justify rounded-3xl">
        <h2 className="text-xl font-bold mb-2">Statement ID: {statementId}</h2>
        <p className="mb-4 flex-grow">{problemStatement}</p>
        <h3 className="text-lg font-semibold mb-2">Example Features:</h3>
        <ul className="list-disc list-inside flex-grow">
          {exampleFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="mb-4 mt-2">{extracontent}</p>
      </div>
    );
  };
  
export default ProblemStatementCard;