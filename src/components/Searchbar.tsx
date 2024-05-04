import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const Searchbar = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) => {
  const adornments = {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
    endAdornment: value && (
      <InputAdornment position="end">
        <CloseIcon
          onClick={value ? () => handleChange("") : undefined}
        />
      </InputAdornment>
    ),
  };

  const searchBarWidthInPx = 500;

  return (
    <TextField
      size="small"
      placeholder="Skill, Framework, etc..."
      label="Search"
      value={value}
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
          md: searchBarWidthInPx,
        },
      }}
      InputProps={{
        ...adornments,
      }}
      onChange={(e) => handleChange(e.target.value)}
    ></TextField>
  );
};

export default Searchbar;
