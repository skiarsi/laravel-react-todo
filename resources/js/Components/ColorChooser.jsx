import { useState } from "react";

export default function ColorChooser(props) {
    const [color, setColor] = useState("#DCDCDC");
    return (
        <div
            onClick={() => {
                setColor(props.click(props.bgcolor));
            }}
            style={{ backgroundColor: props.bgcolor }}
            className={props.class}
        >
            &nbsp;
        </div>
    );
}
