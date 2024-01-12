const getResult = (event) => {
  event.preventDefault();
  const number1 = document.getElementById("n1").value;
  const number2 = document.getElementById("n2").value;
  const calType = document.getElementById("calType").value;

  console.log(number1, number2, calType);

  fetch("/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number1, number2, calType }),
  })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        document.getElementById("result").textContent = `Result is ${data.data}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document
  .getElementById("form")
  .addEventListener("submit", (event) => getResult(event));
