import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//Need: need a state for two types: short anser and multiple choice, the state should be QuestionType not String
//Button to change the type of question
//When the type is "multiple_choice_question" the text should display "Multiple Choice"
//When the type is "short_answer_question" the text should display "Short Answer"
//Init type is short_answer_quesion
export function ChangeType(): React.JSX.Element {
    const [question, setType] = useState<QuestionType>("short_answer_question");

    function swapType(): void {
        question == "short_answer_question" ?
            setType("multiple_choice_question")
        :   setType("short_answer_question");
    }

    return (
        <div>
            <Button onClick={swapType}>Change Type</Button>
            {question == "short_answer_question" ?
                <div>Short Answer</div>
            :   <div>Multiple Choice</div>}
        </div>
    );
}
