export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white shadow rounded-lg p-4">{children}</div>;
}

export function CardHeader({ children }: any) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }: any) {
  return <h3 className="font-semibold">{children}</h3>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}

export function CardDescription({ children }: any) {
  return <p className="text-sm text-gray-500">{children}</p>;
}