const getCompany = require('./company');

const company = getCompany();

console.log("Información de la empresa:");
console.log("Nombre:" , company.name);
console.log("Fecha de creación:" , company.created_at);
console.log("Sede:" , company.sede);
console.log("Industria:" , company.insdustria);