// Define o tipo 'depoimento'
export default {
    name: 'depoimento',
    title: 'Depoimento',
    type: 'document',
    fields: [
        { name: 'nome', title: 'Nome do Paciente', type: 'string' },
        { name: 'texto', title: 'Texto do Depoimento', type: 'text' },
    ],
}