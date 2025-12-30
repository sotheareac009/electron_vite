import { Button, AppBar, Toolbar, Typography } from "@mui/material";

export function SingInComponent() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Electron + Vite + MUI</Typography>
        </Toolbar>
      </AppBar>

      <Button variant="contained" sx={{ mt: 2 }}>
        Click me
      </Button>
    </>
  );
}
