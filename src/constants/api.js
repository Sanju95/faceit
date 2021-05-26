export const API_BASE_URL = 'http://localhost:4000';

export const API_TOURNAMENTS_URL = `${API_BASE_URL}/tournaments`;

export const API_REQUEST_STATUS = Object.freeze({
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
});
