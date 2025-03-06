const toggleBtn = document.querySelectorAll("#toggleBtn");
toggleBtn.forEach((items, index) => {
  items.addEventListener("click", (e) => {
    document
      .querySelectorAll("#toggleDiv")
      [index].classList.toggle("translate-x-[40px]");

    document.querySelectorAll("#moonsun")[index].classList.toggle("fa-sun");
    document.querySelectorAll("#moonsun")[index].classList.toggle("fa-moon");

    document
      .querySelectorAll("#moonsun")
      [index].classList.add("animate-[spin_.6s_ease-out]");
    setTimeout(() => {
      document
        .querySelectorAll("#moonsun")
        [index].classList.remove("animate-[spin_.6s_ease-out]");
    }, 600);
    document
      .querySelectorAll("#toggleDiv")
      [index].classList.toggle("bg-slate-900");
    document
      .querySelectorAll("#toggleDiv")
      [index].classList.toggle("bg-orange-500");
    items.classList.toggle("bg-slate-900");
    items.classList.toggle("bg-slate-300");
    document.querySelectorAll("[data-bggray500]").forEach((items) => {
      items.classList.toggle("bg-gray-500");
    });
    document.querySelectorAll("[data-bggray500]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-100");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });
    document.querySelector("[data-body]").classList.toggle("bg-white");
    document.querySelector("[data-body]").classList.toggle("bg-black");
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.toggle("text-black");
    });
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.toggle("text-white");
    });
    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.toggle("text-zinc-700");
    });
    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.toggle("text-[#d6d6d6]");
    });
    document.querySelector("[data-bgzinc300]").classList.toggle("bg-zinc-300");

    document.querySelector("[data-bgzinc300]").classList.toggle("bg-zinc-800");
    document
      .querySelector("[data-bgzinc300]")
      .classList.toggle("shadow-[0_0px_30px_0px_hsl(233_8%_85%)]");
    document.querySelector("[data-bgzinc400]").classList.toggle("bg-zinc-400");
    document.querySelector("[data-bgzinc400]").classList.toggle("bg-zinc-800");
    document
      .querySelector("[data-bgzinc400]")
      .classList.toggle("shadow-[0_0px_20px_0px_hsl(233_8%_62%)]");
    document.querySelector("[data-bgblack]").classList.toggle("bg-black");
    document.querySelector("[data-bgblack]").classList.toggle("bg-white");

    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("bg-slate-900");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("bg-white");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("text-black");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("text-white");
    });

    document
      .querySelector("#roundedBg")
      .classList.toggle(
        "[background-image:linear-gradient(90deg,#f4f4f5,#f4f4f5),linear-gradient(to_bottom_right,#b827fc_0%,#2c90fc_25%,#b8fd33_50%,#fec837_75%,#fd1892_100%)]"
      );
    document
      .querySelector("#roundedBg")
      .classList.toggle(
        "[background-image:linear-gradient(90deg,#27272a,#27272a),linear-gradient(to_bottom_right,#b827fc_0%,#2c90fc_25%,#b8fd33_50%,#fec837_75%,#fd1892_100%)]"
      );
    document
      .querySelector("#textHover")
      .classList.toggle("group-hover:text-white");
    document
      .querySelector("#textHover")
      .classList.toggle("group-hover:text-black");
    document.querySelector("#black").classList.toggle("bg-black");
    document.querySelector("#black").classList.toggle("bg-white");
    document.querySelector("#borderleftcolor").classList.toggle("border-white");
    document.querySelector("#borderleftcolor").classList.toggle("border-black");
  });
});
