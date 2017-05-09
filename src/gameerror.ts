export interface GameError {
  type? : string;
  message? : string;
};

export function makeError(message: string, type? : string) : GameError {
  if (type) {
    return { message, type };
  }
  return { message };
};
