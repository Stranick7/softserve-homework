(function () {
    var themeKey = "theme";
    var lightClass = "light-theme";

    function setToggleLabel(button, isLight) {
        if (!button) {
            return;
        }

        button.textContent = isLight ? "☀️" : "🌙";
        button.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
        // Expose the current toggle state for assistive technologies.
        button.setAttribute("aria-pressed", isLight ? "true" : "false");
    }

    function applyTheme(theme) {
        var isLight = theme === "light";
        document.body.classList.toggle(lightClass, isLight);
        setToggleLabel(document.getElementById("theme-toggle"), isLight);
    }

    var savedTheme = localStorage.getItem(themeKey);
    if (savedTheme === "light" || savedTheme === "dark") {
        applyTheme(savedTheme);
    } else {
        applyTheme("dark");
    }

    var toggleButton = document.getElementById("theme-toggle");
    if (!toggleButton) {
        return;
    }

    toggleButton.addEventListener("click", function () {
        var isLightNow = document.body.classList.toggle(lightClass);
        var nextTheme = isLightNow ? "light" : "dark";
        localStorage.setItem(themeKey, nextTheme);
        setToggleLabel(toggleButton, isLightNow);
    });
})();
