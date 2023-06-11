const quotes = [
    //"The only way to do great work is to love what you do.",
    "test.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
  ];
  
  const quoteElement = document.getElementById("quote");
  const inputElement = document.getElementById("input");
  const startButton = document.getElementById("startButton");
  const scoreElement = document.getElementById("score");
  
  let currentQuoteIndex = 0;
  let score = 0;
  let currentQuotesLetterNum = 0;
  
  function startGame() {
    startButton.disabled = true;
    inputElement.disabled = false;
    inputElement.value = "";
    inputElement.focus();
    score = 0;
    updateScore();
  
    showNextQuote();
  }
  
  function showNextQuote() {
    if (currentQuoteIndex >= quotes.length) {
      endGame();
      return;
    }
    
    quoteElement.textContent = quotes[currentQuoteIndex];
  }
  
  //文字を分解する→最後の文字だけを比較する
  function checkInput() {
    const inputLastLetter = inputElement.value.slice(-1);
    const quotesLastLetter = quotes[currentQuoteIndex].charAt(currentQuotesLetterNum);

    if(quotesLastLetter === inputLastLetter){//最後の一文字だけを見て一致するか判断する
      currentQuotesLetterNum++;
      const highlightedText = quotes[currentQuoteIndex].slice(0, currentQuotesLetterNum);
      const remainingText = quotes[currentQuoteIndex].slice(currentQuotesLetterNum);
      quoteElement.innerHTML = `<span style="color: red">${highlightedText}</span>${remainingText}`;
    }

    if (currentQuotesLetterNum === quotes[currentQuoteIndex].length) {
      currentQuotesLetterNum = 0;
      currentQuoteIndex++;
      score++;
      inputElement.value = "";
      updateScore();
      showNextQuote();
    }
  }
  
  function updateScore() {
    scoreElement.textContent = `スコア: ${score}`;
  }
  
  function endGame() {
    quoteElement.textContent = "ゲーム終了";
    inputElement.disabled = true;
    startButton.disabled = false;
  }
  
  startButton.addEventListener("click", startGame);
  inputElement.addEventListener("input", checkInput);
  