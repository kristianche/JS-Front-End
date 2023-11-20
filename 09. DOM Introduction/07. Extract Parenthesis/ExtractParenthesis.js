function extract(content) {
    const text = document.getElementById('content').textContent;
    const regex = /\(([\w\s]+)\)/g;
    const matches = text.match(regex)

    return matches.join('; ')
}