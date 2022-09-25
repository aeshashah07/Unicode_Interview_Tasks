const prompt = require("prompt-sync")({ sigint: true });

// Input n
const n = prompt("n: ");


arr = [];
for (let i = 0; i < n; i++)
{
    // Input the string
    let string_input = prompt("");
    // Append in arr[]
    arr.push(string_input);
}

let occurences = {};
let no_unique = 0;
let temp = 0;

for (str of arr)
{
    temp = 0;
    for (element in occurences)
    {
        // Add another occurence when the string is already registered in the object once
        if (str == element)
        {
            occurences[str] += 1;
            temp = 1;
            break;
        }
    }
    
    if (temp == 0)
    {
        occurences[str] = 1;
        no_unique += 1;
    }   
}

console.log("No of unique elements: " + no_unique);
for (element in occurences)
{
    process.stdout.write(occurences[element] +  ' ');
}




// Bonus Task

// List of the number of occurences
let num_occur_list = [];
for (element in occurences)
{
    num_occur_list.push(occurences[element]);
}

num_occur_list.sort();
num_occur_list.reverse();

max_occ = num_occur_list[0];
max_occured = [];
min_occ = num_occur_list[num_occur_list.length - 1];
min_occured = [];

sortedObj = {};
temp = null;
for (num of num_occur_list)
{

    // If statement so that it doesn't go over the same number again
    if (temp != num)
    {
        for (str in occurences)
        {
            if (occurences[str] == num)
            {
                sortedObj[str] = num;
            }
        }
    }
    temp = num;
}

// To extract the min and max occuring strings
for (str in occurences)
{
    if (occurences[str] == min_occ)
        min_occured.push(str);

    if (occurences[str] == max_occ)
        max_occured.push(str);
}

console.log(sortedObj);

console.log(`Min number of occurences: ${min_occ}; String(s) occuring that many times: ${min_occured}`)

console.log(`Max number of occurences: ${max_occ}; String(s) occuring that many times: ${max_occured}`)
