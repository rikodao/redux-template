import { CounterService } from "driver/OpenAPIClient";

export function fetchCount(amount = 1): Promise<number> {
  return CounterService.fetchCount().then((response) => response.count);
}
