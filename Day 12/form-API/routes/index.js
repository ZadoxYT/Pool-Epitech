var express = require('express');
var router = express.Router();


router.post('/validateForm', function(req, res) {
  if (!req.body.form.firstname)
    res.send("Missing first name.")
  else if (!req.body.form.lastname)
    res.send("Missing last name.")
  else if (!req.body.form.email)
    res.send("Missing email.")
  else if (!req.body.form.password)
    res.send("Missing password.")
  else
    res.send(req.body);
});

module.exports = router;
