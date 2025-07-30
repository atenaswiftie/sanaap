import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";

type ErrorTemplateProps = {
  title: string;
  describtion: string | string[];
  icon: ReactNode;
};

export function ErrorTemplate({
  title,
  describtion,
  icon,
}: ErrorTemplateProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 1,
      }}
    >
      <Box>{icon}</Box>
      <Typography variant="h4" sx={{ my: 2 }}>
        {title}
      </Typography>
      {typeof describtion === "string" ? (
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {describtion}
        </Typography>
      ) : (
        describtion.map((item) => (
          <Typography
            key={item}
            variant="body1"
            sx={{ color: "text.secondary" }}
          >
            {item}
          </Typography>
        ))
      )}
      <Button
        href={"/"}
        size="large"
        variant="contained"
        color="primary"
        sx={{ width: 200, mt: 3 }}
      >
        بازگشت به خانه
      </Button>
    </Box>
  );
}
