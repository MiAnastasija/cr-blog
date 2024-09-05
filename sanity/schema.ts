import { type SchemaTypeDefinition } from 'sanity'
import { post } from './Schemas/post'
import { paketi } from './Schemas/paketi'
import { blogPost } from './Schemas/blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,paketi, blogPost],
}
