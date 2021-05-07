import { db } from '../services/firebase';

export const getAllTasks = () => {
    return db.collection('tasks')
        .get()
        .then(snapshot => {
            const tasks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return tasks;
        });        
}

export const getReqs = () =>  {
    return db.collection('reqs')
    .get()
    .then(snapshot => {
        return snapshot.docs.map(doc => ({
            ...doc.data()
        }))
    } 
    );
}

export const createTask = (task) => {
    return db.collection('tasks').add({
        ...task
        })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}

export function updateTask(task) {
    return db.collection('tasks').doc(task.id).update(task)
    .then(() => ({
        id: task.id,
        ...task}))
}

export const deleteTask = (task) => {
    return db.collection('tasks').doc(task.id).delete();
}