export const formatDate = (date: Date) => {
    const d = new Date(date);
    return `${d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })}`;
};
