import { motion } from 'framer-motion';
import { Box, Typography, Container, Card, CardContent, Button, Chip } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern product landing page with smooth animations and interactive sliders',
    tech: ["React", "React Router DOM", "Framer Motion"],
    githubLink: 'https://github.com/infantblack/Product-landin-page',
    status: 'completed'
  },
  {
    title: 'Task Management App',
    description: 'Dynamic task management system with React routing and motion effects',
    tech: ["React", "React Router DOM", "Framer Motion"],
    githubLink: 'https://github.com/infantblack/Task-Management',
    status: 'completed'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with Chart.js and Tailwind styling',
    tech: ['React', 'Chart.js', 'Tailwind'],
    status: 'working in progress'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.6 } })
};

export default function Projects() {
  const { isDark } = useAppSelector((state) => state.theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 2000);
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
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
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

        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <Card
              sx={{
                width: 550,
                height: 260,
                p: 2,
                background: isDark
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(255,255,255,0.95)',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
              }}
            >
              <CardContent>
                <motion.div custom={0.2} initial="hidden" animate="show" variants={fadeUp}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                </motion.div>

                <motion.div custom={0.4} initial="hidden" animate="show" variants={fadeUp}>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>
                </motion.div>

                <motion.div custom={0.6} initial="hidden" animate="show" variants={fadeUp}>
                  <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: 'rgba(255, 209, 102, 0.2)',
                          color: '#FFD166',
                          border: '1px solid #FFD166'
                        }}
                      />
                    ))}
                  </Box>
                </motion.div>

                <motion.div custom={0.8} initial="hidden" animate="show" variants={fadeUp}>
                  <Box display="flex" justifyContent="space-between" mt={4}>
                    <Chip
                      label={project.status}
                      sx={{
                        fontWeight: 600,
                        background:
                          project.status === 'completed'
                            ? 'linear-gradient(45deg, #4CAF50, #8BC34A)'
                            : 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                        color: '#fff'
                      }}
                    />
                    {project.githubLink && (
                      <Button
                        startIcon={<GitHub />}
                        href={project.githubLink}
                        size="small"
                        sx={{
                          background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                          color: '#fff'
                        }}
                      >
                        GitHub
                      </Button>
                    )}
                  </Box>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
