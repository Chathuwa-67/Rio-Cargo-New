// Function to disable inspect, view source, and developer tools
function disableInspect() {
  // Disable right-click context menu
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });

  // Disable keyboard shortcuts for developer tools
  document.addEventListener("keydown", function (e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I (Chrome, Firefox, Edge)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+J (Chrome)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+C (Chrome)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U (View source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }

    // Ctrl+S (Save page)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
  });

  // Disable developer tools by detecting window resize
  let devToolsOpen = false;

  const checkDevTools = function () {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if ((widthThreshold || heightThreshold) && !devToolsOpen) {
      devToolsOpen = true;
      // Redirect or show warning
      window.location.href = "about:blank";
      return;
    }

    if (!widthThreshold && !heightThreshold && devToolsOpen) {
      devToolsOpen = false;
    }
  };

  // Check for dev tools every second
  setInterval(checkDevTools, 1000);

  // Additional protection - disable text selection
  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
    return false;
  });

  // Disable drag and drop
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
    return false;
  });

  // Clear console on page load
  if (window.console) {
    console.clear();
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function () {
  disableInspect();
});

// Additional protection for dynamic content
window.onload = function () {
  disableInspect();
};
