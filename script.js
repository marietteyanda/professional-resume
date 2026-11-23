
const buttons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const filter = button.getAttribute("data-filter");

        projects.forEach(function(project) {
            const category = project.getAttribute("data-category");

            if (filter === "all" || filter === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});


