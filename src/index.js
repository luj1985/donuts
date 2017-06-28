import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview'
import About from './About'
import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: 'normal' };
    this.updateStyles = this.updateStyles.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateStyles)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateStyles);
  }
  updateStyles() {
    this.setState({
      style: (window.pageYOffset > 64) ? 'compact' : 'normal'
    });
  }
  render() {
    return (
      <nav id="navigator" className={this.state.style || 'normal'}>
        <ul className="container">
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <Navigator />
      <main>
        <Route exact path="/" component={Overview}/>
        <Route path="/about" component={About}/>
      </main>
    </div>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
