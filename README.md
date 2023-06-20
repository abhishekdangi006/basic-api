<h1>Basic Api</h1>

<h3>Tech stack </h3><br>
<ul>
 <li>NodeJS </li>
 <li>ExpressJS</li> 
 <li>MongoDB </li>
 <li>Mongoose </li>
</ul>

<h3>Operations</h3>
  <ol>
    <li>GET /api/items  :   http://localhost:3000/api/items</li>
    <li>GET /api/items/:id  :  http://localhost:3000/api/items/{id}</li>
    <li>POST /api/items  :    http://localhost:3000/api/items
      <br/> <br/>
     Request Body (JSON):<br/>
{ <br/>
  "name": "Item Name", <br/>
  "description": "Item Description" <br/>
} <br/> <br/> </li>
    <li>PUT /api/items/:id :  http://localhost:3000/api/items/{id}</li>
    <li>DELETE /api/items/:id  :   http://localhost:3000/api/items/{id}</li>
  </ol>


NOTE : {id} is your mongodb object id .

<h3>Run the code</h3> <br>
    $ git clone https://github.com/abhishekdangi006/basic-api/ <br>
    $ cd Polling-Api-System <br>
    $ npm install <br>
    $ npm start <br>
