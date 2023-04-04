import Clicker from "components/Clicker";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";



function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Clicker} exact />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
