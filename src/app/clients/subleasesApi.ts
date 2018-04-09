import Axios from 'axios';
import { Sublease } from '../models';

const endpoint = 'http://localhost:3000/subleases';

// POST
export const createSublease = (sublease: Sublease) => {
  if (!endpoint) {
    throw new Error('end point is not configured');
  }
  return Axios.post(endpoint, sublease).then((response) => response.data);
};

// GET
export const fetchSubleases = () => {
  if (!endpoint) {
    throw new Error('end point is not configured');
  }
  return Axios.get(endpoint).then((response) => {
    return response.data;
  });
};

// PUT
export const updateSublease = (sublease: Sublease) => {
  if (!endpoint) {
    throw new Error('end point is not configured');
  }
  return Axios.put(endpoint, { sublease }).then((response) => response.status);
};

// DELETE
export const deleteSublease = (sublease: Sublease) => {
  if (!endpoint) {
    throw new Error('end point is not configured');
  }
  return Axios.delete(endpoint, {params: {uid: sublease.uid}}).then((response) => response.status);
};