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

export const getUserTasks = (user) => {
    return db.collection('tasks')
        .where('creator', '==', user.id)
        .get()
        .then(snapshot => {
            const tasks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return tasks;
        });
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

export function updateTask(taskId, task) {
    return db.collection('tasks').doc(taskId).update(task)
    .then(() => ({
        id: taskId,
        ...task
    }));
}

export const deleteTask = (taskId) => {
    return db.collection('tasks').doc(taskId).delete()
        .then(() => taskId);
}