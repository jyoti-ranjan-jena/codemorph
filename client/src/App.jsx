import { Link, Route, Switch } from "wouter";
import CodeExplainerPage from "./pages/CodeExplainer";
import CodeSuggestorPage from "./pages/CodeSuggestor";
import CodeConverterPage from "./pages/CodeConverter";
import AboutUsPage from "./pages/About";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/code_explainer" component={CodeExplainerPage} />
        <Route path="/code_converter" component={CodeConverterPage} />
        <Route path="/code_suggestor" component={CodeSuggestorPage} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  );
}

export default App;
