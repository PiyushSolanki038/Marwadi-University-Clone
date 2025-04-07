import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';

const Examinations = () => {
  const examCategories = [
    {
      title: "Regular Examinations",
      items: ["Mid Semester Exams", "End Semester Exams", "Practical Examinations"]
    },
    {
      title: "Backlog Examinations",
      items: ["Previous Semester Papers", "Improvement Exams"]
    },
    {
      title: "Competitive Exams",
      items: ["GATE", "CAT", "GRE Preparation"]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Examination Portal
      </Typography>
      <Grid container spacing={3}>
        {examCategories.map((category, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {category.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {category.items.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 1 }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Examinations;