"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Accountancy",
  "Business Studies",
  "Economics",
  "Commercial Studies",
  "Commercial Application",
  "Kannada",
  "Hindi",
  "Others",
];

function getStyles(name, subjectName, theme) {
  return {
    fontWeight: subjectName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [subjectName, setSubjectName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubjectName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div style={{  borderRadius: "8px" }}>
      <FormControl sx={{ width: "100%", marginBottom: "10px" }}>
        <InputLabel id="demo-multiple-chip-label">Select Subjects</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={subjectName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ backgroundColor: "#1976d2", color: "#fff" }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, subjectName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {subjectName.length > 0 && (
        <Box
          sx={{
            padding: "10px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold" }} className="text-center">
            Selected Subjects
          </Typography>
          {subjectName.map((name) => (
            <p
              key={name}
              style={{ margin: "6px 0", fontWeight: "bold", color: "#1976d2" }}
            >
              {name}
            </p>
          ))}
        </Box>
      )}
    </div>
  );
}
