## Express.JS & Typescript Project Template

Built off of: https://dev.to/roycechua/setup-a-node-express-api-with-typescript-2021-11o1

Inital index.ts is simplfied but other than that:

### To Run: npm run start

1. Pre-requisites
For this blog you need to have Node.js(v10+) installed on your machine for this to work without any issues.

Create initial folder and package.json
Open your terminal and create your folder and package.json using
mkdir node-express-typescript-starter && npm init 
Fill out all the information being asked. Set the entry point to index.ts and feel free to provide the other information with appropriate values.

2. Install the dependencies
You need to install the following dependencies using npm
npm install typescript --save-dev
npm install ts-node-dev --save-dev
npm install express 
npm install @types/express --save-dev
npm install @types/node --save-dev
This is only for a minimal setup. The ts-node-dev dependency will continuously recompile and run the .ts file directly instead of compiling the .ts file then running .js file. It will be our replacement for nodemon which is only for .js files.

3. Create a tsconfig.json file
You can create a TypeScript configuration file using the command
npx tsc --init
This will automatically create a tsconfig.json for you with the default settings (you can change them anytime you want).

4. Modify the scripts in package.json
Using your code editor or IDE, modify the scripts: in package.json to include the keyword and value as shown below
  "scripts": {
    "start": "ts-node-dev ./index.ts"
  },
You can remove the test key for now.

5. Create the index.ts file
Create the index.ts file using your code editor and copy and paste the sample code:
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}

6. Run the code
To run the Node express API simply run the command
npm run start
