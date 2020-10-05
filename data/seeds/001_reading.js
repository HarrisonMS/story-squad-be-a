
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {s3_url: 'https://story-squad-team-a-app-data.s3.amazonaws.com/shark_stories/stories/Story_Squad_Week_1_reading.pdf'}
      ]);
    });
};