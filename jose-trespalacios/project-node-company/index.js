const getCompany = require('./company');

const company = getCompany();

console.log("Información de la empresa:");
console.log("Nombre:", company.name);
console.log("Fecha creación:", company.created_at);
console.log("Sede:", company.sede);
console.log("Sede:", company.industria);