import Select from "./components/countries/Select";
import "./App.css";
import RenderResponse from "./components/activities/RenderResponse";
const App = () => {
  return (
    <div className="content">
      <div>
        <RenderResponse />
      </div>
      <div>
        <Select />
      </div>
    </div>
  );
};

export default App;
