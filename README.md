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
