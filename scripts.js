function changeColor() {
    const colors = ['#f44336', '#4CAF50', '#2196F3', '#FF9800', '#9C27B0'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
