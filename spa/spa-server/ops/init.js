// DEPLOY_ENV
db.createUser({ user: "spa", pwd: "spa", roles: [{ role: "readWrite", db: "spa" }] });

db.user.insert({
  "name": "Mike Mikowski",
  "is_online": false,
  "css_map": {
    "top": 100, "left": 120,
    "background-color": "rgb(136, 255, 136)"
  }
});

db.user.insert({
  "name": "Mr. Joshua C. Powell, humble humanitarian",
  "is_online": false,
  "css_map": {
    "top": 150, "left": 120,
    "background-color": "rgb(136, 255, 136)"
  }
});

db.user.insert({
  "name": "Your name here",
  "is_online": false,
  "css_map": {
    "top": 50, "left": 120,
    "background-color": "rgb(136, 255, 136)"
  }
});

db.user.insert({
  "name": "Hapless interloper",
  "is_online": false,
  "css_map": {
    "top": 0, "left": 120,
    "background-color": "rgb(136, 255, 136)"
  }
});