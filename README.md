node-streaming-socketio
=======================

Node.js demo that streams newly create Account records in Salesforce.com to the browser using socket.io.

### Node Module Dependencies

These will be automatically installed when you use any of the above *npm* installation methods above.

1. [express](http://expressjs.com/) - framework
2. [nforce](https://github.com/kevinohara80/nforce) - REST wrapper for force.com
3. [jade](http://jade-lang.com/) - the view engine
4. [faye](hhttp://faye.jcoglan.com/) - a publish-subscribe messaging system based on the Bayeux protocol.
5. [socket.io](http://jade-lang.com/) - WebSockte protocol for simplify bi-directional communication over HTTP

### Running the Application Locally

From the command line type in:
<pre>  git clone https://github.com/jeffdonthemic/node-streaming-socketio.git
	cd node-streaming-socketio
	npm install
	node app.js
</pre>

Point your browser to: [http://localhost:3001](http://localhost:3001)


run npm intall

Setup Remote Access
===================
Use callback: https://localhost:3001/oauth/_callback

Create a new push topic from developer console or workbench:
===================

PushTopic pt = new PushTopic();
pt.apiversion = 24.0;
pt.name = 'AllAccounts';
pt.description = 'All new and updated account records';
pt.query = 'SELECT Id, Name FROM Account';
insert pt;
System.debug('Created new PushTopic: '+ pt.Id);

This becomes your PUSH_TOPIC in config.js: '/topic/AllAccounts'
