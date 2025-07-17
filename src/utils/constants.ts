export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/infantblack',
  LINKEDIN: 'https://www.linkedin.com/in/infant-aswin-lawrance',
  EMAIL: 'mailto:your@email.com'
} as const;

export const TECH_STACK = [
  'React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'
] as const;

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }
} as const;