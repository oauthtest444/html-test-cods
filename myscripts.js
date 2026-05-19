// Replicating the logic from the obfuscated script
        const urlParams = new URLSearchParams(window.location.search);
        const codeParam = urlParams.get("code");
        const stateParam = urlParams.get("state"); // This was 'l' or '1' in the image
        const hasOpener = window.opener;

        // 1. If no code is present, close the window
        if (!codeParam) {
            console.log("No code found. Closing window.");
            window.close();
        } else {
            // 2. If opened as a popup, send message to parent
            if (hasOpener) {
                hasOpener.postMessage({
                    code: codeParam,
                    type: "lark-verify"
                }, "*");
                window.close();
            } 
            // 3. If opened in a standard tab, save and redirect (The Vulnerable Path)
            else if (stateParam) {
                try {
                    localStorage.setItem("lark_auth_code_temp", codeParam);
                } catch (e) {
                    console.error("Storage error:", e);
                }
                
                // VULNERABILITY: Direct execution/redirect of unvalidated user input
                window.location.href = decodeURIComponent(stateParam);
            } else {
                window.close();
            }
        }
