import { useEffect, useState } from "react";
import api from "../../utils/request";

export type Question = {
  id: number;
  text: string;
  // add other fields as needed
};

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api.get("/questions/")
      .then(res => setQuestions(res.data as Question[]))
      .catch(err => setError(err.message || "Error fetching questions"))
      .then(() => setLoading(false));
  }, []);

  return { questions, loading, error };
}

export function useQuestion(id: number | string | undefined) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get(`/questions/${id}`)
      .then(res => setQuestion(res.data as Question))
      .catch(err => setError(err.message || "Error fetching question"))
      .then(() => setLoading(false));
  }, [id]);

  return { question, loading, error };
} 