import { Provider, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function AppContent() {
  const { isDark } = useSelector((state) => state.theme);
  
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: '#FF4D5A',
      },
      secondary: {
        main: '#FFD166',
      },
      background: {
        default: isDark 
          ? 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
          : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
        paper: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
      },
      text: {
        primary: isDark ? '#FFFFFF' : '#1F2937',
        secondary: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(31, 41, 55, 0.8)'
      }
    },
    transitions: {
      duration: {
        standard: 300,
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={isDark ? 'dark' : ''}>
        <div style={{ 
          minHeight: '100vh',
          background: isDark 
            ? 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
            : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
          color: isDark ? '#FFFFFF' : '#1F2937'
        }}>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;