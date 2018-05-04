
// Routes
// =============================================================


 // A GET route with the url `/api/friends` that displays JSON object of all friends
 app.get("/api/friends", function(req, res) {
    return res.json(characters);
  });

  
  // A POST route to `/api/friends`. This will be used to handle incoming survey results. 
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
  });