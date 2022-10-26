export const Status = (props) => {
  if (props.status === "NEW") {
    return (
      <div className="bg-cyan-600 rounded w-fit px-1">
        <span className="text-white text-xs ">
          <b>{props.status}</b>
        </span>
      </div>
    );
  } else if (props.status === "Good") {
    return (
      <div className="bg-red-400 rounded w-fit px-1">
        <span className="text-white text-xs ">
          <b>{props.status}</b>
        </span>
      </div>
    );
  } else if(props.status==="Theme"){
    return (
        <div className="bg-violet-400 rounded w-fit px-1">
          <span className="text-white text-xs ">
            <b>{props.status}</b>
          </span>
        </div>
      );
  }
};
