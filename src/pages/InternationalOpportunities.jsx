import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const InternationalOpportunities = () => {
  const opportunities = [
    {
      title: "Student Exchange Programs",
      description: "Study abroad opportunities with partner universities worldwide",
      countries: ["USA", "UK", "Canada", "Australia"]
    },
    {
      title: "International Internships",
      description: "Global internship opportunities with multinational companies",
      countries: ["Germany", "Japan", "Singapore", "UAE"]
    },
    {
      title: "Research Collaborations",
      description: "International research projects and collaborations",
      countries: ["Switzerland", "Sweden", "Netherlands"]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        International Opportunities
      </Typography>

      <Grid container spacing={3}>
        {opportunities.map((opportunity, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {opportunity.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {opportunity.description}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Available Countries:
                </Typography>
                {opportunity.countries.map((country, idx) => (
                  <Button
                    key={idx}
                    variant="outlined"
                    size="small"
                    sx={{ m: 0.5 }}
                  >
                    {country}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InternationalOpportunities;