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

### Setup Remote Access in Salesforce.com

Setup a new Remote Access to get your OAuth tokens. If you are unfamiliar with settng this up, see 4:45 of my [Salesforce.com Primer for New Developers](http://www.youtube.com/watch?v=fq2ju2ML9GM). For your callback, simply use: http://localhost:3001/oauth/_callback

### Create a PushTopic in Salesforce.com

Create a new push topic from the Developer Console in your org with the follow

PushTopic pt = new PushTopic();
pt.apiversion = 24.0;
pt.name = 'AllAccounts';
pt.description = 'All new account records';
pt.query = 'SELECT Id, Name FROM Account';
insert pt;
System.debug('Created new PushTopic: '+ pt.Id);

You can also set up PushTopics using the [Workbench](https://workbench.developerforce.com).

### Running the Application Locally

From the command line type in:
<pre>git clone https://github.com/jeffdonthemic/node-streaming-socketio.git
cd node-streaming-socketio
npm install
node app.js
</pre>

Point your browser to: [http://localhost:3001](http://localhost:3001)