import "./styles.css";
import { CardBody } from "./component/cardBody";
import eventCard from "./samples/eventCard";
import listScreen from "./samples/listScreen";
import loginScreen from "./samples/loginScreen";
import profileHeader from "./samples/profileHeader";

export default function App() {
  return (
    <div className="App">
      <CardBody component={eventCard} />
      <div style={{ height: "100px" }} />
      <CardBody component={listScreen} />
      <div style={{ height: "460px" }} />
      <CardBody component={loginScreen} />
      <div style={{ height: "380px" }} />
      <CardBody component={profileHeader} />
      <div style={{ height: "300px" }} />
    </div>
  );
}
