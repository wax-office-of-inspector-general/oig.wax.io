import { OIG_ACCOUNT } from '@/constants';

export default ({
  permissionLevel,
  actor,
  name,
  descriptor,
  picture,
  telegram,
  twitter,
  oig_prefix,
  pubkey,
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
    oig_prefix: oig_prefix,
    pubkey: pubkey,
    remove: false
  }
});
