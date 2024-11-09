import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

//Need: Two states, one for each dice
//Both should be rendered in the View in a span tag
//The dice should have a data-testid of left-die and right-die
//Two roll buttons for the left and right die, roll will use d6() to roll the die
//Initial values of the dice should be different
//When the two states are equal and equal to one, the message "lose" should display
//When the two state are equal, the message should display "won"
export function TwoDice(): React.JSX.Element {
    const [left_value, setLeft] = useState<number>(4);
    const [right_value, setRight] = useState<number>(3);

    function roll_left(): void {
        setLeft(d6());
    }

    function roll_right(): void {
        setRight(d6());
    }

    return (
        <div>
            <Button onClick={roll_left}>Roll Left</Button>
            <div>
                The left die is
                <span data-testid="left-die"> {left_value} </span>
            </div>
            <Button onClick={roll_right}>Roll Right</Button>
            <div>
                The right die is{" "}
                <span data-testid="right-die"> {right_value} </span>
            </div>

            {left_value == right_value ?
                left_value != 1 ?
                    <div>Win</div>
                :   <div>Lose</div>
            :   <div></div>}
        </div>
    );
}
