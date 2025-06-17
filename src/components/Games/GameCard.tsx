import { useState } from "react";
import "./Game.css";
import Calendar from "../Calendar/Calendar";
import DeletBTN from "../DeleteBTN/DeleteBTN";

// import EditBTN from "../BTNs/EditBTN.tsx";
export default function GameCard(props) {



  return (
    <>
      <div className="EIGeral">
        <h3 className="EIName">{props.Name}</h3>
        <h3 className="EIDate">
          <span className="Calendar">
            <Calendar times={props.Dat} />
          </span>
        </h3>
        <h3 className="EiPrice">R$ {props.Price}</h3>
        <DeletBTN onClick={props.onClick}/>
      </div>
    </>
  );
}
