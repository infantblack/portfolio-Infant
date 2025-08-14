import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Container, Card, CardContent, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';
import { useState, useEffect } from 'react';

const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Framer Motion', 'CSS3'],
      githubLink: 'https://github.com/infantblack/Product-landin-page',
      status: 'completed'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['React', 'Material-UI', 'Emotion', 'MUI Icons'],
      githubLink: 'https://github.com/infantblack/Task-Management/tree/taskmgnt',
      status: 'completed'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      tech: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
      status: 'in-progress'
    }
  ];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 45 : -45,
    transition: { duration: 0.5 }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export default function Projects() {
  const { isDark } = useAppSelector((state) => state.theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[currentIndex];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: '10vh',
        pt: 8,
        pb: 6,
        background: isDark
          ? 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)'
          : 'linear-gradient(135deg, #FFFFFF, #F8FAFC, #F1F5F9)'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        <Box display="flex" justifyContent="center" alignItems="center" height="450px" position="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ position: 'absolute' }}
            >
              <Card
                sx={{
                  width: 600,
                  height: 320,
                  p: 3,
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.9))',
                  borderRadius: 4,
                  boxShadow: isDark
                    ? '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
                    : '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(20px)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF4D5A, #FFD166, #4CAF50)',
                    borderRadius: '4px 4px 0 0'
                  }
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 2,
                        background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {project.title}
                    </Typography>
                  </motion.div>

                  <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
                      }}
                    >
                      {project.description}
                    </Typography>
                  </motion.div>

                  <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                  >
                    <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
                      {project.tech.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                        >
                          <Chip
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(255, 209, 102, 0.15)',
                              color: '#FFD166',
                              border: '1px solid rgba(255, 209, 102, 0.3)',
                              fontWeight: 500,
                              '&:hover': {
                                background: 'rgba(255, 209, 102, 0.25)',
                                transform: 'translateY(-2px)'
                              },
                              transition: 'all 0.3s ease'
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>

                  <Box sx={{ mt: 'auto' }}>
                    <motion.div
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                    >
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Chip
                          label={project.status === 'completed' ? 'Completed' : 'In Progress'}
                          sx={{
                            fontWeight: 600,
                            px: 2,
                            background: project.status === 'completed'
                              ? 'linear-gradient(45deg, #4CAF50, #8BC34A)'
                              : 'linear-gradient(45deg, #FF9800, #FFC107)',
                            color: '#fff',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                          }}
                        />
                        {project.githubLink && (
                          <Button
                            startIcon={<GitHub />}
                            endIcon={<Launch />}
                            href={project.githubLink}
                            target="_blank"
                            sx={{
                              background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                              color: '#fff',
                              fontWeight: 600,
                              px: 3,
                              py: 1,
                              borderRadius: 2,
                              boxShadow: '0 4px 12px rgba(255, 77, 90, 0.3)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #FF3D4A, #FFB166)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 16px rgba(255, 77, 90, 0.4)'
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            View Code
                          </Button>
                        )}
                      </Box>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Navigation Dots */}
        <Box display="flex" justifyContent="center" gap={1} mt={4}>
          {projects.map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Box
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: index === currentIndex
                    ? 'linear-gradient(45deg, #FF4D5A, #FFD166)'
                    : isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: index === currentIndex
                      ? 'linear-gradient(45deg, #FF4D5A, #FFD166)'
                      : isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
                  }
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
