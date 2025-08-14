import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Box, Typography, Container, Card, CardContent, Chip, Avatar } from '@mui/material';
import { Work, TrendingUp, Code } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';

const Experience = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  const experiences = [
    {
      company: 'ANB Systems',
      role: 'Senior Full Stack Developer',
      period: '2024 - Present',
      description: 'Led development of enterprise web applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.',
      achievements: [
        'Built scalable web applications serving 10k+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      icon: Code,
      color: '#FF4D5A',
      tech: ['React', 'Node.js']
    },
    {
      company: 'Vectone',
      role: 'Frontend Developer',
      period: '2020 - 2023',
      description: 'Developed responsive web interfaces and mobile applications. Collaborated with UX/UI designers to create intuitive user experiences.',
      achievements: [
        'Redesigned user interface improving user engagement by 35%',
        'Optimized application performance and reduced load times',
        'Integrated third-party APIs and payment systems'
      ],
      icon: TrendingUp,
      color: '#FFD166',
      tech: ['JavaScript', 'CSS3', 'API Integration']
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2019 - 2020',
      description: 'Worked with various clients to build custom websites and web applications. Focused on responsive design and user experience.',
      achievements: [
        'Delivered 15+ successful projects',
        'Maintained 98% client satisfaction rate',
        'Specialized in React and modern JavaScript'
      ],
      icon: Work,
      color: '#FF4D5A',
      tech: ['React', 'JavaScript', 'Responsive Design']
    }
  ];

  const { ref, isIntersecting: isInView } = useIntersectionObserver({ rootMargin: '-100px' });

  return (
    <Box id="experience" sx={{ 
      minHeight: '100vh', 
      pt: 12, 
      pb: 8, 
      background: isDark
        ? 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            textAlign="center" 
            sx={{ 
              mb: 8, 
              fontWeight: 900,
              background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            My Journey
          </Typography>
        </motion.div>
        
        <Box ref={ref} sx={{ 
          position: 'relative',
          px: { xs: 1, sm: 2, md: 0 }
        }}>
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: 'spring',
                  bounce: 0.4
                }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { 
                      xs: 'column', 
                      sm: 'column',
                      md: isEven ? 'row' : 'row-reverse',
                      lg: isEven ? 'row' : 'row-reverse'
                    },
                    alignItems: { xs: 'center', md: 'center' },
                    justifyContent: { xs: 'center', md: 'space-between' },
                    mb: { xs: 6, sm: 7, md: 8, lg: 10 },
                    gap: { xs: 3, sm: 3, md: 4, lg: 6 },
                    px: { xs: 2, sm: 3, md: 0 }
                  }}
                >
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Avatar 
                      sx={{ 
                        width: { xs: 60, sm: 70, md: 80, lg: 90 }, 
                        height: { xs: 60, sm: 70, md: 80, lg: 90 },
                        background: `linear-gradient(45deg, ${exp.color}, ${exp.color}90)`,
                        boxShadow: `0 0 30px ${exp.color}40`,
                        flexShrink: 0
                      }}
                    >
                      <IconComponent sx={{ fontSize: { xs: 28, sm: 32, md: 40, lg: 45 } }} />
                    </Avatar>
                  </motion.div>
                  
                  {/* Experience Card */}
                  <Card 
                    sx={{ 
                      flex: 1,
                      width: { xs: '100%', sm: '100%', md: 'auto' },
                      maxWidth: { xs: '100%', sm: 500, md: 600, lg: 700 },
                      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 77, 90, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 1)',
                        boxShadow: `0 20px 40px ${exp.color}30`,
                        transform: { xs: 'translateY(-2px)', md: 'translateY(-5px)' },
                        border: `1px solid ${exp.color}50`
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between', 
                        alignItems: { xs: 'flex-start', sm: 'flex-start' }, 
                        mb: { xs: 2, md: 3 },
                        gap: { xs: 1, sm: 0 }
                      }}>
                        <Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 'bold', 
                              mb: 1,
                              color: isDark ? '#FFFFFF' : 'text.primary',
                              fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }
                            }}
                          >
                            {exp.role}
                          </Typography>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: exp.color,
                              fontWeight: 'bold',
                              mb: { xs: 1, md: 2 },
                              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                            }}
                          >
                            {exp.company}
                          </Typography>
                        </Box>
                        <Chip 
                          label={exp.period}
                          size="small"
                          sx={{ 
                            backgroundColor: `${exp.color}20`,
                            color: exp.color,
                            fontWeight: 'bold',
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            alignSelf: { xs: 'flex-start', sm: 'center' }
                          }}
                        />
                      </Box>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: { xs: 2, md: 3 }, 
                          color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary', 
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                      >
                        {exp.description}
                      </Typography>
                      
                      {/* Tech Stack */}
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: { xs: 0.5, sm: 1 }, 
                        mb: { xs: 2, md: 3 },
                        justifyContent: { xs: 'flex-start', sm: 'flex-start' }
                      }}>
                        {exp.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.3 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Chip 
                              label={tech} 
                              size="small"
                              sx={{
                                border: `1px solid ${exp.color}`,
                                backgroundColor: 'transparent',
                                color: exp.color,
                                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                height: { xs: 24, sm: 28 },
                                '&:hover': {
                                  backgroundColor: exp.color,
                                  color: 'white'
                                }
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                      <Box>
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.3 + achIndex * 0.1 }}
                          >
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              mb: { xs: 0.5, sm: 1 },
                              px: { xs: 0, sm: 0 }
                            }}>
                              <Box 
                                sx={{ 
                                  width: 6, 
                                  height: 6, 
                                  borderRadius: '50%', 
                                  backgroundColor: exp.color,
                                  mt: 1,
                                  mr: 2,
                                  flexShrink: 0
                                }} 
                              />
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                  lineHeight: { xs: 1.4, sm: 1.5 }
                                }}
                              >
                                {achievement}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;