// put user input into q param
document.getElementById("btn").onclick = () => {
    const value = document.getElementById("search").value;

    location.href = "/home.html?q=" + encodeURIComponent(value);
};

// read q param
const params = new URLSearchParams(location.search);
const q = params.get("q");

if (q) {
    console.log("q =", q);

    // DANGEROUS TEST
    // attacker-controlled navigation sink
    location.href = q;
}
