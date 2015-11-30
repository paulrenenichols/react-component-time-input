export const TIME_UPDATE = 'TIME_UPDATE';
export function timeUpdate(time) {
    return {
        type: TIME_UPDATE,
        time
    }
}
