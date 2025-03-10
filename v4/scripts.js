// JavaScript to load styles and handle the loader visibility

window.addEventListener("load", () => {
    // Hide the loader after the page has fully loaded
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
  
    // Activate sections // JavaScript to load styles and handle the loader visibility

window.addEventListener("load", () => {
    // Hide the loader after the page has fully loaded
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
  
    // Activate sections on scroll
    const sections = document.querySelectorAll('.section');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
  
    sections.forEach(section => sectionObserver.observe(section));
  });
  
  // Custom Cursor Effect
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
  
  // Sticky Header Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  on scroll
    const sections = document.querySelectorAll('.section');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
  
    sections.forEach(section => sectionObserver.observe(section));
  });
  
  // Custom Cursor Effect
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
  
  // Sticky Header Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  