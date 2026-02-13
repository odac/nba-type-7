import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

const PriorityCallCard = ({ client }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderTop: `4px solid #FFD200` }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {client.name}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {client.industry}
        </Typography>
        <Box my={2}>
          <Chip
            label="AI Insight"
            size="small"
            sx={{
              backgroundColor: "#004684",
              color: "white",
              fontWeight: 600,
            }}
          />
          <Typography variant="body2" sx={{ mt: 1 }}>
            {client.aiInsight}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/customer/${client.id}`)}
        >
          View Dashboard
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriorityCallCard;
