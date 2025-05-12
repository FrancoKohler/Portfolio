document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("bntHome");
  const aboutBtn = document.getElementById("bntAbout");
  const projectsBtn = document.getElementById("bntProjects");
  const hireMeBtn = document.getElementById("hireMe");
  const contactSection = document.getElementById("contact");
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const projectsSection = document.getElementById("projectsSection");

  function showSection(sectionToShow) {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
    sectionToShow.style.display = "flex";
  }

  aboutBtn.addEventListener("click", () => {
    showSection(aboutSection);
  });
  hireMeBtn.addEventListener("click", () => {
    showSection(contactSection);
  });

  homeBtn.addEventListener("click", () => {
    showSection(homeSection);
  });

  projectsBtn.addEventListener("click", () => {
    showSection(projectsSection);
  });

  showSection(homeSection);
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-eng").addEventListener("click", () => {
    changeLanguage("en");
  });

  document.getElementById("btn-esp").addEventListener("click", () => {
    changeLanguage("es");
  });

  // Initialize default language (optional)
  changeLanguage("en");
});

const translations = {
  en: {
    title: "Franco Köhler || Portfolio",
    headerName: "Franco Köhler",
    role: "Front-End Developer",
    homeText:
      "I aim to create clean, responsive, and user-friendly web experiences that look great and work seamlessly across all devices. My focus is on intuitive design, smooth performance, and accessibility, ensuring every site is both visually appealing and easy to use.",
    aboutText:
      "I'm a frontend-focused web developer. You can check out some of my work in the Projects section. I'm open to job opportunities that match my skills, as well as new experiences and projects that help me grow and improve. If you have a proposal that fits my experience, feel free to reach out!",
    hireMe: "Hire Me",
    bntAbout: "About",
    bntProjects: "Projects ",
    contactMe: "Contact Me",
    contactp:
      "Ideas, feedback, or just a friendly hello — your message is always welcome.",
    contactNamePlaceholder: "Your Name",
    contactEmailPlaceholder: "Your Email",
    contactMessagePlaceholder: "Your Message",
    btnSend: "SEND",
  },
  es: {
    title: "Franco Köhler || Portfolio",
    headerName: "Franco Köhler",
    role: "Desarrollador Front-End",
    homeText:
      "Mi objetivo es crear experiencias web limpias, responsivas y fáciles de usar que se vean geniales y funcionen perfectamente en todos los dispositivos. Me enfoco en un diseño intuitivo, un rendimiento fluido y la accesibilidad, asegurando que cada sitio sea visualmente atractivo y fácil de usar.",
    aboutText:
      "Soy un desarrollador web enfocado en el frontend. Puedes ver algunos de mis trabajos en la sección de Proyectos. Estoy abierto a oportunidades laborales que se alineen con mis habilidades, así como a nuevas experiencias y proyectos que me ayuden a crecer y mejorar. ¡Si tienes una propuesta que se ajuste a mi experiencia, no dudes en contactarme!",
    hireMe: "Contrátame",
    bntAbout: "Sobre mí",
    bntProjects: "Proyectos",
    contactMe: "Contactame",
    contactp:
      "Ideas, comentarios o simplemente un saludo amistoso: tu mensaje siempre es bienvenido.",
    contactNamePlaceholder: "Tu Nombre",
    contactEmailPlaceholder: "Tu Correo",
    contactMessagePlaceholder: "Tu Mensaje",
    btnSend: "ENVIAR",
  },
};

function setActiveLanguageButton(lang) {
  document.getElementById("btn-eng").classList.toggle("active", lang === "en");
  document.getElementById("btn-esp").classList.toggle("active", lang === "es");
}

function changeLanguage(lang) {
  const langKey = lang.toLowerCase();
  const content = translations[langKey];

  if (!content) return;

  // Actualizamos el contenido del texto principal
  Object.keys(content).forEach((key) => {
    if (Array.isArray(content[key])) return;
    const el = document.getElementById(key);
    if (el) {
      // Si el elemento es un input o textarea, actualizamos el placeholder
      if (el.hasAttribute("placeholder")) {
        el.setAttribute("placeholder", content[key]);
      } else {
        el.textContent = content[key];
      }
    }
  });

  const navItems = document.querySelectorAll(".nav-item");
  content.nav?.forEach((text, i) => {
    if (navItems[i]) {
      navItems[i].textContent = text;
    }
  });

  document.title = content.title;

  setActiveLanguageButton(langKey);
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_o3m25w6", "template_r6xmg3i", this).then(
      function () {
        Swal.fire({
          iconHtml: '<img src="./assets/check.svg"  alt="check">',
          title: "Mensaje enviado",
          text: "¡Tu mensaje fue enviado correctamente!",
          customClass: {
            iconHtml: "custom-icon",
            popup: "my-popup",
            title: "my-title",
            text: "my-text",
            confirmButton: "my-confirm-button",
          },
        });
      },
      function (error) {
        console.log("Fallo el envío:", error);
        Swal.fire({
          iconHtml: '<img src="./assets/cross.svg"  alt="cross">',
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje.",
          customClass: {
            iconHtml: "custom-icon",
            popup: "my-popup",
            title: "my-title",
            text: "my-text",
            confirmButton: "my-confirm-button",
          },
        });
      }
    );
  });
