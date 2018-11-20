import RNFetchBlob from 'react-native-fetch-blob';
var upLoad = (data) => {
   return RNFetchBlob.fetch('POST', 'http://192.168.0.104:3000', {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
    }, data);  
}

module.exports = upLoad;