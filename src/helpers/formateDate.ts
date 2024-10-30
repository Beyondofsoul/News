// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatDate = (date: any) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
