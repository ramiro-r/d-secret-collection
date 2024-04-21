## Getting Started

First, install and run the Apollo server:

```bash
cd apollo-server
npm install
node index.js
```

Create your .env.local file for the auth and client to work:

```
#.env.local
AUTH_SECRET=r2Gdtpd8RtLH0cs/NZS4NyAn75R7m+qKeIZ1GCdoWFk=
SERVER_URL='http://localhost:4000'
```

Then, on another terminal install and launch the Next development server

```bash
cd next-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To open the apollo studio, you can go to [http://localhost:4000](http://localhost:4000)

Test Users:

```
user: test / pass: 1234
user: ramiro / pass: Dior
```


