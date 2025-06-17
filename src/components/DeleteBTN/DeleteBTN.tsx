import { HiMiniTrash } from "react-icons/hi2";
import "./DeleteBTN.css"
import { IconBase } from "react-icons";

export default function DeletBTN(props) {
  const nada = 'nada'
    return (
    <>
      <button className="editbtn" id="editbtn"
        onClick={props.onClick}
        >
        <HiMiniTrash
        size={27}
        color='#780b0b'
        />
        </button>
    </>
  );
}
