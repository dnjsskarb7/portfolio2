const passport = require("passport");

const router = require("express").Router();

//fetching from client
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

//auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get(
  "/spotify",
  passport.authenticate("spotify", {
    scope: ["user-read-playback-state", "streaming"],
  })
);
router.get(
  "/spotify/callback",
  passport.authenticate("spotify"),
  (req, res) => {
    console.log("ih");
    res.redirect("/profile");
  }
);
router.get(
  "/twitch",
  passport.authenticate("twitch.js", {
    response_type: "ABC",
    scope: "user:read:email",
  })
);
router.get(
  "/twitch/callback",
  passport.authenticate("twitch.js"),
  (req, res) => {
    console.log("ih");
    res.redirect("/profile");
  }
);

router.get(
  "/amazon",
  passport.authenticate("amazon", {
    scope: ["profile"],
  })
);
router.get("/amazon/callback", passport.authenticate("amazon"), (req, res) => {
  res.redirect("/profile");
});
//http://127.0.0.1:5000/
//auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

//auth with Facebook
router.get("/facebook", passport.authenticate("facebook"));
router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    console.log("ih");
    res.redirect("/profile");
  }
);

router.get(
  "/instagram",
  passport.authenticate("instagram", {
    scope: ["user_media"],
    response_type: "code",
  })
);
router.get(
  "/instagram/callback",
  passport.authenticate("instagram"),
  (req, res) => {
    console.log("ih");
    res.redirect("/profile");
  }
);

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["email", "profile"],
  })
);
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  console.log("ih");
  res.redirect("/profile");
});
module.exports = router;
