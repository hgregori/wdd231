
const buttons = document.querySelectorAll(".filter-buttons button");
const classes = document.querySelectorAll(".classes-card .class");
const creditOutput = document.getElementById("credits-output");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        let totalCredits = 0;

        classes.forEach(cls => {
            const isCompleted = cls.dataset.completed === "true";
            const credits = Number(cls.dataset.credits);

            cls.style.display = "inline-flex"; // default reset

            if (filter === "completed" && !isCompleted) {
                cls.style.display = "none";
            }
            if (filter === "not-completed" && isCompleted) {
                cls.style.display = "none";
            }

            // Add up credits for visible items
            if (cls.style.display !== "none") {
                totalCredits += credits;
            }
        });

        // Update the credits message
        if (filter === "all") {
            creditOutput.textContent = `If you complete all classes you will earn ${totalCredits} credits.`;
        }
        if (filter === "completed") {
            creditOutput.textContent = `You have completed ${totalCredits} credits so far.`;
        }
        if (filter === "not-completed") {
            creditOutput.textContent = `You still have ${totalCredits} credits to complete.`;
        }
    });
});
