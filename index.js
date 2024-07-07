function friends(people) {
  if (people.length == 0) {
      return undefined
  }

  const newPeople = {}
  for (const person of people) {
      newPeople[person.name] = {friends: person.friends, loyalFriends: 0}
  }

  for (const person of people) {
      for (const friend of person.friends) {
          const isFriend = newPeople[friend].friends.includes(person.name)
          if (isFriend) {
              newPeople[person.name].loyalFriends += 1
          }
      }
  }

  let maxFriendsPerson = undefined
  for (const [name, values] of Object.entries(newPeople)) {
      
      if (maxFriendsPerson === undefined ) {
          maxFriendsPerson = name;
          continue;
      }

      if (values.loyalFriends > newPeople[maxFriendsPerson].loyalFriends ) {
          maxFriendsPerson = name
      }
  }

  return maxFriendsPerson
}

const people = [
  {"name": "Tim", "friends": ["John", "Sally"]},
  {"name": "John", "friends": ["Tim", "Mike"]},
  {"name": "Mike", "friends": []},
  {"name": "Sally", "friends": ["Tim"]}
]
const result = friends(people)
console.log(result)