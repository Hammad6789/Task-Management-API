let tasks = [
    { id: 1, title: "Learn Docker", completed: false },
    { id: 2, title: "Practice Linux", completed: true }

];

//getting tasks

export const getTasks = (req, res) =>{
    const task = parseInt(req.query.task);

    if (! isNaN(task) && task>0){
        return res.status(200).json(tasks.slice(0,task));
    };
    res.status(200).json(tasks);

}

//getting task

export const getTask = (req,res,next) =>{
    const id = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === id);

    if(!task) {
        const error = new Error(`Task with id ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(task);
}

//create task

export const createTask = (req, res, next) =>{
    console.log(req.body);
    const Title = req.body?.title;
    const Completed = req.body?.completed;

    if(!Title){
        const error = new Error(`Please include a title`);
        error.status=400;
        return next(error);
    }
    if(Completed === undefined){
        const error = new Error(`Please include the status of completion`);
        error.status=400;
        return next(error);
    }
    const newTask = {
        id: tasks.length +1,
        title: Title,
        completed: Completed
    }
      tasks.push(newTask);

      res.status(201).json(newTask);
    
}

//updateTask
export const updateTask = (req,res, next) =>{
    const id = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === id);

     if (!task) {
        const error = new Error(`Task with id ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    if (req.body.title !== undefined) {
        task.title = req.body.title;
    }

    if (req.body.completed !== undefined) {
        task.completed = req.body.completed;
    }

    res.status(200).json(task);
}

//delete task
export const deleteTask = (req,res,next) =>{
    const id = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === id);

   
    if (!task) {
        const error = new Error(`Task with id ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    tasks = tasks.filter((task) => task.id !== id);

    res.status(200).json(task);
}