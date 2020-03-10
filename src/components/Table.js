import React, {useState} from "react";
import './Style.css';

export default function Table() {
    let div = [];
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [selecting, setSelecting] = useState(false);

    let beginSelection = i => {
        setSelecting(true);
        setStart(i);
        updateSelection(i);
    };

    let endSelection = (i = end) => {
        setSelecting(false);
        updateSelection(i);

    };
    let updateSelection = i => {
        if(selecting) {
            setEnd(i);
        }
    };
    for(let i = 0; i <= 31; i++ ) {
        let a = (

                <span
                    key={i}
                    className={
                        ((end != null  && start != null) && (end <= i && i<= start || (start <= i && i <= end)) ? "selected": "")
                    }
                    onMouseDown={()=>beginSelection(i)}
                    onMouseUp={()=>endSelection(i)}
                    onMouseMove={()=>updateSelection(i)}
                >
                {i}
            </span>
        );
        div.push(a);
    }
    return div;
}


