import { Button, CssVarsProvider } from "@mui/material-next";

const ResetButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <CssVarsProvider>
      <Button
        variant="filled"
        sx={{
          width: "80%",
          alignSelf: "center",
        }}
        onClick={handleClick}
      >
        Reset
      </Button>
    </CssVarsProvider>
  );
};

export default ResetButton;
