import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import Banana from "../assets/images/Banana.svg";
import Leaves from "../assets/images/Leaves.svg";
import Strawberry from "../assets/images/Strawberry.svg";
import Vector from "../assets/vectors/vector3.svg";
import ReusableForm from "../components/ReusableForm";
import CustomButton from "./CustomButton";
import "../App.css";

const MainPage = () => {
  const fields = [
    { name: "height", label: "Height", type: "number" },
    { name: "age", label: "Age", type: "number" },
    { name: "current weight", label: "Current weight", type: "number" },
    { name: "desired weight", label: "Desired Weight", type: "number" },
    { name: "blood type", label: "Blood type", type: "radio" },
  ];

  const handleSubmit = (formData) => {
    console.log("Submitted data", formData);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Box>
        <img
          src={Leaves}
          alt="Leaves"
          style={{
            position: "absolute",
            width: "50vw",
            maxWidth: "120%",
            height: "100vh",
            top: "-5%",
            right: 0,
            left: "25%",
            objectFit: "cover",
            transform: "rotate(-90deg) translateX(-10%)",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Main Container */}
      <Grid2
        container
        spacing={0}
        sx={{
          width: "100vw",
          height: "100vh",
          display: "felx",
          flexWrap: "nowrap",
          alignItems: "stretch",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {/* the form */}
        <Grid2
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            width: "50%", // 50% of the screen width
            marginTop: 0,
          }}
        >
          {/* Title */}
          <Typography
            variant="h1"
            align="left"
            sx={{ marginLeft: "10px", marginBottom: "20px", wordBreak: 'break-word', whiteSpace: 'normal', }}
          >
            Calculate your daily calorie intake right now
          </Typography>

          {/* Form - Two Columns */}
          <Box
            sx={{ width: "100%", maxWidth: "600px", display: "flex", gap: 2 }}
          >
            {/* Left Column */}
            <Box sx={{ width: "50%" }}>
              <ReusableForm
                fields={[
                  { name: "height", label: "Height", type: "number" },
                  { name: "age", label: "Age", type: "number" },
                  {
                    name: "current weight",
                    label: "Current Weight",
                    type: "number",
                  },
                ]}
                onSubmit={handleSubmit}
              />
            </Box>

            {/* Right Column */}
            <Box sx={{ width: "50%" }}>
              <ReusableForm
                fields={[
                  {
                    name: "desired weight",
                    label: "Desired Weight",
                    type: "number",
                  },
                  {
                    name: "blood type",
                    label: "Blood Type",
                    type: "radio",
                    options: ["1", "2", "3", "4"], // Add your blood type options here
                  },                ]}
                onSubmit={handleSubmit}
              />
            </Box>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "20px",
              marginLeft: "45%",
            }}
          >
            <CustomButton type="primary" size="small" onClick={handleSubmit}>
              Start losing weight
            </CustomButton>
          </Box>
        </Grid2>

        {/* Right Column: Images */}
        <Grid2
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            width: "50vw",
            height: "100vh",
            flexShrink: 0,
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          {/* vector3 */}
          <img
            src={Vector}
            alt="Vector Background"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50vw",
              height: "100vh",
              zIndex: -1,
              objectFit: "cover",
            }}
          />

          {/* Banana Image */}
          <img
            src={Banana}
            alt="Banana"
            style={{
              position: "absolute",
              width: "55%",
              top: "10%",
              left: "45%",
            }}
          />

          {/* Strawberry Image */}
          <img
            src={Strawberry}
            alt="Strawberry"
            style={{
              position: "absolute",
              width: "35%",
              bottom: "10%",
              left: "50%",
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MainPage;
