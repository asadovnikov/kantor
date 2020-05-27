// 2xx: Success - 	Indicates that the client’s request was accepted successfully.
// 4xx: Client Error — This category of error status codes points the finger at clients.

import { ResponseInfo } from "../types/response.types"

// 5xx: Server Error — The server takes responsibility for these error status codes.
export const ResourceConflict: ResponseInfo = {
  code: 409, //Conflict
  status: 'Conflict',
  message: 'The request could not be completed due to a conflict. For example,  POST ContentStore Folder API cannot complete if the given file or folder name already exists in the parent location.'
}

export const ServerFailed: ResponseInfo = {
  code: 500,
  status: 'Internal Server Error',
  message: 'The request was not completed due to an internal error on the server side.'
}

export const FullSuccess: ResponseInfo = {
  code: 200,
  status: 'Internal Server Error',
  message: 'he request was not completed due to an internal error on the server side.'
}