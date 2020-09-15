const contact = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
];

const rokket = contact.map(contacto => contacto.lastName);

console.log(rokket);