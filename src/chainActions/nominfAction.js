export default ({
  permissionLevel,
  actor,
  name,
  descriptor,
  picture,
  telegram,
  twitter
}) => ({
  account: 'oig',
  name: 'nominf',
  authorization: [permissionLevel],
  data: {
    nominee: actor,
    name: name,
    descriptor: descriptor,
    picture: picture,
    telegram: telegram,
    twitter: twitter,
    wechat: '',
    remove: false
  }
});
