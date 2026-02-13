import React, { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Breadcrumbs,
  Link,
  Modal,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { clients } from "../data/clients";
import { marketTrends } from "../data/insights";

// Sample financial data for the chart
const financialData = [
  { name: "Q1", Revenue: 4000, Profit: 2400 },
  { name: "Q2", Revenue: 3000, Profit: 1398 },
  { name: "Q3", Revenue: 2000, Profit: 9800 },
  { name: "Q4", Revenue: 2780, Profit: 3908 },
];

const CustomerDashboard = () => {
  const { id } = useParams();
  const client = clients.find((c) => c.id === parseInt(id));
  const [open, setOpen] = useState(false);
  const [analysisModalOpen, setAnalysisModalOpen] = useState(false);
  const [competitor, setCompetitor] = useState("DBS");
  const [analysisQuery, setAnalysisQuery] = useState("");

  if (!client) {
    return <Typography>Client not found</Typography>;
  }

  const trend = marketTrends[client.industry];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAnalysisModalOpen = () => setAnalysisModalOpen(true);
  const handleAnalysisModalClose = () => setAnalysisModalOpen(false);

  const handleAnalysisSubmit = () => {
    const url = `https://server.smithery.ai/@janwilmake/competitive-analysis-demo?competitor=${encodeURIComponent(
      competitor
    )}&analysis=${encodeURIComponent(analysisQuery)}`;
    window.open(url, "_blank");
    handleAnalysisModalClose();
  };

  return (
    <Container sx={{ py: 4 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link component={RouterLink} underline="hover" color="inherit" to="/">
          Priority Calls
        </Link>
        <Typography color="text.primary">{client.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={3}>
        {/* Profile Summary */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">{client.name}</Typography>
              <Typography color="text.secondary">{client.industry}</Typography>
              <Typography>Contact: {client.contact}</Typography>
              <Typography>
                Revenue: ${client.revenue.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Financial Trends */}
      <Card sx={{ my: 3 }}>
        <CardContent>
          <Typography variant="h6">Financials</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Revenue"
                stroke="#004684"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Profit"
                stroke="#FFD200"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* NBA & Conversation Starter */}
        <Grid item xs={12} md={6}>
          {trend && (
            <Card>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Next Best Action (NBA)
                </Typography>
                <Typography>{trend.nba}</Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {trend && (
            <Card>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Conversation Starter
                </Typography>
                <Typography>{trend.conversationStarter}</Typography>
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* Market Research & Competitor Analysis Buttons */}
        <Grid item xs={12}>
          {trend && (
            <Box>
              <Button variant="outlined" onClick={handleOpen}>
                Market Research
              </Button>
              <Button
                variant="outlined"
                sx={{ ml: 2 }}
                onClick={handleAnalysisModalOpen}
              >
                Competitive Analysis
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="market-research-modal-title"
                aria-describedby="market-research-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Typography
                    id="market-research-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Market Trends: {client.industry}
                  </Typography>
                  <Typography
                    id="market-research-modal-description"
                    sx={{ mt: 2 }}
                  >
                    <strong>Trend:</strong> {trend.trend}
                    <br />
                    <strong>News:</strong> {trend.news}
                  </Typography>
                </Box>
              </Modal>
              <Modal
                open={analysisModalOpen}
                onClose={handleAnalysisModalClose}
                aria-labelledby="competitive-analysis-modal-title"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Typography
                    id="competitive-analysis-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Competitive Analysis
                  </Typography>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="competitor-select-label">
                      Competitor
                    </InputLabel>
                    <Select
                      labelId="competitor-select-label"
                      value={competitor}
                      label="Competitor"
                      onChange={(e) => setCompetitor(e.target.value)}
                    >
                      <MenuItem value="DBS">DBS</MenuItem>
                      <MenuItem value="OCBC">OCBC</MenuItem>
                      <MenuItem value="UOB">UOB</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="What to analyse"
                    sx={{ mt: 2 }}
                    value={analysisQuery}
                    onChange={(e) => setAnalysisQuery(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    onClick={handleAnalysisSubmit}
                    sx={{ mt: 2 }}
                  >
                    Generate Analysis
                  </Button>
                </Box>
              </Modal>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerDashboard;
