import React from 'react';
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { Jumbotron } from './migration';
import { Container,  Row, Col } from "react-bootstrap";
import {Tab, Tabs, Box} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Experience = ({ experiences, education }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="section">
      <Container>
        <Tabs
          // orientation="vertical"
          // variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Experience and Education Tabs"
          centered
          sx={{
            '.MuiTabs-flexContainer': {
              justifyContent: 'center'
            },
            '.MuiTab-root': {
              fontSize: '1.2rem', // larger font size
              fontWeight: 'bold', // make it bold
              color: '#555', // subtle color
              '&.Mui-selected': {
                color: '#1976d2', // color for selected tab
              },
              transition: 'color 0.3s', // smooth transition for color change
              margin: '0 12px', // spacing between tabs
            }
          }}
        >
          <Tab icon={<WorkIcon />} iconPosition="start" label="Experience" />
          <Tab icon={<SchoolIcon />} iconPosition="start" label="Education" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Jumbotron className="bg-white">
            <h2 className="display-4 mb-5 text-center">
              {experiences.heading}
            </h2>
            <Row>
              {
                experiences.data.map((data, index) => (
                  <ExperienceCard key={index} data={data} />
                ))}
            </Row>
          </Jumbotron>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Jumbotron className="bg-white">
            <h2 className="display-4 mb-5 text-center">
              {education.heading}
            </h2>
            <Row>
              {education.data.map((edu, index) => (
                <EducationCard key={index} data={edu} />
              ))}
            </Row>
          </Jumbotron>
        </TabPanel>
      </Container>
    </section>
  );
}

export default Experience;