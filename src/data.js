const users = [
  {name: 'mario', premium: true},
  {name: 'luigi', premium: false},
  {name: 'yoshi', premium: true},
  {name: 'toad', premium: true},
  {name: 'peach', premium: false}
];

const getPremUsers = users => users.filter(user => user.premium);

export { getPremUsers, users as default };