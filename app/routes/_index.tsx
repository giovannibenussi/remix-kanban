import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4">
      <h1 className="mb-2 text-2xl">Remix Kanban</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card title="hello world" />
        <Card title="hello world" />
        <Card title="hello world" />
      </div>
    </div>
  );
}
