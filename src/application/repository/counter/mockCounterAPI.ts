export function fetchCount(amount = 1): Promise<number> {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  ).then((response) => response.data);
}
