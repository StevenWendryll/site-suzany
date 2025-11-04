import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import servico from './schemaTypes/servico'
import post from './schemaTypes/post'
import depoimento from './schemaTypes/depoimento'

export default defineConfig({
  name: 'default',
  title: 'site-suzany',

  projectId: 'jysbbrsy',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [servico, post, depoimento],
  },
})
