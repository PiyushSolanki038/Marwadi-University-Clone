import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const Notices = () => {
  const notices = [
    {
      title: "Mid-Semester Examination Schedule",
      date: "2024-02-15",
      description: "Mid-semester examinations for all departments will commence from March 1st, 2024"
    },
    {
      title: "Annual Cultural Fest",
      date: "2024-02-10",
      description: "Annual cultural festival 'Rhythm' will be held from February 25th to 27th"
    },
    // Add more notices as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notices & Announcements
      </Typography>
      <Paper elevation={3}>
        <List>
          {notices.map((notice, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={notice.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {notice.date}
                      </Typography>
                      {" — " + notice.description}
                    </>
                  }
                />
              </ListItem>
              {index < notices.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Notices;