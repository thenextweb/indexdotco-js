import {version} from 'json!../package.json';

var config = {}

config.prefix = 'idc-';
config.cardPrefix = config.prefix+'card-';
config.version = '0.0.2';
config.appVersion = version;
config.endpoint = 'https://index.co/api/';

export default config;
