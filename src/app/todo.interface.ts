export interface TaskList{
    id?: string,
    name?: string,
    icon?:string,
    color?:string,
}


export interface Task extends TaskList{
    title: string,
    description:string,
    date:Date,
    time:string,

}