const express = require('express');
const router = express.Router();
const alluser = require('../Schema/Signupschema');

router.put('/add/:username',async(req,res)=>{
    const { username } = req.params;
  const data = req.body;
    console.log(data.balance+ " " + username +"change kr ra hu");
  try {
    const updatedUser = await alluser.updateOne(
        { username: username },  // Find the user by username
        { $inc: { balance: data.balance } }  // Increment the balance by the specified amount
      );
  
      if (updatedUser.nModified === 0) {
        return res.status(404).json({ error: 'User not found or no changes made' });
      }
    res.json(updatedUser);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
})


router.put('/minus/:username',async(req,res)=>{
  const { username } = req.params;
const data = req.body;
  console.log(data.balance+ " " + username +"change kr ra hu");
try {
  const updatedUser = await alluser.updateOne(
      { username: username },  // Find the user by username
      { $inc: { balance: -data.balance } }  // Increment the balance by the specified amount
    );

    if (updatedUser.nModified === 0) {
      return res.status(404).json({ error: 'User not found or no changes made' });
    }
  res.json(updatedUser);
} catch (err) {
  // Handle errors
  res.status(500).json({ error: err.message });
}
})


router.get('/:username', async (req, res) => {
    try {
        const temp = req.params; // Use req.query for query parameters
        console.log(temp.username+ "yha hu m");

        // Fetch user data based on the username
        const data = await alluser.findOne({ username: temp.username });

        if (!data) {
            return res.status(404).send('User not found'); // Send a 404 response if the user is not found
        }

        res.send(data); // Send the found user data as the response
    } catch (err) {
        res.status(500).send('Error occurred while collecting user data'); // Send a 500 response if an error occurs
    }
});

module.exports = router;
