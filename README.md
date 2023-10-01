# WhatsApp_clone
- Made using MERN stack<br/><br/>
- A simple chat application which is still under development.<br/>
- Uses MongoDb to store messages.<br/>
- Due to inavailablity of realtime feature of mongoDB it becomes hard to implement WhatsApp clone using mongoDb as compared to Firebase.<br/>
   Solution to counter above problem consists of using:<br/>
        1. Using sockets.io<br/>
        2. Or fetching information from MongoDB at a fixed interval.<br/>
- A better approach was used by using Pusher. Pusher stores new data and listens to changes in MongoDb remotely thereby not putting any load on local machine or server.
