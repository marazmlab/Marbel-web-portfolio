# Marbel.tech - Frontend Developer Portfolio

Modern, interactive portfolio website showcasing my frontend development skills. Built from scratch using React with cutting-edge technologies including Three.js for 3D animations and styled-components for dynamic theming. Features automated CI/CD deployment pipeline and responsive design optimized for all devices.

🚀 **Live Demo:** [MARBEL.TECH](https://marbel.tech)

**Key Features:**
- Dynamic theme switching (light/dark mode)
- Responsive design with mobile-first approach
- Automated deployment with GitHub Actions
- Modern React architecture with hooks and functional components
- Custom webpack configuration for optimized builds
- 3D background animations with Three.js

&nbsp;

## 🔶 Technology Stack

### Frontend Technologies
![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![Three.js](https://img.shields.io/badge/three.js-%23000000.svg?style=for-the-badge&logo=three.js&logoColor=white)
![React Router](https://img.shields.io/badge/react--router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)

### Build Tools & DevOps
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/babel-%23F9DC3E.svg?style=for-the-badge&logo=babel&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![FTP](https://img.shields.io/badge/ftp-%23000000.svg?style=for-the-badge&logoColor=white)

### Development Tools
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/vs%20code-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

&nbsp;

## 🔶 Architecture & Features

### Core Technologies Used
- **React 19.x** - Latest version with modern hooks and functional components
- **Three.js** - Interactive 3D animations and background effects
- **Styled Components** - CSS-in-JS with dynamic theming capabilities
- **React Router v7** - Client-side routing with parameter support
- **Webpack 5** - Custom build configuration with optimization

### Soft Skills Demonstrated
- **Problem Solving** - Complex CI/CD pipeline setup and debugging
- **Continuous Learning** - Integration of cutting-edge technologies (Three.js, React 19)
- **Project Management** - Structured development workflow with Git

&nbsp;


## 🔶 Solutions provided in the project

### Example: Three.js Integration

```jsx
const ThreeBackground = ({ theme }) => {
  const mountRef = useRef(null);
  const cubeRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    // Responsive rendering with cleanup
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);
```
### Dynamic Theming System

```jsx
const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThreeBackground theme={theme === 'dark' ? darkTheme : lightTheme}/>
      <Router>
        <Layout theme={theme} toggleTheme={toggleTheme}>
          {/* Routes */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
};
```

## 🔶 DevOps & Development

Automated Cl/CD Pipeline

- **Github Actions** workflow for automated builds
- **FTP deployment** to custom hosting (Hostinger)
- **Code formatting** with Prettier integration

&nbsp;


## 📋 **Development Roadmap**

### 🧪 **Quality & Testing**
- [ ] **Testing Suite** - Jest + React Testing Library for core components
- [ ] **Accessibility** - ARIA labels, keyboard navigation, color contrast validation
- [ ] **DevOps Enhancement** - Pre-commit hooks, automated testing in CI/CD
- [ ] **Monitoring** - Error tracking (Sentry?), advanced performance metrics

### ⚡ **Performance & Optimization**
- [ ] **Performance** - Code splitting, Three.js optimization, bundle analysis
- [ ] **Mobile Optimization** - Touch gestures, improved responsive design
- [ ] **Progressive Web App** - Service Worker, offline functionality
- [ ] **Loading spinner** for Three.js initialization

### 🎨 **User Experience & Content**
- [ ] **Dynamic Content** - Portfolio projects from JSON, contact form validation
- [ ] **UX Enhancements** - Loading states, error boundaries, custom 404 page
- [ ] **Content Management** - Blog with markdown support, CMS integration
- [ ] **Upgrade Three.js** model and animation

### 🔍 **SEO & Analytics**
- [ ] **SEO Basics** - Meta tags, Open Graph, XML sitemap
- [ ] **Analytics** - Google Analytics integration, basic performance monitoring
- [ ] **Enhanced meta descriptions** and alt texts
- [ ] **Favicon and manifest.json** setup

&nbsp;

## 🔶 Feel free to contact me

If you have any questions or feedback, feel free to reach out!  
Find me on [GitHub](https://github.com/marazmlab) or [LinkedIn](https://www.linkedin.com/in/belz/).

&nbsp;

## 🔶 Thanks / Special thanks / Credits

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.

