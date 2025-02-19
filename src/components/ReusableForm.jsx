import React, { useState } from "react";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Box,
  Grid2,
} from "@mui/material";
import CustomButton from "../components/CustomButton";

const ReusableForm = ({ fields, onSubmit, buttonLabel }) => {
  const initialState = (fields || []).reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Loop through fields to render inputs */}
      <Grid2 container spacing={2}>
        {fields.map((field) => {
          if (field.type === "radio") {
            // Render radio buttons only if the type is 'radio'
            return (
              <Grid2 item xs={12} key={field.name}>
                <Box mt={2}>
                  <FormLabel component="legend">{field.label}</FormLabel>
                  <RadioGroup
                    row
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="A" control={<Radio />} label="A" />
                    <FormControlLabel value="B" control={<Radio />} label="B" />
                    <FormControlLabel value="O" control={<Radio />} label="O" />
                    <FormControlLabel value="AB" control={<Radio />} label="AB" />
                  </RadioGroup>
                </Box>
              </Grid2>
            );
          }

          // For non-radio fields, render TextField
          return (
            <Grid2 item xs={12} md={6} key={field.name}>
              <TextField
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                fullWidth
                required
                margin="none"
                type={field.type || "text"}
                variant="standard"
              />
            </Grid2>
          );
        })}
      </Grid2>

      {/* Submit Button */}
      <Box mt={3}>
        <CustomButton type="submit">{buttonLabel}</CustomButton>
      </Box>
    </form>
  );
};

export default ReusableForm;
