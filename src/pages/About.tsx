import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import { Code, Storage, Build } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';

const About = () => {
  const { animationsEnabled } = useAppSelector((state) => state.theme);

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'MatrialUI'], icon: Code },
    { category: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'Express Js'], icon: Storage },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'], icon: Build },
  ];

  return (
    <Box id="about" sx={{ minHeight: '100vh', pt: 12, pb: 8 }}>
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
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            About Me
          </Typography>
        </motion.div>
        
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : {}}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: 'text.secondary',
                lineHeight: 1.8,
                textAlign: 'center'
              }}
            >
              I'm a passionate Full Stack Developer with experience in building modern web applications. 
              I enjoy creating efficient, scalable solutions and staying up-to-date with the latest technologies.
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                lineHeight: 1.8,
                textAlign: 'center'
              }}
            >
              With a strong foundation in both frontend and backend development, I bring ideas to life 
              through clean code and thoughtful user experiences.
            </Typography>
          </Box>
        </motion.div>
        
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : {}}
          animate={animationsEnabled ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            textAlign="center" 
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Skills & Tools
          </Typography>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={skillGroup.category}>
                  <motion.div
                    initial={animationsEnabled ? { opacity: 0, y: 30 } : {}}
                    animate={animationsEnabled ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        borderRadius: { xs: 2, md: 3 },
                        '&:hover': {
                          boxShadow: { xs: 4, md: 6 },
                          transform: { xs: 'translateY(-2px)', md: 'translateY(-4px)' }
                        }
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: 'primary.main',
                            width: { xs: 48, sm: 52, md: 56 },
                            height: { xs: 48, sm: 52, md: 56 },
                            mx: 'auto',
                            mb: { xs: 1.5, md: 2 }
                          }}
                        >
                          <IconComponent sx={{ fontSize: { xs: 28, sm: 32, md: 36 } }} />
                        </Avatar>
                        
                        <Typography 
                          variant="h5" 
                          component="h3" 
                          sx={{ 
                            mb: { xs: 2, md: 3 }, 
                            fontWeight: 'bold', 
                            color: 'primary.main',
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }
                          }}
                        >
                          {skillGroup.category}
                        </Typography>
                        
                        <Box sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: { xs: 0.5, sm: 0.75, md: 1 }, 
                          justifyContent: 'center',
                          minHeight: { xs: 'auto', md: 80 },
                          alignItems: 'flex-start'
                        }}>
                          {skillGroup.items.map((skill) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Chip 
                                label={skill} 
                                size="small"
                                sx={{
                                  border: '1px solid',
                                  borderColor: 'primary.main',
                                  color: 'primary.main',
                                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
                                  height: { xs: 24, sm: 28, md: 32 },
                                  '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'primary.contrastText',
                                    transform: 'scale(1.05)'
                                  }
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;