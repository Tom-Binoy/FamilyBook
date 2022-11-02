var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
            "Binoy.jpg",
            "Dali.jpg", "Tom.jpg", 
            "George.jpg", "Kunju Profile Photo.jpg"];
var names = ["Family Book","Binoy Thomas", "Daliya George", "Tom Binoy", "George Binoy", "Dominic Binoy"];

var numbers_of_family_member_in_array = 5

var i = 0;

function update()
{
    i++;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
