import React from 'react';
import ReactDOM from 'react-dom';
import {Label, Well, Image, Button} from 'react-bootstrap';

import { withRouter, BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";

import appLogo from "./assets/img/hycabp.png";

// Using CSS Modules mechanism
import styles from "./assets/css/style.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocationTo = this.changeLocationTo.bind(this);
  }

  changeLocationTo(path) {
    this.props.history.push(path);
  }

  render() {
    return <div>
        <h1>About</h1>
        <h4>{this.props.location.pathname}</h4>
        <Button onClick={this.changeLocationTo.bind(this, "/")}>Home</Button>
        <Button onClick={this.changeLocationTo.bind(this, "/topics")}>Topics</Button>
      </div>;
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocationTo = this.changeLocationTo.bind(this);
  }

  changeLocationTo(path) {
    this.props.history.push(path);
  }

  render() {
    return <div>
        <h1>Home</h1>
        <h4>{this.props.location.pathname}</h4>
        <Button onClick={this.changeLocationTo.bind(this, "/about")}>About</Button>
        <Button onClick={this.changeLocationTo.bind(this, "/topics")}>Topics</Button>
      </div>;
  }
}

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocationTo = this.changeLocationTo.bind(this);
  }

  changeLocationTo(path) {
    this.props.history.push(path);
  }

  render() {
    return <div>
        <h1>Topics</h1>
        <h4>{this.props.location.pathname}</h4>
        <Button onClick={this.changeLocationTo.bind(this, "/")}>Home</Button>
        <Button onClick={this.changeLocationTo.bind(this, "/about")}>About</Button>
      </div>;
  }
}

class MyComp extends React.Component {

  constructor(props) {
    super(props);
    this.changeLocationTo = this.changeLocationTo.bind(this);
  }

  changeLocationTo(path) {
    this.props.history.push(path);
  }

  render() {
    return <div>
              <div className={styles.bpMainDiv}>
                <h2>Boilerplate Components</h2>
                <hr/>
                <div className={styles.bpDiv}>
                  <h3><Label bsStyle="success">React</Label></h3>{' '}
                  <h3><Label bsStyle="info">React-Bootstrap</Label></h3>{' '}
                  <h3><Label bsStyle="warning">React Router</Label></h3>{' '}
                  <h3><Label bsStyle="default">Babel</Label></h3>{' '}
                  <h3><Label bsStyle="default">WebPack</Label></h3>{' '}
                </div>

                <div className={styles.divRouter}>
                  <div className={styles.navTopRouter}>
                      <Link to="/">Home </Link>
                      <Link to="/about">About </Link>
                      <Link to="/topics"> Topics</Link>
                  </div>
                  <div className={styles.compRouter}>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/topics" component={Topics} />
                    </Switch>
                  </div>
                  <div className={styles.navBottomRouter}>
                      <Button bsStyle="info" onClick={this.changeLocationTo.bind(this, "/")}>Home </Button>
                      <span>{'  '}</span>
                      <Button bsStyle="info" onClick={this.changeLocationTo.bind(this, "/about")}>About </Button>
                      <span>{'  '}</span>
                      <Button bsStyle="info" onClick={this.changeLocationTo.bind(this, "/topics")}>Topics</Button>
                  </div>
                </div>
              </div>
          </div>;
  }
}

const MyWrapperComp = withRouter(MyComp);

class Hello extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <div>
              <Well>
                <Image src={appLogo} className={styles.bpImg} alt="HydroCarbons Boilerplates"></Image>
              </Well>

              <Router>
                <MyWrapperComp/>
              </Router>

              <Well>
                <h5><a href='https://github.com/HydroCarbons'>HydroCarbons</a></h5>
                <p>Licensed under the <a href='https://github.com/nishanths/license/blob/master/LICENSE'>MIT License.</a></p>
              </Well>
            </div>;
  }
}

ReactDOM.render( <Hello/>, document.getElementById('react-div'));
