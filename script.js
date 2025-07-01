    const infoModal = document.getElementById('infoModal');
    const nameModal = document.getElementById('nameModal');
    const quizContainer = document.getElementById('quizContainer');
    const scoreboard = document.getElementById('scoreboard');
    const playerNameEl = document.getElementById('playerName');
    const questionText = document.getElementById('questionText');
    const optionsEl = document.getElementById('options');
    const questionNumber = document.getElementById('questionNumber');

    let currentQ = 0;
    let score = 0;
    let username = '';

    const questions = [
      { q: "___ apple a day keeps the doctor away.", a: "An" },
      { q: "She adopted ___ dog from the shelter.", a: "A" },
      { q: "He went to ___ university in London.", a: "A" },
      { q: "They watched ___ movie last night.", a: "A" },
      { q: "She is ___ honest person.", a: "An" },
      { q: "He bought ___ umbrella.", a: "An" },
      { q: "I saw ___ elephant at the zoo.", a: "An" },
      { q: "We visited ___ Eiffel Tower.", a: "The" },
      { q: "He lives near ___ river.", a: "A" },
      { q: "She went to ___ supermarket.", a: "The" },
      { q: "This is ___ one-time offer.", a: "A" },
      { q: "She wore ___ elegant dress.", a: "An" },
      { q: "They saw ___ shooting star.", a: "A" },
      { q: "It’s ___ honor to meet you.", a: "An" },
      { q: "He is ___ European citizen.", a: "A" },
      { q: "I read it in ___ newspaper.", a: "The" },
      { q: "She gave me ___ useful tip.", a: "A" },
      { q: "___ sun is shining.", a: "The" },
      { q: "___ moon looked beautiful last night.", a: "The" },
      { q: "He’s ___ MBA graduate.", a: "An" },
      { q: "There is ___ owl in the tree.", a: "An" },
      { q: "We had ___ great time.", a: "A" },
      { q: "She found ___ unique shell.", a: "A" },
      { q: "He is ___ honest man.", a: "An" },
      { q: "___ Taj Mahal is in India.", a: "The" },
      { q: "___ Amazon is a vast forest.", a: "The" },
      { q: "She gave him ___ orange.", a: "An" },
      { q: "I saw ___ unicorn in the story.", a: "A" },
      { q: "They bought ___ house in the city.", a: "A" },
      { q: "___ Earth revolves around the Sun.", a: "The" }
    ];

    function showNameModal() {
      infoModal.classList.add('hidden');
      nameModal.classList.remove('hidden');
    }

    function startGame() {
      username = document.getElementById('username').value.trim();
      if (!username) return alert('Please enter your name');

      nameModal.classList.add('hidden');
      quizContainer.classList.remove('hidden');
      playerNameEl.textContent = ` PLAYER : ${username}`;
      loadQuestion();
    }

    function loadQuestion() {
      if (currentQ >= questions.length) return endGame();

      const qObj = questions[currentQ];
      questionNumber.textContent = `Question ${currentQ + 1} of 30`;
      questionText.textContent = qObj.q;
      optionsEl.innerHTML = '';
      ['A', 'An', 'The'].forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, qObj.a, btn);
        optionsEl.appendChild(btn);
      });
    }

    function checkAnswer(selected, correct, btn) {
      const buttons = document.querySelectorAll('#options button');
      buttons.forEach(b => b.disabled = true);
      if (selected === correct) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('wrong');
      }
      setTimeout(() => {
        currentQ++;
        loadQuestion();
      }, 1000);
    }

    function endGame() {
      quizContainer.classList.add('hidden');
      scoreboard.classList.remove('hidden');
      scoreboard.innerHTML += `<h2>Game Over</h2><p><strong>${username}</strong>, you got <strong>${score}</strong> out of 30 correct.</p>`;

      if (score <= 10) scoreboard.classList.add('red');
      else if (score <= 20) scoreboard.classList.add('blue');
      else scoreboard.classList.add('green');
    }