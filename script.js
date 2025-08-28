function calcular(){
  const areaInput = document.getElementById("area");
  const resultado  = document.getElementById("resultado");
  const area = parseFloat(areaInput.value);

  // Validación
  if (isNaN(area) || area <= 0){
    resultado.style.display = "block";
    resultado.innerHTML = `
      <h3 class="result-title">⚠️ ¡Ups! 🌸</h3>
      <p style="text-align: center; font-size: 12px; color: #666;">Por favor ingresa un valor válido</p>
    `;
    return;
  }

  /*
     Rendimientos aproximados por m² (ajústalos a tu estándar):
    - Planchas: 1 plancha ≈ 3 m² → planchas = área / 3
    - Tornillos: 15–25 por m² → aquí: 15
    - Primarios (unid): 0.5 / m²
    - Secundarios (unid): 1 / m²
    - Romeral (kg): 0.8 / m²
    - Empaste (kg): 0.5 / m²
    - Cinta malla (m): 1.2 / m²
    - Pintura (gal): 1 gal / 10 m² (2 manos)
  */

  const planchas   = (area / 3).toFixed(1);
  const tornillos  = Math.ceil(area * 15);
  const primarios  = Math.ceil(area * 0.5);
  const secundarios= Math.ceil(area * 1.0);
  const romeral    = (area * 0.8).toFixed(1);   // kg
  const empaste    = (area * 0.5).toFixed(1);   // kg
  const cinta      = (area * 1.2).toFixed(1);   // metros
  const pintura    = (area / 10).toFixed(1);    // galones

  // Mostrar resultados
  resultado.style.display = "block";
  resultado.innerHTML = `
    <h3 class="result-title">✨ Para ${area} m² necesitas ✨</h3>
    <ul class="result-list">
      <li class="result-item">
        <span class="item-emoji">📄</span>
        <span class="item-text">Planchas:</span>
        <span class="item-value">${planchas}</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">🔩</span>
        <span class="item-text">Tornillos:</span>
        <span class="item-value">${tornillos}</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">📏</span>
        <span class="item-text">Primarios:</span>
        <span class="item-value">${primarios}</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">📐</span>
        <span class="item-text">Secundarios:</span>
        <span class="item-value">${secundarios}</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">⚖️</span>
        <span class="item-text">Romeral:</span>
        <span class="item-value">${romeral} kg</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">🪣</span>
        <span class="item-text">Empaste:</span>
        <span class="item-value">${empaste} kg</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">🧵</span>
        <span class="item-text">Cinta malla:</span>
        <span class="item-value">${cinta} m</span>
      </li>
      <li class="result-item">
        <span class="item-emoji">🎨</span>
        <span class="item-text">Pintura:</span>
        <span class="item-value">${pintura} gal</span>
      </li>
    </ul>
  `;
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  
  // Asignar evento al botón
  const calcularBtn = document.querySelector('.calculate-btn');
  if (calcularBtn) {
    calcularBtn.addEventListener('click', calcular);
  }
  
  // Enter para calcular
  const areaInput = document.getElementById('area');
  if (areaInput) {
    areaInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        calcular();
      }
    });
  }

  // Animación kawaii al cargar
  const calculator = document.querySelector('.calculator');
  if (calculator) {
    calculator.style.animation = 'fadeIn 0.6s ease';
  }
});