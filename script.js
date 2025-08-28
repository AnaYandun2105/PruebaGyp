function calcular() {
  const area = parseFloat(document.getElementById("area").value);
  const resultado = document.getElementById("resultado");
  
  if (!area || area <= 0) {
    resultado.style.display = "block";
    resultado.innerHTML = '<p style="text-align: center; color: #ff69b4;">Por favor ingresa un valor válido</p>';
    return;
  }
  
  const planchas = (area / 3).toFixed(1);
  const tornillos = Math.ceil(area * 15);
  const primarios = Math.ceil(area * 0.5);
  const secundarios = Math.ceil(area * 1.0);
  const romeral = (area * 0.8).toFixed(1);
  const empaste = (area * 0.5).toFixed(1);
  const cinta = (area * 1.2).toFixed(1);
  const pintura = (area / 10).toFixed(1);
  
  resultado.style.display = "block";
  resultado.innerHTML = `
    <h3 class="result-title">✨ Para ${area} m² necesitas ✨</h3>
    <ul class="result-list">
      <li class="result-item">📄 <strong>Planchas:</strong> ${planchas} unidades</li>
      <li class="result-item">🔩 <strong>Tornillos:</strong> ${tornillos} unidades</li>
      <li class="result-item">📏 <strong>Primarios:</strong> ${primarios} unidades</li>
      <li class="result-item">📐 <strong>Secundarios:</strong> ${secundarios} unidades</li>
      <li class="result-item">⚖️ <strong>Romeral:</strong> ${romeral} kg</li>
      <li class="result-item">🪣 <strong>Empaste:</strong> ${empaste} kg</li>
      <li class="result-item">🧵 <strong>Cinta malla:</strong> ${cinta} m</li>
      <li class="result-item">🎨 <strong>Pintura:</strong> ${pintura} gal</li>
    </ul>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  const areaInput = document.getElementById('area');
  if (areaInput) {
    areaInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calcular();
      }
    });
  }
});