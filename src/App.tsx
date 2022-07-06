import "./styles.css";
import { FunctionBody } from "./component/functionBody";
import { ClassBody } from "./component/classBody";
import eventCard from "./samples/eventCard";
import listScreen from "./samples/listScreen";
import loginScreen from "./samples/loginScreen";
import profileHeader from "./samples/profileHeader";

export default function App() {
  return (
    <div className="App">
      <ClassBody component={eventCard} />
      <div style={{ height: "100px" }} />
      <ClassBody component={listScreen} />
      <div style={{ height: "460px" }} />
      <ClassBody component={loginScreen} />
      <div style={{ height: "380px" }} />
      <ClassBody component={profileHeader} />
      <div style={{ height: "300px" }} />

      <FunctionBody component={eventCard} />
      <div style={{ height: "100px" }} />
      <FunctionBody component={listScreen} />
      <div style={{ height: "460px" }} />
      <FunctionBody component={loginScreen} />
      <div style={{ height: "380px" }} />
      <FunctionBody component={profileHeader} />
      <div style={{ height: "300px" }} />
    </div>
  );
}
