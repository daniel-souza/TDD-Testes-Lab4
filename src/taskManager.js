let id;

export function validateTitle(title) {
    if(typeof title !== 'string') return false;
    title = title.trim();
    if(title.length < 3) return false;
    if(title === '') return false;
    return true;
}

export function resetId() {
    id = 0;
}

export function createTask(title) {
    if(validateTitle(title) == false) return null;
    return {
        id: id++,
        title: title.trim(),
        completed: false
    };
}