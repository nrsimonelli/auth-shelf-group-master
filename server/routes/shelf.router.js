const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated , (req, res) => {
  console.log('req.user:', req.user);
  // Get only the secrets that the user is authorized to receive
  pool.query(`SELECT * FROM "item";`)
              // `WHERE "item"."user_id" = $1;`, [req.user.id] )
      .then(results => res.send(results.rows))
      .catch(error => {
          console.log('Error making SELECT for item:', error);
          res.sendStatus(500);
      });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('req.body', req.body);
  console.log('req.user', req.user);

  const queryValues = [
    req.body.description,
    req.body.image_url,
    req.user.id,
  ]
  // Pool Query to insert an entry into the table
  pool.query(`INSERT INTO "item" ("description", "image_url", "user_id")
              VALUES ( $1, $2, $3 )`, queryValues)
    .then(results => res.sendStatus(201) )
    .catch(err => {
      console.log ('Error adding new item:', err);
      res.sendStatus(500);
    } )

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {

  const queryValues = [
    req.user.id,
    req.params.id,
  ]
  pool.query(`DELETE FROM "item" WHERE $1 = item.user_id AND item.id = $2`, queryValues)
  .then(results => res.sendStatus(200))
  .catch(err =>{
    console.log('error deleting item: ', err);
    res.sendStatus(500);

  })

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;