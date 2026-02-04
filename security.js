// Disable Right Click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable common DevTools shortcuts
document.addEventListener("keydown", function (e) {
  // F12
  if (e.keyCode === 123) {
    e.preventDefault();
  }

  // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode === 73 || // I
      e.keyCode === 74 || // J
      e.keyCode === 67) // C
  ) {
    e.preventDefault();
  }

  // Ctrl+U (View Source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }

  // Ctrl+S (Save Page)
  if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
  }
});
