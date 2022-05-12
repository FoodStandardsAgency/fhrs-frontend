import { createContext, useContext } from "react";
import {SortingContext} from "../context/create.js";

function Car(props) {
  return <SortingContext.Provider><h2>Hi, I am a Car!</h2>{props.children}</SortingContext.Provider>;
}

export default Car
