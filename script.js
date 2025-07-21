const frases = [
  "No tenés que tener todo resuelto para merecer paz.",
  "Está bien no estar bien. Lo importante es no callarlo.",
  "Tu sensibilidad no es una debilidad, es un superpoder.",
  "Cada día es una oportunidad para empezar de nuevo.",
  "No sos una carga por sentir mucho. Sos humana.",
  "Respirá. Estás haciendo lo mejor que podés.",
  "No te olvides de vos mientras cuidás a los demás.",
  "Estás aprendiendo, creciendo y resistiendo.",
  "Tu proceso es tuyo. No tenés que explicarlo.",
  "El descanso también es progreso.",
  // ... agregá más si querés (una para cada día del mes)
];

const hoy = new Date().getDate();
document.getElementById("frase-dia").textContent = frases[(hoy - 1) % frases.length];
