import { OIG_ACCOUNT } from '@/constants';

export default ({
  permissionLevel,
  actor,
  name,
  descriptor,
  picture,
  telegram,
  twitter
}) => ({
  account: OIG_ACCOUNT,
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
