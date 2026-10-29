console.log("script.js connected!");
const answers = {};
const questions = 6;

// Show only the first question when the quiz starts.
for (let i = 1; i <= questions; i++) {
    document.getElementById(`question-${i}`).style.display =
        i === 1 ? "flex" : "none";
}

// Listen for clicks on all answer buttons.
document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", function () {
        const questionBlock = this.closest('[id^="question-"]');
        const questionNumber = Number(
            questionBlock.id.replace("question-", "")
        );

        // Save the selected answer.
        answers[questionNumber] = this.dataset.answer;

        // Move to the next question.
        questionBlock.style.display = "none";

        if (questionNumber < questions) {
            document.getElementById(
                `question-${questionNumber + 1}`
            ).style.display = "flex";
        } else {
            showResult();
        }
    });
});

function showResult() {
    // Give each answer a point value.
    const points = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6
    };

    let score = 0;

    // Add the points from all six answers.
    for (let i = 1; i <= questions; i++) {
        score += points[answers[i]];
    }

    let movie;
    let description;

    // IF-ELSE SYSTEM: 12 possible results.
    if (score <= 8) {
        movie = "Treasure Planet";
        description = "You love to explore and discover new things.";
    } else if (score <= 10) {
        movie = " Isle of the Dogs";
        description = "You are strong and can endure the any challenge.";
    } else if (score <= 12) {
        movie = "Ice Age";
        description = "You are loyle and will have your friends back no matter what.";
    } else if (score <= 14) {
        movie = "Despicable Me";
        description = "You have a troubled past but a heart of gold.";
    } else if (score <= 16) {
        movie = "The Incredibles";
        description = "You have pride but love for those you care about.";
    } else if (score <= 18) {
        movie = "Monsters, Inc.";
        description = "You will do the right thing even if it's difficult.";
    } else if (score <= 20) {
        movie = "Kung Fu Panda";
        description = "You are creative and passionate about your interests.";
    } else if (score <= 22) {
        movie = "Shrek";
        description = "You appreciate solitude yet have few that are close to you.";
    } else if (score <= 24) {
        movie = "Rango";
        description = "You are thoughtful and care about the world around you.";
    } else if (score <= 26) {
        movie = "Goofy Movie";
        description = "You are energetic and love having fun.";
    } else if (score <= 28) {
        movie = "The Iron Giant";
        description = "You are curious, bold, and love a mystery.";
    } else {
        movie = "Fantastic Mr. Fox";
        description = "You are clever, resourceful, and a little unpredictable.";
    }

    // Display the result.
    document.getElementById("result-title").textContent = movie;
    document.getElementById("result-description").textContent = description;

    document.getElementById("quiz-result").style.setProperty(
        "display", "flex", "important"
    );
}

function restartQuiz() {
    // Clear the saved answers.
    for (let i = 1; i <= questions; i++) {
        delete answers[i];
    }

    // Hide the result.
    document.getElementById("quiz-result").style.setProperty(
        "display", "none", "important"
    );

    // Return to question 1.
    for (let i = 1; i <= questions; i++) {
        document.getElementById(`question-${i}`).style.display =
            i === 1 ? "flex" : "none";
    }
}

 
