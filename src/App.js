import "./App.css";
import SideMenu from "./components/SideMenu";
import Roadmap from "./Roadmap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState} from "react";

function App() {
  const [inactive, setInactive] = useState(false);
  const Backlog = () => <h1>Backlog</h1>;
  const Board = () => <h1>Board</h1>;
  const Code = () => <h1>Code</h1>;
  const ProjectPages = () => <h1>ProjectPages</h1>;
  const AddShortcut = () => <h1>AddShortcut</h1>;
  const ProjectSettings = () => <h1>ProjectSettings</h1>;

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path={"/Roadmap"} component={Roadmap} />
            <Route exact path={"/Backlog"} component={Backlog} />
            <Route exact path={"/Board"} component={Board} />
            <Route path={"/Code"} component={Code} />
            <Route path={"/ProjectPages"} component={ProjectPages} />
            <Route path={"/AddShortcut"} component={AddShortcut} />
            <Route path={"/ProjectSettings"} component={ProjectSettings} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
