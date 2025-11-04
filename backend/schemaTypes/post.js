// Define o tipo 'post' (para o Blog)
export default {
    name: 'post',
    title: 'Post do Blog',
    type: 'document',
    fields: [
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'slug', title: 'URL (Slug)', type: 'slug', options: { source: 'titulo' } },
        { name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }] },
        { name: 'imagemCapa', title: 'Imagem de Capa', type: 'image' },
    ],
}