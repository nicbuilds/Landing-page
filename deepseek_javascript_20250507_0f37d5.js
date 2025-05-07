async function askBedrockAgent(question) {
    const apiUrl = 'YOUR_API_GATEWAY_URL/prod/ask';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: question,
                sessionId: 'user-specific-session' // Optional
            })
        });
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error:', error);
        return "Sorry, I couldn't process your request.";
    }
}

// Example usage
document.getElementById('ask-button').addEventListener('click', async () => {
    const question = document.getElementById('question-input').value;
    const answer = await askBedrockAgent(question);
    document.getElementById('answer-display').innerText = answer;
});