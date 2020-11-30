import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Overview from './components/pages/Overview';
import {
  Reports,
  ReportsOne,
  ReportsThree,
  ReportsTwo,
} from './components/pages/Reports';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
      </Switch>
    </Router>
  );
}

export default App;
