import api from "../../utils/request"

// GET request
export const AutoGet = async <T = any>(url: string, config = {}): Promise<T> => {
  try {
    const response = await api.get<T>(url, config);
    return response.data;
  } catch (error) {
    console.error("❌ AutoGet Error:", error);
    throw error;
  }
};

export const AutoPost = async <T = any>(
  url: string,
  data: any,
  id?: string | number
): Promise<T> => {
  try {
    const finalUrl = id ? `${url}/${id}` : url;
    const response = await api.post(finalUrl, data);
    return response.data as T;
  } catch (error) {
    console.error("❌ AutoPost Error:", error);
    throw error;
  }
};


// PUT request
export const AutoPut = async (url: string, data: any, id?: string | number) => {
  try {
    const finalUrl = id ? `${url}/${id}` : url;
    const response = await api.put(finalUrl, data);
    return response.data;
  } catch (error) {
    console.error("❌ AutoPut Error:", error);
    throw error;
  }
};

// DELETE request
export const AutoDelete = async (url: string, id: string | number) => {
  try {
    const finalUrl = `${url}/${id}`;
    const response = await api.delete(finalUrl);
    return response.data;
  } catch (error) {
    console.error("❌ AutoDelete Error:", error);
    throw error;
  }
};
