import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Box, Typography, Container, Card, CardContent, TextField, Button,
  Grid, Fab, Paper
} from '@mui/material';
import { Send, GitHub, LinkedIn, Email, Code, Terminal, Wifi } from '@mui/icons-material';
import { useAppSelector } from '../redux/hooks';
import { SOCIAL_LINKS } from '../utils/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1, y: 0, transition: { delay, duration: 0.6 }
  })
};

const getTextFieldStyles = (isDark: boolean) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
    '& fieldset': { borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)' },
    '&:hover fieldset': { borderColor: '#FF4D5A' },
    '&.Mui-focused fieldset': {
      borderColor: '#FF4D5A',
      boxShadow: '0 0 10px rgba(255, 77, 90, 0.3)'
    }
  },
  '& .MuiInputLabel-root': { color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary' },
  '& .MuiOutlinedInput-input': { color: isDark ? '#FFFFFF' : 'text.primary' }
});

const socialLinks = [
  { name: 'GitHub', url: SOCIAL_LINKS.GITHUB, icon: GitHub },
  { name: 'LinkedIn', url: SOCIAL_LINKS.LINKEDIN, icon: LinkedIn },
  { name: 'Email', url: SOCIAL_LINKS.EMAIL, icon: Email }
];

const floatingIcons = [
  { icon: Code, x: 100, y: 100, delay: 0 },
  { icon: Terminal, x: -150, y: 200, delay: 0.5 },
  { icon: Wifi, x: 200, y: -100, delay: 1 }
];

export default function Contact() {
  const { isDark } = useAppSelector((state) => state.theme);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '70vh',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)'
          : 'linear-gradient(135deg, #FFFFFF, #F8FAFC, #F1F5F9)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255,77,90,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,209,102,0.3) 0%, transparent 50%)',
          zIndex: 0
        }
      }}
    >
      {/* Floating Icons */}
      {floatingIcons.map(({ icon: Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay }}
          style={{
            position: 'absolute',
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            zIndex: 1
          }}
        >
          <Icon sx={{ fontSize: 100, color: '#FF4D5A', opacity: 0.1 }} />
        </motion.div>
      ))}

      {/* Background grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(255,77,90,0.03) 100px), repeating-linear-gradient(0deg, transparent, transparent 98px, rgba(255,77,90,0.03) 100px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 900,
              background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Let's Connect
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Info + Socials */}
          <Grid item xs={12} md={4}>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0.2}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: isDark ? '1px solid rgba(255,77,90,0.3)' : '1px solid rgba(255,77,90,0.2)',
                  borderRadius: 3,
                  boxShadow: isDark ? 'none' : '0 8px 32px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: isDark ? '#fff' : '#333' }}>
                  Ready to Build Something Amazing?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: isDark ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                    lineHeight: 1.7
                  }}
                >
                  I’m always excited about new projects and collaborations. Let’s start a
                  conversation!
                </Typography>
                <Box display="flex" gap={2} flexWrap="wrap">
                  {socialLinks.map(({ name, url, icon: Icon }, idx) => (
                    <motion.div
                      key={name}
                      initial="hidden"
                      animate="show"
                      variants={fadeUp}
                      custom={0.4 + idx * 0.1}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Fab
                        component="a"
                        href={url}
                        target={name !== 'Email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        sx={{
                          background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                          color: '#fff',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #FFD166, #FF4D5A)',
                            boxShadow: '0 0 20px rgba(255,77,90,0.6)'
                          }
                        }}
                      >
                        <Icon />
                      </Fab>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6} lg={6}>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0.4}>
              <Card
                sx={{
                background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: isDark ? '1px solid rgba(255,77,90,0.3)' : '1px solid rgba(255,77,90,0.2)',
                borderRadius: 3,
                boxShadow: isDark ? 'none' : '0 8px 32px rgba(0,0,0,0.1)',
                width: '100%',              // ensure it fills the grid cell
                maxWidth: '1000px',         // optional, limit max width
                margin: '0 auto'            // center it
              }}
              >
                <CardContent sx={{ p: 6 }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          sx={getTextFieldStyles(isDark)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          sx={getTextFieldStyles(isDark)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          multiline
                          rows={6}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          sx={getTextFieldStyles(isDark)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          disabled={isSubmitting}
                          endIcon={<Send />}
                          sx={{
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #FF4D5A, #FFD166)',
                            color: '#fff',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFD166, #FF4D5A)',
                              boxShadow: '0 0 20px rgba(255,77,90,0.4)'
                            },
                            '&:disabled': { background: 'rgba(255,77,90,0.3)' }
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
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
}
