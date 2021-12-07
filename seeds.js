var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:  "Lake Laky", 
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGxha2UlMjB0ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
    },
    {
      name:  "Granite Hill", 
      image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGdyb3VuZCUyMHdpdGglMjB0cmVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
    },
    {
      name:  "Campground with Trees", 
      image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNhbXBncm91bmQlMjB3aXRoJTIwdHJlZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
    }
]




function seedDB(){
  //Remove all campgrounds
  Campground.deleteMany({}, function(err){
    if(err){
      console.log(err);
    } 
    console.log("removed campgrounds!");
    //add a few campgrounds
  data.forEach(function(seed){
    Campground.create(seed, function(err, campground){
      if(err){
        console.log(err);
      } else {
        console.log("added a campground");
        //create a comment
        Comment.create(
          {
            text: "This place is great!!!",
            author: "Homer"
          }, function(err, comment){
            if(err){
              console.log(err);
            } else {
              campground.comments.push(comment);
              campground.save();
              console.log("Created new comment");
            }
            
          });
     
      }
    });  
  });   
  });
 
  
}
     
module.exports = seedDB;