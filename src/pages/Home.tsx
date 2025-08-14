import { motion } from 'framer-motion';
import { Box, Typography, Button, Container, Fab, Paper, Chip } from '@mui/material';
import { KeyboardArrowDown, GitHub, LinkedIn, Email, Code, Rocket, Star } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';
import { TECH_STACK, SOCIAL_LINKS } from '../utils/constants';

const Home = () => {
  const { animationsEnabled, isDark } = useAppSelector((state) => state.theme);


  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const floatingElements = [
    { icon: Code, delay: 0, x: 100, y: 100 },
    { icon: Rocket, delay: 0.5, x: -120, y: 150 },
    { icon: Star, delay: 1, x: 150, y: -100 },
  ];

  return (
    <Box 
      id="home"
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
        background: isDark 
          ? 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
          : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)'
      }}
    >
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={index}

            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: element.delay }}
            sx={{
              position: 'absolute',
              left: `calc(50% + ${element.x}px)`,
              top: `calc(50% + ${element.y}px)`,
              zIndex: 0
            }}
          >
            <IconComponent sx={{ fontSize: 120, color: '#FF4D5A', opacity: 0.1 }} />
          </motion.div>
        );
      })}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center">
          {/* Main Hero Section */}
          <motion.div
            initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : {}}
            animate={animationsEnabled ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
          >
            <Paper 
              elevation={0}
              sx={{ 
                p: 6, 
                borderRadius: 4, 
                background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(20px)',
                border: isDark ? '1px solid rgba(255, 77, 90, 0.3)' : '1px solid rgba(255, 77, 90, 0.2)'
              }}
            >
              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 900,
                    mb: 2,
                    background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  React Developer
                </Typography>
              </motion.div>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  fontWeight: 300
                }}
              >
                Building Modern Web Experiences with JavaScript & React
              </Typography>
              
              {/* Tech Stack Pills */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
                {TECH_STACK.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Chip 
                      label={tech} 
                      variant="outlined"
                      sx={{ 
                        fontWeight: 'bold',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                          color: 'white'
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
              
              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Fab 
                    component="a"
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{
                      background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFD166, #FF4D5A)',
                        boxShadow: '0 10px 20px rgba(255, 77, 90, 0.4)'
                      }
                    }}
                  >
                    <GitHub />
                  </Fab>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Fab 
                    component="a"
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{
                      background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFD166, #FF4D5A)',
                        boxShadow: '0 10px 20px rgba(255, 209, 102, 0.4)'
                      }
                    }}
                  >
                    <LinkedIn />
                  </Fab>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Fab 
                    component="a"
                    href={SOCIAL_LINKS.EMAIL}
                    size="medium"
                    sx={{
                      background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFD166, #FF4D5A)',
                        boxShadow: '0 10px 20px rgba(255, 77, 90, 0.4)'
                      }
                    }}
                  >
                    <Email />
                  </Fab>
                </motion.div>
              </Box>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToNext}
                  sx={{ 
                    px: 6, 
                    py: 2,
                    fontSize: '1.2rem',
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FFD166, #FF4D5A)',
                      boxShadow: '0 10px 20px rgba(255, 77, 90, 0.4)'
                    }
                  }}
                >
                  View My Projects
                </Button>
              </motion.div>
            </Paper>
          </motion.div>
        </Box>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: 32,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <KeyboardArrowDown 
                sx={{ 
                  fontSize: 48, 
                  color: '#FF4D5A',
                  filter: 'drop-shadow(0 0 10px rgba(255, 77, 90, 0.5))'
                }} 
              />
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;