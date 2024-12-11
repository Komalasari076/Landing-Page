function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
}

function isNumber(string) {
  const result = !isNaN(string);
  return result;
}

function checkboxIsChecked() {
  const checked = document.getElementById("status").checked;
  return checked;
}

function validateFormData(objek) {
  const valid =
    objek !== null &&
    objek.name !== "" &&
    objek.city !== "" &&
    objek.email !== "" &&
    isNumber(objek.zipCode) &&
    checkboxIsChecked();
  return valid;
}

function submit() {
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  const warning = document.getElementById("warning");

  if (!isValid) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
    alert("Pendaftaran Berhasil");
    console.log(formData);
  }
}

document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
