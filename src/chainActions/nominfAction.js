export default ({
  permissionLevel,
  actor,
  name,
  descriptor,
  picture,
  telegram,
  twitter,
  wechat,
  remove
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
    wechat: wechat,
    remove: remove
  }
});
