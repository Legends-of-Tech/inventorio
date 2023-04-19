# Inventorio

## Local Development

### Prerequisite

- Amplify CLI

### 1. Start App

```ps1
pnpm i
pnpm run dev
```

### 2. Start mock server

```ps1
amplify mock api
```

## How to configure Amplify for development

1. Reach out to Raymond for a new [AWS Credentials](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli) (AWS Access Key Id and Secret Access Key Secret)
2. Run `aws configure`
   1. Skip the Sign-in step
   2. Region `ap-southeast-2`
   3. Skip the user creation step
   4. Enter the given accessKeyId and accessKeySecret
