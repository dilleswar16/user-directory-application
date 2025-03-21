import { Box, IconButton, Typography } from "@mui/material";

const InfoItem = ({ icon, label, value }) => (
    <Box display="flex" alignItems="center" gap={1} mb={2}>
      <IconButton
        size="small"
        sx={{ bgcolor: "primary.light", color: "greyish" }}
      >
        {icon}
      </IconButton>
      <Box>
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
        <Typography>{value}</Typography>
      </Box>
    </Box>
  );

export default InfoItem;