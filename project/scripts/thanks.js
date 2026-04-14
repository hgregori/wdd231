const resultsDiv = document.querySelector("#results");

// Retrieve parameters from URL
const urlParams = new URLSearchParams(window.location.search);

let content = "<ul style='list-style: none; padding: 0;'>";
// Iterate through the params 
for (const [key, value] of urlParams.entries()) {
    // Capitalize key
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    content += `<li style='margin-bottom: 8px;'><strong>${formattedKey}:</strong> ${value}</li>`;
}
content += "</ul>";

if (!urlParams.toString()) {
    resultsDiv.innerHTML = "<p>Nenhum dado recebido.</p>";
} else {
    resultsDiv.innerHTML = content;
}
