export function validateTitle(title) {
    if(typeof title !== 'string') return false;
    title = title.trim();
    if(title.length < 3) return false;
    if(title === '') return false;
    return true;
}