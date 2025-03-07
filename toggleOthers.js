async function returnElems() {
  const index = await fetch("index.html");
  const gallery = await fetch("gallery.html");
  const service = await fetch("service.html");
  const impressum = await fetch("impressum.html");
  const aboutus = await fetch("about.html");
  const indexText = await index.text();
  const galleryText = await gallery.text();
  const serviceText = await service.text();
  const impressumText = await impressum.text();
  const aboutusText = await aboutus.text();
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = indexText + galleryText + serviceText + impressumText;
  const fetchedToggleElems = tempDiv.querySelectorAll("#toggleBtn");
  const currentToggleElems = document.querySelectorAll("#toggleBtn");

  const allToggleElems = [...currentToggleElems, ...fetchedToggleElems];
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("bg-black");
    document.body.classList.remove("bg-white");
    allToggleElems.forEach((items) => {
      items.querySelector("#toggleDiv").classList.remove("translate-x-[40px]");
      items.querySelector("#moonsun").classList.add("fa-moon");
      items.querySelector("#toggleDiv").classList.add("bg-slate-100");
      items.querySelector("#moonsun").classList.remove("fa-sun");
      items.querySelector("#moonsun").classList.remove("fa-sun");
    });
  } else {
    document.body.classList.remove("bg-black");
    document.body.classList.add("bg-white");

    document
      .querySelector("[data-body]")
      .querySelector("[data-bgzinc400]")
      .classList.add("bg-zinc-400");
    document
      .querySelector("[data-body]")
      .querySelector("[data-bgzinc400]")
      .classList.remove("bg-zinc-800");
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.add("text-black");
      items.classList.remove("text-white");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-100");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });

    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.add("text-zinc-700");
      items.classList.remove("text-[#d6d6d6]");
    });
    document.querySelectorAll("[data-bgzinc300]").forEach((items) => {
      items.classList.add("bg-zinc-300");
      items.classList.remove("bg-zinc-800");
    });
    document.querySelector("#footer").classList.remove("bg-zinc-800");
    document.querySelector("#footer").classList.add("bg-gray-500");
    if (document.baseURI == "http://localhost:5173/gallery.html#gallery") {
      document.querySelector("#galleryHeading").classList.add("text-black");

      document.querySelector("#galleryHeading").classList.remove("text-white");
      document.querySelector("#bgblackgallery").classList.add("bg-white");
      document.querySelector("#bgblackgallery").classList.remove("bg-black");
    }
    if (document.baseURI == "http://localhost:5173/service.html#service") {
      document.querySelector("#servicesHeading").classList.add("text-black");
      document.querySelectorAll("[data-changeColor]").forEach((items) => {
        items.classList.add("bg-slate-300");
        items.classList.remove("bg-zinc-800");
      });
      document.querySelectorAll("label").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-white");
      });
      document.querySelector("[data-primary]").classList.add("bg-Primary");
      document.querySelector("[data-primary]").classList.add("bg-Accent");

      document.querySelector("#buildingButton").classList.add("bg-Primary");
      document.querySelector("#buildingButton").classList.remove("bg-Accent");
      document.querySelector("#upgradesButton").classList.add("bg-Primary");
      document.querySelector("#upgradesButton").classList.remove("bg-Accent");
      document.querySelector("#repairsButton").classList.add("bg-Primary");
      document.querySelector("#repairsButton").classList.remove("bg-Accent");
      document.querySelectorAll("[data-changecolorLeft").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-white");
      });
    }
    if (document.baseURI === "http://localhost:5173/about.html") {
      document.querySelectorAll("[data-sectionColor]").forEach((items) => {
        items.classList.add("bg-slate-200");
        items.classList.remove("bg-zinc-800");
      });
      document.querySelectorAll("[data-whiteMode]").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-white");
      });
      document.querySelectorAll("[data-whitemodePara]").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-gray-200");
      });
    }

    allToggleElems.forEach((items) => {
      items.querySelector("#toggleDiv").classList.add("translate-x-[40px]");
      items.querySelector("#moonsun").classList.remove("fa-moon");
      items.querySelector("#toggleDiv").classList.add("bg-slate-900");
      items.classList.add("bg-slate-300");
      items.querySelector("#toggleDiv").classList.remove("bg-slate-100");
      items.classList.remove("bg-slate-900");
      items.querySelector("#moonsun").classList.add("fa-sun");
      items.querySelector("#moonsun").classList.add("fa-sun");
    });
  }
  allToggleElems.forEach((items) => {
    items.addEventListener("click", (e) => {
      if (
        !items
          .querySelector("#toggleDiv")
          .classList.contains("translate-x-[40px]")
      ) {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("toggle", "right");
        document.body.classList.add("bg-black");
        document.body.classList.remove("bg-white");
      } else {
        localStorage.removeItem("theme", "dark");
        localStorage.removeItem("toggle", "right");
        document.body.classList.remove("bg-black");
        document.body.classList.add("bg-white");
      }
    });
  });
}

returnElems();
