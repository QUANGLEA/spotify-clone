# spotify-clone

This project is written with Next.js 12.1.4, Tailwind CSS 3.0.7, React.js 17.0.2, Node.js 17.0.4, and Next Auth 4.

Summary: This is a Spotify clone, and it is an online music player that allows users to log into their Spotify account, listen to songs from their playlists, rewind and skip forward songs. 

Video Demonstration: 
![spotify_clone](https://user-images.githubusercontent.com/85794656/161366067-a2fe8008-483f-4a67-a1b5-2da947b7b50b.gif)


Description: This book summarizer takes in a file and then filters out the stop words (words that are too commonly used in sentences). By filtering out these words, the result would be lists of unque words that can be used to analyze further. The next step would be comparing the similarity of two sentences. I'm doing this by using the Cosine Similarity Formuata, which is known to measure the cosine angle between two vectors to see how far apart they are. To use the Cosine Simlarity Formula, I must transform the two sentences into two vectors by finding the union words between the sentences and tally those words inside each sentences. This would then give me two equal length lists of word tallys that I can use in my calculation of the Cosine Similarity value. I proceed to computing the value by using the formula and the result is a number between 0 and 1 (0 being that two sentences have no resemblences, 1 being that the two sentences are identical). With this, I then create a sum of Cosine Similarity value for the sentence against all other sentences in the text file. I then map all these values to a hash table that I could then get later to formulate my summary (a number of most relevant sentences in the text). For the graphic visualizer, I tallied all the words in the text and see which words occured the mmost often in the text. Then based on the number of words the user want, the graph would grab that number of words from the list of keywords and occurences. The graph then displays the keywords in order from most to least occurences. Both the summary and graph will be saved as separate files in the directory of the main racket file.

Installation:

There is no need to install because I've deployed the app to vercel.

The link to my application is: https://spotify-clone-2-chi.vercel.app/

Note: In order for this app to work, the user must have a Spotify player up and running in the background, either online or on the desktop app.

