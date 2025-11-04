// Define o tipo 'servico'
export default {
    name: 'servico',
    title: 'Serviço',
    type: 'document',
    fields: [
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'slug', title: 'URL (Slug)', type: 'slug', options: { source: 'titulo' } },
        { name: 'resumo', title: 'Resumo (para a página principal)', type: 'text' },
        { name: 'descricaoCompleta', title: 'Descrição Completa (O que é, para quem, etc.)', type: 'array', of: [{ type: 'block' }] }, // Rich text
    ],
}
