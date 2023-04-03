import Clicker from "components/Clicker";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import 'reset.css'


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
