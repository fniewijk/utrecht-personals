import axios from "axios";

// Type definitions
export interface Personal {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
  description?: string;
}

export interface CreatePersonalData {
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
}

export interface UpdatePersonalData extends Partial<CreatePersonalData> {}

const API_BASE_URL = "https://api.utrecht-personals.com"; // Updated for Utrecht version

export const fetchPersonals = async (): Promise<Personal[]> => {
  try {
    const response = await axios.get<Personal[]>(`${API_BASE_URL}/personals`);
    return response.data;
  } catch (error) {
    console.error("Error fetching personals:", error);
    throw error;
  }
};

export const fetchPersonalById = async (
  id: string | number
): Promise<Personal> => {
  try {
    const response = await axios.get<Personal>(
      `${API_BASE_URL}/personals/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching personal with id ${id}:`, error);
    throw error;
  }
};

export const createPersonal = async (
  personalData: CreatePersonalData
): Promise<Personal> => {
  try {
    const response = await axios.post<Personal>(
      `${API_BASE_URL}/personals`,
      personalData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating personal:", error);
    throw error;
  }
};

export const updatePersonal = async (
  id: string | number,
  personalData: UpdatePersonalData
): Promise<Personal> => {
  try {
    const response = await axios.put<Personal>(
      `${API_BASE_URL}/personals/${id}`,
      personalData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating personal with id ${id}:`, error);
    throw error;
  }
};

export const deletePersonal = async (id: string | number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/personals/${id}`);
  } catch (error) {
    console.error(`Error deleting personal with id ${id}:`, error);
    throw error;
  }
};
