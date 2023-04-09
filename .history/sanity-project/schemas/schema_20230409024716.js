import researcher from './researcher'
// ...
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    researcher,
  ]),
})
