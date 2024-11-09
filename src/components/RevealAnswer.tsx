import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Need: text visible state, reveal answer to invert the state, the answer should initially be hidden, and the button should show the text
export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
