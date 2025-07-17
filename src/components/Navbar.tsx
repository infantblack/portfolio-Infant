import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { DarkMode, LightMode, Home, Person, Work, BusinessCenter, ContactMail } from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { toggleTheme } from '../redux/themeSlice';
import iconSvg from '../assets/icon.svg';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isDark, animationsEnabled } = useAppSelector((state) => state.theme);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Person },
    { id: 'experience', label: 'Experience', icon: BusinessCenter },
    { id: 'projects', label: 'Projects', icon: Work },
    { id: 'contact', label: 'Contact', icon: ContactMail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={animationsEnabled ? { y: -50, opacity: 0 } : {}}
      animate={animationsEnabled ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: isDark?  'rgba(10, 9, 9, 0.9)' :'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          boxShadow: 1
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          maxWidth: '1200px', 
          mx: 'auto', 
          width: '100%',
          px: { xs: 1, sm: 2, md: 3 },
          minHeight: { xs: 56, sm: 64 }
        }}>
          <Box 
            onClick={() => scrollToSection('home')}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'green',
                fontWeight: 'bold',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'green' 
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} />
              </Box>
              <Box
                component="img"
                src={iconSvg}
                alt="Portfolio Logo"
                sx={{
                  width: { xs: 30, sm: 40, md: 50 },
                  height: { xs: 30, sm: 40, md: 50 },
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'green' 
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} />
              </Box>
              Infant Aswin
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 0.5, sm: 1, md: 1 },
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.id)}
                    startIcon={<IconComponent sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} />}
                    sx={{
                      color: 'text.primary',
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                      px: { xs: 1, sm: 1.5, md: 2 },
                      py: { xs: 0.5, sm: 1 },
                      minWidth: { xs: 'auto', sm: 'auto', md: 64 },
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        color: 'primary.main'
                      },
                      '& .MuiButton-startIcon': {
                        marginRight: { xs: 0.5, sm: 1 }
                      }
                    }}
                  >
                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                      {item.label}
                    </Box>
                  </Button>
                </motion.div>
              );
            })}
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={() => dispatch(toggleTheme())}
                sx={{ 
                  ml: { xs: 0.5, sm: 1 },
                  p: { xs: 1, sm: 1.5 }
                }}
              >
                {isDark ? 
                  <LightMode sx={{ fontSize: { xs: 20, sm: 24 } }} /> : 
                  <DarkMode sx={{ fontSize: { xs: 20, sm: 24 } }} />
                }
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;