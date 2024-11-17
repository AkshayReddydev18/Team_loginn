document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const teamID = document.getElementById("teamID").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!teamID || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  alert(`Welcome to the team, ${name}!`);
});
