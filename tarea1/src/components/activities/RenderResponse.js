import Response from "./Response"
const RenderResponse = () => {
  const data = Response();

  return (
    <div className="tarea2">{data.activity}</div>
  );
};

export default RenderResponse;
