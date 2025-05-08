<script>
  async function sendToAgent() {
    const input = document.getElementById('userInput').value;
    const res = await fetch("https://awolqq45a2.execute-api.us-west-2.amazonaws.com/prod/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    document.getElementById('response').innerText = data.reply;
  }
</script>

<input id="userInput" />
<button onclick="sendToAgent()">Ask Agent</button>
<p id="response"></p>

