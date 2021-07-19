const AWS = require("aws-sdk");
const config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.AWS_DEFAULT_REGION
};
console.log(`accessKeyId = ${config.accessKeyId}`);
console.log(`secretAccessKey = ${config.secretAccessKey}`);
console.log(`bucketName = ${config.bucketName}`);
console.log(`region = ${config.region}`);

const s3 = new AWS.S3(config);

// Create content from string to stream
// To do: read data from DB then create a string
let Readable = require("stream").Readable;
let stream = new Readable();
stream.push("number,first,last,handle\n"); 
stream.push("1,Mark,Otto,@mdo\n"); 
stream.push("2,Jacob,Thornton,@fat\n"); 
stream.push("3,Larry,the Bird,@twitter\n"); 
//stream.push("data,data,data"); // add data as a single string
stream.push(null); // indicates end-of-file basically - the end of the stream

// Upload content of stream to s3 
let s3ObjectName = "test/data.csv";
let params = { Bucket: config.bucketName, Key: s3ObjectName, Body: stream };
// Upload options: with concurrency of 1 and partSize of 10Mb
// See https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
let options = { partSize: 10 * 1024 * 1024, queueSize: 1 };
// Use the promises version of the API
// See https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-promises.html
let upload = s3.upload(params, options).promise();
upload.then(data => {
    console.log(`Successfully uploaded ${s3ObjectName} to bucket`);
    console.log(data);
})
.catch(err => {
    console.log(err);
});

// Read content of object from s3
let readParams = { Bucket: config.bucketName, Key: s3ObjectName };
let getObject = s3.getObject(readParams).promise();
getObject.then(data => {
    console.log(`Successfully read ${s3ObjectName}`);
    console.log(data);
    let objectData = data.Body.toString('utf-8');
    console.log(objectData);
})
.catch(err => {
    console.log(err);
});