import React, { Component } from "react";
import style from "./app.component.css";
class MyComponent extends Component {
  render() {
    return <div className={style.intro}>Hello World!</div>;
  }
}
export default MyComponent;