const status = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN PROGRESS',
  IN_REVIEW: 'IN REVIEW',
  DONE: 'DONE',
};

Object.freeze(status);

const priority = {
  TOP: 'TOP',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
};

Object.freeze(priority);

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

Object.freeze(months);

export { status, priority, months };
