/*ACTIVE DROPDOWN FOR LANGUAGE*/
const button = document.querySelector("#showicon");
const dropdownContent = document.querySelector(".dropdown-content");

button.addEventListener("click", function () {
  this.classList.toggle("selected");
  dropdownContent.classList.toggle("show");
});

// LANGUAGE BUTTON

// Definir los textos en español
const spanishText = {
  subtitle: "Desarrollador Web Junior",
  aboutMe:
    "Soy un desarrollador web centrado en el frontend que construye y administra el front-end de sitios web. Aquí podrás ver algunos de mis trabajos en la sección de Proyectos. Estoy abierto a oportunidades laborales que se ajusten a mis habilidades, si tienes una propuesta que se ajuste a mis habilidades y experiencia no dudes en contactarme",
  skills: "Habilidades",
  projects: "PROYECTOS",
  about: "Sobre Mí",
  contactMe: "CONTACTATE",
  nameForm: "NOMBRE",
  emailForm: "CORREO ELECTRONICO",
  subjectForm: "ASUNTO",
  messageForm: "MENSAJE",
  sendButtonForm: "ENVIAR",
};

// Definir los textos en inglés
const englishText = {
  subtitle: "Junior Web Developer",
  aboutMe:
    "I'm a frontend-focused web developer who builds and manages the front-end of websites. Here you can see some of my work in the Projects section. I am open to job opportunities that fit my skills, if you have a proposal that fits my skills and experience, do not hesitate to contact me",
  skills: "Skills",
  projects: "PROJECTS",
  about: "About",
  contactMe: "CONTACT ME",
  nameForm: "NAME",
  emailForm: "EMAIL",
  subjectForm: "SUBJECT",
  messageForm: "MESSAGE",
  sendButtonForm: "SEND",
};

let onloadLanguage = "ES"; // Inicializar en español por defecto

function changeLanguage(lang) {
  const elements = document.querySelectorAll(
    "#subtitle, #aboutMe, #skills, #projects, #contactMe, #nameForm, #emailForm, #subjectForm, #messageForm, #sendButtonForm"
  );

  elements.forEach((element) => {
    if (lang === "EN") {
      element.textContent = englishText[element.textContent];
    } else if (lang === "ES") {
      element.textContent = spanishText[element.textContent];
    }
  });

  onloadLanguage = lang;
  languageButton.textContent = lang === "ES" ? "EN" : "ES";
}

// Obtener el botón de cambio de idioma y asignar el evento click
let languageButton = document.getElementById("languageButton");
languageButton.addEventListener("click", () => {
  changeLanguage(onloadLanguage === "ES" ? "EN" : "ES");
});
