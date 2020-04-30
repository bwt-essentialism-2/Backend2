
exports.up = function(knex) {
  return knex.schema.createTable('values', values => {
    values.increments('id').primary();
    values.string('value', 128).notNullable().index();
  })

  .createTable('user_values', tbl => {
    tbl.increments('id').primary();
    tbl.integer('value_id', 128).notNullable()
    .unsigned()
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('values.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_values')
    .dropTableIfExists('values')
};
