import React from "react";
import './rangeInput.css';
import { useState } from "react";
function RangeInput() {
    const [value, setValue] = useState(0);
const MAX = 10;
const getBackgroundSize = () => {
	return {
		backgroundSize: `${(value * 100) / MAX}% 100%`,
	};
};
    return (
        <div>
            <input
	type="range"
	min="0"
	max={MAX}
	onChange={(e) => setValue(e.target.value)}
	style={getBackgroundSize()}
	value={value}
/>
        </div>
    )
}
export default RangeInput;