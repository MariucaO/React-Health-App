import React, { useState } from "react";
import { Grid2, TextField, Box } from "@mui/material";

const ReusableForm = ({ fields = [], onSubmit, buttonLabel }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2}>
        {fields.map((field) => (
          <Grid2 item xs={12} sm={6} key={field.name}> {/* `item` is used correctly */}
            <TextField
              label={field.label}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
              fullWidth
            />
          </Grid2>
        ))}
      </Grid2>

      <Box mt={3}>
        <button type="submit">{buttonLabel}</button> {/* Button */}
      </Box>
    </form>
  );
};

export default ReusableForm;
