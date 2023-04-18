import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

interface RatingProps {
  value: number;
  onChange: (newValue: number) => void;
  disabled?: boolean;
}

const RatingStars: React.FC<RatingProps> = ({ value, onChange, disabled }) => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };


  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <Rating
        name="customized"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        size="large"
      />
    </Box>
  );
};

export default RatingStars;
