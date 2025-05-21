

  /*----- Onclick -----*/

      const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

     
  /*----- Hire Me ----- */
 
  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

 
 /*----- About Section -----*/

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on page load
});


/*----- Skills -----*/

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  reveal(); // Run once on page load

/*----- services -----*/

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((el, index) => {
      const revealTop = el.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 150);
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});


/*----- Contact -----*/

 function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal); // Trigger reveal on initial load too



  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });


 
   /**-------Message Submit------ */


(function () {
    emailjs.init("dfZyuyqTygA8-4C73"); // Your actual Public Key
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const messageDiv = document.getElementById("form-message");

    function showMessage(text, isError = false) {
      messageDiv.textContent = text;
      messageDiv.style.color = isError ? "red" : "green";
      messageDiv.classList.add("show");

      // Animate opacity and transform (fade and slide up)
      messageDiv.style.opacity = "1";
      messageDiv.style.transform = "translateY(0)";

      // Hide message after 3 seconds
      setTimeout(() => {
        messageDiv.style.opacity = "0";
        messageDiv.style.transform = "translateY(15px)";
        messageDiv.classList.remove("show");
      }, 3000);
    }

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("Naveen2005", "template_5y3b4yv", this)
          .then(function () {
            showMessage("✅ Message sent successfully!");
            form.reset();
          }, function (error) {
            showMessage("❌ Failed to send message. Try again.", true);
            console.error("EmailJS Error:", error);
          });
      });
    }
  });




