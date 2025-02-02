import React, { useState } from "react";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Box
} from "@mui/material";
import CustomButton from "../components/CustomButton";

const ReusableForm = ({ fields, onSubmit, buttonLabel }) => {
 
    const initialState = fields.reduce((acc, field) => {
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
      {/* Loop through all fields to generate inputs */}
      {fields.map((field) => (
        <TextField
          key={field.name} // Corrected to field.name
          label={field.label}
          name={field.name}
          value={formData[field.name]} // Corrected to formData[field.name]
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
          type={field.type || "text"}
        />
      ))}

      {/* Render radio buttons only if a field of type 'radio' is found */}
      {fields.find((field) => field.type === "radio") && (
        <Box mt={2}>
          <FormLabel component="legend">Blood Type</FormLabel>
          <RadioGroup
            row
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
          >
            <FormControlLabel value="A" control={<Radio />} label="A" />
            <FormControlLabel value="B" control={<Radio />} label="B" />
            <FormControlLabel value="O" control={<Radio />} label="O" />
            <FormControlLabel value="AB" control={<Radio />} label="AB" />
          </RadioGroup>
        </Box>
      )}

      {/* Submit Button */}
      <CustomButton type="submit">{buttonLabel}</CustomButton>
    </form>
  );
};

export default ReusableForm;
