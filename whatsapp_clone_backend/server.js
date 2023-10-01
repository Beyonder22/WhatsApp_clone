import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9000

//pusher code
const pusher = new Pusher({
  pusher config details are placed here ///////////////
});
//middleware
app.use(express.json());
app.use(cors());


const connection_url = mongo_db url is placed here; ////////

mongoose.connect(connection_url, {

});

const db = mongoose.connection

db.once("open",()=> {
	console.log("DB connected");

	const msgCollection = db.collection("messagecontents");
	const changeStream = msgCollection.watch();

	changeStream.on("change",(change)=>{
		console.log(change);
		if(change.operationType === "insert"){
			const messageDetails = change.fullDocument;
			// console.log("-----------------------------------",messageDetails);
			pusher.trigger("messages","inserted",
			{
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
			}
		);
		}else{
			console.log('Error trigerring Pusher');
		}
	});
});


app.get('/',(req,res)=>res.status(200).send('hello world'))

app.get('/messages/sync',(req,res)=> {
	Messages.find()
	.then((data)=>{
		res.status(201).send(data)
	})
	.catch((err)=>{
		res.status(500).send(err)
	})
})

app.post('/messages/new',(req, res) => {
	const dbMessage = req.body

	Messages.create(dbMessage)
	.then((data)=>{
		res.status(201).send(data)
	})
	.catch((err)=>{
		res.status(500).send(err)
	})
})

app.listen(port,()=>console.log('Listening on local host on port: '+port));