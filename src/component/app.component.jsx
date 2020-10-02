import React, { HelloWorld } from "react";
import style from "./app.component.css";

class MyComponent extends HelloWorld {
  render() {
    return <div className={style.intro}>Hello World!</div>;
  }
}
export default MyComponent;