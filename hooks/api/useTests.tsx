import { useEffect, useState } from "react";
import { deleteTest, editTest } from "../../lib/api/tests";
import api from "../../utils/request";

export type Test = {
  id: number;
  test_name: string;
  // add other fields as needed
};

export function useTests() {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(true);
    api.get("/tests/")
      .then(res => setTests(res.data as Test[]))
      .catch(err => setError(err.message || "Error fetching tests"))
      .then(() => setLoading(false));
  }, []);

  return { tests, setTests, loading, error };
}

// Delete hook
export function useDeleteTest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const deleteTestById = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await deleteTest(id);
      setLoading(false);
      return true;
    } catch (err: any) {
      setError(err.message || "Delete failed");
      setLoading(false);
      return false;
    }
  };
  return { deleteTestById, loading, error };
}

// Edit hook
export function useEditTest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const editTestById = async (id: number, data: any) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await editTest(id, data);
      setLoading(false);
      return updated;
    } catch (err: any) {
      setError(err.message || "Edit failed");
      setLoading(false);
      return null;
    }
  };
  return { editTestById, loading, error };
} 