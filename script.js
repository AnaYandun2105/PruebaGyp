function calcular(){
  const areaInput = document.getElementById("area");
  const resultado  = document.getElementById("resultado");
  const area = parseFloat(areaInput.value);

  // Validación
  if (isNaN(area) || area <= 0){
    resultado.style.display = "block";
    resultado.innerHTML = `<p>⚠️ Por favor ingresa un valor válido 🌸</p>`;
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
    <h3>✨ Resultados para ${area} m² ✨</h3>
    <ul>
      <li>📄 <b>Planchas de gypsum:</b> ${planchas} unidades</li>
      <li>🔩 <b>Tornillos:</b> ${tornillos} unidades</li>
      <li>📏 <b>Primarios:</b> ${primarios} unidades</li>
      <li>📐 <b>Secundarios:</b> ${secundarios} unidades</li>
      <li>⚖️ <b>Romeral:</b> ${romeral} kg</li>
      <li>🪣 <b>Empaste:</b> ${empaste} kg</li>
      <li>🧵 <b>Cinta malla de vidrio:</b> ${cinta} m</li>
      <li>🎨 <b>Pintura:</b> ${pintura} galones</li>
    </ul>
  `;
}
