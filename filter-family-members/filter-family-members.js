// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};
// pseodo Code
// Base Case or condiotion for stoping the recusion is when the index reaches the length array of children of the origin family
//2. checking if we have sub families in our tries , if there is send  assign the family name in the cheldren array as a familyTree and recursiveley calling the function 
//3. each recurive it checks for the sub family trees with iteration of the index
//4. using the truth test to check the location of the subfamily is  Berkeley;
//if true push the first and last name of the family to filterdFamiles array.
// function recursivley call itself untill the iterator reaches threr's the length of cheldren array 
var filterFamilyMembers = function (familyTree, truthTest, filterdFamiles, index) {

var index = index || 0;
var filterdFamilesArr = filterdFamilesArr || [];

	//Recursion Terminitaion condition 
	if (index === familyTree.children.length - 1) {
		return filterdFamiles;
	}
	if(familyTree.children[index].length > 0) {
		return  filterFamilyMembers(familyTree.children[index], truthTest, filterdFamiles, index);
	} else {
		index++;
	}
  if (truthTest(familyTree.children[index])) {
  	filterdFamilesArr.push(familyTree.children[index].firstName +' ' + familyTree.children[index].lastName);
  }
  return filterFamilyMembers (familyTree, truthTest, filterdFamiles, index);
};

var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}
 filterFamilyMembers(familyTree, livesInBerkeley);
 // returns ['Beth Jr. Johnson', 'Joshie Wyattson'];