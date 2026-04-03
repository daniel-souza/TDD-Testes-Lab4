export function validateTitle(title) {
    if(typeof title !== 'string') return false;
    if(typeof title === 'boolean') return false;
    if(title === undefined) return false;
    if(title === null) return false;
    title = title.trim();
    if(title.length < 3) return false;
    if(title === '') return false;
    if(typeof title === 'number') return false;
    if(title instanceof Array) return false;
    return true;
}