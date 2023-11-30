let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// for booking through whatsapp
function sendWhatsAppMessage() {
  // Fetch details from the form
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;

  // Construct the WhatsApp message with appointment request line
  const whatsappMessage = `Appointment booking request for:\nName: ${name}\nNumber: ${number}\nEmail: ${email}\nDate: ${date}`;

  // Create the WhatsApp link using wa.me with pre-filled message
  const whatsappLink = `https://wa.me/+917378618618?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Open the link in a new tab
  window.open(whatsappLink, "_blank");
}
