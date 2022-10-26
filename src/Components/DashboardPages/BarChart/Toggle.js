import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({
  type,
  chartData,
  setChartData,
}) {

  const handleChange = async (event, newType) => {
  
  };

  const sx = { fontSize: "0.7rem", padding: "0.5rem" };

  React.useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth < 800) {
       
      }
    }
  }, []);

  return (
    <ToggleButtonGroup
      color="primary"
      value={type}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="toggle-group"
      sx={{
        "&.Mui-selected, &.Mui-selected:hover": {
          color: "#3a80e9 !important",
          backgroundColor: "#3a80e9",
        },
        borderColor: "#3a80e9",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "#3a80e9",
        },
        "& .MuiToggleButton-standard": {
          color: "#3a80e9",
        },
      }}
    >
      <ToggleButton value="prices" className="toggle-btn">
        Price
      </ToggleButton>
      <ToggleButton
        value="market_caps"
        className="toggle-btn"
      >
        MKT Cap
      </ToggleButton>
      <ToggleButton
        value="total_volumes"
        className="toggle-btn"
      >
        Volume
      </ToggleButton>
    </ToggleButtonGroup>
  );
}