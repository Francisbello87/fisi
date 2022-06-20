import React from "react";
import { useRadioGroup } from "@mui/material/RadioGroup";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const QuestionInputs = () => {
  const onChangeValue = (event) => {
    console.log(event.target.value);
  };
  //   if (onChangeValue === ) {
  //   }
  return (
    <div className="questionInput container">
      <div className="progressbar"></div>
      <h4>Category: People</h4>
      <div className="question">
        <h5>Question 1:</h5>
        <p>
          What is your opinion of the overall quality of life (e.g. in terms of
          time, money and lifestyle) on the farm compared to the previous year?
        </p>
        {/* <div className="answers" onChange={onChangeValue}>
          <div>
            <input type="radio" name="radio" id="radio1" />
            <label for="radio1">Good</label>
          </div>
          <div>
            <input type="radio" name="radio" id="radio2" />
            <label for="radio2">Not good, not bad</label>
          </div>
          <div>
            <input type="radio" name="radio" id="radio3" />
            <label for="radio3">Bad</label>
          </div>
        </div> */}
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default QuestionInputs;
