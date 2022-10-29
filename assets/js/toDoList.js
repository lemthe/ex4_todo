var todos=[];
    function addTask(task) {
       todos.push=(task);
    };
    function removeTask(index) {
        if(index>=todos.length)
            return false;
        else
        todos.splice(index,1);
       
        // à partir de la fonction index, tu me retires un caractère 
    };
    function updateTask(index, newTask) {
        todos[index]= newTask
        //documentgetElementById();
        //console.log
        //cela marcherait si je fais exécuter par le html id Todo et je peux le mettre dans chaque fonction
    };
    function readTask(index) {
        
        console.log(todos[index]);
    };
    function toString(task) {
        return '<div class="todoItem">'+task+'</div>';

    };
    function todosToString() {
        var str="";
        for ( var i=0; i<todos.length; i++) {
            str+= taskToString (todos[i],i);
            // str+=, c'est un alias, c'est la même chose que str=str+taskToString
            // concaténation dans ma chaine str
            //le for, il va appeler 3 fois la fonction taskToString en lui transmettant à chaque fois une nouvelle valeur 
            //et il va générer une chaine de caractères
        }
        return str;
        // on est purement dans l'abstraction de données. Rien ne va s'afficher encore. Il génère du code HTML 
        //pour l'instant. C'est tout.
    };
    function addHandler() {
        let txt=document.getElementById("taskText").value; // je crée une petite variable pour ce stocker ce résultat
        addTask(txt); // ça prend une chaine de caractère et ça ajoute dans le tableau
        let output = document.getElementById("output"); // je l'affiche
        output.innerHtML= todosToString(); 
        document.getElementById("taskText").value=""; // je réinitialise

    };

    //il va falloir aussi qu'on transforme notre tableau en chaines de caractères

    function taskToString(task, index) {
        return '<div class="taskItem">'+task+'<div class="remove" onclick = "removeHandler('+index+')"></div>' +'</div>';
    };

    function removeHandler (index) {
        removeTask(index);
        document.getElementById("output").innerHTML=todoToString();
    }; 