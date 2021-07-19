# s3-demo

## Checkout the code & navigate to the project directory
```
git clone git@github.com:briantanseng/s3-demo.git && cd s3-demo
```

## Setup the environment variables

Create a file called `setenvs.sh`. Add the needed values 
```
       │ File: setenvs.sh
───────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # To load the environment variables below, run the "source" command
   2   │ # source setenvs.sh
   3   │
   4   │ # From AWS:
   5   │ export AWS_ACCESS_KEY_ID=''
   6   │ export AWS_SECRET_ACCESS_KEY=''
   7   │
   8   │ export S3_BUCKET_NAME=''
   9   │ export AWS_DEFAULT_REGION=''
```
Load the environment variables 
```
source setenvs.sh
```

## Run the project
```
node index.js
```
Sample output
```
accessKeyId = AAAAAAAAAAAAAAAAAAAA
secretAccessKey = 1234567890abcdefghij1234567890abcdefgh/j
bucketName = this-is-your-s3-bucket-name
region = ap-southeast-1
Successfully read test/data.csv
{
  AcceptRanges: 'bytes',
  LastModified: 2021-07-19T16:41:28.000Z,
  ContentLength: 90,
  ETag: '"fa8cc53a32560fcab2c49b9e64dd8361"',
  VersionId: 'FIXJMH5k4I_34kQ2m2gZdU7mDSKcWuR7',
  ContentType: 'application/octet-stream',
  ServerSideEncryption: 'AES256',
  Metadata: {},
  Body: <Buffer 6e 75 6d 62 65 72 2c 66 69 72 73 74 2c 6c 61 73 74 2c 68 61 6e 64 6c 65 0a 31 2c 4d 61 72 6b 2c 4f 74 74 6f 2c 40 6d 64 6f 0a 32 2c 4a 61 63 6f 62 2c ... 40 more bytes>
}
number,first,last,handle
1,Mark,Otto,@mdo
2,Jacob,Thornton,@fat
3,Larry,the Bird,@twitter

Successfully uploaded test/data.csv to bucket
{
  ETag: '"fa8cc53a32560fcab2c49b9e64dd8361"',
  ServerSideEncryption: 'AES256',
  VersionId: 'MDbLqMR3BMKsPW46nt2ZVEl_eLI3oMTH',
  Location: 'https://this-is-your-s3-bucket-name.s3.ap-southeast-1.amazonaws.com/test/data.csv',
  key: 'test/data.csv',
  Key: 'test/data.csv',
  Bucket: 'this-is-your-s3-bucket-name'
}
```
