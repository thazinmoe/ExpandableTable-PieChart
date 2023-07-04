import { Table } from "./Components/Table";
import { Table1 } from "./accordion/Table";
import Donutchart from './accordion/donut';
import { MainAccordion } from "./expandable-accordion/MainAccordion"
import Donutchart1 from "./expandable-accordion/donut";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Table />
        <Table1 />
        <MainAccordion />
        <Donutchart />
        <Donutchart1 />
      </div>
    </div>
  );
}

export default App;
