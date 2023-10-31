



function parseandDisplayName(fullName){
    fullName = fullName.trim();
    let end = fullName.indexOf(" ");
    
    let firstName = fullName.substring(0, end);
    let lastName = fullName.substring(end+1)
    
    console.log(`Name: ${fullName}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log()
}
parseandDisplayName("Brenda Kaye");
parseandDisplayName("Ian Auston");
parseandDisplayName("Siddalee Grace");










