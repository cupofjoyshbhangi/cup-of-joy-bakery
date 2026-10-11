// IMPORTANT: Replace the demo WhatsApp number below with your real number.
// Use country code + number only, with no +, spaces, or dashes. India example: 919876543210
const WHATSAPP_NUMBER = "910000000000";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".order-item").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.dataset.item;
    document.getElementById("product").value =
      item === "Celebration Cake" ? "Celebration Cake" : item;
    document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" });
    document.getElementById("name").focus({ preventScroll: true });
  });
});

document.getElementById("whatsapp-link").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Cup of Joy Bakery! I'd like to ask about your menu and pre-orders.")}`;

document.getElementById("enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const fields = [
    "Hello Cup of Joy Bakery! I'd like to make an enquiry / pre-order.",
    "",
    `Name: ${form.get("name")}`,
    `Contact number: ${form.get("phone")}`,
    `Interested in: ${form.get("product")}`,
    `Preferred date: ${form.get("date") || "Not specified"}`,
    `Quantity / size: ${form.get("quantity") || "Not specified"}`,
    `Extra details: ${form.get("message") || "None"}`
  ];
  if (WHATSAPP_NUMBER === "910000000000") {
    document.getElementById("form-status").textContent =
      "Demo setup: please replace the sample WhatsApp number in script.js with your real number before using this form.";
  }
  openWhatsApp(fields.join("\n"));
});

// Set a sensible minimum date for the optional pre-order date field.
const dateInput = document.getElementById("date");
dateInput.min = new Date().toISOString().split("T")[0];
