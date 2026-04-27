document.querySelectorAll(".options").forEach(optionGroup => {
    optionGroup.addEventListener("click", function(event) {
        if (event.target.classList.contains("option")) {
            let selectedOption = event.target;
            let correctAnswer = optionGroup.getAttribute("data-correct");

            // Remove previous styles from all options in this question
            optionGroup.querySelectorAll(".option").forEach(button => {
                button.classList.remove("correct", "wrong");
            });

            // Show explanation related to the selected question
            let explanation = optionGroup.nextElementSibling;
            explanation.classList.remove("hidden");

            // Check if the selected option is correct
            if (selectedOption.innerText === correctAnswer) {
                selectedOption.classList.add("correct");
                selectedOption.innerText += " 🎉"; // Add celebration emoji
            } else {
                selectedOption.classList.add("wrong");
            }
        }
    });
});
function goBack() {
    window.history.back();
}

