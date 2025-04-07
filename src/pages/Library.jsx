import React from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, Box } from '@mui/material';

const Library = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        University Library
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Book Search
              </Typography>
              <TextField
                fullWidth
                label="Search Books"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">
                Search
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Library Resources
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1">
                  • E-Books Collection
                </Typography>
                <Typography variant="body1">
                  • Academic Journals
                </Typography>
                <Typography variant="body1">
                  • Research Papers
                </Typography>
                <Typography variant="body1">
                  • Digital Repository
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Library;