'use client';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

export default function ProblemsList() {
  const problems = useQuery(api.problemas.listProblems);
  const router = useRouter();

  if (!problems) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Problemas de Introdução à Programação</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            <button onClick={() => router.push(`/code/${problem._id}`)}>
              {problem.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
