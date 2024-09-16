let adviceCounter = 1;
const adviceHeader = document.getElementById("advice-header-text");
const quoteContent = document.getElementById("advice-content-text");
const quoteGenerateBtn = document.getElementById("advice-button");
adviceHeader.innerText = `A D V I C E # ${adviceCounter}`;

const randomQuote = async () => {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
    headers: { "X-Api-Key": "imyKeXBr+JdFW9UEd0vsjg==o7iSJT4OnCq509Fj" },
    contentType: "application/json",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch advice");
  }
  const quoteData = await response.json();
  const quote = quoteData[0].quote;
  return quote;
};
quoteContent.textContent = "Generating...";
randomQuote().then((res) => (quoteContent.innerText = `"${res}"`));

const handleQuoteGenerate = quoteGenerateBtn.addEventListener("click", async () => {
  quoteGenerateBtn.disabled = true;
  quoteContent.textContent = "Generating...";

  const quote = await randomQuote();
  quoteContent.innerText = `"${quote}"`;
  adviceCounter++;
  adviceHeader.innerText = `A D V I C E # ${adviceCounter}`;

  quoteGenerateBtn.disabled = false;
});
