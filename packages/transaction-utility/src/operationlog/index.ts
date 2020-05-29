/**
 * build wrapper, that wraps all execution calls
 */

type logger = string[];

const messageStore: logger = [];

export const reportMessage = (message: string): void => {
  messageStore.push(message);
}

export const buildTrace = (): string => {
  return messageStore.map((message, index) => `${index}: ${message}`).join('\n');
}