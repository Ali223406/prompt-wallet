const handleSave  =( newprompt)=>{
    //create a list of prompts in local storage
    const save = JSON.parse(localStorage.getItem('my_prompts') ||'[]' );

    // add a new prompt to the list
    save.push({...newprompt, id : Date.now()}); 

    // save th update list to local storage
    loclalStorage.setItem('my_prompts', JSON.stringify(save));

    // return to the dashboard
    window.location.href = '/dashboard'; 
}