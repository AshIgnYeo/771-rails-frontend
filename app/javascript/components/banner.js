import Typed from "typed.js";

const options = {
  strings: ["Life", "Career", "Wallet"],
  typeSpeed: 40,
  loop: true,
};

const initTypedBanner = () => {
  const typed = new Typed("#typed", options);
};

export { initTypedBanner };
