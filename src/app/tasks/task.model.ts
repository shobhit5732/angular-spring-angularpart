export class Task{
  public id: number;
  public name: String;
  public completed: Boolean;
  public dueDate: String;
   
   constructor(id: number,name: String,completed: Boolean,dueDate: String)
  {
    this.id= id;
    this.name = name;
    this.completed=completed;
    this.dueDate = dueDate;
  }
}