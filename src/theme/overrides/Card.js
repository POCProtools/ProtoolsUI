export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: 2,
          position: "relative",
          zIndex: 0,
        },
      },
    },
  }
}
