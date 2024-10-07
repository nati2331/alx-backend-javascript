export const weakMap = new WeakMap();
const MAX_ENDPOINT_CALLS = 5;

function incrementCallCount(endpoint) {
  return weakMap.get(endpoint) + 1;
}

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const newCount = incrementCallCount(endpoint);
  weakMap.set(endpoint, newCount);

  if (newCount >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
