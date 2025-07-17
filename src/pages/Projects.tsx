import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';

const Projects = () => {
  const { animationsEnabled } = useAppSelector((state) => state.theme);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      tech: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <Box id="projects" sx={{ minHeight: '100vh', pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : {}}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            textAlign="center" 
            sx={{ mb: 8, fontWeight: 'bold' }}
          >
            My Projects
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <motion.div
                initial={animationsEnabled ? { opacity: 0, y: 30 } : {}}
                animate={animationsEnabled ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 8
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tech.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Chip 
                            label={tech} 
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="contained" 
                        startIcon={<Launch />}
                        href={project.demoLink}
                        size="small"
                      >
                        Demo
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outlined" 
                        startIcon={<GitHub />}
                        href={project.githubLink}
                        size="small"
                      >
                        GitHub
                      </Button>
                    </motion.div>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;