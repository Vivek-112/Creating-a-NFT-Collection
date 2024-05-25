/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

var totalNFTs = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mint_NFT_Details(Name, Description, Age, Gender, SkinColor, Height){
    var NFT_Meta_Data = {
        Name: Name,
        Description: Description,
        Age: Age,
        Gender: Gender,
        SkinColor: SkinColor,
        Height: Height
    };
    totalNFTs++;

    NFTs.push(NFT_Meta_Data);

    return NFT_Meta_Data;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listing_NFTs(){
    for (var k = 0; k < NFTs.length; k++){
        var NFT = NFTs[k];
        console.log("Name: " + NFT.Name);
        console.log("Description: " + NFT.Description);
        console.log("Age: " + NFT.Age);
        console.log("Gender: " + NFT.Gender);
        console.log("SkinColor: " + NFT.SkinColor);
        console.log("Height: " + NFT.Height);
    }
}

// print the total number of NFTs we have minted to the console

function getting_Total_Supply(){
    return totalNFTs;
}
var NFTs = []

var NFT_1 = mint_NFT_Details("NFT-1", "This is my 1st NFT", "25", "Male", "Fair", "6-foot");
var NFT_2 = mint_NFT_Details("NFT-2", "This is my 2nd NFT", "50", "Female", "Light", "5-foot");
var NFT_3 = mint_NFT_Details("NFT-3", "This is my 3rd NFT", "75", "Male", "Medium", "5-foot 10-inch");
var NFT_4 = mint_NFT_Details("NFT-4", "This is my 4th NFT", "33", "Female", "Fair", "5-foot 8-inch");
var NFT_5 = mint_NFT_Details("NFT-5", "This is my 5th NFT", "35", "Female", "Light", "6-foot");
var NFT_6 = mint_NFT_Details("NFT-6", "This is my 6th NFT", "66", "Male", "Medium", "5-foot 10-inch");

// call your functions below this line

listing_NFTs();

var total_Supply = getting_Total_Supply();
console.log("Total NFTs are: " + total_Supply);
