import { Router } from "react-router-dom";
import Routes from "./routes";
import history from './common/history';
function App() {
  return (
    <Router history={history} >
      <Routes />
    </Router>
  );
}

export default App;
