export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
  } else {
    task2 = false;
  }

  return [task, task2];
}
