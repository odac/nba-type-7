import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { clients as allClients } from "../data/clients";
import { getPriorityClients } from "../data/insights";
import PriorityCallCard from "../components/PriorityCallCard";
import Header from "../components/Header";

const PriorityCalls = () => {
  const [filteredClients, setFilteredClients] = useState([]);
  const [priorityClients, setPriorityClients] = useState([]);

  useEffect(() => {
    const topClients = getPriorityClients(allClients);
    setPriorityClients(topClients);
    setFilteredClients(topClients); // Initially, show all priority clients
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredClients(priorityClients);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filtered = priorityClients.filter(
      (client) =>
        client.name.toLowerCase().includes(lowerCaseQuery) ||
        client.industry.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredClients(filtered);
  };

  return (
    <Box>
      <Header onSearch={handleSearch} />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Top 3 Priority Calls
        </Typography>
        <Grid container spacing={3}>
          {filteredClients.map((client) => (
            <Grid item xs={12} md={4} key={client.id}>
              <PriorityCallCard client={client} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PriorityCalls;
