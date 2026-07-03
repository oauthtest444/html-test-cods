// DOM XSS Demonstration Code
// Save this file as xss.js

(function() {
    // 1. THE SOURCE: Get the parameter named "redirectUrl" from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const userControlledInput = urlParams.get('redirectUrl');

    // Check if the parameter exists in the URL
    if (userControlledInput) {
        
        // 2. THE SINK: Unsafely passing the user input directly into location.href
        // VULNERABILITY: This accepts "javascript:" URIs, leading to instant script execution.
        window.location.href = userControlledInput;
        
    } else {
        console.log("DOM XSS Lab: Append '?redirectUrl=' to the URL to test.");
    }
})();
