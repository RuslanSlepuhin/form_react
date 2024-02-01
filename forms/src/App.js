import React, { useState } from 'react';

function FormComponent() {
    // Initialize state for each checkbox
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);
    const [customAnswer, setCustomAnswer] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!option1 && !option2 && !option3 && !option4 && !option5) {
            alert("Please select at least one option");
        } else {
            console.log({
                option1,
                option2,
                option3,
                option4,
                option5,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Your Question:
                    <input type="text" />
                </label>

            </div>
            <div>
                <label>
                    <input type="checkbox" checked={option1} onChange={() => setOption1(!option1)} />
                    Option 1
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={option2} onChange={() => setOption2(!option2)} />
                    Option 2
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={option3} onChange={() => setOption3(!option3)} />
                    Option 3
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={option4} onChange={() => setOption4(!option4)} />
                    Option 4
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={option5} onChange={() => setOption5(!option5)} />
                    Option 5
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={option5} onChange={() => setOption5(!option5)} />
                    Custom Answer:
                    <input type="text" value={customAnswer} onChange={e => setCustomAnswer(e.target.value)} />
                </label>

            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
