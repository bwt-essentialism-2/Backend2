
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "david", password: "abc123"},
        {username: "hdell", password: "1234"},
      ]);
    });
};
