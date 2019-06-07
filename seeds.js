var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
var User   = require("./models/user");

var data = [
    {
        name: "Lake Myvatn, Iceland", 
        price: "300",
        image: "http://drive.google.com/uc?export=view&id=1PAftq7CLcwNx_9IERorRBEL-o_j5L6Jo",
        desc: "You might see “Iceland” and think about a cold and freezing country. That’s not true! Summers in Iceland can be wonderful.The best part is the Northern Lights. See if you can time your trip and see them! There are plenty of different camp sites to choose from, which makes Iceland a great destination."
    },
    {
        name: "San Juan Islands in Washington", 
        price: "350",
        image: "http://drive.google.com/uc?export=view&id=1itkL_qXSlwM1w1kvspETEIfGtXcqOdFP",
        desc: "These islands might be new to you. There are beautiful waterfalls around the island, you can enjoy the blue water, and you can hike in the forest when you want a chance. Camping isn’t expensive here, which is another great perk. Make sure to check out this island soon!"
    },
    {
        name: "The Adirondacks, New York", 
        price: "400",
        image: "http://drive.google.com/uc?export=view&id=1AnbuDO5tfm5q-1GqviZLdsMpRDcv_OTI",
        desc: "Do you live in New York City? If so, you don’t even have to leave your state! The Adirondacks have plenty of awesome camping opportunities. There are even private islands you can use as a campsite. Check out all the lakefront properties and locations. You’ll find a great place to camp."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
           console.log("removed campgrounds!"); 
        }
   });
   
   Comment.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
           console.log("removed Comments!"); 
        }
   });
   
   User.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
           console.log("removed users!"); 
        }
   });
    //      //add a few campgrounds
        //  data.forEach(function(seed){
        //      Campground.create(seed, function(err, campground){
        //          if(err){
        //              console.log(err)
        //          } else {
        //              console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //          }
        //      });
        //  });
    } 
    //add a few comments

module.exports = seedDB;
