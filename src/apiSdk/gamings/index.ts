import axios from 'axios';
import queryString from 'query-string';
import { GamingInterface, GamingGetQueryInterface } from 'interfaces/gaming';
import { GetQueryInterface } from '../../interfaces';

export const getGamings = async (query?: GamingGetQueryInterface) => {
  const response = await axios.get(`/api/gamings${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createGaming = async (gaming: GamingInterface) => {
  const response = await axios.post('/api/gamings', gaming);
  return response.data;
};

export const updateGamingById = async (id: string, gaming: GamingInterface) => {
  const response = await axios.put(`/api/gamings/${id}`, gaming);
  return response.data;
};

export const getGamingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/gamings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGamingById = async (id: string) => {
  const response = await axios.delete(`/api/gamings/${id}`);
  return response.data;
};
