import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Box, Typography, Container, Card, CardContent, TextField, Button, Grid, Fab, Paper } from '@mui/material';
import { Send, GitHub, LinkedIn, Email, Code, Terminal, Wifi } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';
import { SOCIAL_LINKS } from '../utils/constants';

const Contact = () => {
  const { animationsEnabled } = useAppSelector((state) => state.theme);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: SOCIAL_LINKS.GITHUB, icon: GitHub, color: '#333' },
    { name: 'LinkedIn', url: SOCIAL_LINKS.LINKEDIN, icon: LinkedIn, color: '#0077b5' },
    { name: 'Email', url: SOCIAL_LINKS.EMAIL, icon: Email, color: '#ea4335' }
  ];



  const floatingIcons = [
    { icon: Code, x: 100, y: 100, delay: 0 },
    { icon: Terminal, x: -150, y: 200, delay: 0.5 },
    { icon: Wifi, x: 200, y: -100, delay: 1 }
  ];

  return (
    <Box 
      id="contact"
      sx={{ 
        minHeight: '100vh', 
        pt: 12, 
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
        zIndex: 0
      }
    }}>
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}

            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: item.delay }}
            sx={{
              position: 'absolute',
              left: `calc(50% + ${item.x}px)`,
              top: `calc(50% + ${item.y}px)`,
              zIndex: 1
            }}
          >
            <IconComponent sx={{ fontSize: 100, color: '#3b82f6' }} />
          </motion.div>
        );
      })}

      {/* Matrix-like Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(59, 130, 246, 0.03) 100px), repeating-linear-gradient(0deg, transparent, transparent 98px, rgba(59, 130, 246, 0.03) 100px)',
        zIndex: 1
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
              color: 'white',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}
          >
            Let's Connect
          </Typography>
        </motion.div>
        
        <Grid container spacing={6} alignItems="stretch">
          {/* Left Side - Info */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  Ready to Build Something Amazing?
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontSize: '1.1rem'
                  }}
                >
                  I'm always excited about new projects and collaborations. 
                  Whether you have a specific idea or just want to explore possibilities, 
                  let's start a conversation!
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Fab
                          component="a"
                          href={link.url}
                          target={link.name !== 'Email' ? '_blank' : undefined}
                          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                          sx={{
                            background: `linear-gradient(45deg, ${link.color}, ${link.color}90)`,
                            color: 'white',
                            '&:hover': {
                              boxShadow: `0 0 20px ${link.color}60`
                            }
                          }}
                        >
                          <IconComponent />
                        </Fab>
                      </motion.div>
                    );
                  })}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Right Side - Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                        >
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.3)'
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#3b82f6',
                                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                                }
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)'
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'white'
                              }
                            }}
                          />
                        </motion.div>
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                        >
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.3)'
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#3b82f6',
                                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                                }
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)'
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'white'
                              }
                            }}
                          />
                        </motion.div>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                        >
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={6}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.3)'
                                },
                                '&:hover fieldset': {
                                  borderColor: '#3b82f6'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#3b82f6',
                                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                                }
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)'
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'white'
                              }
                            }}
                          />
                        </motion.div>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                            endIcon={<Send />}
                            sx={{
                              py: 2,
                              fontSize: '1.1rem',
                              fontWeight: 'bold',
                              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                              color: 'white',
                              borderRadius: 2,
                              '&:hover': {
                                background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                              },
                              '&:disabled': {
                                background: 'rgba(59, 130, 246, 0.3)'
                              }
                            }}
                          >
                            {isSubmitting ? 'Sending Message...' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;