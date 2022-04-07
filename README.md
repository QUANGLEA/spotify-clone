# spotify-clone

This project is written with Next.js 12.1.4, Tailwind CSS 3.0.7, React.js 17.0.2, Node.js 17.0.4, and Next Auth 4.

## Summary:
This is a Spotify clone, and it is an online music player that allows users to log into their Spotify account, listen to songs from their playlists, rewind and skip forward songs. 

![spotify_clone](https://user-images.githubusercontent.com/85794656/161366067-a2fe8008-483f-4a67-a1b5-2da947b7b50b.gif)

## Description: 
This is a project I created as I was learning React.js and Next.js. I used React and Tailwind CSS to make the appearance of the music player ressemble that of Spotify. I used Next Auth for the log in system and to generate access and refresh tokens for users when they log into the app. Also, I used Spotify API to fetch the user's playlists information and was able to display them on the sidebar. Moreover, I used the API to fetch song information like artist, song name,album, and duration so that I could display that in the center component. The user is able to choose songs of their liking and perform different operations on them like, play, pause, skip forward, rewind, and change the volume. 

## Possible improvements:
- Add a home page to the application 
- Add a recommended genre page for the user
- Allow the user to search for songs on Spotify 
- Create an instance of Spotify player so user doesn't have to

## Installation:
1. Download `spotify-2.0` folder
2. Create a Next.js app with `$ npx create-next-app my-project` and substituting `my-project` with your desired project name
3. Run `$ cd my-project` to go into your project directory
4. Run these commands to install Tailwind CSS: 
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
6. Copy all files from `spotify-2.0` into your newly created `my-project` directory
7. Install the latest version of npm with `npm install -g npm`
8. Check to see if Node.js and npm are installed on your machine 
```
$ node -v
$ npm -v
``` 
5. Use the command `$ cd spotify-2.0` to download some modules for the project
6. Run `$ npm install tailwind-scrollbar-hide` to install the tailwind scrollbar hide module, which is a part of the app's feature to scroll without displaying a bar 
7. Run `$ npm install --save-dev http-proxy-middleware` to install Middleware HTPP Proxy server, which will help with redirecting user to the correct page of the webstite 
8. Run `$ npm install recoil` to install Recoil, which will help with global state handling for keeping track of current playlist ID and playlist selection 
9. Run `$ npm install next-auth` to install Next Auth, this will use the Spotify API provider to help create a Spotify log in screen that will prompt the user to log into their account.
10. These should be all the modules you need to download in order to run the app
11. Now, you need to create a Spotify Developer account to get a public client key and a public client secret key
12. In `my-project`, create a file called `.env.local` to store your Spotify keys and use them in the app without exposing them 
In the file include these lines: 
```
NEXTAUTH_URL=http://localhost:3000/
NEXT_PUBLIC_CLIENT_SECRET=YOUR PUBLIC CLIENT SECRET KEY
NEXT_PUBLIC_CLIENT_ID=YOUR PUBLIC CLINET KEY
JWT_SECRET=some_super_secret_value 
```
14. Run `$ cd my-project` and run `$ npm run dev` to start the app in your local browser
15. Enjoy the Spotify clone and add any other details thatm might be interesting to the application 

## Vercel-Deployed Application:
The link to my application is: https://spotify-clone-2-chi.vercel.app/

## Note: 
In order for this app to work, the user must have a Spotify player up and running in the background, either online or on the desktop app.

## Contributing: 
Please feel free to open an issue or PR to discuss more features/bug reports. Feel free to contact me at lequang@grinnell.edu.

