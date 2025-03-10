const toggler = document.querySelectorAll("[data-languageSelection]");
toggler.forEach((items) => {
  if (items.value == "Deutsch") {
    if (localStorage.getItem("theme") === "white") {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Primary font-[600]' id='spans'>Personalisierte PCs</span> für Sie";
    } else {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]' id='spans'>Personalisierte PCs </span> für Sie";
    }
    document.querySelectorAll("[data-home]").forEach((items, i) => {
      items.innerText = "Startseite";
    });
    document.querySelectorAll("[data-gallery]").forEach((items) => {
      items.innerText = "Galerie";
    });
    document.querySelectorAll("[data-service]").forEach((items, i) => {
      items.innerText = "Unsere Leistungen";
    });
    document.querySelectorAll("[data-accounce]").forEach((items, i) => {
      items.innerText = "Aktuelles";
    });
    document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
      items.innerText = "Über uns";
    });
    document.querySelectorAll("[data-legal]").forEach((items, i) => {
      items.innerText = "Impressum";
    });
    document.querySelector("#copyright").innerText =
      "Alle Rechte Vorbehalten -  EPC-Tech - 2025";

    document.querySelector("[data-daten]").innerText = "Datenschutz";
    document.querySelector("#titleP").innerText =
      "Nie wieder zu viel für einen PC bezahlen. Individuell zusammengestellt für jeden Kunden.";
    document.querySelector("#quoteBtn").innerText =
      "Holen Sie sich ein Angebot";
    document.querySelector("#serviceweprovideHeading").innerText =
      "Einblick in unsere Arbeit";
    document.querySelector("#ourservices").innerText = "Unsere Leistungen";
    document.querySelector("#servicesPara").innerText =
      "Wir bieten eine Vielzahl an Reparatur- und Anpassungsservices. Egal, ob dueine schnelle Reparatur oder einen individuellen PC-Bau benötigst – wir helfendir weiter. Schau dir hier an, was wir anbieten, und finde die passende Lösung für dich.";
    document.querySelector("#servicesBtn").innerHTML =
      "Dienstleistungen<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#ourgallery").innerHTML = "Unsere Galerie";
    document.querySelector("#galleryPara").innerHTML =
      "Werfe einen Blick auf unsere bisherigen Projekte! Unsere Galerie zeigt die PC's Builds und Reparaturen, die wir bereits durchgeführt haben. Lass dich inspirieren!";
    document.querySelector("#galleryBtn").innerHTML =
      "Galerie<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#aboutusText").innerHTML = "Über uns";
    document.querySelector("#aboutusPara").innerHTML =
      "Bei EPC-Tech bauen und reparieren wir PCs seit 2019. Mit jedem Projekt wächst unsere Erfahrung, sodass wir stets hochwertige Ergebnisse liefern können. Deine Technik ist bei uns in guten Händen.";
    document.querySelector("#aboutusBtn").innerHTML =
      "Über uns<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#contacHeading").innerText = "Kontaktieren Sie uns";
    document.querySelector("#getintouch").innerText = "Nehmen Sie Kontakt auf";
    document.querySelector("#contactPara").innerText =
      "Kontaktieren Sie uns übe:";
    document.querySelector("[data-call]").innerText = "Anruf";

    document.querySelector("#messagePlaceholder").innerText = "Nachricht";
    document.querySelector("#textareaContact").placeholder = "Ihre Nachricht";
    document.querySelector("#contactBtn").innerText = "Absenden";
  } else {
    if (localStorage.getItem("theme") === "white") {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Primary font-[600]' id='spans'>Custom PCs</span> are on the horizon";
    } else {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]' id='spans'>Custom PCs</span> are on the horizon";
    }
    document.querySelector("[data-daten]").innerText = "Privacy Policy";
    document.querySelectorAll("[data-home]").forEach((items, i) => {
      items.innerText = "Home";
    });
    document.querySelectorAll("[data-gallery]").forEach((items) => {
      items.innerText = "Gallery";
    });
    document.querySelectorAll("[data-service]").forEach((items, i) => {
      items.innerText = "Services";
    });
    document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
      items.innerText = "About Us";
    });

    document.querySelectorAll("[data-accounce]").forEach((items, i) => {
      items.innerText = "Announcements";
    });

    document.querySelectorAll("[data-legal]").forEach((items, i) => {
      items.innerText = "Legal Notice";
    });

    document.querySelector("#copyright").innerText = "Copyright 2025 EPC-Tech";
    document.querySelector("#titleP").innerText =
      "No need for overpriced custom builds. Built per customer, no hidden costs.";
    document.querySelector("#quoteBtn").innerText = "Get a quote";
    document.querySelector("#serviceweprovideHeading").innerText =
      "Dienstleistungen, die wir anbieten";
    document.querySelector("#ourservices").innerText = "Our Services";
    document.querySelector("#serviceweprovideHeading").innerText =
      "Services We Provide";
    document.querySelector("#servicesPara").innerText =
      "We provide a lot of services. You can choose the service you need by contacting us. we have been serving for 2 years.";
    document.querySelector("#servicesBtn").innerHTML =
      "Services<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#ourgallery").innerHTML = "Our Gallery";
    document.querySelector("#galleryPara").innerHTML =
      "Check out our gallery. The gallery shows the projects we have done so far. Our RIG's contain a lot of PC's.";
    document.querySelector("#galleryBtn").innerHTML =
      "Gallery<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#aboutusText").innerHTML = "About Us";
    document.querySelector("#aboutusPara").innerHTML =
      "We are EPC-Tech. We have been building PC's since 2019. With over 3000+ customers served till now.";
    document.querySelector("#aboutusBtn").innerHTML =
      "About Us<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#contacHeading").innerText = "Contact Us";
    document.querySelector("#getintouch").innerText = "Get In Touch";
    document.querySelector("#contactPara").innerText = "Contact us via:";
    document.querySelector("#messagePlaceholder").innerText = "Message";
    document.querySelector("#textareaContact").placeholder = "Your Message";
    document.querySelector("#contactBtn").innerText = "Submit";
    document.querySelector("[data-call]").innerText = "Call";
  }
  items.addEventListener("change", () => {
    if (items.value == "Deutsch") {
      document.querySelector("[data-daten]").innerText = "Datenschutz";
      if (localStorage.getItem("theme") === "white") {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Primary font-[600]' id='spans'>Personalisierte PCs</span> für Sie";
      } else {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Accent font-[600]' id='spans'>Personalisierte PCs </span> für Sie";
      }
      document.querySelector("#copyright").innerText =
        "Alle Rechte Vorbehalten -  EPC-Tech - 2025";

      document.querySelectorAll("[data-home]").forEach((items, i) => {
        items.innerText = "Startseite";
      });
      document.querySelectorAll("[data-gallery]").forEach((items) => {
        items.innerText = "Galerie";
      });
      document.querySelectorAll("[data-service]").forEach((items, i) => {
        items.innerText = "Unsere Leistungen";
      });
      document.querySelectorAll("[data-accounce]").forEach((items, i) => {
        items.innerText = "Aktuelles";
      });
      document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
        items.innerText = "Über uns";
      });
      document.querySelectorAll("[data-legal]").forEach((items, i) => {
        items.innerText = "Impressum";
      });
      document.querySelector("[data-daten]").innerText = "Datenschutz";
      document.querySelector("#titleP").innerText =
        "Nie wieder zu viel für einen PC bezahlen. Individuell zusammengestellt für jeden Kunden.";
      document.querySelector("#quoteBtn").innerText =
        "Holen Sie sich ein Angebot";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Einblick in unsere Arbeit";
      document.querySelector("#ourservices").innerText = "Unsere Leistungen";
      document.querySelector("#servicesPara").innerText =
        "Wir bieten eine Vielzahl an Reparatur- und Anpassungsservices. Egal, ob dueine schnelle Reparatur oder einen individuellen PC-Bau benötigst – wir helfendir weiter. Schau dir hier an, was wir anbieten, und finde die passende Lösung für dich.";
      document.querySelector("#servicesBtn").innerHTML =
        "Dienstleistungen<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#ourgallery").innerHTML = "Unsere Galerie";
      document.querySelector("#galleryPara").innerHTML =
        "Werfe einen Blick auf unsere bisherigen Projekte! Unsere Galerie zeigt die PC's Builds und Reparaturen, die wir bereits durchgeführt haben. Lass dich inspirieren!";
      document.querySelector("#galleryBtn").innerHTML =
        "Galerie<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#aboutusText").innerHTML = "Über uns";
      document.querySelector("#aboutusPara").innerHTML =
        "Bei EPC-Tech bauen und reparieren wir PCs seit 2019. Mit jedem Projekt wächst unsere Erfahrung, sodass wir stets hochwertige Ergebnisse liefern können. Deine Technik ist bei uns in guten Händen.";
      document.querySelector("#aboutusBtn").innerHTML =
        "Über uns<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#contacHeading").innerText =
        "Kontaktieren Sie uns";
      document.querySelector("#getintouch").innerText =
        "Nehmen Sie Kontakt auf";
      document.querySelector("#contactPara").innerText =
        "Kontaktieren Sie uns übe:";
      document.querySelector("[data-call]").innerText = "Anruf";
      document.querySelector("#textareaContact").placeholder = "Ihre Nachricht";
      document.querySelector("#messagePlaceholder").innerText = "Nachricht";
      document.querySelector("#contactBtn").innerText = "Absenden";
    } else {
      if (localStorage.getItem("theme") === "white") {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Primary font-[600]' id='spans'>Custom PCs</span> are on the horizon";
      } else {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Accent font-[600]' id='spans'>Custom PCs</span> are on the horizon";
      }
      document.querySelector("#copyright").innerText =
        "Copyright 2025 EPC-Tech";
      document.querySelector("[data-daten]").innerText = "Privacy Policy";
      document.querySelectorAll("[data-home]").forEach((items, i) => {
        items.innerText = "Home";
      });
      document.querySelectorAll("[data-gallery]").forEach((items) => {
        items.innerText = "Gallery";
      });
      document.querySelectorAll("[data-service]").forEach((items, i) => {
        items.innerText = "Services";
      });
      document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
        items.innerText = "About Us";
      });

      document.querySelectorAll("[data-accounce]").forEach((items, i) => {
        items.innerText = "Announcements";
      });

      document.querySelectorAll("[data-legal]").forEach((items, i) => {
        items.innerText = "Legal Notice";
      });
      document.querySelector("#titleP").innerText =
        "No need for overpriced custom builds. Built per customer, no hidden costs.";
      document.querySelector("#quoteBtn").innerText = "Get a quote";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Dienstleistungen, die wir anbieten";
      document.querySelector("#ourservices").innerText = "Our Services";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Services We Provide";
      document.querySelector("#servicesPara").innerText =
        "We provide a lot of services. You can choose the service you need by contacting us. we have been serving for 2 years.";
      document.querySelector("#servicesBtn").innerHTML =
        "Services<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#ourgallery").innerHTML = "Our Gallery";
      document.querySelector("#galleryPara").innerHTML =
        "Check out our gallery. The gallery shows the projects we have done so far. Our RIG's contain a lot of PC's.";
      document.querySelector("#galleryBtn").innerHTML =
        "Gallery<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#aboutusText").innerHTML = "About Us";
      document.querySelector("#aboutusPara").innerHTML =
        "We are EPC-Tech. We have been building PC's since 2019. With over 3000+ customers served till now.";
      document.querySelector("#aboutusBtn").innerHTML =
        "About Us<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#contacHeading").innerText = "Contact Us";
      document.querySelector("#getintouch").innerText = "Get In Touch";
      document.querySelector("#contactPara").innerText = "Contact us via:";
      document.querySelector("#messagePlaceholder").innerText = "Message";
      document.querySelector("#textareaContact").placeholder = "Your Message";
      document.querySelector("#contactBtn").innerText = "Submit";
      document.querySelector("[data-call]").innerText = "Call";
    }
  });
});
