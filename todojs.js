
  
    var complete=[];
    var incomplete=["Pay Bills","Go Shopping"];

     function AddElement()
     {
      // alert();
      var addelement=document.getElementById('new-task');
      
      
          incomplete.push(addelement.value);
          PopulateIncomplete();
          addelement.value="";
          
          
     }
    
    function PopulateIncomplete()
    {  
  
        text="";
        for(i=0;i<incomplete.length;i++)
        {
           
           text+="<li><input  type='checkbox' onclick='moveTocomplete(this)'><label>"+incomplete[i]+"</label><button class='edit' onclick='editInComplete(this);'>Edit</button><button class='delete' onclick='deleteElemet(this);'>Delete</button></li>";
         
          
        }
        document.getElementById('incomplete-tasks').innerHTML=text;
    }
     
    function Populatecomplete()
    {

      text="";
        for(i=0;i<complete.length;i++)
        {
            // console.log(incomplete[i]);
           text+="<li><input checked type='checkbox' onclick='moveTocomplete1(this)'><label>"+complete[i]+"</label><button class='edit' onclick='editComplete(this)'>Edit</button><button class='delete' onclick='deleteElemetComplete(this)'>Delete</button></li>"
        //  text+="<li><input type='checkbox'><p>"+incomplete[i]+"</p><button>Edit<button><button>Delete<button> "  
         
          // console.log(text);
        }
        document.getElementById('completed-tasks').innerHTML=text;
        
    }
 
    function moveTocomplete(args)
    {
      var li=args.closest('li');
      var nodes=Array.from(li.closest('ul').children);
      // console.log(nodes);
      var index = nodes.indexOf(li);
      // console.log(index);
      complete.push(incomplete[index]);

      incomplete.splice(index,1);
      PopulateIncomplete();
      Populatecomplete();    
    }

    function moveTocomplete1(args)
    {
      var li=args.closest('li');
      var nodes=Array.from(li.closest('ul').children);
      // console.log(nodes);
      var index = nodes.indexOf(li);
      // console.log(index);
      incomplete.push(complete[index]);

      complete.splice(index,1);
      Populatecomplete();
      PopulateIncomplete();
         
    }

    function deleteElemet(args)
    {

      var li=args.closest('li');
      var nodes=Array.from(li.closest('ul').children);
      
      var index = nodes.indexOf(li);
      
      incomplete.splice(index,1);

      console.log(incomplete);
      PopulateIncomplete();
    }

    function deleteElemetComplete(args)
    {

      var li=args.closest('li');
      var nodes=Array.from(li.closest('ul').children);
     
      var index = nodes.indexOf(li);
     
      complete.splice(index,1);

      console.log(complete);
      Populatecomplete();
    }

    function editInComplete(args)
    {
  
      var li=args.closest('li');
      var nodes=Array.from(li.closest('ul').children);
    
      var index = nodes.indexOf(li);
      
     
      document.getElementById('new-task').value=incomplete[index];
     
      document.getElementById("btnadd").innerHTML="Update"
      document.getElementById("btnadd").onclick=function(){updationIncomplete(index)};
      
    }

    function editComplete(args)
    {


      var li=args.closest('li');
      var nodes=Array.from(li.closest('ul').children);
    
      var index = nodes.indexOf(li);
     
      document.getElementById('new-task').value=complete[index];

      document.getElementById("btnadd").innerHTML="Update"
      document.getElementById("btnadd").onclick=function(){updationcomplete(index)};
     
    }
    function updationIncomplete(args)
    {
    
      incomplete[args]=document.getElementById('new-task').value;
      PopulateIncomplete();
      document.getElementById('new-task').value="";
     
      document.getElementById("btnadd").innerHTML="Add";
      document.getElementById("btnadd").onclick=function(){AddElement();};

    }

    function updationcomplete(args)
    {
       
      complete[args]=document.getElementById('new-task').value;
      Populatecomplete();
      document.getElementById('new-task').value="";
      console.log(complete);
      document.getElementById("btnadd").innerHTML="Add";
      document.getElementById("btnadd").onclick=function(){AddElement();};

    }
    

    