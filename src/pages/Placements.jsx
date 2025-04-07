import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, LinearProgress } from '@mui/material';

const Placements = () => {
  const placementStats = {
    totalPlacements: 1200,
    averagePackage: "6.5 LPA",
    highestPackage: "42 LPA",
    companies: 150
  };

  const topRecruiters = [
    "Microsoft",
    "Amazon",
    "TCS",
    "Infosys",
    "Wipro",
    "IBM"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Placement Cell
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Placement Statistics
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1">
                  Total Placements: {placementStats.totalPlacements}
                </Typography>
                <Typography variant="body1">
                  Average Package: {placementStats.averagePackage}
                </Typography>
                <Typography variant="body1">
                  Highest Package: {placementStats.highestPackage}
                </Typography>
                <Typography variant="body1">
                  Companies Visited: {placementStats.companies}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Recruiters
              </Typography>
              {topRecruiters.map((company, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1">{company}</Typography>
                  <LinearProgress variant="determinate" value={(100 - index * 10)} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Placements;