# WhatsApp_clone
Made using MERN stack.
A simple chat application which is still under development.
Uses MongoDb to store messages.
Due to inavailablity of realtime feature of mongoDB it becomes hard to implement WhatsApp clone using mongoDb as compared to Firebase.
Solution to counter above problem consists of using:
        1.) Using sockets.io
        2.) Or fetching information from MongoDB at a fixed interval.
A better approach was used by using Pusher. Pusher stores new data and listens to changes in MongoDb remotely thereby not putting any load on local machine or server.
