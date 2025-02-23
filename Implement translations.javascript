async function translate(text, lang) {
    const response = await fetch(`https://api.example.com/translate?text=${text}&lang=${lang}`);
    return response.text();
}
