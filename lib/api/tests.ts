import api from "../../utils/request";

export async function deleteTest(id: number) {
  return api.delete(`/tests/${id}/`);
}

export async function editTest(id: number, data: any) {
  return api.put(`/tests/${id}/`, data);
} 