/*ACTIVE DROPDOWN FOR LANGUAGE*/
const button = document.querySelector("#showicon");
const dropdownContent = document.querySelector(".dropdown-content");

button.addEventListener("click", function (event) {
  event.stopPropagation();
  this.classList.toggle("selected");
  dropdownContent.classList.toggle("show");
});

/*-----CIERRE DEL DROPDOWN AL CLICKEAR--*/
document.addEventListener("click", function (event) {
  const isClickInsideDropdown =
    dropdownContent.contains(event.target) || button.contains(event.target);

  if (!isClickInsideDropdown) {
    dropdownContent.classList.remove("show");
    button.classList.remove("selected");
  }
});

// Definir los textos en español
const ES = {
  home: "Home",
  about: "Sobre Mí",
  subtitle: "Desarrollador Web Junior",
  contact: "Contacto",
  aboutMe:
    "Soy un desarrollador web centrado en el frontend. Aquí podrás ver algunos de mis trabajos en la sección de Proyectos. Estoy abierto a oportunidades laborales que se ajusten a mis habilidades, si tienes una propuesta que se ajuste a mis habilidades y experiencia no dudes en contactarme",
  skills: "Habilidades",
  projects: "Proyectos",
  about: "Sobre Mí",
  contactMe: "Hablemos",
  nameForm: "NOMBRE",
  emailForm: "CORREO ELECTRÓNICO",
  subjectForm: "ASUNTO",
  messageForm: "MENSAJE",
  sendButtonForm: "ENVIAR",
  imgIdioma: "./assets/ESP FRAME.png",
};

// Definir los textos en inglés
const EN = {
  subtitle: "Junior Web Developer",
  aboutMe:
    "I'm a frontend-focused web developer who builds and manages the front-end of websites. Here you can see some of my work in the Projects section. I am open to job opportunities that fit my skills, if you have a proposal that fits my skills and experience, do not hesitate to contact me",
  skills: "Skills",
  projects: "Proyects",
  about: "About",
  contactMe: "CONTACT ME",
  nameForm: "NAME",
  emailForm: "EMAIL",
  subjectForm: "SUBJECT",
  messageForm: "MESSAGE",
  sendButtonForm: "SEND",
  imgIdioma: "../assets/ENG FRAME.png",
};

let onloadLanguage = "EN";

function changeLanguage(lang) {
  const elements = document.querySelectorAll(
    "#subtitle, #aboutMe, #skills, #projects, #contactMe, #nameForm, #emailForm, #subjectForm, #messageForm, #sendButtonForm"
  );

  elements.forEach((element) => {
    if (lang === "EN") {
      element.textContent = EN[element.id] || element.textContent;
    } else if (lang === "ES") {
      element.textContent = ES[element.id] || element.textContent;
    }
  });

  // Actualizar la imagen del idioma
  const imgIdioma = document.getElementById("imgIdioma");
  imgIdioma.src =
    lang === "ES" ? "./assets/ESP FRAME.png" : "./assets/ENG FRAME.png";

  onloadLanguage = lang;
  languageButton.textContent = lang === "ES" ? "EN" : "ES";
}

let languageButton = document.getElementById("languageButton");

document.getElementById("languageButtonESP").addEventListener("click", () => {
  changeLanguage("ES");
});

// Botón de inglés
document.getElementById("languageButtonENG").addEventListener("click", () => {
  changeLanguage("EN");
});

// index.js

function SendMail() {
  var params = {
    name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_o3m25w6";
  const templateID = "template_r6xmg3i";
  const userID = "9oxu1_QcLVNCGitKQ";

  emailjs
    .send(serviceID, templateID, params, userID)
    .then((res) => {
      console.log("Email sent successfully!", res);
      Swal.fire({
        icon: "success",
        title: "Your Email was sent successfully",
        text: "Will be in touch",
        customClass: {
          popup: "my-popup",
          title: "my-title",
          text: "my-text",
          confirmButton: "my-confirm-button",
        },
      });
      document.getElementById("fullname").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "There was a problem sending your email",
        customClass: {
          popup: "my-popup",
          title: "my-title",
          text: "my-text",
          confirmButton: "my-confirm-button",
        },
      });
    });
}

/*--------SCROLL ANIMATION--------*/ function isElementInViewport(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
  );
}

function handleScrollGeneric(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    }
  });
}

// Throttle function for scroll event
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    handleScrollGeneric(".div-project");
  }, 100)
);
