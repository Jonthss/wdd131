// Populando o ano atual
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populando a última modificação
document.getElementById('lastModified').textContent = 'Last modified: ' + new Date(document.lastModified).toLocaleString();