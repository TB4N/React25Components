import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }


    function handleMultipleSelection(getCurrentId) {
        let cpyMuliple = [...multiple];
        const findIndexOfCurrentId = cpyMuliple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMuliple.push(getCurrentId)
        else cpyMuliple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMuliple)
    }
    console.log(selected, multiple)
    return (
        <div className="wrapper">
            {/* select multiple selection if click the button */}
            <button onClick={() => setMultiSelection(!multiSelection)} active>Multi Selection</button>

            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={multiSelection ? () =>
                                handleMultipleSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                multiSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">{dataItem.answer}</div> :
                                    selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)
                            }
                            {/* {selected === dataItem.id ||
                                multiple.indexOf(dataItem.id) !== -1 ?
                                (<div className="content">{dataItem.answer}</div>)
                                : null} */}
                        </div>
                    ))
                ) : (
                    <div>No Data Found !</div>
                )}
            </div>
        </div>
    );
}