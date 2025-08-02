function setCount() {
    const countEl = document.getElementById('count')
    const currentCount = parseInt(countEl.textContent)
    const newCount = currentCount + 1
    countEl.textContent = newCount
}